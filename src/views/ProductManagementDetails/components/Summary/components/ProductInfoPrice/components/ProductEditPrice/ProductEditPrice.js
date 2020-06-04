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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import translate from 'translate';
import config from 'config';
import { FilesDropzone } from 'components';
import { FilesDropzoneFile } from 'components';
import { FilesDropzonePromo } from 'components';
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

const ProductEditPrice = props => {
  const { open, onClose, product, actualizar,cruzverde, productPrice, salcobrand,ahumada, className, cboCategories, ...rest } = props;
  const [filess, setFiless] = useState([]);
  const [filessdoc, setFilessdoc] = useState([]);
  const [filesspromo, setFilesspromo] = useState([]);
  const classes = useStyles();

  const [formState, setFormState] = useState({
    'sprecio':salcobrand[0].price,
    'aprecio':ahumada[0].price,
    'cprecio':cruzverde[0].price,
    'sdprecio':salcobrand[0].discount,
    'adprecio':ahumada[0].discount,
    'cdprecio':cruzverde[0].discount,
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
    let sprecioError = "";
    let sprecioErrorMessage = "";
    let sdprecioError = "";
    let sdprecioErrorMessage = "";
    let aprecioError = "";
    let aprecioErrorMessage = "";
    let adprecioError = "";
    let adprecioErrorMessage = "";
    let cprecioError = "";
    let cprecioErrorMessage = "";
    let cdprecioError = "";
    let cdprecioErrorMessage = "";

    if(!formState.aprecio){
      aprecioError = "Debe introducir el precio de farmacias ahumada";
      aprecioErrorMessage = "Debe introducir el precio de farmacias ahumada";
    }

    if(!formState.sprecio){
      sprecioError = "Debe introducir el precio de farmacias salcobrand";
      sprecioErrorMessage = "Debe introducir el precio de farmacias salcobrand";
    }

    if(!formState.cprecio){
      cprecioError = "Debe introducir el precio de farmacias cruz verde";
      cprecioErrorMessage = "Debe introducir el precio de farmacias cruz verde";
    }

    if(sprecioError || aprecioError || cprecioError){
      
      setFormState(formState => ({
        ...formState,
        sprecioError,aprecioError,cprecioError,
        sprecioErrorMessage,aprecioErrorMessage,cprecioErrorMessage
      }));
      return false;
    }
    return true;
  }

  const handleSave = async () => {
    console.log(formState);
    const isValid = validateForm();
    let msg = "Product actualizado exitosamente!";
    if(isValid){
      let productid = product.id;
      let params = [
        { 
        price: +formState.sprecio,
        discount: formState.sdprecio ? +formState.sdprecio : 0,
        //id: "eftiVoQzlDtgPAx6VGdt"
        },
        {
        price: +formState.cprecio,
        discount: formState.cdprecio ? +formState.cdprecio : 0,
        //id: "8Ij9hwoZOofMZHPM8Ixt"
        },
        {
          price: +formState.aprecio,
          discount: formState.adprecio ? +formState.adprecio : 0,
         // id: "JPPtTCt3iOIysbZpMfU0"
        }];
  

    console.log(params);

    // const sal = await firebase.firestore().collection('products').doc(productid).collection("storeProducts").where("storeID","==","bUi3aSG0IM9qpoIx8rHM");
    // sal.set({price: params[0].price, discount:params[0].discount}, {merge: true});
    // const ahu = await firebase.firestore().collection('products').doc(productid).collection("storeProducts").where("storeID","==","CW3GQ4Hj8Se7Xfnx0Jne");
    // ahu.set({price: params[0].price, discount:params[0].discount}, {merge: true});
    // const cruz = await firebase.firestore().collection('products').doc(productid).collection("storeProducts").where("storeID","==","x7JmmpuBRD5s7QLMDwIW");
    // cruz.set({price: params[0].price, discount:params[0].discount}, {merge: true});
    
    const ref = await firebase.firestore().collection('products').doc(productid).collection("storeProducts").get();
    const ref2 = firebase.firestore().collection('products').doc(productid).collection("storeProducts");
     ref.docs.forEach(async (item) => {
       console.log(item.data().storeID)
       if(item.data().storeID === "bUi3aSG0IM9qpoIx8rHM"){
        await ref2.doc(item.id).set({price: params[0].price, discount:params[0].discount}, {merge: true});
        productPrice();
       }

       if(item.data().storeID === "CW3GQ4Hj8Se7Xfnx0Jne"){
        await ref2.doc(item.id).set({price: params[2].price, discount:params[2].discount}, {merge: true});
        productPrice();
       }

       if(item.data().storeID === "x7JmmpuBRD5s7QLMDwIW"){
        await ref2.doc(item.id).set({price: params[1].price, discount:params[1].discount}, {merge: true});
        productPrice();
       }
       
     });
    
    productPrice();
    actualizar("Precios actualizados con éxito",{code:200,message:"Precios actualizados con éxito"});
    onClose();
    return;
    }
  }

  if (!salcobrand || !cruzverde || !ahumada) {
    return null;
  }

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
              {t("Edit")} {t("precios")}
            </Typography>
            <Grid
              className={classes.container}
              container
              spacing={3}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("Precio Salcobrand")}
                  name="sprecio"
                  onChange={handleFieldChange}
                  value={formState.sprecio}
                  variant="outlined"
                  error={formState.sprecioError}
                  helperText={formState.sprecioErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("Descuento Salcobrand")}
                  name="sdprecio"
                  onChange={handleFieldChange}
                  value={formState.sdprecio}
                  variant="outlined"
                  error={formState.sdprecioError}
                  helperText={formState.sdprecioErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("Precio Cruz Verde")}
                  name="cprecio"
                  onChange={handleFieldChange}
                  value={formState.cprecio}
                  variant="outlined"
                  error={formState.cprecioError}
                  helperText={formState.cprecioErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("Descuento Cruz Verde")}
                  name="cdprecio"
                  onChange={handleFieldChange}
                  value={formState.cdprecio}
                  variant="outlined"
                  error={formState.cdprecioError}
                  helperText={formState.cdprecioErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("Precio Ahumada")}
                  name="aprecio"
                  onChange={handleFieldChange}
                  value={formState.aprecio}
                  variant="outlined"
                  error={formState.aprecioError}
                  helperText={formState.aprecioErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("Descuento Ahumada")}
                  name="adprecio"
                  onChange={handleFieldChange}
                  value={formState.adprecio}
                  variant="outlined"
                  error={formState.adprecioError}
                  helperText={formState.adprecioErrorMessage}
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

ProductEditPrice.displayName = 'ProductEditPrice';

ProductEditPrice.propTypes = {
  className: PropTypes.string,
  product: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

ProductEditPrice.defaultProps = {
  open: false,
  onClose: () => {}
};

export default ProductEditPrice;
