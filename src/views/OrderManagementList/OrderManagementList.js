import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { lighten, withStyles } from '@material-ui/core/styles';
import { Page, SearchBarFilter } from 'components';
import { Header, Results } from './components';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useSelector } from 'react-redux';
import firebase from 'utils/firebase';

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


const OrderManagementList = () => {
  const classes = useStyles();
  const session = useSelector(state => state.session);
  const role = session.user.role;
  const [orders, setOrders] = useState([]);
  const [ordersBkp, setOrdersBkp] = useState([]);
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

    setOrders(data);
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

    setOrders(data);
    setSearch([]);
    return;
  }

  useEffect(() => {
    let mounted = true;
    let usuarios = [];
    setLoading(true);
    const fetchOrders = async () => {
      const refOrders = await firebase.firestore().collection('orders').orderBy('date', 'desc').get();
      const resultado = await refOrders.docs.map(item => { return item.data() });
      
      if (role !== "ADMIN") {
        let ref = await firebase.firestore().collection('restaurants').where('starredBy','==',session.user.id).get();
        let result = await ref.docs.map(item => {return item.data()});
        let restaurantID = result[0].id;
        
        setOrders(resultado.filter(item => item.placeID == restaurantID));
        setOrdersBkp(resultado.filter(item => item.placeID == restaurantID));
        //setOrders(resultado);
        //setOrdersBkp(resultado);
      } else {
        setOrders(resultado);
        setOrdersBkp(resultado);
      }
      setLoading(false);
      //   fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/listOrdersAdmin', {
      //     method: 'get',
      //     mode: 'cors',
      //   }).then(function (respuesta) {
      //     respuesta.json().then(body => {
      //       if(role !== "ADMIN"){
      //         setOrders(body.usuarios.filter(item => item.franchiseID == session.user.id));
      //         setOrdersBkp(body.usuarios.filter(item => item.franchiseID == session.user.id));
      //       }else {
      //         setOrders(body.usuarios);
      //         setOrdersBkp(body.usuarios);
      //       }

      //       //console.log(body.usuarios);
      //       setLoading(false);
      //     });
      //   }).catch(function (err) {
      //     // Error :(
      //   });
    };

    fetchOrders();

    return () => {
      mounted = false;
    };
  }, []);


  const actualizar = async (msg, bodyres) => {
    const mensaje = msg;
    const res = bodyres;
    console.log("Actualizando...");
    setLoading(true);
    const refOrders = await firebase.firestore().collection('orders').orderBy('date', 'desc').get();
    const resultado = await refOrders.docs.map(item => { return item.data() });
    console.log(resultado);
    if (role !== "ADMIN") {
      let ref = await firebase.firestore().collection('restaurants').where('starredBy','==',session.user.id).get();
        let result = await ref.docs.map(item => {return item.data()});
        let restaurantID = result[0].id;
        
        setOrders(resultado.filter(item => item.placeID == restaurantID));
        setOrdersBkp(resultado.filter(item => item.placeID == restaurantID));
    } else {
      setOrders(resultado);
      setOrdersBkp(resultado);
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

    // fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/listOrdersAdmin', {
    //   method: 'get',
    //   mode: 'cors',
    // }).then(function (respuesta) {
    //   respuesta.json().then(body => {

    //     if (role !== "ADMIN") {
    //       setOrders(body.usuarios.filter(item => item.franchiseID == session.user.id));
    //       setOrdersBkp(body.usuarios.filter(item => item.franchiseID == session.user.id));
    //     } else {
    //       setOrders(body.usuarios);
    //       setOrdersBkp(body.usuarios);
    //     }
    //     //console.log(body.usuarios);
    //     if (bodyres) {
    //       if (res.code === 200) {
    //         setMessage(mensaje);
    //         setTypeMessage('success');
    //       } else {
    //         setMessage(res.message);
    //         setTypeMessage('warning');
    //       }

    //       setLoading(false);
    //       setOpen(true);
    //     }
    //     setLoading(false);

    //   });
    // }).catch(function (err) {
    //   // Error :(
    // });
    console.log("Actualizado");
  }

  const handleFilter = () => { };

  const handleSearch = () => {
    let userName = "";
    let driverName = "";
    let placeName = "";
    let orderID = "";
    let status = "";
    let finded = [];

    if (search === "" || search == undefined) {
      actualizar();
      finded = [];
      setOrders(ordersBkp);
      setOrdersBkp(ordersBkp);

    } else {

      let words = ordersBkp.filter((item) => {
        if (item.hasOwnProperty('userName') == true) {
          if (item.userName != undefined) {
            if (item.userName.toUpperCase().includes(search.toUpperCase()) == true) {
              //finded.push(item);
              userName = 1;
            } else {
              userName = 0;
            }
          }
        }

        if (item.hasOwnProperty('driverName') == true) {
          if (item.driverName != undefined) {
            if (item.driverName.toUpperCase().includes(search.toUpperCase()) == true) {
              //finded.push(item);
              driverName = 1;
            } else {
              driverName = 0;
            }
          }
        }

        if (item.hasOwnProperty('placeName') == true) {
          if (item.placeName != undefined) {
            if (item.placeName.toUpperCase().includes(search.toUpperCase()) == true) {
              //finded.push(item);
              placeName = 1;
            } else {
              placeName = 0;
            }
          }
        }

        if (item.hasOwnProperty('id') == true) {
          if (item.id != undefined) {
            if (item.id.includes(search) == true) {
              //finded.push(item);
              orderID = 1;
            } else {
              orderID = 0;
            }
          }
        }

        // if (item.hasOwnProperty('status') == true) {
        //   if (item.status != undefined) {
        //     if (item.status.toUpperCase().includes(search.toUpperCase()) == true) {
        //       //finded.push(item);
        //       status = 1;
        //     } else {
        //       status = 0;
        //     }
        //   }
        // }

        if (userName === 1 || driverName === 1 || placeName === 1 || orderID === 1) {
          finded.push(item);
        }

      });

      setOrders(finded);
    }
  };

  return (
    <Page
      className={classes.root}
      title="Order Management List"
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
      <Header actualizar={actualizar} setLoading={setLoading} />
      <SearchBarFilter
        onFilter={handleFilter}
        onSearch={handleSearch}
        handleChangeSearch={handleChangeSearch}
      />
      {loading && (
        <ColorLinearProgress className={classes.margin} />
      )}
      {orders && (
        <Results
          className={classes.results}
          orders={orders}
          actualizar={actualizar}
          sortAsc={sortAsc}
          sortDesc={sortDesc}
        />
      )}
    </Page>
  );
};

export default OrderManagementList;
