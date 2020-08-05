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
  const [ingredient, setIngredient] = useState();

  useEffect(() => {

  const fetchIngredient = async () => {
    /* axios.get('/api/management/ingredients/1/summary').then(response => {
       if (mounted) {
         setIngredient(response.data.summary);
       }
     });*/
     let ingredients = [];
     const refIngredient = firebase.firestore().collection('ingredients').doc(props.id);
     refIngredient.get().then(async data=>{
       await ingredients.push(data.data());        
       ingredients[0].id = props.id;
       setIngredient(ingredients[0]);
     }).catch(err => console.log(err));
    
    }

      fetchIngredient();
    },[]);
  
    if (!ingredient) {
      return null;
    }
  

console.log(ingredient);
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
        {t("ingredients")}
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {ingredient.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
