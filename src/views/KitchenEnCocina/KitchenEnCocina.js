import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import firebase from 'utils/firebase';
import { Page } from 'components';
import {
  Header,
  Overview,
  FinancialStats,
  EarningsSegmentation,
  TopReferrals,
  MostProfitableProducts,
  CustomerActivity,
  OrderActivity,
  LatestOrders,
  Ordenes,
  Detalle,
  DetallePedido,
  MapaRuta,
  Temporizador
} from './components';
import moment from 'moment';
import {
  Button,
  colors,
  Typography,
} from '@material-ui/core';
import { preventDefault } from '@fullcalendar/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    '& > *': {
      height: '100%'
    }
  }
}));

const KitchenEnCocina = () => {
  const classes = useStyles();

  const [ordenes, setOrdenes] = React.useState([]);
  const [orden, setOrden] = React.useState([]);
  const [openDetalle, setOpenDetalle] = useState(false);
  const [open, setOpen] = useState(false);
  const [stop, setStop] = useState(true);
  const [pedidos, setPedidos] = React.useState([]);
  const [timer, setTimer] = React.useState(0);
  const [grocery, setGrocery] = React.useState([]);
  const [valuePestana, setValuePestana] = React.useState(0);
  const [countdown, setCountdown] = React.useState("03:00");
  const [formState, setFormState] = useState({
    open
  });

  const handleStatus = () => {
    setOpen(false);
    setCountdown("03:00");
    clearInterval(timer);
    pedidos.forEach(item => {
      firebase.firestore().collection('orders').doc(item).set({ status: 15 }, { merge: true });
      console.log("Rechazado: " + item);
    });
    localStorage.setItem("uso", false);
    setPedidos([]);

  }

  const contador = () => {
    var duration = moment.duration({
      'minutes': 1 / 2,
      'seconds': 0

    });

    var interval = 1;
    const timer = setInterval(() => {
      setTimer(timer);

      duration = moment.duration(duration.asSeconds() - interval, 'seconds');
      var min = duration.minutes();
      var sec = duration.seconds();

      sec -= 1;
      if (min < 0) return clearInterval(timer);
      if (min < 10 && min.length != 2) min = '0' + min;
      if (sec < 0 && min != 0) {
        min -= 1;
        sec = 59;
      } else if (sec < 10 && sec.length != 2) sec = '0' + sec;

      setCountdown(min + ':' + sec);

      if (min == 0 && sec == 0) {
        clearInterval(timer);
        console.log("Listo por ahora");
        handleStatus();
        setOpen(false)
      }

    }, 1000);

    return () => clearInterval(interval);
  }


  useEffect(() => {
    let mounted = true;

    let doc = firebase.firestore().collection('orders').where('status', '==', 1);
    const observer = doc.onSnapshot(docSnapshot => {
      let data = [];
      docSnapshot.docChanges().forEach(function (change) {

        if (change.type === "added") {
          console.log("New order: ", change.doc.data());
          data.push(change.doc.data().id);
        }

      });
      setOpen(true);
      setPedidos(pedidos => [...pedidos].concat(data));
      if (localStorage.getItem('uso') != "true") {
        localStorage.setItem("uso", true);
        contador();
      }

    }, err => {
      console.log(`Encountered error: ${err}`);
    });

    return () => {
      mounted = false;
    };
  }, []);



  const handleCount = () => {
    localStorage.setItem("uso", true);
    setOpen(true);
    //contador();

  }

  const Actualizar = async (id) => {
    try {
      const ordenRef = await firebase.firestore().collection('orders').doc(id).get();
      const ordenGroceryRef = await firebase.firestore().collection('orders').doc(id)
        .collection('groceries').get();
      let resultado = await ordenRef.data();
      let groceries = await ordenGroceryRef.docs.map(item => { return item.data() });
      let groce = []
      let todos = []
      groceries.forEach((element, i) => {
        console.log(element.ingredients);
        element.ingredients.forEach(async item => {
          let ingredientRef = await firebase.firestore().collection('ingredients').doc(item).get();
          let dato = await ingredientRef.data();
          groce.push(dato);
        });
        element.ingredientes = groce;
        todos.push(element);
      });
      setGrocery(todos);
      setOrden(resultado);
      //setGrocery(groceries);
      setValuePestana(0);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      try {
        const ordenesRef = await firebase.firestore().collection("orders").orderBy('date', 'desc').get();
        let respuesta = await ordenesRef.docs.map((item) => { return item.data() });
        setOrdenes(respuesta.filter(item => { return item.enCocina == true && item.entrega !== true}));
        setTimeout(function(){ setStop(false); }, 1000);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  const fetchDataOrden = async () => {
    try {
      setStop(true);
      const ordenesRef = await firebase.firestore().collection("orders").orderBy('date', 'desc').get();
      let respuesta = await ordenesRef.docs.map((item) => { return item.data() });
      setOrdenes(respuesta.filter(item => { return item.enCocina == true && item.entrega !== true}));
      setOpenDetalle(false);
      setTimeout(function(){ setStop(false); }, 500);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(ordenes);
  return (
    <Page
      className={classes.root}
      title="Kitchens Dashboard"
    >
      <Header openDetalle={openDetalle} setOpenDetalle={setOpenDetalle}/>
      <Grid
        className={classes.container}
        container
        spacing={3}
      >
        <Temporizador open={false} countdown={countdown} handleStatus={handleStatus} />
        {/* <Grid className="countdown"
          item
          lg={12}
          xl={12}
          xs={12}
        >
          <Button
            disableElevation
            className={classes.rechazarButton}
            variant="contained"
            onClick={handleCount}
          >
            {countdown}
          </Button>
        </Grid> */}
        {!(openDetalle===true) ? (
        <Grid item lg={12} xs={12}>
            {(stop ? (
            <img
            alt="Logo"
            src="/images/spinner.gif"
            height="70px"
          />
          ):(
             <Detalle orden={orden} setOpenDetalle={setOpenDetalle} ordenes={ordenes} setOrden={Actualizar} grocery={grocery} valuePestana={valuePestana} />
          ))}
        </Grid>
        ):("")}
        {openDetalle===true ? (
          <Grid item lg={12} xs={12}>
          <DetallePedido orden={orden} setOpenDetalle={setOpenDetalle} fetchData={fetchDataOrden} ordenes={ordenes} setOrden={Actualizar} grocery={grocery} valuePestana={valuePestana} />
          </Grid>
        ):("")}
      </Grid>
    </Page>
  );
};

export default KitchenEnCocina;
