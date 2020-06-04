import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import firebase from 'utils/firebase';
import axios from 'utils/axios';
import { DriverInfo, Invoices, Avatar, Dni, License, SendEmails, OtherActions } from './components';
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
  const [driver, setDriver] = useState();
  const [vertical, setVertical] = React.useState('top');
  const [horizontal, setHorizontal] = React.useState('center');
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
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

    const fetchDriver = async () => {
      let users = [];
console.log(props);
      fetch(service+'listDriversAdminByUserId', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({ 'id':props.id }),
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body);
          setDriver(body.data);
          console.log(body.data);
        });
      }).catch(function (err) {
        console.log(err);
      });
    };  

    fetchDriver();

    return () => {
      mounted = false;
    };
  }, []);


  const actualizar = async (msg,bodyres) => {
    let message = msg;
    let res = bodyres;
    let users = [];
    console.log("Actualizando...");
    setLoading(true);
    const refUser = firebase.firestore().collection('drivers').doc(props.id);
    refUser.get().then(async data=>{
      await users.push(data.data());        
      users[0].id = props.id;
      setDriver(users[0]);
      console.log("Actualizado");
      
      if(res.code === 200){
        setMessage(message);
        setTypeMessage('success');
      }else{
        setMessage(res.message);
        setTypeMessage('warning');
      }
      
      setLoading(false);
      setOpen(true);
    }).catch(err => console.log(err));
  }

  if (!driver) {
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
        <DriverInfo driver={driver} actualizar={actualizar}/>
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
        <Avatar driver={driver} actualizar={actualizar}/>
      </Grid>
      <br />
      <Grid
        item
        lg={12}
        md={12}
        xl={12}
        xs={12}
      >
        <License driver={driver} actualizar={actualizar}/>
      </Grid>
      <br />
      <Grid
        item
        lg={12}
        md={12}
        xl={12}
        xs={12}
      >
        <Dni driver={driver} actualizar={actualizar}/>
      </Grid>
      </Grid>
      {/*<Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <Invoices driver={driver} />
      </Grid>*/}
    {/*}  <Grid
        item
        lg={4}
        md={4}
        xl={4}
        xs={4}
      >
        <SendEmails driver={driver} />
    </Grid>*/}
      <Grid
        item
        lg={8}
        md={8}
        xl={8}
        xs={12}
      >
        <OtherActions  driver={driver} actualizar={actualizar}/>
      </Grid>
    </Grid>
  );
};

Summary.propTypes = {
  className: PropTypes.string
};

export default Summary;
