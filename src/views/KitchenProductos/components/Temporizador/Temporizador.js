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
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import translate from 'translate';

const T = translate;

const service = config.servicio;

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#64D3DE",
    color: "#ffffff",
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
    backgroundColor: "#8937E9",
    // colors.green[600],
    '&:hover': {
      backgroundColor: "#8937E9",
      // colors.green[900]
    },
    width: "100%",
    fontSize: "bold"
  },
  rechazarButton: {
    color: theme.palette.white,
    backgroundColor: "#64D3DE",
    // colors.green[600],
    '&:hover': {
      backgroundColor: "#64D3DE",
      // colors.green[900]
    },
    width: "100%",
    fontSize: "bold"
  }
}));

const Temporizador = props => {
  const { open, onClose, category,countdown, handleSavePedido,handleStatus,actualizar, setLoading, className, ...rest } = props;

  const classes = useStyles();
  const [filess, setFiless] = useState([]);
  const [formState, setFormState] = useState({
    ...category
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
    console.log(formState);
    let msg = "Categorys creado con exito";
    const isValid = validateForm();
    if(isValid){
      setLoading(true);
      let params = {
        "active": formState.active ? formState.active : true,
        "name": formState.name,
        "id": formState.id,
      }

      fetch(service+'createCategoriesAdmin', {
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
                const refWasher = firebase.firestore().collection('categories').doc(body.id);
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
              variant="h1"
            >
            <NotificationsActiveIcon style={{ color: '#ffffff',fontSize: 80 }} />
            </Typography>
            <Typography
              align="center"
              gutterBottom
              variant="h1"
              style={{color:"#ffffff",fontSize: 40 }}
            >
              {T('NUEVO PEDIDO')}
            </Typography>
            <Grid
              className={classes.container}
              container
              spacing={3}
            >
                <Grid
                item
                md={12}
                xs={12}
              >
                <Typography
              align="center"
              gutterBottom
              variant="h1"
              style={{color:"#000000",fontSize: 50,fontWeight: "bold" }}
            >
              {countdown}
            </Typography>
              </Grid>
              <Grid item />
            </Grid>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button
              className={classes.saveButton}
              onClick={handleSavePedido}
              variant="contained"
              disableElevation
            >
              <Typography
              align="center"
              gutterBottom
              variant="h1"
              style={{color:"#ffffff",fontSize: 30 }}
            >
              {T('ACEPTAR')}
            </Typography>
            </Button>
          </CardActions>
          <CardActions className={classes.actions}>
            <Button
             disableElevation
            className={classes.rechazarButton}
              onClick={onClose}
              variant="contained"
            >
              <Typography
              align="center"
              gutterBottom
              variant="h1"
              style={{color:"#ffffff",fontSize: 30 }}
              onClick={handleStatus}
            >
              {T('RECHAZAR')}
            </Typography>
            </Button>
          </CardActions>
        </form>
      </Card>
    </Modal>
  );
};

Temporizador.displayName = 'Temporizador';

Temporizador.propTypes = {
  className: PropTypes.string,
  category: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

Temporizador.defaultProps = {
  open: false,
  onClose: () => { }
};

export default Temporizador;
