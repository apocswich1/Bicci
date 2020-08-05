import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import firebase from 'utils/firebase';
import axios from 'utils/axios';
import { ProductInfo, Avatar, Invoices, SendEmails, OtherActions } from './components';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';
import config from 'config';

const useStyles = makeStyles(() => ({
  root: {}
}));

const service = config.servicio;

const Summary = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [product, setProduct] = useState();
  const [storeProducts, setStoreProducts] = useState([]);
  const [salcobrand, setSalcobrand] = useState([]);
  const [ahumada, setAhumada] = useState([]);
  const [cruzverde, setCruzverde] = useState([]);
  const [vertical, setVertical] = React.useState('top');
  const [horizontal, setHorizontal] = React.useState('center');
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [message, setMessage] = React.useState('');
  const [typeMessage, setTypeMessage] = React.useState('');
  const [cboCategories, setCboCategories] = React.useState([]);
  const [cboRestaurants, setCboRestaurants] = React.useState([]);
  const [cboIngredients, setCboIngredients] = React.useState([]);
  const [chips, setChips] = React.useState([]);
  const [chips2, setChips2] = React.useState([]);

  const ColorLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: '#b2dfdb',
    },
    barColorPrimary: {
      backgroundColor: '#00695c',
    },
  })(LinearProgress);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  useEffect(() => {
    let mounted = true;

    const fetchCboRestaurants = async () => {
      let restaurants = [];
      const cboRestaurantsRef = firebase.firestore().collection("restaurants").orderBy('name');

      cboRestaurantsRef.get().then((snapshot) => {
        snapshot.forEach(function (doc) {
          restaurants.push(doc.data());
        });

        setCboRestaurants(restaurants);

      }).catch((error) => {
        console.log("Error getting documents");
      });
    }


    const fetchCboCategories = async () => {
      let categories = [];
      let cboCategoriesRef = "";
      if (props.idrestaurant) {
        cboCategoriesRef = firebase.firestore().collection("restaurants")
          .doc(props.idrestaurant).collection('foodCategories').orderBy('name');
        cboCategoriesRef.get().then((snapshot) => {
          snapshot.forEach(function (doc) {
            categories.push(doc.data());
          });
          console.log(categories);
          setCboCategories(categories);

        }).catch((error) => {
          console.log("Error getting documents");
        });
      } else {
        cboCategoriesRef = firebase.firestore().collection("restaurants")
          .orderBy('name');
        console.log(categories);
        setCboCategories(categories);
      }
    }

    const fetchCboIngredients = async () => {
      let ingredients = [];
      try {
        if (props.idrestaurant) {
          const cboIngredientsRef = await firebase.firestore().collection("ingredients")
          .where('restaurantID','==',props.idrestaurant).orderBy('name').get();
          const datos = await cboIngredientsRef.docs.map(item => {return item.data()});
          console.log(datos);
          setCboIngredients(datos);
        }else{
          const cboIngredientsRef = await firebase.firestore().collection("ingredients")
          .orderBy('name').get();
          const datos = await cboIngredientsRef.docs.map(item => {return item.data()});
          setCboIngredients(datos);
        }  
      } catch (error) {
        console.log(error);
      }
      
      

      // cboIngredientsRef.get().then((snapshot) => {
      //   snapshot.forEach(function (doc) {
      //     ingredients.push(doc.data());
      //   });

      //   setCboIngredients(ingredients);

      // }).catch((error) => {
      //   console.log("Error getting documents");
      // });
    }

    fetchCboRestaurants();
    fetchCboIngredients();
    fetchCboCategories();

    const fetchProductPrice = async () => {
      let storeProduct = [];
      const refProduct = firebase.firestore().collection('products').doc(props.id).collection("storeProducts");
      refProduct.get().then((snapshot) => {
        snapshot.forEach(function (doc) {
          storeProduct.push(doc.data());
        });

        setStoreProducts(storeProduct);
        console.log(storeProduct);
        setSalcobrand(storeProduct.filter(item => item.storeName == "Salcobrand"));
        setCruzverde(storeProduct.filter(item => item.storeName == "Cruz Verde"));
        setAhumada(storeProduct.filter(item => item.storeName == "Farmacia Ahumada"));

      }).catch((error) => {
        console.log("Error getting documents");
      });
    };

    fetchProductPrice();

    const fetchProduct = async () => {
      fetch(service + 'listProductsAdminByProductId', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({ 'id': props.id }),
      }).then(function (respuesta) {
        respuesta.json().then(async body => {
          console.log(body);
          let allchips = [];
          let allchips2 = [];
          if (body.data.aditionalIngredients) {
            for (let i = 0; i < body.data.aditionalIngredients.length; i++) {
              console.log(body.data.aditionalIngredients[i]);
              let infoRef = await firebase.firestore().collection('ingredients').doc(body.data.aditionalIngredients[i]).get();
              let result = await infoRef.data();
              let chip = { 'key': result.id, 'label': result.name };
              allchips.push(chip);
            }
          }
          if (body.data.categoriesInvolved) {
            for (let i = 0; i < body.data.categoriesInvolved.length; i++) {
              console.log(body.data.categoriesInvolved[i]);
              let infoRef = await firebase.firestore().collection('restaurants')
                .doc(props.idrestaurant).collection('foodCategories')
                .doc(body.data.categoriesInvolved[i]).get();
              let result = await infoRef.data();
              if (result) {
                let chip2 = { 'key': result.id, 'label': result.name };
                allchips2.push(chip2);
              }
            }
          }

          setChips(allchips);
          setChips2(allchips2);
          setProduct(body.data);
          console.log(body.data);
          // *******************
          let storeProduct = [];
          const refProduct = firebase.firestore().collection('products').doc(props.id).collection("storeProducts");
          refProduct.get().then((snapshot) => {
            snapshot.forEach(function (doc) {
              storeProduct.push(doc.data());
            });

            setStoreProducts(storeProduct);
            console.log(storeProduct);
            setSalcobrand(storeProduct.filter(item => item.storeName == "Salcobrand"));
            setCruzverde(storeProduct.filter(item => item.storeName == "Cruz Verde"));
            setAhumada(storeProduct.filter(item => item.storeName == "Farmacia Ahumada"));

          }).catch((error) => {
            console.log("Error getting documents");
          });
          // ******************
        });
      }).catch(function (err) {
        console.log(err);
      });
    };

    fetchProduct();

    return () => {
      mounted = false;
    };
  }, []);


  const productPrice = async () => {
    let storeProduct = [];
    const refProduct = firebase.firestore().collection('products').doc(props.id).collection("storeProducts");
    refProduct.get().then((snapshot) => {
      snapshot.forEach(function (doc) {
        storeProduct.push(doc.data());
      });

      setStoreProducts(storeProduct);
      console.log(storeProduct);
      setSalcobrand(storeProduct.filter(item => item.storeName == "Salcobrand"));
      setCruzverde(storeProduct.filter(item => item.storeName == "Cruz Verde"));
      setAhumada(storeProduct.filter(item => item.storeName == "Farmacia Ahumada"));

    }).catch((error) => {
      console.log("Error getting documents");
    });
  };

  const actualizar = async (msg, bodyres) => {
    let message = msg;
    let res = bodyres;
    let products = [];
    console.log("Actualizando...");
    setLoading(true);
    const refProduct = firebase.firestore().collection('products').doc(props.id);
    refProduct.get().then(async data => {
      await products.push(data.data());
      products[0].id = props.id;
      setProduct(products[0]);
      console.log("Actualizado");

      if (res.code === 200) {
        setMessage(message);
        setTypeMessage('success');
      } else {
        setMessage(res.message);
        setTypeMessage('warning');
      }

      setLoading(false);
      setOpen(true);
    }).catch(err => console.log(err));
  }

  if (!product || !storeProducts) {
    return null;
  }

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Snackbar
        autoHideDuration={6000}
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        open={open}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={typeMessage}>
          {message}
        </Alert>
      </Snackbar>
      <Grid
        item
        lg={8}
        md={8}
        xl={8}
        xs={12}
      >
        {/* {loading && (
      <ColorLinearProgress className={classes.margin} />
      )} */}
        <ProductInfo
          chips={chips}
          chips2={chips2}
          product={product}
          actualizar={actualizar}
          cboCategories={cboCategories}
          cboIngredients={cboIngredients}
          cboRestaurants={cboRestaurants} />
      </Grid>
      <Grid
        item
        lg={4}
        md={4}
        xl={4}
        xs={12}
      >
        {/* {loading && (
      <ColorLinearProgress className={classes.margin} />
      )} */}
        <Avatar
          product={product} actualizar={actualizar} cboCategories={cboCategories} />
      </Grid>
      {/*<Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <Invoices product={product} />
      </Grid>*/}
      {/*}  <Grid
        item
        lg={4}
        md={4}
        xl={4}
        xs={4}
      >
        <SendEmails product={product} />
    </Grid>*/}
      <Grid
        item
        lg={8}
        md={8}
        xl={8}
        xs={12}
      >
        <OtherActions product={product} actualizar={actualizar} />
      </Grid>
    </Grid>
  );
};

Summary.propTypes = {
  className: PropTypes.string
};

export default Summary;
