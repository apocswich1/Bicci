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
  const [owner, setOwner] = useState();

  useEffect(() => {

  const fetchOwner = async () => {
    /* axios.get('/api/management/owners/1/summary').then(response => {
       if (mounted) {
         setOwner(response.data.summary);
       }
     });*/
     let owners = [];
     const refOwner = firebase.firestore().collection('owners').doc(props.id);
     refOwner.get().then(async data=>{
       await owners.push(data.data());        
       owners[0].uid = props.id;
       setOwner(owners[0]);
     }).catch(err => console.log(err));
    
    }

      fetchOwner();
    },[]);
  
    if (!owner) {
      return null;
    }
  

//console.log(owner);
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
        Owners
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {owner.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
