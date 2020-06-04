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
  const { className, coupon,actualizar, ...rest } = props;
  const couponId = coupon.id;
  const classes = useStyles();
  
  const disableAccount = ()=>{
  let params = { "uid":couponId, "active":false }
  let msg = "Coupon desactivado exitosamente!";
  console.log(params);  
    fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/couponStatusAdmin', {
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
    let params = { "uid":couponId, "active":true }
    let msg = "Coupon activado exitosamente!";
    console.log(params);  
      fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/couponStatusAdmin', {
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

    const deleteAccount = ()=>{
      let params = { "uid":couponId }
      let msg = "Coupon borrado exitosamente!";
      console.log(params);  
        fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/couponDeleteAdmin', {
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
  
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title={t("other actions")} />
      <Divider />
      <CardContent>
      <div className={classes.mainActions}>
          {(coupon.active)?(
            <Button onClick={disableAccount}>
            <NotInterestedIcon className={classes.buttonIcon} />
            {t("disable")} Coupon
          </Button>
          ):(
            <Button onClick={enableAccount}>
            <NotInterestedIcon className={classes.buttonIcon} />
            {t("enable")} Coupon
          </Button>
          )}
        {/*  <Button>
            <GetAppIcon className={classes.buttonIcon} />
            Export client data
          </Button>*/}
        </div>
        <Typography
          className={classes.notice}
          variant="body2"
        >
          Remove this this coupon’s data if he requested that, if not please
          be aware that what has been deleted can never brough back
        </Typography>
        <Button className={classes.deleteButton} onClick={deleteAccount}>
          <DeleteIcon className={classes.buttonIcon} />
          {t("delete")} Coupon
        </Button>
      </CardContent>
    </Card>
  );
};

OtherActions.propTypes = {
  className: PropTypes.string
};

export default OtherActions;
