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
  const [vehicle, setVehicle] = useState();

  useEffect(() => {

  const fetchVehicle = async () => {
    /* axios.get('/api/management/vehicles/1/summary').then(response => {
       if (mounted) {
         setVehicle(response.data.summary);
       }
     });*/
     let vehicles = [];
     const refVehicle = firebase.firestore().collection('vehicles').doc(props.id);
     refVehicle.get().then(async data=>{
       await vehicles.push(data.data());        
       vehicles[0].uid = props.id;
       setVehicle(vehicles[0]);
     }).catch(err => console.log(err));
    
    }

      fetchVehicle();
    },[]);
  
    if (!vehicle) {
      return null;
    }
  

//console.log(vehicle);
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
        Vehicles
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {vehicle.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
