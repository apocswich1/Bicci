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
  const [category, setCategory] = useState();

  useEffect(() => {

  const fetchCategory = async () => {
    /* axios.get('/api/management/categorys/1/summary').then(response => {
       if (mounted) {
         setCategory(response.data.summary);
       }
     });*/
     let categorys = [];
     const refCategory = firebase.firestore().collection('categories').doc(props.id);
     refCategory.get().then(async data=>{
       await categorys.push(data.data());        
       categorys[0].id = props.id;
       setCategory(categorys[0]);
     }).catch(err => console.log(err));
    
    }

      fetchCategory();
    },[]);
  
    if (!category) {
      return null;
    }
  

console.log(category);
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
        {t("categories")}
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {category.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
