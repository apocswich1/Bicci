import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import firebase from 'utils/firebase';
import translate from 'translate';
import configModel from 'models/Company';

const useStyles = makeStyles(() => ({
  root: {}
}));

const t = translate;

const Header = props => {

  const { className, ...rest } = props;
  const classes = useStyles();
  const [company, setCompany] = useState();

  useEffect(() => {

  const fetchCompany = async () => {
    /* axios.get('/api/management/companies/1/summary').then(response => {
       if (mounted) {
         setCompany(response.data.summary);
       }
     });*/
     console.log(props.id);

     let users = [];
     const refUser = firebase.firestore().collection('companies').doc(props.id);
     refUser.get().then(async data=>{
       await users.push(data.data());        
       users[0].id = props.id;
       setCompany(users[0]);
     }).catch(err => console.log(err));
    
    }

      fetchCompany();
    },[]);
  
    if (!company) {
      return null;
    }
  

console.log(company);
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
        {`${configModel.header}`}
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {company.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
