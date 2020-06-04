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

const WasherAdd = props => {
  const { open, onClose, washer,venueID,idfranchise,franchiseName,venueName, actualizar, setLoading, className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    ...washer
  });

  
  if (!open) {
    return null;
  }

  const validateForm = () => {
    let nameError = "";
    let dniError = "";
    let emailError = "";
    let passwordError = "";
    let passwordRepeatError = "";
    let rolError = "";
    let phoneError = "";
    let email = formState.email ? formState.email : "";
    let nameErrorMessage = "";
    let dniErrorMessage = "";
    let emailErrorMessage = "";
    let passwordErrorMessage = "";
    let passwordRepeatErrorMessage = "";
    let rolErrorMessage = "";
    let phoneErrorMessage = "";
    
    if(!formState.name){
      nameError = "Debe introducir un nombre";
      nameErrorMessage = "Debe introducir un nombre";
    }

    if(!email.includes('@')){
        emailError = "Debe introducir un email valido";
        emailErrorMessage = "Debe introducir un email valido";
    }

    if(!formState.email){
      emailError = "Debe introducir un email valido";
      emailErrorMessage = "Debe introducir un email";
    }

    if(!formState.password){
      passwordError = "Debe introducir un password valido";
      passwordErrorMessage = "Debe introducir un password valido";
    }

    if(!formState.passwordRepeat){
      passwordRepeatError = "Debe introducir la confirmación del password";
      passwordRepeatErrorMessage = "Debe introducir la confirmación del password";
    }

    if(formState.passwordRepeat != formState.password){
      passwordRepeatError = "error";
      passwordRepeatErrorMessage = "Los password no coinciden, verifique";
      passwordError = "error";
      passwordErrorMessage = "Los password no coinciden, verifique";
    }

    if(!formState.dni){
      dniError = "Debe introducir un dni valido";
      dniErrorMessage = "Debe introducir un dni valido";
    }

/*    if(!formState.rol){
      rolError = "Debe introducir un email valido";
      rolErrorMessage = "Debe introducir un rol valido";
    }*/

    if(!formState.phone){
      phoneError = "Debe introducir un email valido";
      phoneErrorMessage = "Debe introducir un rol valido";
    }

    if(nameError || emailError || passwordError || dniError){
      setFormState(formState => ({
        ...formState,
        nameError,emailError,passwordError,dniError,phoneError,passwordRepeatError,
        nameErrorMessage,emailErrorMessage,passwordErrorMessage,passwordRepeatErrorMessage,dniErrorMessage,phoneErrorMessage
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
    let msg = "prowasher creado con exito";
    const isValid = validateForm();
    if(isValid){
      setLoading(true);
      let params = {
        "active": formState.active ? formState.active : true,
        "name": formState.name,
        "email": formState.email,
        "phone": formState.phone,
        "password": formState.password,
        "dni": formState.dni,
        "franchiseID":idfranchise,
        "franchiseName":franchiseName,
        "venueID":venueID,
        "venueName":venueName
      }

      console.log(params);
     fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/createWashersAdmin', {
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
              Add Prowasher
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
                  label="Full name"
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
                  label="Phone number"
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
              <Grid
                item
                md={6}
                xs={12}
              >
                <Typography variant="h5">active</Typography>
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

WasherAdd.displayName = 'WasherAdd';

WasherAdd.propTypes = {
  className: PropTypes.string,
  washer: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

WasherAdd.defaultProps = {
  open: false,
  onClose: () => { }
};

export default WasherAdd;
