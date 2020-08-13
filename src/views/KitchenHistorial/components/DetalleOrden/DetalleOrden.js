import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Button,
  Link
} from '@material-ui/core';
import DeliveryStatus from 'utils/DeliveryStatus';
import axios from 'utils/axios';
import getInitials from 'utils/getInitials';
import tiempo from 'utils/tiempo';
import firebase from 'utils/firebase';

const useStyles = makeStyles(theme => ({
  typography: {
    subtitle1: {
      fontSize: 32,
      color: "#62686b",
      fontWeight: 500,
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      lineHeight: "13px",
      letterSpacing: "0.33px",
      textTransform: "uppercase"
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
  actions: {
    justifyContent: 'flex',
    marginBotton:"150px"
  },
  saveButton: {
    margin: 'auto',
    color: theme.palette.white,
    backgroundColor: "#64D3DE",
    // colors.green[600],
    '&:hover': {
      backgroundColor: "#64D3DE",
      // colors.green[900]
    },
    width: "50%",
    fontSize: "bold",
    align: "center"
  },
  statsContainer: {
    display: 'flex'
  },
  statsItem: {
    padding: theme.spacing(3),
    flexGrow: 1,
    '&:first-of-type': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  },
  statsItem1: {
    padding: theme.spacing(1),
    flexGrow: 7,
    '&:first-of-type': {
      //  borderRight: `1px solid ${theme.palette.divider}`
    }
  },
  statsItemDir: {
    padding: theme.spacing(1),
    flexGrow: 7,
    '&:first-of-type': {
      //  borderRight: `1px solid ${theme.palette.divider}`
    }
  },
  statsItem2: {
    padding: theme.spacing(1),
    flexGrow: 1,
    '&:first-of-type': {
      borderRight: `1px solid ${theme.palette.divider}`
    },
    marginRight: "10px"
  },
  statsItemHora: {
    padding: theme.spacing(1),
    flexGrow: 1,
    '&:first-of-type': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  },
  content: {
    padding: 0
  },
  date: {
    whiteSpace: 'nowrap'
  }
}));

function Ingredientes(props) {
  console.log(props.datos);
  return (<div className={props.classes.statsContainer}>
    <div className={props.classes.statsItem1}>
      <Typography align="left" variant="h3" style={{ color: "#64D3DE", marginLeft: "60px" }}>
        -- {props.datos}
      </Typography>
    </div>
  </div>)
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
});

const DetalleOrden = props => {
  const { className, orden, grocery, setOpenDetalle, fetchData, ...rest } = props;
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  const [stop, setStop] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchOrders = () => {
      axios.get('/api/dashboard/order-activity').then(response => {
        if (mounted) {
          setOrders(response.data.orders);
        }
      });
    };

    setTimeout(function(){ setStop(false); }, 1500);


    fetchOrders();

    return () => {
      mounted = false;
    };
  }, []);

  const enviarCocina = async () => {
    //alert(orden.id);
    let ref = await firebase.firestore().collection('orders')
    .doc(orden.id).set({entrega: true},{merge: true}); 
    fetchData();
    setOpenDetalle(false);
    
  }
  

  return (
    grocery.length > 0 && !stop ? (
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardHeader title="Detalle de Orden" />
        <Divider style={{ marginTop: "20px", marginBottom: "20px" }} />
        <div className={classes.statsContainer} key={orden.id}>
          <div className={classes.statsItem1}>
          <Typography align="left" variant="h2" style={{ marginLeft:"10px", fontSize:"22px" }}>
              {orden.userName} ({orden.userPhone})
            </Typography>
            <Typography align="left" style={{ paddingTop: "10px",marginLeft:"10px" }} variant="h3">
              {orden.id}
            </Typography>
          </div>
          <div className={classes.statsItem2}>
          <Typography align="right" variant="h3" style={{ marginRight:"5px", fontWeight:"normal", fontSize:"16px" }}>{"Hora recolección"}</Typography>
            <Typography align="right" variant="h1" style={{ paddingTop: "5px",marginRight:"10px", fontSize:"28px" }}>{orden.date && tiempo.hora(orden.date,15)}</Typography>
          </div>
        </div>
        <Divider style={{ marginTop: "20px", marginBottom: "20px" }} s />
        {grocery.map(element => {
          return (
            <React.Fragment>
              <div className={classes.statsContainer} key={element.id}>
                <div className={classes.statsItem1}>
                <Typography align="left" variant="h3" style={{ marginLeft:"10px" }}>
                    {element.quantity} {element.name}
                  </Typography>
                  <Typography align="left" variant="h4" style={{ color: "#64D3DE", marginLeft: "60px" }}>
                    ({"Instruciones: "}
                    {(element.instructions === 0 ||
                      element.instructions === "0" ||
                      element.instructions == "Ninguna" ||
                      element.instructions == "") ? (
                        "Sin instrucciones de preparación"
                      ) : (
                        element.instructions
                      )}
                    )
                  </Typography>
                </div>
                <div className={classes.statsItem2}>
                  <Typography align="right" variant="h3">{formatter.format(element.price)}</Typography>
                </div>
              </div>
              {element.ingredientsNames && element.ingredientsNames.map(item => {
                return <Ingredientes classes={classes} datos={item} />
              })}
              <Divider style={{ marginTop: "20px", marginBottom: "20px" }} />
            </React.Fragment>
          )
        })}
        <CardActions className={classes.actions}>
          <Button
            className={classes.saveButton}
            onClick={enviarCocina}
            variant="contained"
            disableElevation
          >
            <Typography
              align="center"
              gutterBottom
              variant="h1"
              style={{ color: "#ffffff", fontSize:"22px" }}
            >
              LISTO PARA ENTREGA
            </Typography>
          </Button>
        </CardActions>
      </Card>
    ) : (

      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardHeader title="Detalle de Orden" />
        <Divider style={{ marginTop: "20px", marginBottom: "20px" }} />
        <div className={classes.statsContainer} key={orden.id}>
          <div className={classes.statsItem1}>
          {(stop ? (
            <img
            alt="Logo"
            src="/images/spinner.gif"
            height="70px"
          />
          ):(
            <Typography align="left" variant="h2" style={{ marginLeft:"55px" }}>
              No hay detalles en la orden
            </Typography>
          ))}
          </div>
        </div>
      </Card>
    )
  );
};

DetalleOrden.propTypes = {
  className: PropTypes.string
};

export default DetalleOrden;
