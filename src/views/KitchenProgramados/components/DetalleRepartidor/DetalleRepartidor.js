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
import { MapaRuta } from '../../components'
import axios from 'utils/axios';
import getInitials from 'utils/getInitials';
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
statsItemMapas: {
  padding: theme.spacing(7),
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
statsItem2: {
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

const DetalleOrden = props => {
  const { className,orden, ...rest } = props;

  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchOrders = async () => {
      try {
        const ordenRef = await firebase.firestore().collection('orders').doc(orden).get();
        let resultado = await ordenRef.data();
        setDatos(resultado);
      } catch (error) {
        console.log(error);
      }

      // axios.get('/api/dashboard/order-activity').then(response => {
      //   if (mounted) {
      //     setOrders(response.data.orders);
      //   }
      // });
    };

   // fetchOrders();

   setDatos(orden);
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Detalle de Repartidor" />
      <Divider />
      <div className={classes.statsContainer}>
        <div className={classes.statsItem1}>
          <Typography align="left" variant="subtitle1">
            {orden.driverName}
          </Typography>
        </div>
        <div className={classes.statsItem2}>
          <Typography align="center" variant="h3">
            +569 5357255
          </Typography>
        </div>
      </div>
      <Divider />
      <div className={classes.statsContainer}>
      <div className={classes.statsItemMapa}>
        <MapaRuta order={datos}/>
        </div>
        {/* <div className={classes.statsItem1}>
          <Typography align="left" variant="subtitle1">
            ELVIS HERNANDEZ
          </Typography>
        </div>
        <div className={classes.statsItem2}>
          <Typography align="center" variant="h3">
            +569 5357255
          </Typography>
        </div> */}
      </div>
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
  );
};

DetalleOrden.propTypes = {
  className: PropTypes.string
};

export default DetalleOrden;
