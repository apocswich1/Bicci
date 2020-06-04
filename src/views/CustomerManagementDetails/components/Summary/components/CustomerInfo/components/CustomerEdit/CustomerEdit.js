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
import translate from 'translate';
import config from 'config';

const t = translate;
const service = config.servicio;

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

const CustomerEdit = props => {
  const { open, onClose, customer, actualizar, className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    ...customer
  });

  if (!open) {
    return null;
  }

  const handleFieldChange = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
    }));
  };


  const validateForm = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    let passwordRepeatError = "";
    let roleError = "";
    let phoneError = "";
    let email = formState.email ? formState.email : "";
    let nameErrorMessage = "";
    let emailErrorMessage = "";
    let passwordErrorMessage = "";
    let passwordRepeatErrorMessage = "";
    let roleErrorMessage = "";
    let phoneErrorMessage = "";
    let languageErrorMessage = "";
    let languageError = "";
    
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

    /*
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
    */

    if(!formState.role){
      roleError = "Debe introducir un email valido";
      roleErrorMessage = "Debe introducir un role valido";
    }

    if(!formState.phone){
      phoneError = "Debe introducir un telefono valido";
      phoneErrorMessage = "Debe introducir un telefono valido";
    }

    if(!formState.language || (formState.language=="")){
      languageError = "Debe introducir un lenguage valido";
      languageErrorMessage = "Debe introducir un lenguage valido";
    }

    if(nameError || emailError || passwordError || roleError || languageError || roleError || phoneError){
      setFormState(formState => ({
        ...formState,
        nameError,emailError,passwordError,roleError,phoneError,passwordRepeatError,languageError,
        nameErrorMessage,emailErrorMessage,passwordErrorMessage,passwordRepeatErrorMessage,roleErrorMessage,phoneErrorMessage,languageErrorMessage
      }));
      return false;
    }
    return true;
  }

  const handleSave = () => {
    //event.preventDefault();
    //console.log(formState);
    const isValid = validateForm();
    let msg = "Usuario actualizado exitosamente!";
    if(isValid){

      let params = { 
      "uid":customer.uid, 
      "active":formState.active,
      "name":formState.name,
      "role":formState.role,
      "email":formState.email,
      "phone":formState.phone,
      "language":formState.language ? formState.language : "es",
      "agree_terms":formState.agree_terms ? formState.agree_terms : true
    }

    console.log(params);
    
    fetch(service+'userUpdateAdmin', {
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
    onClose();
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
              {t("Edit")} {t("user")}
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
                  label={t("Full name")}
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
                  label={t("Email address")}
                  name="email"
                  onChange={handleFieldChange}
                  value={formState.email}
                  variant="outlined"
                  error={formState.emailError}
                  helperText={formState.emailErrorMessage}
                />
              </Grid>
              {/* <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("language")}
                  name="language"
                  onChange={handleFieldChange}
                  value={formState.language}
                  variant="outlined"
                  error={formState.languageError}
                  helperText={formState.languageErrorMessage}
                />
              </Grid> */}
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("phone number")}
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
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("role")}
                  name="role"
                  onChange={handleFieldChange}
                  value={formState.role}
                  variant="outlined"
                  error={formState.roleError}
                  helperText={formState.roleErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={6}
              >
                <Typography variant="h5">{t("Agree terms")}</Typography>
                <Switch
                  checked={formState.agree_terms}
                  color="secondary"
                  edge="start"
                  name="agree_terms"
                  onChange={handleFieldChange}
                  value={formState.agree_terms}
                />
              </Grid> */}
              <Grid
                item
                md={6}
                xs={6}
              >
                <Typography variant="h5">{t("Estado")}</Typography>
                <Switch
                  checked={formState.active}
                  color="secondary"
                  edge="start"
                  name="active"
                  onChange={handleFieldChange}
                  value={formState.active}
                />
              </Grid>
              {/*<Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="State/Region"
                  name="state"
                  onChange={handleFieldChange}
                  value={formState.state}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleFieldChange}
                  value={formState.country}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Address 1"
                  name="address1"
                  onChange={handleFieldChange}
                  value={formState.address1}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Address 2"
                  name="address2"
                  onChange={handleFieldChange}
                  value={formState.address2}
                  variant="outlined"
                />
              </Grid>*/}
              <Grid item />
              {/*<Grid
                item
                md={6}
                xs={12}
              >
                <Typography variant="h5">Discounted Prices</Typography>
                <Typography variant="body2">
                  This will give the user discountedprices for all products
                </Typography>
                <Switch
                  checked={formState.discountedPrices}
                  color="secondary"
                  edge="start"
                  name="discountedPrices"
                  onChange={handleFieldChange}
                  value={formState.discountedPrices}
                />
              </Grid>*/}
            </Grid>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button
              onClick={onClose}
              variant="contained"
            >
              {t("close")}
            </Button>
            <Button
              className={classes.saveButton}
              //onClick={onClose}
              onClick={handleSave}
              variant="contained"
            >
              {t("save")}
            </Button>
          </CardActions>
        </form>
      </Card>
    </Modal>
  );
};

CustomerEdit.displayName = 'CustomerEdit';

CustomerEdit.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

CustomerEdit.defaultProps = {
  open: false,
  onClose: () => {}
};

export default CustomerEdit;
