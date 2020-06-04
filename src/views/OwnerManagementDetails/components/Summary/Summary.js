import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import firebase from 'utils/firebase';
import axios from 'utils/axios';
import { OwnerInfo, Invoices, SendEmails, OtherActions } from './components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Summary = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [owner, setOwner, uid, setUid, name, setName, email, setEmail, dni, setDni, phone, setPhone, airport, setAirport, agree, setAgree, isActive, setIsActive ] = useState();

  useEffect(() => {
    let mounted = true;

    const fetchOwner = async () => {
      let owners = [];
      const refOwner = firebase.firestore().collection('owners').doc(props.id);
      refOwner.get().then(async data=>{
        await owners.push(data.data());        
        owners[0].id = props.id;
        setOwner(owners[0]);
      }).catch(err => console.log(err));

      /*fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/listUsersAdminById', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({ 'uid':'3aSoowU693eXtCIrFjjzifkz4xu2' }),
        headers: {
          "Access-Control-Allow-Credentials":"true",
          "Access-Control-Allow-Methods":"POST",
          "Access-Control-Allow-Origin" : "*",
          "Content-type": "application/json",
        },
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body.usuarios);
        });
      }).catch(function (err) {
        // Error :(
      });*/  
    };

    fetchOwner();

    return () => {
      mounted = false;
    };
  }, []);

  const actualizar = async () => {
    let owners = [];
    const refOwner = firebase.firestore().collection('owners').doc(props.id);
    refOwner.get().then(async data=>{
      await owners.push(data.data());        
      owners[0].id = props.id;
      setOwner(owners[0]);
    }).catch(err => console.log(err));
  }  

  if (!owner) {
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
        <OwnerInfo owner={owner} actualizar={actualizar}/>
      </Grid>
      {/*<Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <Invoices owner={owner} />
      </Grid>*/}
    {/*}  <Grid
        item
        lg={4}
        md={4}
        xl={4}
        xs={4}
      >
        <SendEmails owner={owner} />
    </Grid>*/}
      <Grid
        item
        lg={8}
        md={8}
        xl={8}
        xs={12}
      >
        <OtherActions owner={owner} actualizar={actualizar}/>
      </Grid>
    </Grid>
  );
};

Summary.propTypes = {
  className: PropTypes.string
};

export default Summary;
