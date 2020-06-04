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
import { FilesDropzoneFile } from 'components';
import { FilesDropzonePromo } from 'components';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import config from 'config';
import firebase from 'utils/firebase';
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

const ProductAdd = props => {
  const { open, onClose, product, actualizar, setLoading, className, cboCategories, ...rest } = props;

  const classes = useStyles();

  const [filess, setFiless] = useState([]);
  const [filessdoc, setFilessdoc] = useState([]);
  const [filesspromo, setFilesspromo] = useState([]);
  const [formState, setFormState] = useState({
    ...product
  });

  
  if (!open) {
    return null;
  }

  const handleChangeCategory = async event => {
    event.persist();
        setFormState(formState => ({
          ...formState,
          'categoryID':event.target.value,
          'categoryName':event._targetInst.memoizedProps.children[0][0],
        }));      
    
  
    console.log(formState);
  }

  const validateForm = () => {
    let nameError = "";
    let actionError = "";
    let categoryError = "";
    let brandError = "";
    let compositionError = "";
    let concentrationError = "";
    let descriptionError = "";
    let deseasesError = "";
    let posologyError = "";
    let presentationError = "";
    let productLineError = "";
    let promoError = "";
    let quantityError = "";
    let skuError = "";
    let substanceError = "";
    let treatmentError = "";
    let nameErrorMessage = "";
    let actionErrorMessage = "";
    let categoryErrorMessage = "";
    let brandErrorMessage = "";
    let compositionErrorMessage = "";
    let concentrationErrorMessage = "";
    let descriptionErrorMessage = "";
    let deseasesErrorMessage = "";
    let posologyErrorMessage = "";
    let presentationErrorMessage = "";
    let productLineErrorMessage = "";
    let promoErrorMessage = "";
    let quantityErrorMessage = "";
    let skuErrorMessage = "";
    let substanceErrorMessage = "";
    let treatmentErrorMessage = "";

    
    if(!formState.name){
      nameError = "Debe introducir un nombre";
      nameErrorMessage = "Debe introducir un nombre";
    }

    if(!formState.action){
      actionError = "Debe introducir el action";
      actionErrorMessage = "Debe introducir el action";
    }

    if(!formState.categoryID){
      categoryError = "Debe introducir l categoria";
      categoryErrorMessage = "Debe introducir la categoria";
    }

    // if(!formState.brand){
    //   brandError = "Debe introducir la marca";
    //   brandErrorMessage = "Debe introducir la marca";
    // }

    // if(!formState.composition){
    //   compositionError = "Debe introducir la composition";
    //   compositionErrorMessage = "Debe introducir la composition";
    // }

    // if(!formState.concentration){
    //   concentrationError = "Debe introducir la concentration";
    //   concentrationErrorMessage = "Debe introducir la concentration";
    // }

    if(!formState.description){
      descriptionError = "Debe introducir la description";
      descriptionErrorMessage = "Debe introducir la description";
    }

    // if(!formState.deseases){
    //   deseasesError = "Debe introducir deseases";
    //   deseasesErrorMessage = "Debe introducir deseases";
    // }

    if(!formState.posology){
      posologyError = "Debe introducir la posología";
      posologyErrorMessage = "Debe introducir la posología";
    }

    if(!formState.presentation){
      presentationError = "Debe introducir la posología";
      presentationErrorMessage = "Debe introducir la posología";
    }

    // if(!formState.productLine){
    //   productLineError = "Debe introducir la productLine";
    //   productLineErrorMessage = "Debe introducir la productLine";
    // }

    // if(!formState.promo){
    //   promoError = "Debe introducir si es promo";
    //   promoErrorMessage = "Debe introducir si es promo";
    // }

    // if(!formState.quantity){
    //   quantityError = "Debe introducir la cantidad";
    //   quantityErrorMessage = "Debe introducir la cantidad";
    // }

    // if(!formState.sku){
    //   skuError = "Debe introducir el sku";
    //   skuErrorMessage = "Debe introducir el sku";
    // }

    if(!formState.substance){
      substanceError = "Debe introducir la substance";
      substanceErrorMessage = "Debe introducir la substance";
    }

    // if(!formState.treatment){
    //   treatmentError = "Debe introducir el treatment";
    //   treatmentErrorMessage = "Debe introducir treatment";
    // }

    if(!formState.presentation){
      presentationError = "Debe introducir la presentación";
      presentationErrorMessage = "Debe introducir la presentación";
    }

    

    if(nameError || actionError || categoryError || brandError || compositionError || concentrationError || descriptionError || deseasesError || skuError || productLineError || quantityError || substanceError || presentationError){
      
      setFormState(formState => ({
        ...formState,
        nameError,actionError,categoryError,brandError,compositionError,concentrationError,descriptionError,deseasesError,skuError,productLineError,quantityError,substanceError,
        nameErrorMessage,actionErrorMessage,categoryErrorMessage,brandErrorMessage,compositionErrorMessage,concentrationErrorMessage,descriptionErrorMessage,deseasesErrorMessage,skuErrorMessage,
        posologyError,posologyErrorMessage,treatmentError,treatmentErrorMessage,presentationError,presentationErrorMessage,productLineErrorMessage,quantityErrorMessage,substanceErrorMessage
      }));
      console.log(formState);
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
    let msg = "Products creado con exito";
    const isValid = validateForm();
    console.log(isValid);
    if(isValid){
      setLoading(true);
      let params = {
        name: formState.name,
        promo: formState.promo ? formState.promo : false,
        active: formState.active ? formState.active : true,
        brand: formState.brand ? formState.brand : "",
        //category:formState.category,
        //categoryID:1,
        categoryID: formState.categoryID,
        category: formState.categoryName,
        composition: formState.composition ? formState.composition : "",
        concentration:formState.concentration ? formState.concentration : "",
        action:formState.action ? formState.action : "",
        description:formState.description ? formState.description : "",
        deseases:formState.deseases ? formState.deseases : "",
        posology:formState.posology ? formState.posology : "",
        presentation:formState.presentation ? formState.presentation : "",
        productLine:formState.productLine ? formState.productLine : "",
        quantity:formState.quantity ? formState.quantity : "",
        sku:formState.sku ? formState.sku : "",
        substance:formState.substance ? formState.substance : "",
        treatment:formState.treatment ? formState.treatment : ""
      }

      fetch(service+'createProductsAdmin', {
          method: 'post',
          mode: 'cors',
          body: JSON.stringify(params)
        }).then(function (respuesta) {
          respuesta.json().then(body => {
            console.log(body);
               /*************agragar foto*/
               if(filess[0]!==undefined){

               var storageRef = firebase.storage().ref();
               var uploadDoc = storageRef.child(`/thumbnails_product/${body.id}/${body.id}.jpg`).put(filess[0]);
               uploadDoc.on('state_changed', function (snapshot) {
                 var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                 console.log('Upload is ' + progress + '% done');
                 switch (snapshot.state) {
                   case firebase.storage.TaskState.PAUSED: // or 'paused'
                     break;
                   case firebase.storage.TaskState.RUNNING: // or 'running'
                     break;
                 }
               }, function (error) {
       
               }, function () {
                 uploadDoc.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                   let document = "thumbnail";
                   let data = {}
                   data[document] = downloadURL;
                   console.log(data);
                  const refWasher = firebase.firestore().collection('products').doc(body.id);
                    refWasher.set(data, { merge: true }).then(async resp => {
                      console.log("Congrats...");
                    }).catch(err => console.log(err));
                 }).catch(err => console.log(err));
               });
              
              }
                   /************* */
                      /************* documento de producto*/
            if(filessdoc.length > 0){
              var storageReference = firebase.storage().ref();
             var uploadDocument = storageReference.child(`/principalDocs/${body.id}/${body.id}.pdf`).put(filessdoc[0]);
             uploadDocument.on('state_changed', function (snapshot) {
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
                 let document = "principalDoc";
                 let datadoc = {}
                 datadoc[document] = downloadURL;
                 console.log(datadoc);
                const refPro = firebase.firestore().collection('products').doc(body.id);
                  refPro.set(datadoc, { merge: true }).then(async resp => {
                    console.log("Congrats...");
                  }).catch(err => console.log(err));
               }).catch(err => console.log(err));
             });
             }
            /************* */
             /*************agragar foto promo*/
             if(filesspromo[0]!==undefined){

              var storageRef = firebase.storage().ref();
              var uploadDoc = storageRef.child(`/thumbnails_product_promo/${body.id}/${body.id}.jpg`).put(filesspromo[0]);
              uploadDoc.on('state_changed', function (snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                  case firebase.storage.TaskState.PAUSED: // or 'paused'
                    break;
                  case firebase.storage.TaskState.RUNNING: // or 'running'
                    break;
                }
              }, function (error) {
      
              }, function () {
                uploadDoc.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                  let document = "promoThumb";
                  let data = {}
                  data[document] = downloadURL;
                  console.log(data);
                 const refWasher = firebase.firestore().collection('products').doc(body.id);
                   refWasher.set(data, { merge: true }).then(async resp => {
                     console.log("Congrats...");
                   }).catch(err => console.log(err));
                }).catch(err => console.log(err));
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
              {T('Agregar')} {T('Product')}
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
                md={12}
                xs={12}
              >
                <Card>
                  <CardContent>
                    <FilesDropzoneFile handleFieldChange={handleFieldChange} setFilessdoc={setFilessdoc} />
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
                  label={T("Name")}
                  name="name"
                  onChange={handleFieldChange}
                  value={formState.name}
                  variant="outlined"
                  error={formState.nameError}
                  helperText={formState.nameErrorMessage}
                />
              </Grid>
              {/* <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Category")}
                  name="category"
                  onChange={handleFieldChange}
                  value={formState.category}
                  variant="outlined"
                  error={formState.categoryError}
                  helperText={formState.categoryErrorMessage}
                />
              </Grid> */}
                <Grid
                item
                md={12}
                xs={12}
              >
                <InputLabel id="demo-simple-select-label">{T("Category")}</InputLabel>
                <Select
                  name="category"
                  value={formState.categoryID}
                  onChange={handleChangeCategory}
                  style={{ width: "520px" }}
                  error={formState.categoryError}
                  helperText={formState.categoryErrorMessage}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {cboCategories.map(item => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("presentation")}
                  name="presentation"
                  onChange={handleFieldChange}
                  value={formState.presentation}
                  variant="outlined"
                  error={formState.presentationError}
                  helperText={formState.presentationErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Product Line")}
                  name="productLine"
                  onChange={handleFieldChange}
                  value={formState.productLine}
                  variant="outlined"
                  error={formState.productLineError}
                  helperText={formState.productLineErrorMessage}
                  // InputProps={{
                  //   startAdornment: <InputAdornment position="start">+56 9</InputAdornment>,
                  // }}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Concentration")}
                  name="concentration"
                  onChange={handleFieldChange}
                  value={formState.concentration}
                  variant="outlined"
                  error={formState.concentrationError}
                  helperText={formState.concentrationErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Composition")}
                  name="composition"
                  onChange={handleFieldChange}
                  value={formState.composition}
                  variant="outlined"
                  error={formState.compositionError}
                  helperText={formState.compositionErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Deseases")}
                  name="deseases"
                  onChange={handleFieldChange}
                  value={formState.deseases}
                  variant="outlined"
                  error={formState.deseasesError}
                  helperText={formState.deseasesErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Treatment")}
                  name="treatment"
                  onChange={handleFieldChange}
                  value={formState.treatment}
                  variant="outlined"
                  error={formState.treatmentError}
                  helperText={formState.treatmentErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Quantity")}
                  name="quantity"
                  onChange={handleFieldChange}
                  value={formState.quantity}
                  variant="outlined"
                  error={formState.quantityError}
                  helperText={formState.quantityErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Sku")}
                  name="sku"
                  onChange={handleFieldChange}
                  value={formState.sku}
                  variant="outlined"
                  error={formState.skuError}
                  helperText={formState.skuErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={6}
              >
                <TextField
                  fullWidth
                  label={T("brand")}
                  name="brand"
                  onChange={handleFieldChange}
                  value={formState.brand}
                  variant="outlined"
                  error={formState.brandError}
                  helperText={formState.brandErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("substance")}
                  name="substance"
                  onChange={handleFieldChange}
                  value={formState.substance}
                  variant="outlined"
                  error={formState.substanceError}
                  helperText={formState.substanceErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("action")}
                  name="action"
                  onChange={handleFieldChange}
                  value={formState.action}
                  variant="outlined"
                  error={formState.actionError}
                  helperText={formState.actionErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("posology")}
                  name="posology"
                  onChange={handleFieldChange}
                  value={formState.posology}
                  variant="outlined"
                  error={formState.posologyError}
                  helperText={formState.posologyErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("description")}
                  name="description"
                  onChange={handleFieldChange}
                  value={formState.description}
                  variant="outlined"
                  error={formState.descriptionError}
                  helperText={formState.descriptionErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={6}
              >
                <Typography variant="h5">{T("promo")}</Typography>
                <Switch
                  checked={formState.promo}
                  color="secondary"
                  edge="start"
                  name="promo"
                  onChange={handleFieldChange}
                  value={formState.promo}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={6}
              >
                <Typography variant="h5">{T("isactive")}</Typography>
                <Switch
                  checked={formState.active}
                  color="secondary"
                  edge="start"
                  name="active"
                  onChange={handleFieldChange}
                  value={formState.active}
                />
              </Grid>
              {formState.promo && (
                 <Grid
                 item
                 md={12}
                 xs={12}
               >
                 <Card>
                   <CardContent>
                     <FilesDropzonePromo handleFieldChange={handleFieldChange} setFilesspromo={setFilesspromo} />
                   </CardContent>
                 </Card>
               </Grid>
              )}
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

ProductAdd.displayName = 'ProductAdd';

ProductAdd.propTypes = {
  className: PropTypes.string,
  product: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

ProductAdd.defaultProps = {
  open: false,
  onClose: () => { }
};

export default ProductAdd;
