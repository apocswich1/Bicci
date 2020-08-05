import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import firebase from 'utils/firebase';
import axios from 'utils/axios';
import { RestaurantInfo, Invoices, Avatar, Dni, License, SendEmails, OtherActions } from './components';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';
import config from 'config';
//import { Header, Results } from '../../../KindManagementList/components';
import KindManagementList from '../../../KindManagementList';
import IngredientManagementList from '../../../IngredientManagementList';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {}
}));

const service = config.servicio;

const Summary = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [restaurant, setRestaurant] = useState();
  const [vertical, setVertical] = React.useState('top');
  const [horizontal, setHorizontal] = React.useState('center');
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [typeMessage, setTypeMessage] = React.useState('');
  const [cboCategories, setCboCategories] = React.useState('');
  const [cboAdministrators, setCboAdministrators] = React.useState('');
  const [cboRegion, setCboRegion] = React.useState('');
  const session = useSelector(state => state.session);

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

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  useEffect(() => {
    let mounted = true;

    let categories = [];
    let administrators = [];
    const cboCategoriesRef = firebase.firestore().collection("categories").orderBy('name');
    //array de cbo de franquicias
    cboCategoriesRef.get().then((snapshot) => {
      snapshot.forEach(function (doc) {
        categories.push(doc.data());
      });
      setCboCategories(categories);
    }).catch((error) => {
      console.log("Error getting documents");
    });

    const cboAdministratorsRef = firebase.firestore().collection("administrators").orderBy('name');
    //array de cbo de franquicias
    cboAdministratorsRef.get().then((snapshot) => {
      snapshot.forEach(function (doc) {
        administrators.push(doc.data());
      });
      setCboAdministrators(administrators);
    }).catch((error) => {
      console.log("Error getting documents");
    });

    const fetchRestaurant = async () => {
      let users = [];
      console.log(props);
      fetch(service + 'listPlacesAdminByUserId', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({ 'id': props.id }),
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body);
          setRestaurant(body.data);
          console.log(body.data);
        });
      }).catch(function (err) {
        console.log(err);
      });
    };

    const fetchRegions = async () => {
      try{
        let refregions = await firebase.firestore().collection('zones').get();
        let result = await refregions.docs.map(item => {return item.data()});
        setCboRegion(result); 
      }catch(error){
        console.log(error);
      }
  };

  fetchRegions();
    fetchRestaurant();
    

    return () => {
      mounted = false;
    };
  }, []);

  const actualizar = async (msg, bodyres) => {
    let message = msg;
    let res = bodyres;
    let users = [];
    console.log("Actualizando...");
    setLoading(true);
    const refUser = firebase.firestore().collection('restaurants').doc(props.id);
    refUser.get().then(async data => {
      await users.push(data.data());
      users[0].id = props.id;
      setRestaurant(users[0]);
      console.log("Actualizado");

      if (res.code === 200) {
        setMessage(message);
        setTypeMessage('success');
      } else {
        setMessage(res.message);
        setTypeMessage('warning');
      }

      setLoading(false);
      setOpen(true);
    }).catch(err => console.log(err));
  }

  if (!restaurant) {
    return null;
  }

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
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
      <Grid
        item
        lg={8}
        md={8}
        xl={8}
        xs={12}
      >
        {loading && (
          <ColorLinearProgress className={classes.margin} />
        )}
        <RestaurantInfo restaurant={restaurant} actualizar={actualizar} cboRegion={cboRegion} cboCategories={cboCategories} cboAdministrators={cboAdministrators} />
      </Grid>
      <Grid
        item
        lg={4}
        md={4}
        xl={4}
        xs={12}
      >
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <Avatar restaurant={restaurant} actualizar={actualizar} />
        </Grid>
        <br /><br />
        <br /><br />
        
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >          
        {session.user.role=="ADMIN" && (
          <OtherActions restaurant={restaurant} actualizar={actualizar} />
        )}
        </Grid>
      </Grid>
      <Grid
        item
        lg={6}
        md={6}
        xl={6}
        xs={12}
      >
        <KindManagementList restaurant={restaurant} />
      </Grid>
      <Grid
        item
        lg={6}
        md={6}
        xl={6}
        xs={12}
      >
        <IngredientManagementList restaurant={restaurant} />
      </Grid>
    </Grid>
  );
};

Summary.propTypes = {
  className: PropTypes.string
};

export default Summary;
