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
import firebase from 'utils/firebase';
import geocode from 'utils/geocode';
//import { GeoPoint } from '@google-cloud/firestore';
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

const RestaurantAdd = props => {
  const { open, onClose, restaurant, cboCategories, cboRegion, cboAdministrators, actualizar, setLoading, className, ...rest } = props;

  const classes = useStyles();
  const [owt, setOwt] = React.useState(moment());
  const [cwt, setCwt] = React.useState(moment());
  const [owdt, setOwdt] = React.useState(moment());
  const [cwdt, setCwdt] = React.useState(moment());
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [selectEdge, setSelectEdge] = useState(null);
  const [calendarDate, setCalendarDate] = useState(moment());
  const [selectedDate, setSelectedDate] = React.useState(moment());
  const [cboDistrict, setCboDistrict] = React.useState([]);
  const [cboZones, setCboZones] = React.useState([]);
  const [directions, setDirections] = useState("");
  const [formState, setFormState] = useState({
    ...restaurant, cboDistrict,cboZones,
    owt,cwt,owdt,cwdt
  });

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
    let latitudeError = "";
    let longitudeError = "";
    let addressError = "";
    let dniError = "";
    let emailError = "";
    let passwordError = "";
    let passwordRepeatError = "";
    let roleError = "";
    let phoneError = "";
    let email = formState.email ? formState.email : "";
    let nameErrorMessage = "";
    let dniErrorMessage = "";
    let emailErrorMessage = "";
    let passwordErrorMessage = "";
    let passwordRepeatErrorMessage = "";
    let roleErrorMessage = "";
    let addressErrorMessage = "";
    let phoneErrorMessage = "";
    let latitudeErrorMessage = "";
    let longitudeErrorMessage = "";
    
    
    if(!formState.name){
      nameError = "Debe introducir un nombre";
      nameErrorMessage = "Debe introducir un nombre";
    }

    if(!formState.latitude){
      latitudeError = "Debe introducir una latitud";
      latitudeErrorMessage = "Debe introducir una latitud";
    }

    if(!formState.longitude){
      longitudeError = "Debe introducir una longitud";
      longitudeErrorMessage = "Debe introducir una longitud";
    }

    
    if(!formState.phone){
      phoneError = "Debe introducir un phone valido";
      phoneErrorMessage = "Debe introducir un phone valido";
    }

    if(!formState.address){
      addressError = "Debe introducir un address valido";
      addressErrorMessage = "Debe introducir un address valido";
    }

    if(nameError || phoneError){
      setFormState(formState => ({
        ...formState,
        nameError,emailError,phoneError,passwordRepeatError,dniError,addressError,
        nameErrorMessage,emailErrorMessage,phoneErrorMessage,dniErrorMessage,addressErrorMessage
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
  }

  const handleChangeRegion = async event => {
    event.persist();
    const regionRef = await firebase.firestore().collection('zones').doc(event.target.value)
    .collection('districts').get();

        setFormState(formState => ({
          ...formState,
          'regionID':event.target.value,
          'regionName':event._targetInst.memoizedProps.children[0][0],
          'cboDistrict': regionRef.docs.map(d => { return d.data() })
        }));      
  }

  const handleChangeDistrict = async event => {
    event.persist();
    const districtRef = await firebase.firestore().collection('zones').doc(formState.regionID)
    .collection('districts').doc(event.target.value).collection('zones').get();

        setFormState(formState => ({
          ...formState,
          'districtID':event.target.value,
          'districtName':event._targetInst.memoizedProps.children[0][0],
          'cboZones': districtRef.docs.map(d => { return d.data() })
        }));      
  }

  const handleChangeZone = async event => {
    event.persist();
    
        setFormState(formState => ({
          ...formState,
          'zoneID':event.target.value,
          'zoneName':event._targetInst.memoizedProps.children[0][0]
        }));      
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

  const handleDirectionsChange = event => {
    event.persist();
    geocode.direccion(event.target.value).then(item=>{
      setFormState(formState => ({
        ...formState,
        ['latitude']: item.lat,
        ['longitude']: item.lng,
        ['address']: event.target.value
      }));

    console.log(item);
    });
  };

  const handleSave = (event) => {
    event.preventDefault();
    console.log(formState);
    let msg = "Usuarios creado con exito";
    const isValid = validateForm();
    if(isValid){
      setLoading(true);
      
      let fecha1 = new Date(moment(endDate).format('YYYY-MM-DD').toString()+"T"+moment(owt).add('hours',4).format('HH:mm').toString()+":00Z");
      let fecha2 = new Date(moment(endDate).format('YYYY-MM-DD').toString()+"T"+moment(cwt).add('hours',4).format('HH:mm').toString()+":00Z");
      let fecha3 = new Date(moment(endDate).format('YYYY-MM-DD').toString()+"T"+moment(owdt).add('hours',4).format('HH:mm').toString()+":00Z");
      let fecha4 = new Date(moment(endDate).format('YYYY-MM-DD').toString()+"T"+moment(cwdt).add('hours',4).format('HH:mm').toString()+":00Z");
      
      let params = {
        "active": formState.active ? formState.active : true,
        "scheduledAllowed": formState.scheduledAllowed ? formState.scheduledAllowed : true,
        "name": formState.name,
        "starredBy": formState.administratorID ? formState.administratorID : '',
        "promoTag": formState.promoTag ? formState.promoTag : "",
        "averageDeliveryTime": +formState.averageDeliveryTime,
        "openWeekTime": fecha1,
        "closeWeekTime": fecha2,
        "openWeekendTime": fecha3,
        "closeWeekendTime": fecha4,
        "phone": formState.phone,
        "categoryName": formState.categoryName,
        "categoryID": formState.categoryID,
        "regionName": formState.regionName,
        "regionID": formState.regionID,
        "districtName": formState.districtName,
        "districtID": formState.districtID,
        "zoneName": formState.zoneName,
        "zoneID": formState.zoneID,
        "address": formState.address,
        "lat": +formState.latitude,
        "long": +formState.longitude
      }

      console.log(params);
      //return;
      fetch(service+'createPlacesAdmin', {
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
  
  geocode.direccion("Torre eiffel").then(item=>{
    
  console.log(item);
  });

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
              {T('Agregar')} Restaurant
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
                  label={T("Name")}
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
                <InputLabel id="demo-simple-select-label">{T("Región")}</InputLabel>
                <Select
                  name="regionName"
                  value={formState.regionID}
                  onChange={handleChangeRegion}
                  style={{ width: "520px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {cboRegion.map(item => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <InputLabel id="demo-simple-select-label">{T("Districts")}</InputLabel>
                <Select
                  name="districtName"
                  value={formState.districtID}
                  onChange={handleChangeDistrict}
                  style={{ width: "520px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {formState.cboDistrict.map(item => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <InputLabel id="demo-simple-select-label">{T("Zones")}</InputLabel>
                <Select
                  name="zoneName"
                  value={formState.zoneID}
                  onChange={handleChangeZone}
                  style={{ width: "520px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {formState.cboZones.map(item => (
                    <MenuItem value={item.id}>{item.zone}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid
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
              </Grid>
              <Grid
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
              </Grid>
              {/* <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("language")}
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
              {/* <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Promo Tag")}
                  name="promoTag"
                  onChange={handleFieldChange}
                  value={formState.promoTag}
                  variant="outlined"
                  error={formState.promoTagError}
                  helperText={formState.promoTagErrorMessage}
                />
              </Grid> */}
              {/* <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Latitude")}
                  name="latitude"
                  onChange={handleFieldChange}
                  value={formState.latitude}
                  variant="outlined"
                  error={formState.latitudeError}
                  helperText={formState.latitudeErrorMessage}
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
                  label={T("Longitude")}
                  name="longitude"
                  onChange={handleFieldChange}
                  value={formState.longitude}
                  variant="outlined"
                  error={formState.longitudeError}
                  helperText={formState.longitudeErrorMessage}
                  // InputProps={{
                  //   startAdornment: <InputAdornment position="start">+56 9</InputAdornment>,
                  // }}
                />
              </Grid> */}
              <Grid
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
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("address")}
                  name="address"
                  onChange={handleDirectionsChange}
                  value={formState.address}
                  variant="outlined"
                  error={formState.addressError}
                  helperText={formState.addressErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T("Average Delivery Time")}
                  name="averageDeliveryTime"
                  onChange={handleFieldChange}
                  value={formState.averageDeliveryTime}
                  variant="outlined"
                  error={formState.averageDeliveryTimeError}
                  helperText={formState.averageDeliveryTimeErrorMessage}
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
              <Grid
                item
                md={6}
                xs={6}
              >
                <Typography variant="h5">{T("scheduledAllowed")}</Typography>
                <Switch
                  checked={formState.scheduledAllowed}
                  color="secondary"
                  edge="start"
                  name="scheduledAllowed"
                  onChange={handleFieldChange}
                  value={formState.scheduledAllowed}
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

RestaurantAdd.displayName = 'RestaurantAdd';

RestaurantAdd.propTypes = {
  className: PropTypes.string,
  restaurant: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

RestaurantAdd.defaultProps = {
  open: false,
  onClose: () => { }
};

export default RestaurantAdd;
