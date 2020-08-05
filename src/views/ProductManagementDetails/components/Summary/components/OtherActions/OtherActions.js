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
import translate from 'translate';
import { useSelector } from 'react-redux';
import firebase from 'utils/firebase';

const t = translate;

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
  const { className, product, actualizar, ...rest } = props;
  const productId = product.id;
  const session = useSelector(state => state.session);
  const classes = useStyles();

  const disableAccount = () => {
    let params = { "id": productId, "active": false }
    let msg = "Product desactivado exitosamente!";
    console.log(params);
    fetch(service + 'productStatusAdmin', {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify(params)
    }).then(function (respuesta) {
      respuesta.json().then(body => {
        console.log(body);
        actualizar(msg, body);
      });
    }).catch(function (err) {
      // Error :(
    });
  }

  const approved = () => {
    let params = { "id": productId, "approved": true }
    let body = { code: 200, msg: 'Approved' }
    let msg = "Product desactivado exitosamente!";
    console.log(params);
    try {
      const ref = firebase.firestore().collection('products').doc(productId);
      ref.set(params, { merge: true });
      actualizar(msg, body);
    } catch (error) {
      console.log(error);
    }
  }

  const enableAccount = () => {
    let params = { "id": productId, "active": true }
    let msg = "Product activado exitosamente!";
    console.log(params);
    fetch(service + 'productStatusAdmin', {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify(params)
    }).then(function (respuesta) {
      respuesta.json().then(body => {
        console.log(body);
        actualizar(msg, body);
      });
    }).catch(function (err) {
      // Error :(
    });
  }

  const deleteAccount = () => {
    let params = { "id": productId }
    let msg = "Product borrado exitosamente!";
    console.log(params);
    fetch(service + 'productDeleteAdmin', {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify(params)
    }).then(function (respuesta) {
      respuesta.json().then(body => {
        console.log(body);
        actualizar(msg, body);
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
          {(product.active) ? (
            <Button onClick={disableAccount}>
              <NotInterestedIcon className={classes.buttonIcon} />
              {t("Disable")} {t("Product")}
            </Button>
          ) : (
              <Button onClick={enableAccount}>
                <NotInterestedIcon className={classes.buttonIcon} />
                {t("Enable")} {t("Product")}
              </Button>
            )}
          {session.user.role == "ADMIN" && (
            <Button onClick={approved}>
              <GetAppIcon className={classes.buttonIcon} />
              {t("Aprobar Producto")}
            </Button>
          )}
        </div>
        <Typography
          className={classes.notice}
          variant="body2"
        >
          Remove this this product’s data if he requested that, if not please
          be aware that what has been deleted can never brough back
        </Typography>
        <Button className={classes.deleteButton} onClick={deleteAccount}>
          <DeleteIcon className={classes.buttonIcon} />
          {t("Delete")} {t("Product")}
        </Button>
      </CardContent>
    </Card>
  );
};

OtherActions.propTypes = {
  className: PropTypes.string
};

export default OtherActions;
