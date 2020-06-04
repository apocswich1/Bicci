import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import firebase from 'utils/firebase';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {

  const { className, ...rest } = props;
  const classes = useStyles();
  const [order, setOrder] = useState();

  useEffect(() => {

  const fetchOrder = async () => {
    /* axios.get('/api/management/orders/1/summary').then(response => {
       if (mounted) {
         setOrder(response.data.summary);
       }
     });*/
     let orders = [];
     const refUser = firebase.firestore().collection('orders').doc(props.id);
     refUser.get().then(async data=>{
       await orders.push(data.data());        
       orders[0].id = props.id;
       setOrder(orders[0]);
     }).catch(err => console.log(err));
    
    }

      fetchOrder();
    },[]);
  
    if (!order) {
      return null;
    }
  

console.log(order);
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
        Orders
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {order.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
