import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Drawer, Grid, Typography, Button, Hidden } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/DeleteOutline';

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

const TableEditBarOrder = props => {
  const {
    selected,
    className,
    onMarkPaid,
    onMarkUnpaid,
    onDelete,
    actualizar,
    ...rest
  } = props;

  const classes = useStyles();
  const open = selected.length > 0;


  const handleDelete = ()=>{
    //console.log(params);
    let params = { 
      "id":selected[0]
    }
    let msg = "Franquicia eliminada exitosamente!";
    console.log(params);
    fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/franchiseDeleteAdmin', {
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

  const handleStatus = (status)=>{
    //console.log(params);
    let params = { 
      "id":selected[0],
      "isActive":status
    }
    let msg = "Status modificado exitosamente!";
    console.log(params);
    fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/franchiseStatusAdmin', {
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

  const handleActive = (status)=>{
    //console.log(params);
    let params = { 
      id:selected[0],
      isActive:true
    }
    let msg = "Status modificado exitosamente!";
    console.log(params);
    fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/franchiseStatusAdmin', {
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

  const handleDeactive = (status)=>{
    //console.log(params);
    let params = { 
      id:selected[0],
      isActive:false
    }
    let msg = "Status modificado exitosamente!";
    console.log(params);
    fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/franchiseStatusAdmin', {
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
              <Button onClick={()=>handleStatus(true)}>
                <CheckIcon className={classes.buttonIcon} />
                Active
              </Button>
              <Button onClick={()=>handleStatus(false)}>
                <CloseIcon className={classes.buttonIcon} />
                Deactive
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
};

TableEditBarOrder.propTypes = {
  className: PropTypes.string,
  onDelete: PropTypes.func,
  onMarkPaid: PropTypes.func,
  onMarkUnpaid: PropTypes.func,
  selected: PropTypes.array.isRequired
};

export default TableEditBarOrder;
