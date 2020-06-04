import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Modal,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  TextField,
  Switch,
  Button,
  colors
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%'
  },
  container: {
    marginTop: theme.spacing(3)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

const OrderAdd = props => {
  const { open, onClose, order, actualizar, setLoading, className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    ...order
  });

  
  if (!open) {
    return null;
  }

  const validateForm = () => {
    let nameError = "";
    let nameErrorMessage = "";
    let priceAError = "";
    let priceAErrorMessage = "";
    let priceBError = "";
    let priceBErrorMessage = "";
    let priceCError = "";
    let priceCErrorMessage = "";
    let estimatedTimeAError = "";
    let estimatedTimeAErrorMessage = "";
    let estimatedTimeBError = "";
    let estimatedTimeBErrorMessage = "";
    let estimatedTimeCError = "";
    let estimatedTimeCErrorMessage = "";
    let descriptionError = "";
    let descriptionErrorMessage = "";


    if (!formState.name) {
      nameError = "Debe introducir un nombre";
      nameErrorMessage = "Debe introducir un nombre";
    }

    if (!formState.priceA) {
      priceAError = "Debe introducir un precio A";
      priceAErrorMessage = "Debe introducir un precio A";
    }

    if (!formState.priceB) {
      priceBError = "Debe introducir un precio B";
      priceBErrorMessage = "Debe introducir un precio B";
    }

    if (!formState.priceC) {
      priceCError = "Debe introducir un precio C";
      priceCErrorMessage = "Debe introducir un precio C";
    }

    if (!formState.estimatedTimeA) {
      estimatedTimeAError = "Debe introducir un tiempo estimado A";
      estimatedTimeAErrorMessage = "Debe introducir un tiempo estimado A";
    }

    if (!formState.estimatedTimeB) {
      estimatedTimeBError = "Debe introducir un tiempo estimado B";
      estimatedTimeBErrorMessage = "Debe introducir un tiempo estimado B";
    }

    if (!formState.estimatedTimeC) {
      estimatedTimeCError = "Debe introducir un tiempo estimado C";
      estimatedTimeCErrorMessage = "Debe introducir un tiempo estimado C";
    }

    if (!formState.description) {
      descriptionError = "Debe introducir una descripción";
      descriptionErrorMessage = "Debe introducir una descripción";
    }


if (nameError || priceAError || priceBError || priceCError || estimatedTimeAError || estimatedTimeBError || estimatedTimeCError || descriptionError) {
  setFormState(formState => ({
    ...formState,
    nameError,
    priceAError,
    priceBError,
    priceCError,
    estimatedTimeAError,
    estimatedTimeBError,
    estimatedTimeCError,
    descriptionError,
    nameErrorMessage,
    priceAErrorMessage,
    priceBErrorMessage,
    priceCErrorMessage,
    estimatedTimeAErrorMessage,
    estimatedTimeBErrorMessage,
    estimatedTimeCErrorMessage,
    descriptionErrorMessage

  }));
      return false;
    }
    return true;
  }

  const handleFieldChange = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    console.log(formState);
    let msg = "Orden creado exitosamente!!!";
    const isValid = validateForm();
    if(isValid){
      setLoading(true);
      let params = {
        "pack": formState.pack ? formState.pack : true,
        "name": formState.name,
        "priceA": formState.priceA,
        "priceB": formState.priceB,
        "priceC": formState.priceC,
        "estimatedTimeA": +formState.estimatedTimeA,
        "estimatedTimeB": +formState.estimatedTimeB,
        "estimatedTimeC": +formState.estimatedTimeC,
        "description": formState.description,
      }

      fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/createOrdersAdmin', {
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
            console.log(err);
        });

      onClose();
      setFormState(formState => ({}));
    }

  };

  return (
    <Modal
      onClose={onClose}
      open={open}
    >
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <form>
          <CardContent>
            <Typography
              align="center"
              gutterBottom
              variant="h3"
            >
              Add Order
            </Typography>
            <Grid
              className={classes.container}
              container
              spacing={3}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  onChange={handleFieldChange}
                  value={formState.name}
                  variant="outlined"
                  error={formState.nameError}
                  helperText={formState.nameErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Price A"
                  name="priceA"
                  onChange={handleFieldChange}
                  value={formState.priceA}
                  variant="outlined"
                  error={formState.priceAError}
                  helperText={formState.priceAErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Price B"
                  name="priceB"
                  onChange={handleFieldChange}
                  value={formState.priceB}
                  variant="outlined"
                  error={formState.priceBError}
                  helperText={formState.priceBErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Price C"
                  name="priceC"
                  onChange={handleFieldChange}
                  value={formState.priceC}
                  variant="outlined"
                  error={formState.priceCError}
                  helperText={formState.priceCErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Estimated Time A"
                  name="estimatedTimeA"
                  onChange={handleFieldChange}
                  value={formState.estimatedTimeA}
                  variant="outlined"
                  error={formState.estimatedTimeAError}
                  helperText={formState.estimatedTimeAErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Estimated Time B"
                  name="estimatedTimeB"
                  onChange={handleFieldChange}
                  value={formState.estimatedTimeB}
                  variant="outlined"
                  error={formState.estimatedTimeBError}
                  helperText={formState.estimatedTimeBErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Estimated Time C"
                  name="estimatedTimeC"
                  onChange={handleFieldChange}
                  value={formState.estimatedTimeC}
                  variant="outlined"
                  error={formState.estimatedTimeCError}
                  helperText={formState.estimatedTimeCErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <Typography variant="h5">Pack</Typography>
                <Switch
                  checked={formState.pack}
                  color="secondary"
                  edge="start"
                  name="pack"
                  onChange={handleFieldChange}
                  value={formState.pack}
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  onChange={handleFieldChange}
                  value={formState.description}
                  variant="outlined"
                  error={formState.descriptionError}
                  helperText={formState.descriptionErrorMessage}
                />
              </Grid>
             {/* <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Rol"
                  name="rol"
                  onChange={handleFieldChange}
                  value={formState.rol}
                  variant="outlined"
                  error={formState.rolError}
                  helperText={formState.rolErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Phone number"
                  name="phone"
                  onChange={handleFieldChange}
                  value={formState.phone}
                  variant="outlined"
                  error={formState.phoneError}
                  helperText={formState.phoneErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  onChange={handleFieldChange}
                  value={formState.password}
                  variant="outlined"
                  error={formState.passwordError}
                  helperText={formState.passwordErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Repeat password"
                  name="passwordRepeat"
                  onChange={handleFieldChange}
                  value={formState.passwordRepeat}
                  variant="outlined"
                  error={formState.passwordRepeatError}
                  helperText={formState.passwordRepeatErrorMessage}
                />
              </Grid>
              <Grid item />
              */}
            </Grid>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button
              onClick={onClose}
              variant="contained"
            >
              Close
            </Button>
            <Button
              className={classes.saveButton}
              onClick={handleSave}
              variant="contained"
            >
              Save
            </Button>
          </CardActions>
        </form>
      </Card>
    </Modal>
  );
};

OrderAdd.displayName = 'OrderAdd';

OrderAdd.propTypes = {
  className: PropTypes.string,
  order: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

OrderAdd.defaultProps = {
  open: false,
  onClose: () => { }
};

export default OrderAdd;
