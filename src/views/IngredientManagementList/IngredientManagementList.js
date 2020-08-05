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


const IngredientManagementList = (props) => {
  const { restaurant, find, ...rest } = props;
  const classes = useStyles();

  const [ingredients, setIngredients] = useState([]);
  const [ingredientsBkp, setIngredientsBkp] = useState([]);
  const [search, setSearch] = useState('');
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [vertical, setVertical] = React.useState('top');
  const [horizontal, setHorizontal] = React.useState('center');
  const [typeMessage, setTypeMessage] = React.useState('');


  const session = useSelector(state => state.session);
  AuthGuard(session);

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

  const sortAsc = (array, label) => {
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

    setIngredients(data);
    setSearch([]);
    return;
  }

  const sortDesc = (array, label) => {
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

    setIngredients(data);
    setSearch([]);
    return;
  }



  useEffect(() => {

    let mounted = true;
    let usuarios = [];
    setLoading(true);
    const fetchIngredients = () => {
      fetch(service + 'listIngredientsAdmin', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({ 'restaurantID': restaurant.id }),
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body);
          setIngredients(body.usuarios.filter(item => item.deleted !== true));
          setIngredientsBkp(body.usuarios.filter(item => item.deleted !== true));
          console.log(body.usuarios.filter(item => item.deleted !== true));
          setLoading(false);
        });
      }).catch(function (err) {
        // Error :(
      });
    };

    const fetchAllIngredients = async () => {
      try {
        let ref = await firebase.firestore().collection('ingredients').get();
        let result = await ref.docs.map(item => { return item.data() });
        setIngredients(result.filter(item => item.deleted !== true));
        setIngredientsBkp(result.filter(item => item.deleted !== true));
        setLoading(false); 
      } catch (error) {
        console.log(error);
      }
    }

    //session.user.role=="ADMIN" ? fetchAllIngredients() : 
    fetchIngredients();

    return () => {
      mounted = false;
    };
  }, []);


  const actualizarRes = (msg, bodyres) => {
    const mensaje = msg;
    const res = bodyres;
    setLoading(true);
    
    fetch(service + 'listIngredientsAdmin', {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify({ 'restaurantID': restaurant.id }),
    }).then(function (respuesta) {
      respuesta.json().then(body => {
        setIngredients(body.usuarios.filter(item => item.deleted !== true));
        setIngredientsBkp(body.usuarios.filter(item => item.deleted !== true));

        if (bodyres) {
          if (res.code === 200) {
            setMessage(mensaje);
            setTypeMessage('success');
          } else {
            setMessage(res.message);
            setTypeMessage('warning');
          }

          setLoading(false);
          setOpen(true);
        }
        setLoading(false);

      });
    }).catch(function (err) {
      
    });
  }

  const actualizarAll = async (msg, bodyres) => {
    const mensaje = msg;
    const res = bodyres;
    setLoading(true);
    try {
      let ref = await firebase.firestore().collection('ingredients').get();
      let result = await ref.docs.map(item => { return item.data() });
      setIngredients(result.filter(item => item.deleted !== true));
      setIngredientsBkp(result.filter(item => item.deleted !== true));
      if (bodyres) {
        if (res.code === 200) {
          setMessage(mensaje);
          setTypeMessage('success');
        } else {
          setMessage(res.message);
          setTypeMessage('warning');
        }

        setLoading(false);
        setOpen(true);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const actualizar = (msg, bodyres) => {
    //session.user.role=="ADMIN" ? actualizarAll(msg,bodyres) : 
    actualizarRes(msg,bodyres);
  }

  const handleFilter = () => { };

  const handleSearch = () => {
    let name = "";
    let id = "";
    let finded = [];

    if (search === "" || search == undefined) {
      actualizar();
      finded = [];
      setIngredients(ingredientsBkp);
      setIngredientsBkp(ingredientsBkp);

    } else {

      let words = ingredientsBkp.filter((item) => {
        if (item.hasOwnProperty('name') == true) {
          if (item.name != undefined) {
            if (item.name.toUpperCase().includes(search.toUpperCase()) == true) {
              //finded.push(item);
              name = 1;
            } else {
              name = 0;
            }
          }
        }

        if (item.hasOwnProperty('id') == true) {
          if (item.id != undefined) {
            if (item.id.toUpperCase().includes(search.toUpperCase()) == true) {
              //finded.push(item);
              id = 1;
            } else {
              id = 0;
            }
          }
        }

        if (name === 1 || id === 1) {
          finded.push(item);
        }

      });

      setIngredients(finded);
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
      <Header actualizar={actualizar} setLoading={setLoading} restaurant={restaurant} />
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
      {ingredients && (
        <Results
          className={classes.results}
          ingredients={ingredients}
          actualizar={actualizar}
          sortAsc={sortAsc}
          sortDesc={sortDesc}
          restaurant={restaurant}
        />
      )}
    </Page>
  );
};

export default IngredientManagementList;
