import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import firebase from 'utils/firebase';
import translate from 'translate';

const t = translate;
const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {

  const { className, ...rest } = props;
  const classes = useStyles();
  const [coupon, setCoupon] = useState();

  useEffect(() => {

  const fetchCoupon = async () => {
    /* axios.get('/api/management/coupons/1/summary').then(response => {
       if (mounted) {
         setCoupon(response.data.summary);
       }
     });*/
     let coupons = [];
     const refCoupon = firebase.firestore().collection('coupons').doc(props.id);
     refCoupon.get().then(async data=>{
       await coupons.push(data.data());        
       coupons[0].uid = props.id;
       setCoupon(coupons[0]);
     }).catch(err => console.log(err));
    
    }

      fetchCoupon();
    },[]);
  
    if (!coupon) {
      return null;
    }
  

console.log(coupon);
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
        {t("coupons")}
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {coupon.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
