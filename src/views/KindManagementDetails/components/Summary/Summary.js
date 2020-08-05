import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import firebase from 'utils/firebase';
import axios from 'utils/axios';
import { KindInfo, Invoices, SendEmails, Avatar, OtherActions } from './components';
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
  const [kind, setKind] = useState();
  const [vertical, setVertical] = React.useState('top');
  const [horizontal, setHorizontal] = React.useState('center');
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [message, setMessage] = React.useState('');
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

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  useEffect(() => {
    let mounted = true;

    const fetchKind = async () => {
      let kinds = [];
      console.log("Cargando...");
      fetch(service+'listCategoriesProductAdminByCategoryProductId', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({ 'id':props.id,'restaurantID':props.idrestaurant }),
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body);
          setKind(body.data);
          console.log(body.data);
          console.log(loading);
          setLoading(false);
        });
      }).catch(function (err) {
        console.log(err);
      });
    };  

    fetchKind();

    return () => {
      mounted = false;
    };
  }, []);


  const actualizar = async (msg,bodyres) => {
    let message = msg;
    let res = bodyres;
    let kinds = [];
    setLoading(true);
    const refKind = await firebase.firestore().collection('restaurants')
    .doc(props.idrestaurant).collection('foodCategories').doc(props.id).get();
    let result = await refKind.data();
    kinds.push(result);
    kinds[0].id = props.id;
    setKind(kinds[0]);

    if(res.code === 200){
      setMessage(message);
      setTypeMessage('success');
    }else{
      setMessage(res.message);
      setTypeMessage('warning');
    }

    setLoading(false);
    setOpen(true);
    // refKind.get().then(async data=>{
    //   await kinds.push(data.data());        
    //   kinds[0].id = props.id;
    //   setKind(kinds[0]);
    //   console.log("Actualizado");
      
    //   if(res.code === 200){
    //     setMessage(message);
    //     setTypeMessage('success');
    //   }else{
    //     setMessage(res.message);
    //     setTypeMessage('warning');
    //   }
      
    //   setLoading(false);
    //   setOpen(true);
    // }).catch(err => console.log(err));
  }

  if (!kind) {
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
        <KindInfo kind={kind} actualizar={actualizar} restaurantID = {props.idrestaurant}/>
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
        <Avatar driver={kind} actualizar={actualizar}/>
      </Grid>
      </Grid>
      {/*<Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <Invoices kind={kind} />
      </Grid>*/}
    {/*}  <Grid
        item
        lg={4}
        md={4}
        xl={4}
        xs={4}
      >
        <SendEmails kind={kind} />
    </Grid>*/}
      <Grid
        item
        lg={8}
        md={8}
        xl={8}
        xs={12}
      >
        <OtherActions  kind={kind} actualizar={actualizar}/>
      </Grid>
    </Grid>
  );
};

Summary.propTypes = {
  className: PropTypes.string
};

export default Summary;
