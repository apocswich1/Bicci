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
import InputAdornment from '@material-ui/core/InputAdornment';

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

const VenueAdd = props => {
  const { open, onClose, venue, idfranchise, actualizar, setLoading, className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    ...venue
  });

  
  if (!open) {
    return null;
  }

  const validateForm = () => {
    let nameError = "";
    let emailError = "";
    let email = formState.email ? formState.email : "";
    let nameErrorMessage = "";
    let emailErrorMessage = "";
    let addressError = "";
    let addressErrorMessage = "";
    let legalNameError = "";
    let legalNameErrorMessage = "";
    let dniError = "";
    let dniErrorMessage = "";
    let businessActivityError = "";
    let businessActivityErrorMessage = "";
    let businessNameError = "";
    let businessNameErrorMessage = "";
    let businessReasonError = "";
    let businessReasonErrorMessage = "";
    let latitudError = "";
    let latitudErrorMessage = "";
    let longitudError = "";
    let longitudErrorMessage = "";
    let phoneError = "";
    let phoneErrorMessage = "";


    if (!formState.name) {
      nameError = "Debe introducir un nombre";
      nameErrorMessage = "Debe introducir un nombre";
    }

    // if (!formState.legalName) {
    //   legalNameError = "Debe introducir un nombre legal valido";
    //   legalNameErrorMessage = "Debe introducir nombre legal";
    // }


    if (!email.includes('@')) {
      emailError = "Debe introducir un email valido";
      emailErrorMessage = "Debe introducir un email valido";
    }

    if (!formState.email) {
      emailError = "Debe introducir un email valido";
      emailErrorMessage = "Debe introducir un email";
    }

    if (!formState.phone) {
      phoneError = "Debe introducir un phone valido";
      phoneErrorMessage = "Debe introducir un phone valido";
    }

    if (!formState.dni) {
      dniError = "Debe introducir un dni valido";
      dniErrorMessage = "Debe introducir un dni valido";
    }

    if (!formState.latitud) {
      latitudError = "Debe introducir la latitud";
      latitudErrorMessage = "Debe introducir la latitud";
    }

    if (!formState.longitud) {
      longitudError = "Debe introducir la longitud";
      longitudErrorMessage = "Debe introducir la longitud";
    }

    // if (!formState.businessReason) {
    //   businessReasonError = "Debe introducir la razón del social";
    //   businessReasonErrorMessage = "Debe introducir la razón social";
    // }

    // if (!formState.businessName) {
    //   businessNameError = "Debe introducir el nombre del negocio";
    //   businessNameErrorMessage = "Debe introducir el nombre del negocio";
    // }

    // if (!formState.businessActivity) {
    //   businessActivityError = "Debe introducir la actividad del negocio";
    //   businessActivityErrorMessage = "Debe introducir la actividad del negocio";
    // }

    if (!formState.address) {
      addressError = "Debe introducir la dirección";
      addressErrorMessage = "Debe introducir la dirección";
    }

if (addressError || nameError || emailError || legalNameError || dniError || phoneError || addressError || latitudError || longitudError) {
  setFormState(formState => ({
    ...formState,
    nameError,
    emailError,
    nameErrorMessage,
    emailErrorMessage,
    addressError,
    addressErrorMessage,
    legalNameError,
    legalNameErrorMessage,
    dniError,
    dniErrorMessage,
    businessActivityError,
    businessActivityErrorMessage,
    businessNameError,
    businessNameErrorMessage,
    businessReasonError,
    businessReasonErrorMessage,
    latitudError,
    latitudErrorMessage,
    longitudError,
    longitudErrorMessage,
    phoneError,
    phoneErrorMessage

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
    let msg = "Franquicia creada exitosamente!!!";
    const isValid = validateForm();
    if(isValid){
      setLoading(true);
      let params = {
        "isActive": formState.isActive ? formState.isActive : true,
        "idfranchise": idfranchise,
        "name": formState.name,
      //  "legalName": formState.legalName,
        "email": formState.email,
        "phone": formState.phone,
        "address": formState.address,
        "dni": formState.dni,
        // "businessName": formState.businessName,
        // "businessReason": formState.businessReason,
        // "businessActivity": formState.businessActivity,
        "latitud": formState.latitud,
        "longitud": formState.longitud,
      }

      console.log(params);
      fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/createVenuesAdmin', {
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
              Add Venue
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
                  label="Email address"
                  name="email"
                  onChange={handleFieldChange}
                  value={formState.email}
                  variant="outlined"
                  error={formState.emailError}
                  helperText={formState.emailErrorMessage}
                />
              </Grid>
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
              {/* <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Legal Name"
                  name="legalName"
                  onChange={handleFieldChange}
                  value={formState.legalName}
                  variant="outlined"
                  error={formState.legalNameError}
                  helperText={formState.legalNameErrorMessage}
                />
              </Grid> */}
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  onChange={handleFieldChange}
                  value={formState.phone}
                  variant="outlined"
                  error={formState.phoneError}
                  helperText={formState.phoneErrorMessage}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">+56 9</InputAdornment>,
                  }}
                />
              </Grid>
              {/* <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Business Activity"
                  name="businessActivity"
                  onChange={handleFieldChange}
                  value={formState.businessActivity}
                  variant="outlined"
                  error={formState.businessActivityError}
                  helperText={formState.businessActivityErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Business Name"
                  name="businessName"
                  onChange={handleFieldChange}
                  value={formState.businessName}
                  variant="outlined"
                  error={formState.businessNameError}
                  helperText={formState.businessNameErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="businessReason"
                  name="businessReason"
                  onChange={handleFieldChange}
                  value={formState.businessReason}
                  variant="outlined"
                  error={formState.businessReasonError}
                  helperText={formState.businessReasonErrorMessage}
                />
              </Grid> */}
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Dni"
                  name="dni"
                  onChange={handleFieldChange}
                  value={formState.dni}
                  variant="outlined"
                  error={formState.dniError}
                  helperText={formState.dniErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Latitud"
                  name="latitud"
                  onChange={handleFieldChange}
                  value={formState.latitud}
                  variant="outlined"
                  error={formState.latitudError}
                  helperText={formState.latitudErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Longitud"
                  name="longitud"
                  onChange={handleFieldChange}
                  value={formState.longitud}
                  variant="outlined"
                  error={formState.longitudError}
                  helperText={formState.longitudErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  onChange={handleFieldChange}
                  value={formState.address}
                  variant="outlined"
                  error={formState.addressError}
                  helperText={formState.addressErrorMessage}
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
              <Grid
                item
                md={6}
                xs={12}
              >
                <Typography variant="h5">Active</Typography>
                <Switch
                  checked={formState.active}
                  color="secondary"
                  edge="start"
                  name="active"
                  onChange={handleFieldChange}
                  value={formState.active}
                />
              </Grid>
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

VenueAdd.displayName = 'VenueAdd';

VenueAdd.propTypes = {
  className: PropTypes.string,
  venue: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

VenueAdd.defaultProps = {
  open: false,
  onClose: () => { }
};

export default VenueAdd;
