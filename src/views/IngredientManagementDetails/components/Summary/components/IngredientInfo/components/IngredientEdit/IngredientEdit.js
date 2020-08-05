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
import translate from 'translate';
import config from 'config';
import firebase from 'utils/firebase';

const t = translate;
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

const IngredientEdit = props => {
  const { open, onClose, ingredient, actualizar, className, ...rest } = props;

  const classes = useStyles();
  const [filess, setFiless] = useState([]);
  const [formState, setFormState] = useState({
    ...ingredient
  });

  if (!open) {
    return null;
  }

  const handleFieldChange = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
    }));
  };


  const validateForm = () => {
    let nameError = "";
    let nameErrorMessage = "";
   
    
    if(!formState.name){
      nameError = "Debe introducir un nombre";
      nameErrorMessage = "Debe introducir un nombre";
    }
    

    if(nameError){
      setFormState(formState => ({
        ...formState,
        nameError,nameErrorMessage
      }));
      return false;
    }
    return true;
  }

  const handleSave = () => {
    //event.preventDefault();
    console.log(formState);
    const isValid = validateForm();
    let msg = "Ingredient actualizado exitosamente!";
    if(isValid){

      let params = { 
      "id":formState.id, 
      "active": formState.active ? formState.active : true,
      "name": formState.name,
        "price": +formState.price,
        "stock": +formState.stock,
    }

    console.log(params);
    
    fetch(service+'ingredientUpdateAdmin', {
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
              const refWasher = firebase.firestore().collection('ingredients').doc(ingredient.id);
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
      });
    onClose();
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
              {t("Edit")} {t("ingredient")}
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
                  label={t('Id')}
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
                  label={t("Full Name")}
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
                md={6}
                xs={6}
              >
                <TextField
                  fullWidth
                  label={t("Stock")}
                  name="stock"
                  onChange={handleFieldChange}
                  value={formState.stock}
                  variant="outlined"
                  error={formState.stockError}
                  helperText={formState.stockErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={6}
              >
                <TextField
                  fullWidth
                  label={t("Price")}
                  name="price"
                  onChange={handleFieldChange}
                  value={formState.price}
                  variant="outlined"
                  error={formState.priceError}
                  helperText={formState.priceErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={6}
              >
                <Typography variant="h5">{t("isactive")}</Typography>
                <Switch
                  checked={formState.active}
                  color="secondary"
                  edge="start"
                  name="active"
                  onChange={handleFieldChange}
                  value={formState.active}
                />
              </Grid>
              <Grid item />
            </Grid>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button
              onClick={onClose}
              variant="contained"
            >
              {t("close")}
            </Button>
            <Button
              className={classes.saveButton}
              //onClick={onClose}
              onClick={handleSave}
              variant="contained"
            >
              {t("save")}
            </Button>
          </CardActions>
        </form>
      </Card>
    </Modal>
  );
};

IngredientEdit.displayName = 'IngredientEdit';

IngredientEdit.propTypes = {
  className: PropTypes.string,
  ingredient: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

IngredientEdit.defaultProps = {
  open: false,
  onClose: () => {}
};

export default IngredientEdit;
