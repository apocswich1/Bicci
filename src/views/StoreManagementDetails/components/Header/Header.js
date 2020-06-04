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
  const [store, setStore] = useState();

  useEffect(() => {

  const fetchStore = async () => {
    /* axios.get('/api/management/stores/1/summary').then(response => {
       if (mounted) {
         setStore(response.data.summary);
       }
     });*/
     let stores = [];
     const refStore = firebase.firestore().collection('stores').doc(props.id);
     refStore.get().then(async data=>{
       await stores.push(data.data());        
       stores[0].id = props.id;
       setStore(stores[0]);
     }).catch(err => console.log(err));
    
    }

      fetchStore();
    },[]);
  
    if (!store) {
      return null;
    }
  

console.log(store);
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
        {t("stores")}
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {store.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
