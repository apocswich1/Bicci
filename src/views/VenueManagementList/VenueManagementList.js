import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { lighten, withStyles } from '@material-ui/core/styles';
import { Page, SearchBar } from 'components';
import { Header, Results } from './components';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  },
  margin: {
    margin: theme.spacing(2),
    height: '5px'
  },
}));


const VenueManagementList = props => {
  const classes = useStyles();
  const { className, id, ...rest} = props;
  const [venues, setVenues] = useState([]);
  const [venuesBkp, setVenuesBkp] = useState([]);
  const [search, setSearch] = useState('');
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [vertical, setVertical] = React.useState('top');
  const [horizontal, setHorizontal] = React.useState('center');
  const [typeMessage, setTypeMessage] = React.useState('');

  const ColorLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: '#b2dfdb',
    },
    barColorPrimary: {
      backgroundColor: '#00695c',
    },
  })(LinearProgress);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleChangeSearch = event => {
    setSearch(event.target.value);
  }
  
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
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
  
  setVenues(data);
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

  setVenues(data);
  setSearch([]);
  return;
}

  useEffect(() => {
    let mounted = true;
    let usuarios = [];
    setLoading(true);
    const fetchVenues = () => {
      fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/listFranchisesVenuesAdminByFranchiseId', {
          method: 'post',
          mode: 'cors',
          body: JSON.stringify({ 'id':props.id }),
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          setVenues(body.data);
          setVenuesBkp(body.data);
          console.log(body.data);
          setLoading(false);
        });
      }).catch(function (err) {
        // Error :(
      });
    };

    fetchVenues();

    return () => {
      mounted = false;
    };
  }, []);


  const actualizar = (msg,bodyres)=>{
    const mensaje = msg;
    const res = bodyres;

    console.log("Actualizando...");
    setLoading(true);
    fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/listFranchisesVenuesAdminByFranchiseId', {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify({ 'id':props.id }),
  }).then(function (respuesta) {
    respuesta.json().then(body => {
          setVenues(body.data);
          setVenuesBkp(body.data);
          console.log(body.data);
         
        if(bodyres){
          if(res.code === 200){
            setMessage(mensaje);
            setTypeMessage('success');
          }else{
            setMessage(res.message);
            setTypeMessage('warning');
          }
          
          setLoading(false);
          setOpen(true);
        }
        setLoading(false);

        });
      }).catch(function (err) {
        // Error :(
      });
      console.log("Actualizado");
  }

  const handleFilter = () => { };
  
  const handleSearch = () => { 
    let name = "";
    let email = "";
    let phone = "";
    let finded = [];
    
    if(search === "" || search == undefined){
      actualizar();
      finded = [];
      setVenues(venuesBkp);
      setVenuesBkp(venuesBkp);
    
    }else{ 
    
    let words = venuesBkp.filter((item) => {
     if(item.hasOwnProperty('name')== true){
      if(item.name!=undefined){
        if(item.name.toUpperCase().includes(search.toUpperCase())==true){
          //finded.push(item);
          name = 1;
        }else{
          name = 0;
        }
       } 
     }

     if(item.hasOwnProperty('email')== true){
      if(item.email!=undefined){
        if(item.email.toUpperCase().includes(search.toUpperCase())==true){
          //finded.push(item);
          email = 1;
        }else{
          email = 0;
        }
       } 
     }

     if(item.hasOwnProperty('phone')== true){
      if(item.phone!=undefined){
        if(item.phone.toUpperCase().includes(search.toUpperCase())==true){
          //finded.push(item);
          phone = 1;
        }else{
          phone = 0;
        }
       } 
     }

     if(name === 1 || email === 1 || phone === 1){
       finded.push(item);
     }

    });
  
    setVenues(finded);
  }
  };

  return (
    <Page
      className={classes.root}
      title="Venue Management List"
    >
      <Snackbar
        autoHideDuration={6000}
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        open={open}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={typeMessage}>
          {message}
        </Alert>
        </Snackbar>
      <Header actualizar={actualizar} setLoading={setLoading} idfranchise={id}/>
      <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
        handleChangeSearch={handleChangeSearch}
      />
      {loading && (
      <ColorLinearProgress className={classes.margin} />
      )}
      {venues && (
        <Results
          className={classes.results}
          venues={venues}
          actualizar={actualizar}
          sortAsc={sortAsc}
          sortDesc={sortDesc}
          idFranchise={props.id}
        />
      )}
    </Page>
  );
};

export default VenueManagementList;
