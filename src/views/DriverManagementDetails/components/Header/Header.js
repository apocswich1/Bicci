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
  const [driver, setDriver] = useState();

  useEffect(() => {

  const fetchDriver = async () => {
    /* axios.get('/api/management/drivers/1/summary').then(response => {
       if (mounted) {
         setDriver(response.data.summary);
       }
     });*/
     let users = [];
     const refUser = firebase.firestore().collection('drivers').doc(props.id);
     refUser.get().then(async data=>{
       await users.push(data.data());        
       users[0].id = props.id;
       setDriver(users[0]);
     }).catch(err => console.log(err));
    
    }

      fetchDriver();
    },[]);
  
    if (!driver) {
      return null;
    }
  

console.log(driver);
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
        {t("Conductores")}
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {driver.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
