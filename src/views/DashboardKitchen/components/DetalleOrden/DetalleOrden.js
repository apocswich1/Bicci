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
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Link
} from '@material-ui/core';
import DeliveryStatus from 'utils/DeliveryStatus';
import axios from 'utils/axios';
import getInitials from 'utils/getInitials';
import tiempo from 'utils/tiempo';

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
    }
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

function Ingredientes(props){
  console.log(props.datos);
  return (<div className={props.classes.statsContainer}>
            <div className={props.classes.statsItem1}>
            <Typography align="left" variant="h3">
              -- {props.datos}
            </Typography>
            </div>
          </div>)
}

const DetalleOrden = props => {
  const { className, orden, grocery, ...rest } = props;

  const classes = useStyles();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchOrders = () => {
      axios.get('/api/dashboard/order-activity').then(response => {
        if (mounted) {
          setOrders(response.data.orders);
        }
      });
    };

    fetchOrders();

    return () => {
      mounted = false;
    };
  }, []);
  console.log(
     
  );
  return (
    grocery.length > 0 ? (
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardHeader title="Detalle de Orden" />
        <Divider />
        {grocery.map(element => {
          return (
            <React.Fragment>
        <div className={classes.statsContainer} key={element.id}>
          <div className={classes.statsItem1}>
            <Typography align="left" variant="h3">
                {element.quantity} {element.name}
            </Typography>
            <Typography align="left" variant="h4">
                ({"Instruciones: "} 
                {(element.instructions===0 ||
                element.instructions==="0" || 
                element.instructions=="Ninguna" || 
                element.instructions=="") ? (
                  "Sin instrucciones de preparación"
                ):(
                  element.instructions
                )}
                )
            </Typography>
          </div>
          <div className={classes.statsItem2}>
            <Typography align="center" variant="h5">${element.price}</Typography>
          </div>
        </div>
        {element.ingredientsNames && element.ingredientsNames.map(item=>{
          return <Ingredientes classes={classes} datos={item}/>
        })}
            </React.Fragment>
        )
        })}
        {/* <div className={classes.statsContainer}>
          <div className={classes.statsItem1}>
            <Typography
              align="left"
              //  component="h3"
              variant="subtitle1"
            >
              Pepinillos
          </Typography>
          </div>
        </div> */}
        <Divider />
        <div className={classes.statsContainer}>
          <div className={classes.statsItem1}>
            <Typography align="left" variant="subtitle1">
              Descuento
          </Typography>
          </div>
          <div className={classes.statsItem2}>
            <Typography align="center" variant="h5">
              -${orden.discount}
            </Typography>
          </div>
        </div>
        <div className={classes.statsContainer}>
          <div className={classes.statsItem1}>
            <Typography align="left" variant="subtitle1">
              Total
          </Typography>
          </div>
          <div className={classes.statsItem2}>
            <Typography align="center" variant="h5">
              ${orden.totalAmount}
            </Typography>
          </div>
        </div>
        <Divider />
        <div className={classes.statsContainer}>
          <div className={classes.statsItemDir}>
            <Typography align="left" variant="subtitle1">
              {orden.toAddress}
          </Typography>
          </div>
          <div className={classes.statsItemHora}>
            <Typography align="center" variant="h3">
            { }
          </Typography>
          </div>
        </div>
        <Divider />
        <Divider />
        <div className={classes.statsContainer}>
          <div className={classes.statsItem1}>
            <Typography align="left" variant="subtitle1">
              Aceptado: 12:10PM
          </Typography>
          </div>
        </div>
        <div className={classes.statsContainer}>
          <div className={classes.statsItem1}>
            <Typography align="left" variant="subtitle1">
              Entregado a repartidor: {orden.status >= 6 ? "Sí" : "-- --"}
          </Typography>
          </div>
        </div>
        <div className={classes.statsContainer}>
          <div className={classes.statsItem1}>
            <Typography align="left" variant="subtitle1">
              Entregado a cliente: {orden.status >= 8 ? "Sí" : "-- --"}
          </Typography>
          </div>
        </div>
        <div className={classes.statsContainer}>
          <div className={classes.statsItem1}>
            <Typography align="left" variant="subtitle1">
              Estado: {DeliveryStatus(orden.status)}
            </Typography>
          </div>
        </div>
        <Divider />
        <CardContent className={classes.content}>
          <List disablePadding>
            {orders.map((order, i) => (
              <ListItem
                divider={i < orders.length - 1}
                key={order.id}
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Order"
                    component={RouterLink}
                    src={order.author.avatar}
                    to="/management/orders/1"
                  >
                    {getInitials(order.author.name)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      component={RouterLink}
                      to="/management/orders/1"
                      variant="h6"
                    >
                      {order.author.name}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2">
                      {order.description} |{' '}
                      {order.type === 'payment' && (
                        <Link
                          color="inherit"
                          component={RouterLink}
                          to="#"
                        >
                          See invoice
                      </Link>
                      )}
                    </Typography>
                  }
                />
                <Typography
                  className={classes.date}
                  variant="body2"
                >
                  {moment(order.created_at).fromNow()}
                </Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    ) : ("Sin datos")
  );
};

DetalleOrden.propTypes = {
  className: PropTypes.string
};

export default DetalleOrden;
