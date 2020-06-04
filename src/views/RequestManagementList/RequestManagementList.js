import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import axios from 'utils/axios';
import { Page, SearchBar } from 'components';
import { Header, Results } from './components';
import { useSelector } from 'react-redux';
import AuthGuard from '../../../src/components/AuthGuard/AuthGuard';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const RequestManagementList = () => {
  const classes = useStyles();

  const [request, setRequests] = useState([]);
  const [requestBkp, setRequestsBkp] = useState([]);
  const [search, setSearch] = useState([]);

  const handleChangeSearch = event => {
    setSearch(event.target.value);
  }
  
  const sortAsc = (array, label)=> {
    const data = array.sort(function (a, b) {
      
      if (b[label] === "") {
        return 0;
      }
      if (b[label] > a[label]) {
          return -1;
      }
      if (a[label] > b[label]) {
          return 1;
      }
      return 0;
  });

  console.log(data);
  
  setRequests(data);
  setSearch([]);
  return;
}

const sortDesc = (array,label)=> {
  const data = array.sort(function (a, b) {
    if (a[label] === "") {
      return 0;
    }
    if (a[label] > b[label]) {
        return -1;
    }
    if (b[label] > a[label]) {
        return 1;
    }
    return 0;
});

console.log(data);

  setRequests(data);
  setSearch([]);
  return;
}

  useEffect(() => {
    let mounted = true;
    let usuarios = [];
    const fetchRequests = () => {
      fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/listRequestsAdmin', {
        method: 'get',
        mode: 'cors',
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          
          setRequests(body);
          setRequestsBkp(body);
        //  sortDesc(body,'date');
          
          console.log(body);
        });
      }).catch(function (err) {
        // Error :(
      });
    };

    fetchRequests();

    return () => {
      mounted = false;
    };
  }, []);

  const handleFilter = () => { };

  const actualizar = async () => {
    let mounted = true;
    let usuarios = [];
    const fetchRequests = () => {
      fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/listRequestsAdmin', {
        method: 'get',
        mode: 'cors',
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          
          setRequests(body);
          setRequestsBkp(body);
          sortDesc(body,'date');
          
          console.log(body);
        });
      }).catch(function (err) {
        // Error :(
      });
  }  

  fetchRequests();

}

  const handleSearch = () => { 
    if(search == ""){
      setRequests(requestBkp);
      return;
    } 
    //console.log(search);
    let finded = [];
    let words = requestBkp.filter((item) => {
     //if(item.displayName === search || item.email === search){ return item }
     if(item.hasOwnProperty('driverName')== true){
      if(item.driverName!=undefined){
        if(item.driverName.includes(search)==true){
          finded.push(item);
        }
       } 
     }

     if(item.hasOwnProperty('passengerName')== true){
      if(item.passengerName!=undefined){
        if(item.passengerName.includes(search)==true){
          finded.push(item);
        }
       } 
     }

     if(item.hasOwnProperty('driverCarModel')== true){
      if(item.driverCarModel!=undefined){
        if(item.driverCarModel.includes(search)==true){
          finded.push(item);
        }
       } 
     }

     if(item.hasOwnProperty('driverVehiclePPN')== true){
      if(item.driverVehiclePPN!=undefined){
        if(item.driverVehiclePPN.includes(search)==true){
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

    setRequests(finded);
    //sortDesc(finded,'date');

  };

  const session = useSelector(state => state.session);
  console.log(session);
  AuthGuard(session);

  return (
    <Page
      className={classes.root}
      title="Request Management List"
    >
      <Header actualizar={actualizar}/>
      <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
        handleChangeSearch={handleChangeSearch}
      />
      {request && (
        <Results
          className={classes.results}
          requests={request}
          actualizar={actualizar}
          sortAsc={sortAsc}
          sortDesc={sortDesc}
        />
      )}
    </Page>
  );
};

export default RequestManagementList;
