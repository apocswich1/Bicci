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
  const [franchise, setFranchise] = useState();

  useEffect(() => {

  const fetchFranchise = async () => {
    /* axios.get('/api/management/franchises/1/summary').then(response => {
       if (mounted) {
         setFranchise(response.data.summary);
       }
     });*/
     let franchises = [];
     const refUser = firebase.firestore().collection('franchises').doc(props.id);
     refUser.get().then(async data=>{
       await franchises.push(data.data());        
       franchises[0].uid = props.id;
       setFranchise(franchises[0]);
     }).catch(err => console.log(err));
    
    }

      fetchFranchise();
    },[]);
  
    if (!franchise) {
      return null;
    }
  

console.log(franchise);
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
        Franchises
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {franchise.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
