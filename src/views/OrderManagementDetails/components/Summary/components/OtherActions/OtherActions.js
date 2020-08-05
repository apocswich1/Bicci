import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Typography
} from '@material-ui/core';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import translate from 'translate';
import firebase from 'utils/firebase';

const t = translate;
const useStyles = makeStyles(theme => ({
  root: {},
  mainActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  notice: {
    marginTop: theme.spacing(1)
  },
  deleteButton: {
    marginTop: theme.spacing(1),
    color: theme.palette.white,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));
const OtherActions = props => {
  const { className, order,actualizar, ...rest } = props;
  const orderId = order.id;
  const classes = useStyles();
  
  const disableAccount = ()=>{
  let params = { "id":orderId, "isActive":false }
  let msg = "Orden desactivada exitosamente!";
  console.log(params);  
    fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/orderStatusAdmin', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify(params)
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body);
          actualizar(msg,body);
        });
      }).catch(function (err) {
        // Error :(
      });
  }

  const enableAccount = ()=>{
    let params = { "id":orderId, "isActive":true }
    let msg = "Orden activada exitosamente!";
    console.log(params);  
      fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/orderStatusAdmin', {
          method: 'post',
          mode: 'cors',
          body: JSON.stringify(params)
        }).then(function (respuesta) {
          respuesta.json().then(body => {
            console.log(body);
            actualizar(msg,body);
          });
        }).catch(function (err) {
          // Error :(
        });
    }

    const deleteAccount = async ()=>{
      let params = { "id":orderId }
      let msg = "Orden cancelada exitosamente!";
      try {
        await firebase.firestore().collection('orders').doc(orderId).set({status:-1},{merge:true});
        let body = {
          code: 200,
          message: "Orden cancelada exitosamente!",
          id:orderId
        };
        actualizar(msg,body);
        console.log("Cancelada con exito");  
      } catch (error) {
        let body = {
          code: 200,
          message: error,
          id:orderId
        };
        actualizar(msg,body);
        console.log("Error: "+error);  
      }
      
      
        // fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/orderDeleteAdmin', {
        //     method: 'post',
        //     mode: 'cors',
        //     body: JSON.stringify(params)
        //   }).then(function (respuesta) {
        //     respuesta.json().then(body => {
        //       console.log(body);
        //       actualizar(msg,body);
        //     });
        //   }).catch(function (err) {
        //     // Error :(
        //   });
      }
  
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title={t("other actions")} />
      <Divider />
      <CardContent>
      <div className={classes.mainActions}>
          {/* {(order.isActive)?(
            <Button onClick={disableAccount}>
            <NotInterestedIcon className={classes.buttonIcon} />
            {t("disable")} Order Account
          </Button>
          ):(
            <Button onClick={enableAccount}>
            <NotInterestedIcon className={classes.buttonIcon} />
            Enable Order Account
          </Button>
          )} */}
          {/* <Button>
            <GetAppIcon className={classes.buttonIcon} />
            {t("Export")} {t("data")}
          </Button> */}
        </div>
        <Typography
          className={classes.notice}
          variant="body2"
        >
          Remove this this order’s data if he requested that, if not please
          be aware that what has been deleted can never brough back
        </Typography>
        <Button className={classes.deleteButton} onClick={deleteAccount}>
          <DeleteIcon className={classes.buttonIcon} />
          {t("Cancelar")} Orden
        </Button>
        {/* <Button className={classes.deleteButton} onClick={deleteAccount}>
          <DeleteIcon className={classes.buttonIcon} />
          {t("delete")} Orden
        </Button> */}
      </CardContent>
    </Card>
  );
};

OtherActions.propTypes = {
  className: PropTypes.string
};

export default OtherActions;
