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
  const [claim, setClaim] = useState();

  useEffect(() => {

  const fetchClaim = async () => {
    /* axios.get('/api/management/claims/1/summary').then(response => {
       if (mounted) {
         setClaim(response.data.summary);
       }
     });*/
     let claims = [];
     const refClaim = firebase.firestore().collection('claims').doc(props.id);
     refClaim.get().then(async data=>{
       await claims.push(data.data());        
       claims[0].id = props.id;
       setClaim(claims[0]);
     }).catch(err => console.log(err));
    
    }

      fetchClaim();
    },[]);
  
    if (!claim) {
      return null;
    }
  

console.log(claim);
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
        {t("Mensaje")}
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {claim.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;