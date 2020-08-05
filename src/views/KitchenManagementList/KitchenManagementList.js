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


const KitchenManagementList = (props) => {
  const classes = useStyles();
  const { id } = props;
  const [kitchens, setKitchens] = useState([]);
  const [kitchensBkp, setKitchensBkp] = useState([]);
  const [search, setSearch] = useState('');
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [vertical, setVertical] = React.useState('top');
  const [horizontal, setHorizontal] = React.useState('center');
  const [typeMessage, setTypeMessage] = React.useState('');
  const [cboCategories, setCboCategories] = React.useState([]);
  const [cboRestaurants, setCboRestaurants] = React.useState([]);
  const [cboIngredients, setCboIngredients] = React.useState([]);


  const session = useSelector(state => state.session);
  console.log(session);
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

    setKitchens(data);
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

    setKitchens(data);
    setSearch([]);
    return;
  }



  useEffect(() => {

    let mounted = true;
    let usuarios = [];
    setLoading(true);

    const fetchCboCategories = async () => {
      let categories = [];
      let cboCategoriesRef = "";
      if (id) {
        cboCategoriesRef = firebase.firestore().collection("restaurants")
          .doc(id).collection('foodCategories').orderBy('name');
          cboCategoriesRef.get().then((snapshot) => {
            snapshot.forEach(function (doc) {
              categories.push(doc.data());
            });
            console.log(categories);
            setCboCategories(categories);
    
          }).catch((error) => {
            console.log("Error getting documents");
          });
      } else {
        cboCategoriesRef = firebase.firestore().collection("restaurants")
          .orderBy('name');
          // cboCategoriesRef.get().then((snapshot) => {
          //   snapshot.forEach(function (doc) {
          //     categories.push(doc.data());
          //   });
            console.log(categories);
            setCboCategories(categories);
    
          // }).catch((error) => {
          //   console.log("Error getting documents");
          // });
      }

    }

    const fetchCboRestaurants = async () => {
      let restaurants = [];
      let cboRestaurantsRef = "";
      if (id) {
        cboRestaurantsRef = firebase.firestore().collection("restaurants")
          .doc(id);

          cboRestaurantsRef.get().then((snapshot) => {
            //snapshot.forEach(function (doc) {
              restaurants.push(snapshot.data());
            //});
            console.log(restaurants);
            setCboRestaurants(restaurants);
    
          }).catch((error) => {
            console.log("Error getting documents");
          });
      } else {
        cboRestaurantsRef = firebase.firestore().collection("restaurants")
          .orderBy('name');

          cboRestaurantsRef.get().then((snapshot) => {
            snapshot.forEach(function (doc) {
              restaurants.push(doc.data());
            });
            console.log(restaurants);
            setCboRestaurants(restaurants);
    
          }).catch((error) => {
            console.log("Error getting documents");
          });
      }

    }

    const fetchCboIngredients = async () => {
      let ingredients = [];
      const cboIngredientsRef = firebase.firestore().collection("ingredients").orderBy('name');

      cboIngredientsRef.get().then((snapshot) => {
        snapshot.forEach(function (doc) {
          ingredients.push(doc.data());
        });

        setCboIngredients(ingredients);

      }).catch((error) => {
        console.log("Error getting documents");
      });
    }

    fetchCboRestaurants();
    fetchCboIngredients();
    fetchCboCategories();

    const fetchKitchens = () => {
      fetch(service + 'listKitchensAdmin', {
        method: 'get',
        mode: 'cors',
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          if (id) {
            setKitchens(body.usuarios.filter(item => item.deleted !== true && item.restaurantID == id));
            setKitchensBkp(body.usuarios.filter(item => item.deleted !== true && item.restaurantID == id));
            console.log(body.usuarios.filter(item => item.deleted !== true && item.restaurantID == id));
          } else {
            setKitchens(body.usuarios.filter(item => item.deleted !== true));
            setKitchensBkp(body.usuarios.filter(item => item.deleted !== true));
            console.log(body.usuarios.filter(item => item.deleted !== true));
          }

          setLoading(false);
        });
      }).catch(function (err) {
        // Error :(
      });
    };

    fetchKitchens();

    return () => {
      mounted = false;
    };
  }, []);


  const actualizar = (msg, bodyres) => {
    const mensaje = msg;
    const res = bodyres;

    console.log("Actualizando...");
    setLoading(true);
    fetch(service + 'listKitchensAdmin', {
      method: 'get',
      mode: 'cors',
    }).then(function (respuesta) {
      respuesta.json().then(body => {
        if (id) {
          setKitchens(body.usuarios.filter(item => item.deleted !== true && item.restaurantID == id));
          setKitchensBkp(body.usuarios.filter(item => item.deleted !== true && item.restaurantID == id));
          console.log(body.usuarios.filter(item => item.deleted !== true && item.restaurantID == id));
        } else {
          setKitchens(body.usuarios.filter(item => item.deleted !== true));
          setKitchensBkp(body.usuarios.filter(item => item.deleted !== true));
          console.log(body.usuarios.filter(item => item.deleted !== true));
        }

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

    if (search === "" || search == undefined) {
      actualizar();
      finded = [];
      setKitchens(kitchensBkp);
      setKitchensBkp(kitchensBkp);

    } else {

      let words = kitchensBkp.filter((item) => {
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

        if (item.hasOwnProperty('email') == true) {
          if (item.email != undefined) {
            if (item.email.toUpperCase().includes(search.toUpperCase()) == true) {
              //finded.push(item);
              email = 1;
            } else {
              email = 0;
            }
          }
        }

        if (item.hasOwnProperty('phone') == true) {
          if (item.phone != undefined) {
            if (item.phone.toUpperCase().includes(search.toUpperCase()) == true) {
              //finded.push(item);
              phone = 1;
            } else {
              phone = 0;
            }
          }
        }

        if (name === 1 || email === 1 || phone === 1) {
          finded.push(item);
        }

      });

      setKitchens(finded);
    }
  };

  return (
    <Page
      className={classes.root}
      title="Kitchen Management List"
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
      <Header
        actualizar={actualizar}
        setLoading={setLoading}
        cboCategories={cboCategories}
        cboRestaurants={cboRestaurants}
        cboIngredients={cboIngredients}
        restaurantID={id}
      />
      <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
        handleChangeSearch={handleChangeSearch}
      />
      {loading && (
        <ColorLinearProgress className={classes.margin} />
      )}
      {kitchens && (
        <Results
          className={classes.results}
          kitchens={kitchens}
          actualizar={actualizar}
          sortAsc={sortAsc}
          sortDesc={sortDesc}
          restaurantID={id}
        />
      )}
    </Page>
  );
};

export default KitchenManagementList;
