import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import firebase from 'utils/firebase';
import axios from 'utils/axios';
import { VenueInfo, Invoices, SendEmails, OtherActions } from './components';
import Ubicacion from './components/VenueInfo/Ubicacion';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Summary = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [venue, setVenue] = useState();
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
    console.log(props);
    const fetchVenue = async () => {
      let venues = [];
    
      fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/listVenuesAdminByVenueId', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({ 'id':props.id,'idFranchise':props.idfranchise }),
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body);
          setVenue(body.data);
          console.log(body.data);
        });
      }).catch(function (err) {
        console.log(err);
      });
    };
    
    fetchVenue();

    return () => {
      mounted = false;
    };
  }, []);


  const actualizar = async (msg,bodyres) => {
    let message = msg;
    let res = bodyres;
    let venues = [];
    console.log("Actualizando...");
    setLoading(true);
   
    if(res.code === 200){
      setMessage(message);
      setTypeMessage('success');
    }else{
      setMessage(res.message);
      setTypeMessage('warning');
    }
    
    fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/listVenuesAdminByVenueId', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({ 'id':props.id,'idFranchise':props.idfranchise }),
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body);
          setVenue(body.data);
          console.log(body.data);
          setLoading(false);
          setOpen(true);
        });
      }).catch(function (err) {
        console.log(err);
      });
  }

  if (!venue) {
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
        lg={5}
        md={5}
        xl={5}
        xs={12}
      >
        {loading && (
      <ColorLinearProgress className={classes.margin} />
      )}
        <VenueInfo venue={venue} actualizar={actualizar} idfranchise={props.idfranchise}/>
      </Grid>
      {<Grid
        item
        lg={7}
        md={7}
        xl={7}
        xs={12}
      >
             {/* <div style={{ height: '50vh', width: '100%' }}>
                   <GoogleMapReact
                     bootstrapURLKeys={{ key: 'AIzaSyARbD4ypapuQsPuquP2UPaTSNuffK3TdZ0' }}
                     defaultCenter={{
                      lat: 59.95,
                      lng: 30.33
                    }}
                     defaultZoom={15}
                   >
                   </GoogleMapReact>
                 </div> */}
        <Ubicacion venue={venue} lat={venue.coordinates._latitude} lng={venue.coordinates._longitude} actualizar={actualizar} idfranchise={props.idfranchise}/>
      </Grid>}
    {/*}  <Grid
        item
        lg={4}
        md={4}
        xl={4}
        xs={4}
      >
        <SendEmails venue={venue} />
    </Grid>*/}
      <Grid
        item
        lg={5}
        md={5}
        xl={5}
        xs={12}
      >
        <OtherActions  venue={venue} actualizar={actualizar}/>
      </Grid>
    </Grid>
  );
};

Summary.propTypes = {
  className: PropTypes.string
};

export default Summary;
