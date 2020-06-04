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
import config from 'config';

const service = config.servicio;

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
  const { className, modelo,actualizar, ...rest } = props;
  const modeloId = modelo.uid;
  const classes = useStyles();
  
  const disableAccount = ()=>{
  let params = { "uid":modeloId, "isActive":false }
  let msg = "Usuario desactivado exitosamente!";
  console.log(params);  
    fetch(service+'userStatusAdmin', {
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
    let params = { "uid":modeloId, "isActive":true }
    let msg = "Usuario activado exitosamente!";
    console.log(params);  
      fetch(service+'userStatusAdmin', {
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
      let params = { "uid":modeloId }
      let msg = "Usuario borrado exitosamente!";
      console.log(params);  
        fetch(service+'userDeleteAdmin', {
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
      <CardHeader title="Other actions" />
      <Divider />
      <CardContent>
      <div className={classes.mainActions}>
          {(modelo.isActive)?(
            <Button onClick={disableAccount}>
            <NotInterestedIcon className={classes.buttonIcon} />
            disable Modelo Account
          </Button>
          ):(
            <Button onClick={enableAccount}>
            <NotInterestedIcon className={classes.buttonIcon} />
            Enable Modelo Account
          </Button>
          )}
          <Button>
            <GetAppIcon className={classes.buttonIcon} />
            Export client data
          </Button>
        </div>
        <Typography
          className={classes.notice}
          variant="body2"
        >
          Remove this this modelo’s data if he requested that, if not please
          be aware that what has been deleted can never brough back
        </Typography>
        <Button className={classes.deleteButton} onClick={deleteAccount}>
          <DeleteIcon className={classes.buttonIcon} />
          Delete Modelo Account
        </Button>
      </CardContent>
    </Card>
  );
};

OtherActions.propTypes = {
  className: PropTypes.string
};

export default OtherActions;
