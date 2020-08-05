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
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
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
  roote: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
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
  const { open, onClose, product, actualizar, setLoading,cboIngredients,cboRestaurants, chips, className, cboCategories, ...rest } = props;

  const classes = useStyles();

  const [filess, setFiless] = useState([]);
  const [filessdoc, setFilessdoc] = useState([]);
  const [filesspromo, setFilesspromo] = useState([]);
  const [places, setPlaces] = useState([]);
  const [chipData, setChipData] = useState([]);
  const [places2, setPlaces2] = useState([]);
  const [chipData2, setChipData2] = useState([]);
  const [formState, setFormState] = useState({
    ...product
  });

  
  if (!open) {
    return null;
  }

  const handleChangeIngredient = async event => {
    event.persist();
        setFormState(formState => ({
          ...formState,
          'ingredientID':event.target.value,
          'ingredientName':event._targetInst.memoizedProps.children[0][0],
          'places': [...places, event.target.value]
        }));
    
        setChipData(
          chipData => [...chipData,{key: event.target.value, label: event._targetInst.memoizedProps.children[0][0]}]
          );
    
        setPlaces(
            places => [...places, event.target.value]
        );
    
  }

  const handleChangeCategory = async event => {
    event.persist();
        setFormState(formState => ({
          ...formState,
          'categoryID':event.target.value,
          'categoryName':event._targetInst.memoizedProps.children[0][0],
          'places2': [...places2, event.target.value]
        }));
    
        setChipData2(
          chipData2 => [...chipData2,{key: event.target.value, label: event._targetInst.memoizedProps.children[0][0]}]
          );
    
        setPlaces2(
            places2 => [...places2, event.target.value]
        );
    
  }

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleDelete2 = (chipToDelete) => () => {
    setChipData2((chips2) => chips2.filter((chip2) => chip2.key !== chipToDelete.key));
  };

  const handleChangeRestaurant = async event => {
    event.persist();
        setFormState(formState => ({
          ...formState,
          'restaurantID':event.target.value,
          'restaurantName':event._targetInst.memoizedProps.children[0][0],
        }));      
    
  
    console.log(formState);
  }

  const validateForm = () => {
    let nameError = "";
    let instructionsError = "";
    let restaurantError = "";
    let concentrationError = "";
    let descriptionError = "";
    let priceError = "";
    let estimatedDeliveryTimeError = "";
    let promoError = "";
    let stockError = "";
    let skuError = "";
    let detailsError = "";
    let nameErrorMessage = "";
    let instructionsErrorMessage = "";
    let restaurantErrorMessage = "";
    let descriptionErrorMessage = "";
    let priceErrorMessage = "";
    let estimatedDeliveryTimeErrorMessage = "";
    let promoErrorMessage = "";
    let stockErrorMessage = "";
    let skuErrorMessage = "";
    let detailsErrorMessage = "";

    
    if(!formState.name){
      nameError = "Debe introducir un nombre";
      nameErrorMessage = "Debe introducir un nombre";
    }

    if(!formState.instructions){
      instructionsError = "Debe introducir el instructions";
      instructionsErrorMessage = "Debe introducir el instructions";
    }

    if(!formState.description){
      descriptionError = "Debe introducir la description";
      descriptionErrorMessage = "Debe introducir la description";
    }

    if(!formState.price){
      priceError = "Debe introducir la price";
      priceErrorMessage = "Debe introducir la price";
    }

    // if(!formState.estimatedDeliverTime){
    //   estimatedDeliveryTimeError = "Debe introducir la estimatedDeliveryTime";
    //   estimatedDeliveryTimeErrorMessage = "Debe introducir la estimatedDeliveryTime";
    // }
    
    if(!formState.estimatedDeliveryTime){
      estimatedDeliveryTimeError = "Debe introducir estimatedDeliveryTime";
      estimatedDeliveryTimeErrorMessage = "Debe introducir estimatedDeliveryTime";
    }

    // if(!formState.presentation){
    //   presentationError = "Debe introducir la posología";
    //   presentationErrorMessage = "Debe introducir la posología";
    // }

    // if(!formState.restaurantID){
    //   restaurantError = "Debe introducir l categoria";
    //   restaurantErrorMessage = "Debe introducir la categoria";
    // }

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

    // if(!formState.promo){
    //   promoError = "Debe introducir si es promo";
    //   promoErrorMessage = "Debe introducir si es promo";
    // }

    if(!formState.stock){
      stockError = "Debe introducir la cantidad";
      stockErrorMessage = "Debe introducir la cantidad";
    }

    if(!formState.sku){
      skuError = "Debe introducir el sku";
      skuErrorMessage = "Debe introducir el sku";
    }

    // if(!formState.substance){
    //   substanceError = "Debe introducir la substance";
    //   substanceErrorMessage = "Debe introducir la substance";
    // }

    if(!formState.details){
      detailsError = "Debe introducir el details";
      detailsErrorMessage = "Debe introducir details";
    }

    // if(!formState.presentation){
    //   presentationError = "Debe introducir la presentación";
    //   presentationErrorMessage = "Debe introducir la presentación";
    // }

    

    if(nameError || descriptionError || estimatedDeliveryTimeError || stockError){
      
      setFormState(formState => ({
        ...formState,
        nameError,descriptionError,estimatedDeliveryTimeError,stockError,
        nameErrorMessage,descriptionErrorMessage,
        priceError,priceErrorMessage,estimatedDeliveryTimeErrorMessage,stockErrorMessage
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
    //console.log(formState);
    let msg = "Producto creado con exito";
    const isValid = validateForm();
   // console.log(isValid);
    if(isValid){
      setLoading(true);
      let params = {
        name: formState.name,
        //active: formState.active ? formState.active : true,
        active: false,
        restaurantID: formState.restaurantID,
        restaurant: formState.restaurantName,
        instructions:formState.instructions ? formState.instructions : "",
        description:formState.description ? formState.description : "",
        estimatedDeliveryTime:formState.estimatedDeliveryTime ? +formState.estimatedDeliveryTime : 0,
        stock:formState.stock ? +formState.stock : 0,
        sku:formState.sku ? formState.sku : "",
        price:formState.price ? +formState.price : 0,
        details:formState.details ? formState.details : "",
        aditionalIngredients:chipData.map((item) => {return item.key}),
        categoriesInvolved:chipData2.map((item) => {return item.key}),
      }

      console.log(params);
    //  return;

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
            // if(filessdoc.length > 0){
            //   var storageReference = firebase.storage().ref();
            //  var uploadDocument = storageReference.child(`/principalDocs/${body.id}/${body.id}.pdf`).put(filessdoc[0]);
            //  uploadDocument.on('state_changed', function (snapshot) {
            //    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //    console.log('Upload is ' + progress + '% done');
            //    switch (snapshot.state) {
            //      case firebase.storage.TaskState.PAUSED: // or 'paused'
            //        //  console.log('Upload is paused');
            //        break;
            //      case firebase.storage.TaskState.RUNNING: // or 'running'
            //        //  console.log('Upload is running');
            //        break;
            //    }
            //  }, function (error) {
     
            //  }, function () {
            //    uploadDoc.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            //      let document = "principalDoc";
            //      let datadoc = {}
            //      datadoc[document] = downloadURL;
            //      console.log(datadoc);
            //     const refPro = firebase.firestore().collection('products').doc(body.id);
            //       refPro.set(datadoc, { merge: true }).then(async resp => {
            //         console.log("Congrats...");
            //       }).catch(err => console.log(err));
            //    }).catch(err => console.log(err));
            //  });
            //  }
            /************* */
             /*************agragar foto promo*/
            //  if(filesspromo[0]!==undefined){

            //   var storageRef = firebase.storage().ref();
            //   var uploadDoc = storageRef.child(`/thumbnails_product_promo/${body.id}/${body.id}.jpg`).put(filesspromo[0]);
            //   uploadDoc.on('state_changed', function (snapshot) {
            //     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //     console.log('Upload is ' + progress + '% done');
            //     switch (snapshot.state) {
            //       case firebase.storage.TaskState.PAUSED: // or 'paused'
            //         break;
            //       case firebase.storage.TaskState.RUNNING: // or 'running'
            //         break;
            //     }
            //   }, function (error) {
      
            //   }, function () {
            //     uploadDoc.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            //       let document = "promoThumb";
            //       let data = {}
            //       data[document] = downloadURL;
            //       console.log(data);
            //      const refWasher = firebase.firestore().collection('products').doc(body.id);
            //        refWasher.set(data, { merge: true }).then(async resp => {
            //          console.log("Congrats...");
            //        }).catch(err => console.log(err));
            //     }).catch(err => console.log(err));
            //   });
             
            //  }
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
            <Typography
              align="center"
              gutterBottom
              variant="h5"
            >
            Recomendación imagen: 720x240px, Formato JPEG, PNG. Máximo 2MB
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
              {/* <Grid
                item
                md={12}
                xs={12}
              >
                <Card>
                  <CardContent>
                    <FilesDropzoneFile handleFieldChange={handleFieldChange} setFilessdoc={setFilessdoc} />
                  </CardContent>
                </Card>
              </Grid> */}
              <Grid
                item
                md={12}
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
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Price")}
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
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Estimated Delivery Time")}
                  name="estimatedDeliveryTime"
                  onChange={handleFieldChange}
                  value={formState.estimatedDeliveryTime}
                  variant="outlined"
                  error={formState.estimatedDeliveryTimeError}
                  helperText={formState.estimatedDeliveryTimeErrorMessage}
                />
              </Grid>
                <Grid
                item
                md={12}
                xs={12}
              >
                <InputLabel id="demo-simple-select-label">{T("Restaurant")}</InputLabel>
                <Select
                  name="restaurant"
                  value={formState.restaurantID}
                  onChange={handleChangeRestaurant}
                  style={{ width: "520px" }}
                  error={formState.restaurantError}
                  helperText={formState.restaurantErrorMessage}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {cboRestaurants.map(item => (
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
                  label={T("Stock")}
                  name="stock"
                  onChange={handleFieldChange}
                  value={formState.stock}
                  variant="outlined"
                  error={formState.stockError}
                  helperText={formState.stockErrorMessage}
                />
              </Grid>
              {/* <Grid
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
              </Grid> */}
              {/* <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Instructions")}
                  name="instructions"
                  onChange={handleFieldChange}
                  value={formState.instructions}
                  variant="outlined"
                  error={formState.instructionsError}
                  helperText={formState.instructionsErrorMessage}
                />
              </Grid> */}
              {/* <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Details")}
                  name="details"
                  onChange={handleFieldChange}
                  value={formState.details}
                  variant="outlined"
                  error={formState.detailsError}
                  helperText={formState.detailsErrorMessage}
                />
              </Grid> */}
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
              {/* <Grid
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
              </Grid> */}
              <Grid
                item
                md={12}
                xs={12}
              >
                    <Paper component="ul" className={classes.roote}>
                {chipData.map((data) => {
                  let icon;

                  if (data.label === 'React') {
                    icon = <TagFacesIcon />;
                  }

                  return (
                    <li key={data.key}>
                      <Chip
                        icon={icon}
                        label={data.label}
                        onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                        className={classes.chip}
                      />
                    </li>
                  );
                })}
                </Paper>
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
                hidden={formState.global ? true : false }
              >
                <InputLabel id="demo-simple-select-label">{T("Ingredients")}</InputLabel>
                <Select
                  name="ingredientName"
                  value={formState.ingredientID}
                  onChange={handleChangeIngredient}
                  style={{ width: "520px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {cboIngredients.map(item => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                    <Paper component="ul" className={classes.roote}>
                {chipData2.map((data) => {
                  let icon;

                  if (data.label === 'React') {
                    icon = <TagFacesIcon />;
                  }

                  return (
                    <li key={data.key}>
                      <Chip
                        icon={icon}
                        label={data.label}
                        onDelete={data.label === 'React' ? undefined : handleDelete2(data)}
                        className={classes.chip}
                      />
                    </li>
                  );
                })}
                </Paper>
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
                hidden={formState.global ? true : false }
              >
                <InputLabel id="demo-simple-select-label">{T("Categories")}</InputLabel>
                <Select
                  name="categoryName"
                  value={formState.categoryID}
                  onChange={handleChangeCategory}
                  style={{ width: "520px" }}
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
              {/* {formState.promo && (
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
              )} */}
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
