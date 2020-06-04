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

const FranchiseEdit = props => {
  const { open, onClose, franchise, actualizar, className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    ...franchise
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

if (nameError || emailError || legalNameError || dniError || phoneError || businessActivityError || businessNameError || fantasyNameError) {
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
    phoneErrorMessage

  }));
      return false;
    }
    return true;
  }

  const handleSave = () => {
  //  event.preventDefault();
    console.log(formState);
    const isValid = validateForm();
    let msg = "Franquicia actualizado exitosamente!";
    if(isValid){

      let params = {
        "id": formState.id,
        "name": formState.name,
        "legalName": formState.legalName,
        "email": formState.email,
        "phone": formState.phone,
        "dni": formState.dni,
        "businessName": formState.businessName,
        "businessActivity": formState.businessActivity,
        "fantasyName": formState.fantasyName,
      }

    console.log(params);
    
    fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/franchiseUpdateAdmin', {
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
              {t("edit")} {t("franchise")}
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
                  label={t("full name")}
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
                  label={t("Legal name")}
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
                  label={t("Fantasy name")}
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
              {/*<Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Language"
                  name="language"
                  onChange={handleFieldChange}
                  value={formState.language}
                  variant="outlined"
                  error={formState.languageError}
                  helperText={formState.languageErrorMessage}
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
                md={12}
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
                xs={6}
              >
                <Typography variant="h5">Agree Terms</Typography>
                <Switch
                  checked={formState.agree_terms}
                  color="secondary"
                  edge="start"
                  name="agree_terms"
                  onChange={handleFieldChange}
                  value={formState.agree_terms}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={6}
              >
                <Typography variant="h5">isActive</Typography>
                <Switch
                  checked={formState.isActive}
                  color="secondary"
                  edge="start"
                  name="isActive"
                  onChange={handleFieldChange}
                  value={formState.isActive}
                />
              </Grid>
              <Grid
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
                  This will give the franchise discountedprices for all products
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

FranchiseEdit.displayName = 'FranchiseEdit';

FranchiseEdit.propTypes = {
  className: PropTypes.string,
  franchise: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

FranchiseEdit.defaultProps = {
  open: false,
  onClose: () => {}
};

export default FranchiseEdit;
