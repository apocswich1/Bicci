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
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {

  const fetchRestaurant = async () => {
    /* axios.get('/api/management/restaurants/1/summary').then(response => {
       if (mounted) {
         setRestaurant(response.data.summary);
       }
     });*/
     console.log(props.id);

     let users = [];
     const refUser = firebase.firestore().collection('restaurants').doc(props.id);
     refUser.get().then(async data=>{
       await users.push(data.data());        
       users[0].id = props.id;
       setRestaurant(users[0]);
     }).catch(err => console.log(err));
    
    }

      fetchRestaurant();
    },[]);
  
    if (!restaurant) {
      return null;
    }
  

console.log(restaurant);
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
        {t("Restaurantes")}
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {restaurant.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
