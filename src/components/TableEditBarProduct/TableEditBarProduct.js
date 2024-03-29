import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Drawer, Grid, Typography, Button, Hidden } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import config from 'config';
import firebase from 'utils/firebase';
import { useSelector } from 'react-redux';

const service = config.servicio;

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

const TableEditBarProduct = props => {
  const {
    selected,
    className,
    onMarkPaid,
    onMarkUnpaid,
    onDelete,
    actualizar,
    setSelectedProducts,
    ...rest
  } = props;

  const classes = useStyles();
  const open = selected.length > 0;
  const session = useSelector(state => state.session);

  const handleDelete = () => {
    //console.log(params);
    selected.forEach(element => {

      let params = {
        //"id":selected[0]
        "id": element
      }
      let msg = "Usuario eliminado exitosamente!";
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
    });
    setSelectedProducts([]);
  }

  const approved = (status) => {
    let params = { "id": selected[0], "approved": true }
    let body = { code: 200, msg: 'Approved' }
    let msg = "Product desactivado exitosamente!";
    console.log(params);
    try {
      const ref = firebase.firestore().collection('products').doc(selected[0]);
      ref.set(params, { merge: true });
      actualizar(msg, body);
      setSelectedProducts([]);
      actualizar(msg, body);
    } catch (error) {
      console.log(error);
      setSelectedProducts([]);
    }
  }

  const handleStatus = (status) => {
    //console.log(params);
    let params = {
      id: selected[0],
      active: status
    }
    let msg = "Status modificado exitosamente!";
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

  return (
    <Drawer
      anchor="bottom"
      open={open}
      // eslint-disable-next-line react/jsx-sort-props
      PaperProps={{ elevation: 1 }}
      variant="persistent"
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Grid
          alignItems="center"
          container
          spacing={2}
        >
          <Hidden smDown>
            <Grid
              item
              md={3}
            >
              <Typography
                color="textSecondary"
                variant="subtitle1"
              >
                {selected.length} selected
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            md={6}
            xs={12}
          >
            <div className={classes.actions}>
              {/** 
              <Button onClick={onMarkPaid}>
                <CheckIcon className={classes.buttonIcon} />
                Mark Paid
              </Button>
              <Button onClick={onMarkUnpaid}>
                <CloseIcon className={classes.buttonIcon} />
                Mark Unpaid
              </Button>
              */}
              <Button onClick={handleDelete}>
                <DeleteIcon className={classes.buttonIcon} />
                Delete
              </Button>
              <Button onClick={() => handleStatus(true)}>
                <CheckIcon className={classes.buttonIcon} />
                Active
              </Button>
              <Button onClick={() => handleStatus(false)}>
                <CloseIcon className={classes.buttonIcon} />
                Deactive
              </Button>
              {session.user.role == "ADMIN" && (
                <Button onClick={() => approved(true)}>
                  <CheckIcon className={classes.buttonIcon} />
                  Aprobar Producto
                  </Button>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
};

TableEditBarProduct.propTypes = {
  className: PropTypes.string,
  onDelete: PropTypes.func,
  onMarkPaid: PropTypes.func,
  onMarkUnpaid: PropTypes.func,
  selected: PropTypes.array.isRequired
};

export default TableEditBarProduct;
