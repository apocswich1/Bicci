import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { lighten, withStyles } from '@material-ui/core/styles';
import { Page, SearchBar } from 'components';
import { Header, Results } from './components';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';
import firebase from 'utils/firebase';
import { useSelector } from 'react-redux';
import AuthGuard from '../../components/AuthGuard/AuthGuard';
import config from 'config';

const service = config.servicio;

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


const KindManagementList = (props) => {
  const { restaurant, find, ...rest } = props;
  const classes = useStyles();

  const [kinds, setKinds] = useState([]);
  const [kindsBkp, setKindsBkp] = useState([]);
  const [restaurantData, setRestaurantData] = useState(restaurant);
  const [search, setSearch] = useState('');
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [vertical, setVertical] = React.useState('top');
  const [horizontal, setHorizontal] = React.useState('center');
  const [typeMessage, setTypeMessage] = React.useState('');


  const session = useSelector(state => state.session);
  const role = session.user.role;
  console.log(session);
  AuthGuard(session);


  // if(session.user.id!==""){
  //   (async ()=>{
  //   let ref = await firebase.firestore().collection('restaurants').where('starredBy','==',session.user.id).get();
  //   let result = await ref.docs.map(item => {return item.data()});
  //   console.log(result[0]);
  //   setRestaurantData(result[0]);
  //   })();
  // }

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
  
  setKinds(data);
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

  setKinds(data);
  setSearch([]);
  return;
}



  useEffect(() => {

    let mounted = true;
    let usuarios = [];
    setLoading(true);
    const fetchKinds = async () => {
      let restaurantID
      //if(session.user.id!==""){
      if (role !== "ADMIN") {
        let ref = await firebase.firestore().collection('restaurants').where('starredBy','==',session.user.id).get();
        let result = await ref.docs.map(item => {return item.data()});
        console.log(result[0]);
        restaurantID = result[0].id;
        setRestaurantData(result[0]);
      }else{
        restaurantID = restaurant.id;
      }
      
      fetch(service+'listCategoriesProductAdmin', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({ 'restaurantID':restaurantID }),
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body);
          setKinds(body.usuarios.filter(item => item.deleted !== true));
          setKindsBkp(body.usuarios.filter(item => item.deleted !== true));
          console.log(body.usuarios.filter(item => item.deleted !== true));
          setLoading(false);
        });
      }).catch(function (err) {
        // Error :(
      });
    };

    fetchKinds();

    return () => {
      mounted = false;
    };
  }, []);


  const actualizar = (msg,bodyres)=>{
    const mensaje = msg;
    const res = bodyres;

    console.log("Actualizando...");
    setLoading(true);
      fetch(service+'listCategoriesProductAdmin', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({ 'restaurantID':restaurant.id }),
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          
          setKinds(body.usuarios.filter(item => item.deleted !== true));
          setKindsBkp(body.usuarios.filter(item => item.deleted !== true));
          console.log(body.usuarios.filter(item => item.deleted !== true));
         
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
    let id = "";
    let finded = [];
    
    if(search === "" || search == undefined){
      actualizar();
      finded = [];
      setKinds(kindsBkp);
      setKindsBkp(kindsBkp);
    
    }else{ 
    
    let words = kindsBkp.filter((item) => {
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

     if(item.hasOwnProperty('id')== true){
      if(item.id!=undefined){
        if(item.id.toUpperCase().includes(search.toUpperCase())==true){
          //finded.push(item);
          id = 1;
        }else{
          id = 0;
        }
       } 
     }

     if(name === 1 || id === 1){
       finded.push(item);
     }

    });
  
    setKinds(finded);
  }
  };

  return (
    <Page
      className={classes.root}
      title="Category Management List"
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
      <Header actualizar={actualizar} setLoading={setLoading} restaurant={restaurantData}/>
      {find && (
        <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
        handleChangeSearch={handleChangeSearch}
      />
      )}
      {loading && (
      <ColorLinearProgress className={classes.margin} />
      )}
      {kinds && (
        <Results
          className={classes.results}
          kinds={kinds}
          actualizar={actualizar}
          sortAsc={sortAsc}
          sortDesc={sortDesc}
          restaurant={restaurantData}
        />
      )}
    </Page>
  );
};

export default KindManagementList;
