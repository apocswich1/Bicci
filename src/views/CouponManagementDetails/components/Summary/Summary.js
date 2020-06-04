import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import firebase from 'utils/firebase';
import axios from 'utils/axios';
import { CouponInfo, Invoices, SendEmails, OtherActions } from './components';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Summary = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [coupon, setCoupon] = useState();
  const [vertical, setVertical] = React.useState('top');
  const [horizontal, setHorizontal] = React.useState('center');
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [cboFranchises, setCboFranchises] = React.useState([]);
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

    let franchises = [];
    const cboFranchisesRef = firebase.firestore().collection("franchises").orderBy('name');
        //array de cbo de franquicias
        cboFranchisesRef.get().then((snapshot)=>{
            snapshot.forEach(function(doc) {
                franchises.push(doc.data());
        });
        setCboFranchises(franchises);
        }).catch((error)=>{
        console.log("Error getting documents");     
        });

    const fetchCoupon = async () => {
      let coupons = [];
      /*const refCoupon = firebase.firestore().collection('coupons').doc(props.id);
      refCoupon.get().then(async data=>{
        await coupons.push(data.data());        
        coupons[0].uid = props.id;
        setCoupon(coupons[0]);
      }).catch(err => console.log(err));
*/
      fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/listCouponsAdminByCouponId', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({ 'uid':props.id }),
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body);
          setCoupon(body.data);
          console.log(body.data);
        });
      }).catch(function (err) {
        console.log(err);
      });
    };  

    fetchCoupon();

    return () => {
      mounted = false;
    };
  }, []);


  const actualizar = async (msg,bodyres) => {
    let message = msg;
    let res = bodyres;
    let coupons = [];
    console.log("Actualizando...");
    setLoading(true);
    const refCoupon = firebase.firestore().collection('coupons').doc(props.id);
    refCoupon.get().then(async data=>{
      await coupons.push(data.data());        
      coupons[0].id = props.id;
      setCoupon(coupons[0]);
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

  if (!coupon) {
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
        <CouponInfo coupon={coupon} actualizar={actualizar} cboFranchises={cboFranchises}/>
      </Grid>
      {/*<Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <Invoices coupon={coupon} />
      </Grid>*/}
    {/*}  <Grid
        item
        lg={4}
        md={4}
        xl={4}
        xs={4}
      >
        <SendEmails coupon={coupon} />
    </Grid>*/}
      <Grid
        item
        lg={8}
        md={8}
        xl={8}
        xs={12}
      >
        <OtherActions  coupon={coupon} actualizar={actualizar}/>
      </Grid>
    </Grid>
  );
};

Summary.propTypes = {
  className: PropTypes.string
};

export default Summary;
