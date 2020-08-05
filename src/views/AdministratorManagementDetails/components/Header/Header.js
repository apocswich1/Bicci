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
  const [administrator, setAdministrator] = useState();

  useEffect(() => {

  const fetchAdministrator = async () => {
    /* axios.get('/api/management/administrators/1/summary').then(response => {
       if (mounted) {
         setAdministrator(response.data.summary);
       }
     });*/
     let users = [];
     const refUser = firebase.firestore().collection('administrators').doc(props.id);
     refUser.get().then(async data=>{
       await users.push(data.data());        
       users[0].id = props.id;
       setAdministrator(users[0]);
     }).catch(err => console.log(err));
    
    }

      fetchAdministrator();
    },[]);
  
    if (!administrator) {
      return null;
    }
  

console.log(administrator);
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
        {t("Administradores")}
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {administrator.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
