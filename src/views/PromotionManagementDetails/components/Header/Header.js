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
  const [promotion, setPromotion] = useState();

  useEffect(() => {

  const fetchPromotion = async () => {
    /* axios.get('/api/management/promotions/1/summary').then(response => {
       if (mounted) {
         setPromotion(response.data.summary);
       }
     });*/
     let promotions = [];
     const refPromotion = firebase.firestore().collection('promos').doc(props.id);
     refPromotion.get().then(async data=>{
       await promotions.push(data.data());        
       promotions[0].id = props.id;
       setPromotion(promotions[0]);
     }).catch(err => console.log(err));
    
    }

      fetchPromotion();
    },[]);
  
    if (!promotion) {
      return null;
    }
  

console.log(promotion);
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
        {t("Promociones")}
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {promotion.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;