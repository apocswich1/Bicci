import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import firebase from 'utils/firebase';
import axios from 'utils/axios';
import { VehicleInfo, Invoices, SendEmails, OtherActions } from './components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Summary = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  //const [vehicle, setVehicle, vehicled, setVehicled, uid, setUid, name, setName, email, setEmail, dni, setDni, phone, setPhone, airport, setAirport, agree, setAgree, isActive, setIsActive ] = useState();
  const [vehicle, setVehicle ] = useState();
  const [owners, setOwners ] = useState();
  const [drivers, setDrivers ] = useState();
  const [categories, setCategories ] = useState();
  useEffect(() => {
    let mounted = true;
    
    const fetchVehicle = async () => {
      let vehicles = [];
      const refVehicle = firebase.firestore().collection('vehicles').doc(props.id);
      refVehicle.get().then(async data=>{
        await vehicles.push(data.data());        
        vehicles[0].id = props.id;
        setVehicle(vehicles[0]);
        
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
    
    const fetchDrivers = async () => {
      let driversNames = [];
      const refDriver = firebase.firestore().collection('drivers');
      refDriver.get().then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
          driversNames.push(doc.data());
        });
        setDrivers(driversNames);
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
    };

    const fetchOwners = async () => {
      let ownersNames = [];
      const refOwner = firebase.firestore().collection('owners');
      refOwner.get().then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
          ownersNames.push(doc.data());
        });
        setOwners(ownersNames);
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
    };

    const fetchCategories = async () => {
      let categoriesNames = [];
      const refCategories = firebase.firestore().collection('vehiclesCategories');
      refCategories.get().then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
          categoriesNames.push(doc.data());
        });
        setCategories(categoriesNames);
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
    };
    
    fetchVehicle();
    fetchOwners();
    fetchDrivers();
    fetchCategories();
    

    return () => {
      mounted = false;
    };
  }, []);

  const actualizar = async () => {
    let vehicles = [];
    const refVehicle = firebase.firestore().collection('vehicles').doc(props.id);
    refVehicle.get().then(async data=>{
      await vehicles.push(data.data());        
      vehicles[0].id = props.id;
      setVehicle(vehicles[0]);
    }).catch(err => console.log(err));
  }  

  if (!vehicle) {
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
        <VehicleInfo vehicle={vehicle} ownersNames={owners} driversNames={drivers} categoriesNames={categories} actualizar={actualizar}/>
      </Grid>
      {/*<Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <Invoices vehicle={vehicle} />
      </Grid>*/}
    {/*}  <Grid
        item
        lg={4}
        md={4}
        xl={4}
        xs={4}
      >
        <SendEmails vehicle={vehicle} />
    </Grid>*/}
      <Grid
        item
        lg={8}
        md={8}
        xl={8}
        xs={12}
      >
        <OtherActions vehicle={vehicle} actualizar={actualizar}/>
      </Grid>
    </Grid>
  );
};

Summary.propTypes = {
  className: PropTypes.string
};

export default Summary;
