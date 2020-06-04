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
  const [rate, setRate] = useState();

  useEffect(() => {

  const fetchRate = async () => {
   
     let rates = [];
     fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/listRatesAdmin', {
      method: 'get',
      mode: 'cors',
    }).then(function (respuesta) {
      respuesta.json().then(body => {
        setRate(body[0]);
      });
    }).catch(function (err) {
      // Error :(
    });
    
    }

      fetchRate();
    },[]);
  
    if (!rate) {
      return null;
    }
  

//console.log(rate);
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
        Rates
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {'Configuration'}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
