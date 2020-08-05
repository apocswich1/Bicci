import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import firebase from 'utils/firebase';
import translate from 'translate';

const useStyles = makeStyles(() => ({
  root: {}
}));

const t = translate;

const Header = props => {

  const { className, ...rest } = props;
  const classes = useStyles();
  const [product, setProduct] = useState();

  useEffect(() => {

  const fetchProduct = async () => {
    /* axios.get('/api/management/products/1/summary').then(response => {
       if (mounted) {
         setProduct(response.data.summary);
       }
     });*/
     let products = [];
     const refProduct = firebase.firestore().collection('products').doc(props.id);
     refProduct.get().then(async data=>{
       await products.push(data.data());        
       products[0].uid = props.id;
       setProduct(products[0]);
     }).catch(err => console.log(err));
    
    }

      fetchProduct();
    },[]);
  
    if (!product) {
      return null;
    }
  

console.log(product);
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography
        component="h2"
        gutterBottom
        variant="overline"
      >
        {t("products")}
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {product.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
