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
import { FilesDropzone } from 'components';
import firebase from 'utils/firebase';
import translate from 'translate';

const t = translate;

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

const ServiceEdit = props => {
  const { open, onClose, service, actualizar, className, ...rest } = props;
  const classes = useStyles();
  const [filess, setFiless] = useState([]);
  const [formState, setFormState] = useState({
    ...service
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
    let priceAError = "";
    let priceAErrorMessage = "";
    let priceBError = "";
    let priceBErrorMessage = "";
    let priceCError = "";
    let priceCErrorMessage = "";
    let estimatedTimeAError = "";
    let estimatedTimeAErrorMessage = "";
    let estimatedTimeBError = "";
    let estimatedTimeBErrorMessage = "";
    let estimatedTimeCError = "";
    let estimatedTimeCErrorMessage = "";
    let descriptionError = "";
    let descriptionErrorMessage = "";


    if (!formState.name) {
      nameError = "Debe introducir un nombre";
      nameErrorMessage = "Debe introducir un nombre";
    }

    if (!formState.priceA) {
      priceAError = "Debe introducir un precio A";
      priceAErrorMessage = "Debe introducir un precio A";
    }

    if (!formState.priceB) {
      priceBError = "Debe introducir un precio B";
      priceBErrorMessage = "Debe introducir un precio B";
    }

    if (!formState.priceC) {
      priceCError = "Debe introducir un precio C";
      priceCErrorMessage = "Debe introducir un precio C";
    }

    if (!formState.estimatedTimeA) {
      estimatedTimeAError = "Debe introducir un tiempo estimado A";
      estimatedTimeAErrorMessage = "Debe introducir un tiempo estimado A";
    }

    if (!formState.estimatedTimeB) {
      estimatedTimeBError = "Debe introducir un tiempo estimado B";
      estimatedTimeBErrorMessage = "Debe introducir un tiempo estimado B";
    }

    if (!formState.estimatedTimeC) {
      estimatedTimeCError = "Debe introducir un tiempo estimado C";
      estimatedTimeCErrorMessage = "Debe introducir un tiempo estimado C";
    }

    if (!formState.description) {
      descriptionError = "Debe introducir una descripción";
      descriptionErrorMessage = "Debe introducir una descripción";
    }

    if (nameError || priceAError || priceBError || priceCError || estimatedTimeAError || estimatedTimeBError || estimatedTimeCError || descriptionError) {
      setFormState(formState => ({
        ...formState,
        nameError,
        priceAError,
        priceBError,
        priceCError,
        estimatedTimeAError,
        estimatedTimeBError,
        estimatedTimeCError,
        descriptionError,
        nameErrorMessage,
        priceAErrorMessage,
        priceBErrorMessage,
        priceCErrorMessage,
        estimatedTimeAErrorMessage,
        estimatedTimeBErrorMessage,
        estimatedTimeCErrorMessage,
        descriptionErrorMessage
    
      }));
      return false;
    }
    return true;
  }

  const handleSave = () => {
   // event.preventDefault();
    console.log(formState);
    const isValid = validateForm();
    let msg = "Servicio actualizado exitosamente!";
    if(isValid){

      let params = {
        "id": formState.id,
        "pack": formState.pack ? formState.pack : false,
        "name": formState.name,
        "priceA": +formState.priceA,
        "priceB": +formState.priceB,
        "priceC": +formState.priceC,
        "estimatedTimeA": +formState.estimatedTimeA,
        "estimatedTimeB": +formState.estimatedTimeB,
        "estimatedTimeC": +formState.estimatedTimeC,
        "description": formState.description,
      }

    console.log(params);
    
    fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/serviceUpdateAdmin', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify(params)
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body);
           /************* */
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
              const refWasher = firebase.firestore().collection('requestTypes').doc(body.id);
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
              {t("Edit")} {t("service")}
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
                <Card>
                  <CardContent>
                    <FilesDropzone handleFieldChange={handleFieldChange} setFiless={setFiless} />
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("name")}
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
                xs={12}
              >
                <TextField
                  fullWidth
                  label={`${t("price")} A`}
                  name="priceA"
                  onChange={handleFieldChange}
                  value={formState.priceA}
                  variant="outlined"
                  error={formState.priceAError}
                  helperText={formState.priceAErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={`${t("price")} B`}
                  name="priceB"
                  onChange={handleFieldChange}
                  value={formState.priceB}
                  variant="outlined"
                  error={formState.priceBError}
                  helperText={formState.priceBErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={`${t("price")} C`}
                  name="priceC"
                  onChange={handleFieldChange}
                  value={formState.priceC}
                  variant="outlined"
                  error={formState.priceCError}
                  helperText={formState.priceCErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={`${t("Estimated time")} A`}
                  name="estimatedTimeA"
                  onChange={handleFieldChange}
                  value={formState.estimatedTimeA}
                  variant="outlined"
                  error={formState.estimatedTimeAError}
                  helperText={formState.estimatedTimeAErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={`${t("Estimated time")} B`}
                  name="estimatedTimeB"
                  onChange={handleFieldChange}
                  value={formState.estimatedTimeB}
                  variant="outlined"
                  error={formState.estimatedTimeBError}
                  helperText={formState.estimatedTimeBErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={`${t("Estimated time")} C`}
                  name="estimatedTimeC"
                  onChange={handleFieldChange}
                  value={formState.estimatedTimeC}
                  variant="outlined"
                  error={formState.estimatedTimeCError}
                  helperText={formState.estimatedTimeCErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <Typography variant="h5">{t("time")}</Typography>
                <Switch
                  checked={formState.pack}
                  color="secondary"
                  edge="start"
                  name="pack"
                  onChange={handleFieldChange}
                  value={formState.pack}
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("description")}
                  name="description"
                  onChange={handleFieldChange}
                  value={formState.description}
                  variant="outlined"
                  error={formState.descriptionError}
                  helperText={formState.descriptionErrorMessage}
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

ServiceEdit.displayName = 'ServiceEdit';

ServiceEdit.propTypes = {
  className: PropTypes.string,
  service: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

ServiceEdit.defaultProps = {
  open: false,
  onClose: () => {}
};

export default ServiceEdit;
