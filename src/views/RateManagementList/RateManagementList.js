import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import axios from 'utils/axios';
import { Page, SearchBar } from 'components';
import { Header, Results } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const RateManagementList = () => {
  const classes = useStyles();

  const [rates, setRates] = useState([]);
  const [ratesBkp, setRatesBkp] = useState([]);
  const [search, setSearch] = useState([]);

  const handleChangeSearch = event => {
    setSearch(event.target.value);
  }
  
  

  useEffect(() => {
    let mounted = true;
    let usuarios = [];
    const fetchRates = () => {
      fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/listRatesAdmin', {
        method: 'get',
        mode: 'cors',
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          setRates(body);
          setRatesBkp(body);
          console.log(body);
        });
      }).catch(function (err) {
        // Error :(
      });
    };

    fetchRates();

    return () => {
      mounted = false;
    };
  }, []);

  const handleFilter = () => { };

  const actualizar = async () => {
    let mounted = true;
    let usuarios = [];
    const fetchRates = () => {
      fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/listRatesAdmin', {
        method: 'get',
        mode: 'cors',
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          setRates(body);
          setRatesBkp(body);
          console.log(body);
        });
      }).catch(function (err) {
        // Error :(
      });
  }  

  fetchRates();

}

  const handleSearch = () => { 
    if(search == ""){
      setRates(ratesBkp);
      return;
    } 
    //console.log(search);
    let finded = [];
    let words = ratesBkp.filter((item) => {
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

    setRates(finded);
  };

  return (
    <Page
      className={classes.root}
      title="Rate Management List"
    >
      <Header actualizar={actualizar}/>
      <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
        handleChangeSearch={handleChangeSearch}
      />
      {rates && (
        <Results
          className={classes.results}
          rates={rates}
          actualizar={actualizar}
        />
      )}
    </Page>
  );
};

export default RateManagementList;
