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

const OwnerManagementList = () => {
  const classes = useStyles();

  const [owners, setOwners] = useState([]);
  const [ownersBkp, setOwnersBkp] = useState([]);
  const [search, setSearch] = useState([]);

  const handleChangeSearch = event => {
    setSearch(event.target.value);
  }
  
  

  useEffect(() => {
    let mounted = true;
    let usuarios = [];
    const fetchOwners = () => {
      fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/listOwnersAdmin', {
        method: 'get',
        mode: 'cors',
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          setOwners(body);
          setOwnersBkp(body);
          console.log(body);
        });
      }).catch(function (err) {
        // Error :(
      });
    };

    fetchOwners();

    return () => {
      mounted = false;
    };
  }, []);

  const handleFilter = () => { };

  const actualizar = async () => {
    let mounted = true;
    let usuarios = [];
    const fetchOwners = () => {
      fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/listOwnersAdmin', {
        method: 'get',
        mode: 'cors',
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          setOwners(body);
          setOwnersBkp(body);
          console.log(body);
        });
      }).catch(function (err) {
        // Error :(
      });
  }  

  fetchOwners();

}

  const handleSearch = () => { 
    if(search == ""){
      setOwners(ownersBkp);
      return;
    } 
    //console.log(search);
    let finded = [];
    let words = ownersBkp.filter((item) => {
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

    setOwners(finded);
  };

  return (
    <Page
      className={classes.root}
      title="User Management List"
    >
      <Header actualizar={actualizar}/>
      <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
        handleChangeSearch={handleChangeSearch}
      />
      {owners && (
        <Results
          className={classes.results}
          owners={owners}
          actualizar={actualizar}
        />
      )}
    </Page>
  );
};

export default OwnerManagementList;
