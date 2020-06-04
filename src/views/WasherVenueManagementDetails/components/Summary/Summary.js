import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import firebase from 'utils/firebase';
import axios from 'utils/axios';
import { WasherInfo, Invoices, SendEmails, OtherActions } from './components';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Summary = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [washer, setWasher] = useState();
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

    const fetchWasher = async () => {
      let washers = [];
      /*const refWasher = firebase.firestore().collection('washers').doc(props.id);
      refWasher.get().then(async data=>{
        await washers.push(data.data());        
        washers[0].uid = props.id;
        setWasher(washers[0]);
      }).catch(err => console.log(err));
*/
      fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/listWashersAdminByUserId', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({ 'uid':props.id }),
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body);
          setWasher(body.data);
          console.log(body.data);
        });
      }).catch(function (err) {
        console.log(err);
      });
    };  

    fetchWasher();

    return () => {
      mounted = false;
    };
  }, []);


  const actualizar = async (msg,bodyres) => {
    let message = msg;
    let res = bodyres;
    let washers = [];
    console.log("Actualizando...");
    setLoading(true);
    const refWasher = firebase.firestore().collection('washers').doc(props.id);
    refWasher.get().then(async data=>{
      await washers.push(data.data());        
      washers[0].id = props.id;
      setWasher(washers[0]);
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

  if (!washer) {
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
        <WasherInfo washer={washer} actualizar={actualizar}/>
      </Grid>
      {/*<Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <Invoices washer={washer} />
      </Grid>*/}
    {/*}  <Grid
        item
        lg={4}
        md={4}
        xl={4}
        xs={4}
      >
        <SendEmails washer={washer} />
    </Grid>*/}
      <Grid
        item
        lg={8}
        md={8}
        xl={8}
        xs={12}
      >
        <OtherActions  washer={washer} actualizar={actualizar}/>
      </Grid>
    </Grid>
  );
};

Summary.propTypes = {
  className: PropTypes.string
};

export default Summary;
