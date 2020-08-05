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
  colors,
  ButtonGroup
} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import config from 'config';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import translate from 'translate';
import moment from 'moment';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { DatePicker } from '@material-ui/pickers';
import CalendarTodayIcon from '@material-ui/icons/CalendarTodayOutlined';
import tiempo from 'utils/tiempo';
import configModel from 'models/Company';
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
  roote: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
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

const CompanyAdd = props => {
  const { open, onClose, company, cboCategories, cboCenters, cboAdministrators, actualizar, setLoading, className, ...rest } = props;

  const classes = useStyles();
  const [chipData, setChipData] = useState([]);
  const [owt, setOwt] = React.useState(moment());
  const [cwt, setCwt] = React.useState(moment());
  const [owdt, setOwdt] = React.useState(moment());
  const [cwdt, setCwdt] = React.useState(moment());
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [selectEdge, setSelectEdge] = useState(null);
  const [places, setPlaces] = useState([]);
  const [calendarDate, setCalendarDate] = useState(moment());
  const [selectedDate, setSelectedDate] = React.useState(moment());
  const [formState, setFormState] = useState({
    ...company,
    owt,cwt,owdt,cwdt
  });

  const handleChangeCenter = async event => {
    event.persist();
        setFormState(formState => ({
          ...formState,
          'centerID':event.target.value,
          'centerName':event._targetInst.memoizedProps.children[0][0],
          'places': [...places, event.target.value]
        }));
    
        setChipData(
          chipData => [...chipData,{key: event.target.value, label: event._targetInst.memoizedProps.children[0][0]}]
          );
    
        setPlaces(
            places => [...places, event.target.value]
        );
    
    
    
  
  }

  const handleOWTChange = date => {
    setOwt(date);
    setFormState(formState => ({
      ...formState,
      owt:date
    }));
    console.log(new Date(owt));
  };

  const handleCWTChange = date => {
    setCwt(date);
    setFormState(formState => ({
      ...formState,
      cwt:date
    }));
  };

  const handleOWDTChange = date => {
    setOwdt(date);
    setFormState(formState => ({
      ...formState,
      owdt:date
    }));
  };

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleCWDTChange = date => {
    setCwdt(date);
    setFormState(formState => ({
      ...formState,
      cwdt:date
    }));
  };
  
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleCalendarOpen = edge => {
    setSelectEdge(edge);
  };

  const handleCalendarChange = date => {
    setCalendarDate(date);
  };

  const handleCalendarClose = () => {
    setCalendarDate(moment());
    setSelectEdge(null);
  };

  const handleCalendarAccept = date => {
    setCalendarDate(moment());
    if (selectEdge === 'start') {
      setStartDate(date);

      if (moment(date).isAfter(endDate)) {
        setEndDate(date);
      }
    } else {
      setEndDate(date);

      if (moment(date).isBefore(startDate)) {
        setStartDate(date);
      } else {
        setStartDate(date);
      }
    }

    setSelectEdge(null);
  };

  const openn = Boolean(selectEdge);

  
  if (!open) {
    return null;
  }

  const validateForm = () => {
    let nameError = "";
    let contactoError = "";
    let rutError = "";
    let emailError = "";
    let reasonError = "";
    let passwordRepeatError = "";
    let roleError = "";
    let phoneError = "";
    let email = formState.email ? formState.email : "";
    let nameErrorMessage = "";
    let rutErrorMessage = "";
    let emailErrorMessage = "";
    let reasonErrorMessage = "";
    let passwordRepeatErrorMessage = "";
    let roleErrorMessage = "";
    let contactoErrorMessage = "";
    let phoneErrorMessage = "";
    
    if(!formState.name){
      nameError = "Debe introducir un nombre";
      nameErrorMessage = "Debe introducir un nombre";
    }

    
    if(!formState.phone){
      phoneError = "Debe introducir un phone valido";
      phoneErrorMessage = "Debe introducir un phone valido";
    }

    if(!formState.contacto){
      contactoError = "Debe introducir un contacto valido";
      contactoErrorMessage = "Debe introducir un contacto valido";
    }

    if(nameError || phoneError || reasonError){
      setFormState(formState => ({
        ...formState,
        nameError,emailError,phoneError,reasonError,rutError,contactoError,
        nameErrorMessage,emailErrorMessage,phoneErrorMessage,rutErrorMessage,reasonErrorMessage,contactoErrorMessage
      }));
      return false;
    }
    return true;
  }

  const handleChangeCategory = async event => {
    event.persist();
    let categories = [];
        setFormState(formState => ({
          ...formState,
          'categoryID':event.target.value,
          'categoryName':event._targetInst.memoizedProps.children[0][0]
        }));      
    
  
    console.log(formState);
  }

  const handleChangeAdministrator = async event => {
    event.persist();
        setFormState(formState => ({
          ...formState,
          'administratorID':event.target.value,
          'administratorName':event._targetInst.memoizedProps.children[0][0]
        }));      
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
    let msg = "Empresa creada con exito";
    const isValid = validateForm();
    if(isValid){
      setLoading(true);
      
      let params = {
        "active": formState.isActive ? formState.isActive : true,
        "name": formState.name,
        "reason": formState.reason,
        "rut": formState.rut,
        "phone": formState.phone,
        "email": formState.email,
        "contactName": formState.contacto,
        "companyCenters":chipData.map((item) => {return item.key}),
        "address": "",
      }

      console.log(params);
      //return;
      fetch(service+'createCompaniesAdmin', {
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
              {`${configModel.headerAdd}`}
            </Typography>
            <Grid
              className={classes.container}
              container
              spacing={3}
            >
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Company Name")}
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
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Reason")}
                  name="reason"
                  onChange={handleFieldChange}
                  value={formState.reason}
                  variant="outlined"
                  error={formState.reasonError}
                  helperText={formState.reasonErrorMessage}
                />
              </Grid>
              {/* <Grid
                item
                md={12}
                xs={12}
              >
                <InputLabel id="demo-simple-select-label">{T("Categories")}</InputLabel>
                <Select
                  name="categoryName"
                  value={formState.categoryID}
                  onChange={handleChangeCategory}
                  style={{ width: "520px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {cboCategories.map(item => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </Grid> */}
              {/* <Grid
                item
                md={12}
                xs={12}
              >
                <InputLabel id="demo-simple-select-label">{T("Administrador")}</InputLabel>
                <Select
                  name="administratorName"
                  value={formState.administratorID}
                  onChange={handleChangeAdministrator}
                  style={{ width: "520px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {cboAdministrators.map(item => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </Grid> */}
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Rut")}
                  name="rut"
                  onChange={handleFieldChange}
                  value={formState.rut}
                  variant="outlined"
                  error={formState.rutError}
                  helperText={formState.rutErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("phone number")}
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
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Contacto")}
                  name="contacto"
                  onChange={handleFieldChange}
                  value={formState.contacto}
                  variant="outlined"
                  error={formState.contactoError}
                  helperText={formState.contactoErrorMessage}
                />
              </Grid>
              {/* <Grid
                className={classes.dates}
                item
                lg={6}
                xs={12}
              >
                <FormLabel component="legend">Open Week Time</FormLabel>
                <ButtonGroup variant="contained" fullWidth>
                  <Button>
                    <KeyboardTimePicker
                      id="time-picker"
                      value={formState.owt}
                      onChange={handleOWTChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change time',
                      }}
                      variant="dialog"
                    />
                  </Button>
                </ButtonGroup>
              </Grid> 
              <Grid
                className={classes.dates}
                item
                lg={6}
                xs={12}
              >
                <FormLabel component="legend">Close Week Time</FormLabel>
                <ButtonGroup variant="contained" fullWidth>
                  <Button>
                    <KeyboardTimePicker
                      id="time-picker"
                      value={formState.cwt}
                      onChange={handleCWTChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change time',
                      }}
                      variant="dialog"
                    />
                  </Button>
                </ButtonGroup>
              </Grid>
              <Grid
                className={classes.dates}
                item
                lg={6}
                xs={12}
              >
                <FormLabel component="legend">Open Weekend Time</FormLabel>
                <ButtonGroup variant="contained" fullWidth>
                  <Button>
                    <KeyboardTimePicker
                      id="time-picker"
                      value={formState.owdt}
                      onChange={handleOWDTChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change time',
                      }}
                      variant="dialog"
                    />
                  </Button>
                </ButtonGroup>
              </Grid>
              <Grid
                className={classes.dates}
                item
                lg={6}
                xs={12}
              >
                <FormLabel component="legend">Close Weekend Time</FormLabel>
                <ButtonGroup variant="contained" fullWidth>
                  <Button>
                    <KeyboardTimePicker
                      id="time-picker"
                      value={formState.cwdt}
                      onChange={handleCWDTChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change time',
                      }}
                      variant="dialog"
                    />
                  </Button>
                </ButtonGroup>
              </Grid> */}
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Email")}
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
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("role")}
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
                <Typography variant="h5">{T("Agree terms")}</Typography>
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
                md={12}
                xs={12}
                hidden={formState.global ? true : false}
              >
                    <Paper component="ul" className={classes.roote}>
                {chipData.map((data) => {
                  let icon;

                  if (data.label === 'React') {
                    icon = <TagFacesIcon />;
                  }

                  return (
                    <li key={data.key}>
                      <Chip
                        icon={icon}
                        label={data.label}
                        onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                        className={classes.chip}
                      />
                    </li>
                  );
                })}
                </Paper>
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
                hidden={formState.global ? true : false }
              >
                <InputLabel id="demo-simple-select-label">{T("center")}</InputLabel>
                <Select
                  name="centerName"
                  value={formState.centerID}
                  onChange={handleChangeCenter}
                  style={{ width: "520px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {cboCenters.map(item => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid
                item
                md={6}
                xs={6}
              >
                <Typography variant="h5">{T("Estado")}</Typography>
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
                  name="contact1"
                  onChange={handleFieldChange}
                  value={formState.contact1}
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
                  name="contact2"
                  onChange={handleFieldChange}
                  value={formState.contact2}
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

CompanyAdd.displayName = 'CompanyAdd';

CompanyAdd.propTypes = {
  className: PropTypes.string,
  company: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

CompanyAdd.defaultProps = {
  open: false,
  onClose: () => { }
};

export default CompanyAdd;
