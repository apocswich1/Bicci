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
import InputLabel from '@material-ui/core/InputLabel';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import translate from 'translate';
import config from 'config';
import { FilesDropzone } from 'components';
import { FilesDropzoneFile } from 'components';
import { FilesDropzonePromo } from 'components';
import firebase from 'utils/firebase';

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

const KitchenEdit = props => {
  const { open, onClose, kitchen, actualizar, className,cboRestaurants, chips2, cboIngredients,chips,cboCategories, ...rest } = props;
  const [filess, setFiless] = useState([]);
  const [filessdoc, setFilessdoc] = useState([]);
  const [filesspromo, setFilesspromo] = useState([]);
  const [places, setPlaces] = useState([]);
  const [places2, setPlaces2] = useState([]);
  const [restaurantID, setRestaurantID] = useState(kitchen.restaurantID);
  const [restaurantName, setRestaurantName] = useState(kitchen.restaurantName);
  const classes = useStyles();

  const [formState, setFormState] = useState({
    ...kitchen,restaurantID,restaurantName
  });

  const [chipData, setChipData] = useState(chips);
  const [chipData2, setChipData2] = useState(chips2);

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

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

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

    

    if(nameError || instructionsError || descriptionError || skuError || estimatedDeliveryTimeError || stockError){
      
      setFormState(formState => ({
        ...formState,
        nameError,instructionsError,descriptionError,skuError,estimatedDeliveryTimeError,stockError,
        nameErrorMessage,instructionsErrorMessage,descriptionErrorMessage,skuErrorMessage,
        priceError,priceErrorMessage,detailsError,detailsErrorMessage,estimatedDeliveryTimeErrorMessage,stockErrorMessage
      }));
   // console.log(formState);
      return false;
    }
    return true;
  }

  const handleSave = () => {
    //event.preventDefault();
  //  console.log(formState);
    const isValid = validateForm();
    let msg = "Kitchen actualizado exitosamente!";
    if(isValid){

      let params = { 
        name: formState.name,
        active: formState.active ? formState.active : true,
        restaurantID: formState.restaurantID,
        restaurant: formState.restaurantName,
        instructions:formState.instructions ? formState.instructions : "",
        description:formState.description ? formState.description : "",
        estimatedDeliveryTime:formState.estimatedDeliveryTime ? formState.estimatedDeliveryTime : "",
        stock:formState.stock ? +formState.stock : 0,
        sku:formState.sku ? formState.sku : "",
        price:formState.price ? formState.price : "",
        details:formState.details ? formState.details : "",
        id: kitchen.id,
        aditionalIngredients:chipData.map((item) => {return item.key}),
        categoriesInvolved:chipData2.map((item) => {return item.key}),
    }

    console.log(params);
    
    fetch(service+'kitchenUpdateAdmin', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify(params)
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body);
            /************* imagen de kitcheno*/
            if(filess.length > 0){
              var storageRef = firebase.storage().ref();
             var uploadDoc = storageRef.child(`/thumbnails_kitchen/${kitchen.id}/${kitchen.id}.jpg`).put(filess[0]);
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
                const refWasher = firebase.firestore().collection('kitchens').doc(kitchen.id);
                  refWasher.set(data, { merge: true }).then(async resp => {
                    console.log("Congrats...");
                  }).catch(err => console.log(err));
               });
             });
             }
            /************* */
            /************* documento de kitcheno*/
            // if(filessdoc.length > 0){
            //   var storageRef = firebase.storage().ref();
            //  var uploadDoc = storageRef.child(`/principalDocs/${kitchen.id}/${kitchen.id}.pdf`).put(filessdoc[0]);
            //  uploadDoc.on('state_changed', function (snapshot) {
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
            //      let data = {}
            //      data[document] = downloadURL;
            //      console.log(data);
            //     const refWasher = firebase.firestore().collection('kitchens').doc(kitchen.id);
            //       refWasher.set(data, { merge: true }).then(async resp => {
            //         console.log("Congrats...");
            //       }).catch(err => console.log(err));
            //    });
            //  });
            //  }
            // /************* */
            // /************* imagen de promo del kitcheno*/
            // if(filesspromo.length > 0){
            //   var storageRef = firebase.storage().ref();
            //  var uploadDoc = storageRef.child(`/thumbnails_kitchen_promo/${kitchen.id}/${kitchen.id}.jpg`).put(filesspromo[0]);
            //  uploadDoc.on('state_changed', function (snapshot) {
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
            //      let document = "promoThumb";
            //      let data = {}
            //      data[document] = downloadURL;
            //      console.log(data);
            //     const refWasher = firebase.firestore().collection('kitchens').doc(kitchen.id);
            //       refWasher.set(data, { merge: true }).then(async resp => {
            //         console.log("Congrats...");
            //       }).catch(err => console.log(err));
            //    });
            //  });
            //  }
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
              {T('Edit')} {T('Kitchen')}
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
              </Grid>
              <Grid
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
              {T("close")}
            </Button>
            <Button
              className={classes.saveButton}
              //onClick={onClose}
              onClick={handleSave}
              variant="contained"
            >
              {T("save")}
            </Button>
          </CardActions>
        </form>
      </Card>
    </Modal>
  );
};

KitchenEdit.displayName = 'KitchenEdit';

KitchenEdit.propTypes = {
  className: PropTypes.string,
  kitchen: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

KitchenEdit.defaultProps = {
  open: false,
  onClose: () => {}
};

export default KitchenEdit;
