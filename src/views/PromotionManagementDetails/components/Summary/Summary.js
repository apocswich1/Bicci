import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import firebase from 'utils/firebase';
import axios from 'utils/axios';
import { PromotionInfo, Invoices, SendEmails, Avatar, OtherActions } from './components';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';
import config from 'config';

const useStyles = makeStyles(() => ({
  root: {}
}));

const service = config.servicio;

const Summary = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [cboRestaurants, setCboRestaurants] = React.useState([]);
  const [promotion, setPromotion] = useState();
  const [vertical, setVertical] = React.useState('top');
  const [horizontal, setHorizontal] = React.useState('promotion');
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [message, setMessage] = React.useState('');
  const [typeMessage, setTypeMessage] = React.useState('');
  const [chips, setChips] = React.useState([]);

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
    let franchises = [];

    const cboRestaurantsRef = firebase.firestore().collection("restaurants").orderBy('name');
    //array de cbo de franquicias
    cboRestaurantsRef.get().then((snapshot) => {
      snapshot.forEach(function (doc) {
        franchises.push(doc.data());
      });
      setCboRestaurants(franchises);
    }).catch((error) => {
      console.log("Error getting documents");
    });

    const fetchPromotion = async () => {
      let promotions = [];
      console.log("Cargando...");
      try {
        let refPromo = await firebase.firestore().collection('promos').doc(props.id).get();
        let resultado = await refPromo.data();

        let allchips = [];
        for (let i = 0; i < resultado.places.length; i++) {
          console.log(resultado.places[i]);
          let infoRef = await firebase.firestore().collection('restaurants').doc(resultado.places[i]).get();
          let result = await infoRef.data();
          let chip = { 'key': result.id, 'label': result.name };
          allchips.push(chip);
        }
        setChips(allchips);
        setPromotion(resultado);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }


      // fetch(service+'listPromotionsAdminByPromotionId', {
      //   method: 'post',
      //   mode: 'cors',
      //   body: JSON.stringify({ 'id':props.id }),
      // }).then(function (respuesta) {
      //   respuesta.json().then(body => {
      //     console.log(body);
      //     setPromotion(body.data);
      //     console.log(body.data);
      //     console.log(loading);
      //     setLoading(false);
      //   });
      // }).catch(function (err) {
      //   console.log(err);
      // });
    };

    fetchPromotion();

    return () => {
      mounted = false;
    };
  }, []);


  const actualizar = async (msg, bodyres) => {
    let message = msg;
    let res = bodyres;
    let promotions = [];
    console.log("Actualizando...");
    setLoading(true);
    const refPromotion = firebase.firestore().collection('promos').doc(props.id);
    refPromotion.get().then(async data => {
      await promotions.push(data.data());
      promotions[0].id = props.id;
      setPromotion(promotions[0]);
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

  if (!promotion) {
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
        key={vertical + horizontal}
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
        <PromotionInfo promotion={promotion} actualizar={actualizar} chips={chips} cboRestaurants={cboRestaurants} />
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
          <Avatar promotion={promotion} actualizar={actualizar} />
        </Grid>
      </Grid>
      {/*<Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <Invoices promotion={promotion} />
      </Grid>*/}
      {/*}  <Grid
        item
        lg={4}
        md={4}
        xl={4}
        xs={4}
      >
        <SendEmails promotion={promotion} />
    </Grid>*/}
      <Grid
        item
        lg={8}
        md={8}
        xl={8}
        xs={12}
      >
        <OtherActions promotion={promotion} actualizar={actualizar} />
      </Grid>
    </Grid>
  );
};

Summary.propTypes = {
  className: PropTypes.string
};

export default Summary;