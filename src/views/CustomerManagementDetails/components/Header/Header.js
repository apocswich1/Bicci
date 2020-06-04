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
  const [customer, setCustomer] = useState();

  useEffect(() => {

  const fetchCustomer = async () => {
    /* axios.get('/api/management/customers/1/summary').then(response => {
       if (mounted) {
         setCustomer(response.data.summary);
       }
     });*/
     let users = [];
     const refUser = firebase.firestore().collection('users').doc(props.id);
     refUser.get().then(async data=>{
       await users.push(data.data());        
       users[0].uid = props.id;
       setCustomer(users[0]);
     }).catch(err => console.log(err));
    
    }

      fetchCustomer();
    },[]);
  
    if (!customer) {
      return null;
    }
  

console.log(customer);
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
        {t("users")}
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {customer.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
