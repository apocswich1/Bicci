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
  const [center, setCenter] = useState();

  useEffect(() => {

  const fetchCenter = async () => {
    /* axios.get('/api/management/centers/1/summary').then(response => {
       if (mounted) {
         setCenter(response.data.summary);
       }
     });*/
     let centers = [];
     const refCenter = firebase.firestore().collection('centers').doc(props.id);
     refCenter.get().then(async data=>{
       await centers.push(data.data());        
       centers[0].id = props.id;
       setCenter(centers[0]);
     }).catch(err => console.log(err));
    
    }

      fetchCenter();
    },[]);
  
    if (!center) {
      return null;
    }
  

console.log(center);
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
        {t("centers")}
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {center.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
