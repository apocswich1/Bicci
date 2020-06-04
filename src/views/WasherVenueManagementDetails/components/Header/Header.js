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
  const [washer, setWasher] = useState();

  useEffect(() => {

  const fetchWasher = async () => {
    /* axios.get('/api/management/washers/1/summary').then(response => {
       if (mounted) {
         setWasher(response.data.summary);
       }
     });*/
     let washers = [];
     const refWasher = firebase.firestore().collection('washers').doc(props.id);
     refWasher.get().then(async data=>{
       await washers.push(data.data());        
       washers[0].uid = props.id;
       setWasher(washers[0]);
     }).catch(err => console.log(err));
    
    }

      fetchWasher();
    },[]);
  
    if (!washer) {
      return null;
    }
  

console.log(washer);
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
        Prowashers
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {washer.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
