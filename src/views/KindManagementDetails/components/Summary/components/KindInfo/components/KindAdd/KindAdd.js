import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Modal,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  TextField,
  Switch,
  Button,
  colors
} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FilesDropzone } from 'components';
import firebase from 'utils/firebase';
import config from 'config';

import translate from 'translate';

const T = translate;

const service = config.servicio;

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%'
  },
  container: {
    marginTop: theme.spacing(3)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

const KindAdd = props => {
  const { open, onClose, kind, actualizar, restaurant, setLoading, className, ...rest } = props;

  const classes = useStyles();
  const [filess, setFiless] = useState([]);
  const [formState, setFormState] = useState({
    ...kind
  });

  
  if (!open) {
    return null;
  }

  const validateForm = () => {
    let nameError = "";
    let nameErrorMessage = "";
    let idError = "";
    let idErrorMessage = "";
    
    if(!formState.name){
      nameError = "Debe introducir un nombre";
      nameErrorMessage = "Debe introducir un nombre";
    }

    if(!formState.id){
      idError = "Debe introducir un id";
      idErrorMessage = "Debe introducir un id";
    }

    if(nameError){
      setFormState(formState => ({
        ...formState,
        nameError,nameErrorMessage,idError,idErrorMessage
      }));
      return false;
    }
    return true;
  }

  const handleFieldChange = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    //console.log(formState);
    let msg = "Categoría creada con exito";
    const isValid = validateForm();
    if(isValid){
      setLoading(true);
      let params = {
        "active": formState.active ? formState.active : true,
        "name": formState.name,
        "order": +formState.order,
        "restaurantID": restaurant.id
      }
      console.log(params);

      fetch(service+'createCategoriesProductAdmin', {
          method: 'post',
          mode: 'cors',
          body: JSON.stringify(params)
        }).then(function (respuesta) {
          respuesta.json().then(body => {
            console.log(body);
             /************* imagen de producto*/
             if(filess.length > 0){
              var storageRef = firebase.storage().ref();
             var uploadDoc = storageRef.child(`/thumbnails/${body.id}/${body.id}.jpg`).put(filess[0]);
             uploadDoc.on('state_changed', function (snapshot) {
               var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
               console.log('Upload is ' + progress + '% done');
               switch (snapshot.state) {
                 case firebase.storage.TaskState.PAUSED: // or 'paused'
                   //  console.log('Upload is paused');
                   break;
                 case firebase.storage.TaskState.RUNNING: // or 'running'
                   //  console.log('Upload is running');
                   break;
               }
             }, function (error) {
     
             }, function () {
               uploadDoc.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                 let document = "thumbnail";
                 let data = {}
                 data[document] = downloadURL;
                 console.log(data);
                const refWasher = firebase.firestore().collection('kinds').doc(body.id);
                  refWasher.set(data, { merge: true }).then(async resp => {
                    console.log("Congrats...");
                  }).catch(err => console.log(err));
               });
             });
             }
            /************* */
            actualizar(msg,body);
            });
        }).catch(function (err) {
          // Error :(
            console.log(err);
        });

      onClose();
      setFormState(formState => ({}));
    }

  };

  return (
    <Modal
      onClose={onClose}
      open={open}
    >
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <form>
          <CardContent>
            <Typography
              align="center"
              gutterBottom
              variant="h3"
            >
              {T('Agregar')} Kind
            </Typography>
            <Grid
              className={classes.container}
              container
              spacing={3}
            >
                 {/* <Grid
                item
                md={12}
                xs={12}
              >
                <Card>
                  <CardContent>
                    <FilesDropzone handleFieldChange={handleFieldChange} setFiless={setFiless} />
                  </CardContent>
                </Card>
              </Grid> */}
              {/* <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T('Id')}
                  name="id"
                  onChange={handleFieldChange}
                  value={formState.id}
                  variant="outlined"
                  error={formState.idError}
                  helperText={formState.idErrorMessage}
                />
              </Grid> */}
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Full Name")}
                  name="name"
                  onChange={handleFieldChange}
                  value={formState.name}
                  variant="outlined"
                  error={formState.nameError}
                  helperText={formState.nameErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Order")}
                  name="order"
                  onChange={handleFieldChange}
                  value={formState.order}
                  variant="outlined"
                  error={formState.orderError}
                  helperText={formState.orderErrorMessage}
                />
              </Grid>
              <Grid item />
              <Grid
                item
                md={6}
                xs={12}
              >
                <Typography variant="h5">{T("active")}</Typography>
                <Switch
                  checked={formState.active}
                  color="secondary"
                  edge="start"
                  name="active"
                  onChange={handleFieldChange}
                  value={formState.active}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button
              onClick={onClose}
              variant="contained"
            >
              Close
            </Button>
            <Button
              className={classes.saveButton}
              onClick={handleSave}
              variant="contained"
            >
              Save
            </Button>
          </CardActions>
        </form>
      </Card>
    </Modal>
  );
};

KindAdd.displayName = 'KindAdd';

KindAdd.propTypes = {
  className: PropTypes.string,
  kind: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

KindAdd.defaultProps = {
  open: false,
  onClose: () => { }
};

export default KindAdd;
