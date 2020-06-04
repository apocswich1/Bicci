import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import axios from 'utils/axios';
import { Page, SearchBar } from 'components';
import { Header, Results } from './components';
import firebase from 'utils/firebase';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const DriverManagementList = () => {
  const classes = useStyles();

  const [owners, setOwners ] = useState();
  const [drivers, setDrivers ] = useState();
  const [categories, setCategories ] = useState();
  const [vehicles, setVehicles] = useState([]);
  const [vehiclesBkp, setVehiclesBkp] = useState([]);
  const [search, setSearch] = useState([]);

  const handleChangeSearch = event => {
    setSearch(event.target.value);
  }
  
  

  useEffect(() => {
    let mounted = true;
    let usuarios = [];
    const fetchVehicles = () => {
      fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/listVehiclesAdmin', {
        method: 'get',
        mode: 'cors',
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          setVehicles(body);
          setVehiclesBkp(body);
          console.log(body);
        });
      }).catch(function (err) {
        // Error :(
      });
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

    fetchVehicles();
    fetchCategories();
    fetchOwners();
    fetchDrivers();

    return () => {
      mounted = false;
    };
  }, []);

  const handleFilter = () => { };

  const actualizar = async () => {
    let mounted = true;
    let usuarios = [];
    const fetchVehicles = () => {
      fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/listVehiclesAdmin', {
        method: 'get',
        mode: 'cors',
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          setVehicles(body);
          setVehiclesBkp(body);
          console.log(body);
        });
      }).catch(function (err) {
        // Error :(
      });
  }  

  fetchVehicles();

}

  const handleSearch = () => { 
    if(search == ""){
      setVehicles(vehiclesBkp);
      return;
    } 
    //console.log(search);
    let finded = [];
    let words = vehiclesBkp.filter((item) => {
     //if(item.displayName === search || item.email === search){ return item }
     if(item.hasOwnProperty('displayName')== true){
      if(item.displayName!=undefined){
        if(item.displayName.includes(search)==true){
          finded.push(item);
        }
       } 
     }

     if(item.hasOwnProperty('name')== true){
      if(item.name!=undefined){
        if(item.name.includes(search)==true){
          finded.push(item);
        }
       } 
     }


  /*   if(item.displayName!=undefined){
      //console.log(item.displayName.includes(search));
      if(item.displayName.includes(search)==true || item.name.includes(search)==true){
        finded.push(item);
      }
       
     }*/
     
    });

    setVehicles(finded);
  };

  return (
    <Page
      className={classes.root}
      title="User Management List"
    >
      <Header actualizar={actualizar} categoriesNames={categories} ownersNames={owners}  driversNames={drivers}/>
      <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
        handleChangeSearch={handleChangeSearch}
      />
      {vehicles && (
        <Results
          className={classes.results}
          vehicles={vehicles}
          actualizar={actualizar}
        />
      )}
    </Page>
  );
};

export default DriverManagementList;
