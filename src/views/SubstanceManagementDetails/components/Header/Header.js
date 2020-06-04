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
  const [substance, setSubstance] = useState();

  useEffect(() => {

  const fetchSubstance = async () => {
    /* axios.get('/api/management/substances/1/summary').then(response => {
       if (mounted) {
         setSubstance(response.data.summary);
       }
     });*/
     let substances = [];
     const refSubstance = firebase.firestore().collection('substances').doc(props.id);
     refSubstance.get().then(async data=>{
       await substances.push(data.data());        
       substances[0].uid = props.id;
       setSubstance(substances[0]);
     }).catch(err => console.log(err));
    
    }

      fetchSubstance();
    },[]);
  
    if (!substance) {
      return null;
    }
  

console.log(substance);
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
        {t("substances")}
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {substance.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
