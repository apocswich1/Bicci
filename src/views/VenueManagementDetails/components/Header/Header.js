import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import firebase from 'utils/firebase';
import translate from 'translate';

const t = translate;
const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {

  const { className, id, idfranchise, ...rest } = props;
  const classes = useStyles();
  const [venue, setVenue] = useState();

  useEffect(() => {

  const fetchVenue = async () => {
    /* axios.get('/api/management/venues/1/summary').then(response => {
       if (mounted) {
         setVenue(response.data.summary);
       }
     });*/
     let venues = [];
     //const refUser = firebase.firestore().collection('venues').doc(props.id);
     const refUser = firebase.firestore().collection('franchises').doc(idfranchise).collection('venues').doc(id);
     refUser.get().then(async data=>{
       await venues.push(data.data());        
       venues[0].id = props.id;
       setVenue(venues[0]);
     }).catch(err => console.log(err));
    
    }

      fetchVenue();
    },[]);
  
    if (!venue) {
      return null;
    }
  

console.log(venue);
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
        {t("venues")}
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {venue.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
