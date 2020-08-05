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
  const [employee, setEmployee] = useState();

  useEffect(() => {

  const fetchEmployee = async () => {
    /* axios.get('/api/management/employees/1/summary').then(response => {
       if (mounted) {
         setEmployee(response.data.summary);
       }
     });*/
     let users = [];
     const refUser = firebase.firestore().collection('employees').doc(props.id);
     refUser.get().then(async data=>{
       await users.push(data.data());        
       users[0].uid = props.id;
       setEmployee(users[0]);
     }).catch(err => console.log(err));
    
    }

      fetchEmployee();
    },[]);
  
    if (!employee) {
      return null;
    }
  

console.log(employee);
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
        {t("Employee")}
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {employee.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
