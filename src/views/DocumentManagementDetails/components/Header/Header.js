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
  const [document, setDocument] = useState();

  useEffect(() => {

  const fetchDocument = async () => {
    /* axios.get('/api/management/documents/1/summary').then(response => {
       if (mounted) {
         setDocument(response.data.summary);
       }
     });*/
     let documents = [];
     const refDocument = firebase.firestore().collection('documents').doc(props.id);
     refDocument.get().then(async data=>{
       await documents.push(data.data());        
       documents[0].id = props.id;
       setDocument(documents[0]);
     }).catch(err => console.log(err));
    
    }

      fetchDocument();
    },[]);
  
    if (!document) {
      return null;
    }
  

console.log(document);
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
        {t("documents")}
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {document.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
