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
  const [service, setService] = useState();

  useEffect(() => {

  const fetchService = async () => {
    /* axios.get('/api/management/services/1/summary').then(response => {
       if (mounted) {
         setService(response.data.summary);
       }
     });*/
     let services = [];
     const refUser = firebase.firestore().collection('requestTypes').doc(props.id);
     refUser.get().then(async data=>{
       await services.push(data.data());        
       services[0].id = props.id;
       setService(services[0]);
     }).catch(err => console.log(err));
    
    }

      fetchService();
    },[]);
  
    if (!service) {
      return null;
    }
  

console.log(service);
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
        Services
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {service.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
