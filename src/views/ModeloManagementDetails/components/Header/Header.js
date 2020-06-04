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
  const [modelo, setModelo] = useState();

  useEffect(() => {

  const fetchModelo = async () => {
    /* axios.get('/api/management/modelos/1/summary').then(response => {
       if (mounted) {
         setModelo(response.data.summary);
       }
     });*/
     let users = [];
     const refUser = firebase.firestore().collection('users').doc(props.id);
     refUser.get().then(async data=>{
       await users.push(data.data());        
       users[0].uid = props.id;
       setModelo(users[0]);
     }).catch(err => console.log(err));
    
    }

      fetchModelo();
    },[]);
  
    if (!modelo) {
      return null;
    }
  

console.log(modelo);
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
        {t("users")}
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {modelo.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
