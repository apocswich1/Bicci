import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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

const t = translate;
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

const FranchiseAdd = props => {
  const { open, onClose, franchise, actualizar, setLoading, className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    ...franchise
  });

  const session = useSelector(state => state.session);
  console.log(session);

  if (!open) {
    return null;
  }

  const validateForm = () => {
    let nameError = "";
    let emailError = "";
    let email = formState.email ? formState.email : "";
    let nameErrorMessage = "";
    let emailErrorMessage = "";
    let legalNameError = "";
    let legalNameErrorMessage = "";
    let fantasyNameError = "";
    let fantasyNameErrorMessage = "";
    let dniError = "";
    let dniErrorMessage = "";
    let businessActivityError = "";
    let businessActivityErrorMessage = "";
    let businessNameError = "";
    let businessNameErrorMessage = "";
    let phoneError = "";
    let phoneErrorMessage = "";
    let passwordError = "";
    let passwordRepeatError = "";
    let passwordErrorMessage = "";
    let passwordRepeatErrorMessage = "";

    if (!formState.name) {
      nameError = "Debe introducir un nombre";
      nameErrorMessage = "Debe introducir un nombre";
    }

    if (!formState.legalName) {
      legalNameError = "Debe introducir un nombre legal valido";
      legalNameErrorMessage = "Debe introducir nombre legal";
    }

    if (!formState.fantasyName) {
      fantasyNameError = "Debe introducir un nombre de fantasía valido";
      fantasyNameErrorMessage = "Debe introducir nombre de fantasía";
    }


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

    if (!formState.businessName) {
      businessNameError = "Debe introducir el nombre del negocio";
      businessNameErrorMessage = "Debe introducir el nombre del negocio";
    }

    if (!formState.businessActivity) {
      businessActivityError = "Debe introducir la actividad del negocio";
      businessActivityErrorMessage = "Debe introducir la actividad del negocio";
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

if (nameError || emailError || legalNameError || dniError || phoneError || businessActivityError || businessNameError || fantasyNameError || passwordError) {
  setFormState(formState => ({
    ...formState,
    nameError,
    emailError,
    nameErrorMessage,
    emailErrorMessage,
    legalNameError,
    legalNameErrorMessage,
    fantasyNameError,
    fantasyNameErrorMessage,
    dniError,
    dniErrorMessage,
    businessActivityError,
    businessActivityErrorMessage,
    businessNameError,
    businessNameErrorMessage,
    phoneError,
    phoneErrorMessage,
    passwordRepeatError,
    passwordError,
    passwordErrorMessage,
    passwordRepeatErrorMessage

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
        "name": formState.name,
        "legalName": formState.legalName,
        "email": formState.email,
        "password": formState.password,
        "phone": formState.phone,
        "dni": formState.dni,
        "businessName": formState.businessName,
        "businessActivity": formState.businessActivity,
        "fantasyName": formState.fantasyName,
        "rol": "FRANCHISE"
      }

      fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/createFranchisesAdmin', {
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
              {t("add")} Franchise
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
                  label={t("email address")}
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
                  label={t("name")}
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
                  label={t("legal name")}
                  name="legalName"
                  onChange={handleFieldChange}
                  value={formState.legalName}
                  variant="outlined"
                  error={formState.legalNameError}
                  helperText={formState.legalNameErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("fantasy name")}
                  name="fantasyName"
                  onChange={handleFieldChange}
                  value={formState.fantasyName}
                  variant="outlined"
                  error={formState.fantasyNameError}
                  helperText={formState.fantasyNameErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("phone")}
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
                  label={t("business activity")}
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
                  label={t("business name")}
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
                  label={t("dni")}
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
                  label={t("password")}
                  name="password"
                  type="password"
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
                  label={t("repeat password")}
                  name="passwordRepeat"
                  type="password"
                  onChange={handleFieldChange}
                  value={formState.passwordRepeat}
                  variant="outlined"
                  error={formState.passwordRepeatError}
                  helperText={formState.passwordRepeatErrorMessage}
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
                <Typography variant="h5">{t("isactive")}</Typography>
                <Switch
                  checked={formState.isActive}
                  color="secondary"
                  edge="start"
                  name="isActive"
                  onChange={handleFieldChange}
                  value={formState.isActive}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button
              onClick={onClose}
              variant="contained"
            >
              {t("Close")}
            </Button>
            <Button
              className={classes.saveButton}
              onClick={handleSave}
              variant="contained"
            >
              {t("Save")}
            </Button>
          </CardActions>
        </form>
      </Card>
    </Modal>
  );
};

FranchiseAdd.displayName = 'FranchiseAdd';

FranchiseAdd.propTypes = {
  className: PropTypes.string,
  franchise: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

FranchiseAdd.defaultProps = {
  open: false,
  onClose: () => { }
};

export default FranchiseAdd;
