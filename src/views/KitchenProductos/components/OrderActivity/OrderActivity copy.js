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

import axios from 'utils/axios';
import getInitials from 'utils/getInitials';

const useStyles = makeStyles(theme => ({
root:{
  '&hover:': {
    backgroundColor: '#ffffff'
  },
  backgroundColor: '#000000'
},
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
  display: 'flex',
  '&:hover:': {
    backgroundColor: '#eeeeee'
  },
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
statsItem2: {
  padding: theme.spacing(1),
    flexGrow: 1,
      '&:first-of-type': {
    borderRight: `1px solid ${theme.palette.divider}`
  }
},
content: {
  padding: 0,
  '&:hover:': {
    backgroundColor: '#eeeeee'
  },
},
date: {
  whiteSpace: 'nowrap'
}
}));

const OrderActivity = props => {
  const { className, ...rest } = props;

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

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader hover title="Detalle de Orden"/>
      <Divider />
      <div className={classes.statsContainer}>
        <div className={classes.statsItem1}>
          <Typography
            align="left"
            component="h4"
            gutterBottom
            variant="overline"
          >

          </Typography>
          <Typography
            align="left"
          //  component="h3"
            variant="subtitle1"
          >
            Hamburguesa de carne mixta
          </Typography>
        </div>
        <div className={classes.statsItem2}>
          <Typography
            align="center"
            component="h4"
            gutterBottom
            variant="overline"
          >

          </Typography>
          <Typography
            align="center"
            variant="h3"
          >
            15,245
          </Typography>
        </div>
        {/* <Divider /> */}
        {/* <div className={classes.statsItem}>
          <Typography
            align="center"
            component="h4"
            gutterBottom
            variant="overline"
          >
            Online
          </Typography>
          <Typography
            align="center"
            variant="h3"
          >
            357
          </Typography>
        </div> */}
      </div>
      <Divider />
      <div className={classes.statsContainer}>
        <div className={classes.statsItem1}>
          <Typography
            align="left"
            component="h4"
            gutterBottom
            variant="overline"
          >
            Registered
          </Typography>
          <Typography
            align="left"
            variant="h3"
          >
            15,245
          </Typography>
        </div>
        <div className={classes.statsItem2}>
          <Typography
            align="center"
            component="h4"
            gutterBottom
            variant="overline"
          >
            Registered
          </Typography>
          <Typography
            align="center"
            variant="h3"
          >
            15,245
          </Typography>
        </div>
        {/* <Divider /> */}
        {/* <div className={classes.statsItem}>
          <Typography
            align="center"
            component="h4"
            gutterBottom
            variant="overline"
          >
            Online
          </Typography>
          <Typography
            align="center"
            variant="h3"
          >
            357
          </Typography>
        </div> */}
      </div>
      {/* <Divider />
      <div className={classes.statsContainer}>
        <div className={classes.statsItem}>
          <Typography
            align="center"
            component="h4"
            gutterBottom
            variant="overline"
          >
            Registered
          </Typography>
          <Typography
            align="center"
            variant="h3"
          >
            15,245
          </Typography>
        </div>
        <Divider />
        <div className={classes.statsItem}>
          <Typography
            align="center"
            component="h4"
            gutterBottom
            variant="overline"
          >
            Online
          </Typography>
          <Typography
            align="center"
            variant="h3"
          >
            357
          </Typography>
        </div>
      </div> */}
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
  );
};

OrderActivity.propTypes = {
  className: PropTypes.string
};

export default OrderActivity;
