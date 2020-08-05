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
import config from 'config';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import translate from 'translate';

const T = translate;

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

const EmployeeAdd = props => {
  const { open, onClose, employee, company, actualizar, centers, setLoading, className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    ...employee
  });

  
  if (!open) {
    return null;
  }

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

    // if(!formState.role){
    //   roleError = "Debe introducir un email valido";
    //   roleErrorMessage = "Debe introducir un role valido";
    // }

    if(!formState.phone){
      phoneError = "Debe introducir un email valido";
      phoneErrorMessage = "Debe introducir un role valido";
    }

    if(nameError || emailError || roleError){
      setFormState(formState => ({
        ...formState,
        nameError,emailError,passwordError,roleError,phoneError,
        nameErrorMessage,emailErrorMessage,passwordErrorMessage,roleErrorMessage,phoneErrorMessage
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

  const handleChangeCenter = async event => {
    event.persist();
        setFormState(formState => ({
          ...formState,
          'centerID':event.target.value,
          'centerName':event._targetInst.memoizedProps.children[0][0]
        }));      
    
  
  }

  const handleSave = (event) => {
    event.preventDefault();
    console.log(formState);
    let msg = "Usuarios creado con exito";
    const isValid = validateForm();
    if(isValid){
      setLoading(true);
      let params = {
        "active": formState.active ? formState.active : true,
        "name": formState.name,
        "email": formState.email,
        "phone": formState.phone,
        //"password": formState.password,
        "companyID":company.id,
        "centerID":formState.centerID,
        "companyName":company.name,
        "centerName":formState.centerName,
       // "role": formState.role
      }


      fetch(service+'createEmployeesAdmin', {
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
              {T('Agregar')} Usuario
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
                  label={T('Email address')}
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
                  label={T("Full Name")}
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
                  label={T("Role")}
                  name="role"
                  onChange={handleFieldChange}
                  value={formState.role}
                  variant="outlined"
                  error={formState.roleError}
                  helperText={formState.roleErrorMessage}
                />
              </Grid> */}
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Phone Number")}
                  name="phone"
                  onChange={handleFieldChange}
                  value={formState.phone}
                  variant="outlined"
                  error={formState.phoneError}
                  helperText={formState.phoneErrorMessage}
                  // InputProps={{
                  //   startAdornment: <InputAdornment position="start">+56 9</InputAdornment>,
                  // }}
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <InputLabel id="demo-simple-select-label">{T("Centro de costo")}</InputLabel>
                <Select
                  name="centerName"
                  value={formState.centerID}
                  onChange={handleChangeCenter}
                  style={{ width: "520px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {centers.map(item => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </Grid>
              {/* <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Password")}
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
                  label={T("Repeat Password")}
                  name="passwordRepeat"
                  type="password"
                  onChange={handleFieldChange}
                  value={formState.passwordRepeat}
                  variant="outlined"
                  error={formState.passwordRepeatError}
                  helperText={formState.passwordRepeatErrorMessage}
                />
              </Grid> */}
              <Grid item />
              <Grid
                item
                md={6}
                xs={12}
              >
                <Typography variant="h5">{T("active")}</Typography>
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

EmployeeAdd.displayName = 'EmployeeAdd';

EmployeeAdd.propTypes = {
  className: PropTypes.string,
  employee: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

EmployeeAdd.defaultProps = {
  open: false,
  onClose: () => { }
};

export default EmployeeAdd;
