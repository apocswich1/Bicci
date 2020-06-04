import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Grid, colors } from '@material-ui/core';

import axios from 'utils/axios';
import { Label } from 'components';
import config from 'config';

const service = config.servicio;

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  item: {
    padding: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      '&:not(:last-of-type)': {
        borderRight: `1px solid ${theme.palette.divider}`
      }
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.palette.divider}`
      }
    }
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  overline: {
    marginTop: theme.spacing(1)
  }
}));

const Statistics = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [statistics, setStatistics] = useState(null);
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [documents, setDocuments] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchDocuments = () => {
      fetch(service+'listDocumentsAdmin', {
        method: 'get',
        mode: 'cors',
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          setDocuments(body.usuarios.filter(item => item.deleted !== true).length);
          console.log(documents);
          });
      }).catch(function (err) {
        // Error :(
      });
    };

    const fetchUsers = () => {
      fetch(service+'listUsersAdmin', {
        method: 'get',
        mode: 'cors',
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          setUsers(body.usuarios.filter(item => item.deleted !== true).length);
          });
      }).catch(function (err) {
        // Error :(
      });
    };

    const fetchCategories = () => {
      fetch(service+'listCategoriesAdmin', {
        method: 'get',
        mode: 'cors',
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          setCategories(body.usuarios.filter(item => item.deleted !== true).length);
          });
      }).catch(function (err) {
        // Error :(
      });
    };

    const fetchProducts = () => {
      fetch(service+'listProductsAdmin', {
        method: 'get',
        mode: 'cors',
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          setProducts(body.usuarios.filter(item => item.deleted !== true).length);
          });
      }).catch(function (err) {
        // Error :(
      });
    };

    const fetchStatistics = () => {
      axios.get('/api/account/statistics').then(response => {
        if (mounted) {
          setStatistics(response.data.statistics);
        }
      });
    };

    fetchStatistics();
    fetchUsers();
    fetchProducts();
    fetchDocuments();
    fetchCategories();

    return () => {
      mounted = false;
    };
  }, []);

  if (!statistics) {
    return null;
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="center"
        container
        justify="space-between"
      >
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography variant="h2">{users}</Typography>
          <Typography
            className={classes.overline}
            variant="overline"
          >
            Usuarios
          </Typography>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography variant="h2">{products}</Typography>
          <Typography
            className={classes.overline}
            variant="overline"
          >
            Pedidos totales del mes
          </Typography>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography variant="h2">{categories}</Typography>
          <Typography
            className={classes.overline}
            variant="overline"
          >
            Restaurantes totales
          </Typography>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <div className={classes.titleWrapper}>
            <Typography
              component="span"
              variant="h2"
            >
              {documents}
            </Typography>
            {/* <Label
              className={classes.label}
              color={colors.green[600]}
            >
              Live
            </Label> */}
          </div>
          <Typography
            className={classes.overline}
            variant="overline"
          >
            Monto órdenes del mes 
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

Statistics.propTypes = {
  className: PropTypes.string
};

export default Statistics;
