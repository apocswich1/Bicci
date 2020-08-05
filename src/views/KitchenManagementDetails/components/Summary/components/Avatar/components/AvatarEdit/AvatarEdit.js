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
import InputAdornment from '@material-ui/core/InputAdornment';
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

const AvatarEdit = props => {
  const { open, onClose, product, actualizar, className, ...rest } = props;
  const [filess, setFiless] = useState([]);
  const classes = useStyles();

  const [formState, setFormState] = useState({
    ...product
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
        ...formState,nameError,nameErrorMessage
      }));
      return false;
    }
    return true;
  }

  const handleSave = () => {
    const isValid = validateForm();
    let msg = "Thumbnail actualizado exitosamente!";
    let body = {id: product.id, code: 200}
    if(isValid){

     /************* imagen de producto*/
     if(filess.length > 0){
      var storageRef = firebase.storage().ref();
     var uploadDoc = storageRef.child(`/thumbnails_product/${product.id}/${product.id}.jpg`).put(filess[0]);
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
        const refWasher = firebase.firestore().collection('products').doc(product.id);
          refWasher.set(data, { merge: true }).then(async resp => {
            console.log("Congrats...");
            actualizar(msg,body);    
          }).catch(err => console.log(err));
          setFiless([]);
          actualizar(msg,body);    
       });
     });
     }
    /************* */
    //actualizar(msg,body);    
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
              {t("Edit")} Thumbnail {t("Producto")}
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

AvatarEdit.displayName = 'AvatarEdit';

AvatarEdit.propTypes = {
  className: PropTypes.string,
  product: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

AvatarEdit.defaultProps = {
  open: false,
  onClose: () => {}
};

export default AvatarEdit;
