import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import firebase from 'utils/firebase';
import axios from 'utils/axios';
import { RateInfo, Invoices, SendEmails, OtherActions } from './components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Summary = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [rate, setRate, uid, setUid, name, setName, email, setEmail, dni, setDni, phone, setPhone, airport, setAirport, agree, setAgree, isActive, setIsActive ] = useState();

  useEffect(() => {
    let mounted = true;

    const fetchRate = async () => {
      let rates = [];
        fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/listRatesAdmin', {
          method: 'get',
          mode: 'cors',
        }).then(function (respuesta) {
          respuesta.json().then(body => {
            setRate(body[0]);
          });
        }).catch(function (err) {
          // Error :(
        });
      
    };

    fetchRate();

    return () => {
      mounted = false;
    };
  }, []);

  const actualizar = () => {
    let rates = [];
    fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/listRatesAdmin', {
          method: 'get',
          mode: 'cors',
        }).then(function (respuesta) {
          respuesta.json().then(body => {
            setRate(body[0]);
          });
        }).catch(function (err) {
          // Error :(
        });
  }  

  if (!rate) {
    return null;
  }

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid
        item
        lg={8}
        md={8}
        xl={8}
        xs={12}
      >
        <RateInfo rate={rate}  actualizar={actualizar}/>
      </Grid>
      {/*<Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <Invoices rate={rate} />
      </Grid>*/}
    {/*}  <Grid
        item
        lg={4}
        md={4}
        xl={4}
        xs={4}
      >
        <SendEmails rate={rate} />
    </Grid>
      <Grid
        item
        lg={8}
        md={8}
        xl={8}
        xs={12}
      >
        <OtherActions rate={rate} actualizar={actualizar}/>
      </Grid>*/}
    </Grid>
  );
};

Summary.propTypes = {
  className: PropTypes.string
};

export default Summary;
