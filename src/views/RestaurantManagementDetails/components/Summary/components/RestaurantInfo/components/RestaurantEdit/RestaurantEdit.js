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
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import translate from 'translate';
import config from 'config';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import moment from 'moment';
import tiempo from 'utils/tiempo';
import firebase from 'utils/firebase';
import geocode from 'utils/geocode';

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

const RestaurantEdit = props => {
  const { open, onClose, restaurant, cboCategories, cboRegion, cboAdministrators, actualizar, className, ...rest } = props;

  const classes = useStyles();
  const [owt, setOwt] = React.useState(moment(new Date(restaurant.openWeekTime._seconds * 1000)));
  const [cwt, setCwt] = React.useState(moment(new Date(restaurant.closeWeekTime._seconds * 1000)));
  const [owdt, setOwdt] = React.useState(moment(new Date(restaurant.openWeekendTime._seconds * 1000)));
  const [cwdt, setCwdt] = React.useState(moment(new Date(restaurant.closeWeekendTime._seconds * 1000)));
  const [startDate, setStartDate] = useState(moment(new Date(restaurant.openWeekTime._seconds * 1000)));
  const [endDate, setEndDate] = useState(moment());
  const [cboZones, setCboZones] = useState([]);
  const [cboDistrict, setCboDistrict] = useState([]);
  const [selectEdge, setSelectEdge] = useState(null);
  const [latitude, setLatitude] = useState(restaurant.location._latitude);
  const [longitude, setLongitude] = useState(restaurant.location._longitude);
  const [calendarDate, setCalendarDate] = useState(moment());
  const [administratorID, setAdministratorID] = useState(restaurant.starredBy ? restaurant.starredBy[0] : "");
  const [selectedDate, setSelectedDate] = React.useState(moment(restaurant.openWeekTime));
  const [formState, setFormState] = useState({
    ...restaurant,administratorID,cboDistrict,cboZones,
    owt,cwt,owdt,cwdt,latitude,longitude
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

  const handleChangeCategory = async event => {
    event.persist();
    let categories = [];
    setFormState(formState => ({
      ...formState,
      'categoryID': event.target.value,
      'categoryName': event._targetInst.memoizedProps.children[0][0]
    }));


    console.log(formState);
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

  const handleDirectionsChange = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
    }));
    geocode.direccion(event.target.value).then(item=>{
      setFormState(formState => ({
        ...formState,
        ['latitude']: item.lat,
        ['longitude']: item.lng,
        [event.target.name]: event.target.value
      }));

    console.log(item);
    });
  };
  

  const handleChangeAdministrator = async event => {
    event.persist();
        setFormState(formState => ({
          ...formState,
          'administratorID':event.target.value,
          'administratorName':event._targetInst.memoizedProps.children[0][0]
        }));      
  }


  const validateForm = () => {
    let nameError = "";
    let promoTagError = "";
    let addressError = "";
    let phoneError = "";
    let nameErrorMessage = "";
    let emailErrorMessage = "";
    let phoneErrorMessage = "";
    let addressErrorMessage = "";
    let promoTagErrorMessage = "";
    let latitudeErrorMessage = "";
    let longitudeErrorMessage = "";
    let latitudeError = "";
    let longitudeError = "";

    if (!formState.name) {
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

    if (!formState.address) {
      addressError = "Debe introducir un address valido";
      addressErrorMessage = "Debe introducir un address";
    }

    if (!formState.promoTag) {
      promoTagError = "Debe introducir un tag valido";
      promoTagErrorMessage = "Debe introducir un tag valido";
    }

    if (!formState.phone) {
      phoneError = "Debe introducir un telefono valido";
      phoneErrorMessage = "Debe introducir un telefono valido";
    }

    if (nameError || promoTagError || phoneError || addressError) {
      setFormState(formState => ({
        ...formState,
        nameError, phoneError, addressError, promoTagError,
        nameErrorMessage, phoneErrorMessage, promoTagErrorMessage, addressErrorMessage
      }));
      return false;
    }
    return true;
  }

  const handleSave = () => {

   
    const isValid = validateForm();
    let msg = "Restaurant actualizado exitosamente!";
    if (isValid) {

      let fecha1 = new Date(moment(endDate).format('YYYY-MM-DD').toString()+"T"+moment(owt).add('hours',4).format('HH:mm').toString()+":00Z");
      let fecha2 = new Date(moment(endDate).format('YYYY-MM-DD').toString()+"T"+moment(cwt).add('hours',4).format('HH:mm').toString()+":00Z");
      let fecha3 = new Date(moment(endDate).format('YYYY-MM-DD').toString()+"T"+moment(owdt).add('hours',4).format('HH:mm').toString()+":00Z");
      let fecha4 = new Date(moment(endDate).format('YYYY-MM-DD').toString()+"T"+moment(cwdt).add('hours',4).format('HH:mm').toString()+":00Z");
      
      let params = {
        "id": restaurant.id,
        "active": formState.active ? formState.active : false,
        "scheduledAllowed": formState.scheduledAllowed ? formState.scheduledAllowed : false,
        "starredBy": formState.administratorID ? formState.administratorID : '',
        "name": formState.name,
        "promoTag": formState.promoTag ? formState.promoTag : "",
        "averageDeliveryTime": +formState.averageDeliveryTime,
        "openWeekTime": fecha1,
        "closeWeekTime": fecha2,
        "openWeekendTime": fecha3,
        "closeWeekendTime": fecha4,
        "phone": formState.phone,
        "categoryName": formState.categoryName,
        "categoryID": formState.categoryID,
        "address": formState.address,
        "lat": +formState.latitude,
        "regionName": formState.regionName,
        "regionID": formState.regionID,
        "districtName": formState.districtName,
        "districtID": formState.districtID,
        "zoneName": formState.zoneName,
        "zoneID": formState.zoneID,
        "long": +formState.longitude
      }

      console.log(params);
//return;
      fetch(service + 'placeUpdateAdmin', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify(params)
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body);
          actualizar(msg, body);
        });
      }).catch(function (error) {
        // Error :(
        console.log(error)
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
              {t("Edit")} {t("Restaurant")}
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
                  label={t("Name")}
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
                <InputLabel id="demo-simple-select-label">{t("Región")}</InputLabel>
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
                <InputLabel id="demo-simple-select-label">{t("Districts")}</InputLabel>
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
                <InputLabel id="demo-simple-select-label">{t("Zones")}</InputLabel>
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
                <InputLabel id="demo-simple-select-label">{t("Categories")}</InputLabel>
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
                <InputLabel id="demo-simple-select-label">{t("Administrador")}</InputLabel>
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
                  label={t("Promo Tag")}
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
              > */}
                <TextField
                type="hidden"
                  name="latitude"
                  value={formState.latitude}
                  // InputProps={{
                  //   startAdornment: <InputAdornment position="start">+56 9</InputAdornment>,
                  // }}
                />
              {/* </Grid>
              <Grid
                item
                md={6}
                xs={12}
              > */}
                <TextField
                type="hidden"
                  name="longitude"
                  value={formState.longitude}
                  // InputProps={{
                  //   startAdornment: <InputAdornment position="start">+56 9</InputAdornment>,
                  // }}
                />
              {/* </Grid> */}
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
              {/* <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  id="datetime-local"
                  onChange={handleFieldChange}
                  label="Open Week Time"
                  type="datetime-local"
                  defaultValue={owt}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  id="datetime-local"
                  onChange={handleFieldChange}
                  label="Close Week Time"
                  type="datetime-local"
                  defaultValue={cwt}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  id="datetime-local"
                  onChange={handleFieldChange}
                  label="Open Weekend Time"
                  type="datetime-local"
                  defaultValue={owdt}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  id="datetime-local"
                  onChange={handleFieldChange}
                  label="Close Weekend Time"
                  type="datetime-local"
                  defaultValue={cwdt}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid> */}
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("address")}
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
                  label={t("Average Delivery Time")}
                  name="averageDeliveryTime"
                  onChange={handleFieldChange}
                  value={formState.averageDeliveryTime}
                  variant="outlined"
                  error={formState.averageDeliveryTimeError}
                  helperText={formState.averageDeliveryTimeErrorMessage}
                />
              </Grid>

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
              <Grid
                item
                md={6}
                xs={6}
              >
                <Typography variant="h5">{t("scheduledAllowed")}</Typography>
                <Switch
                  checked={formState.scheduledAllowed}
                  color="secondary"
                  edge="start"
                  name="scheduledAllowed"
                  onChange={handleFieldChange}
                  value={formState.scheduledAllowed}
                />
              </Grid>

              <Grid item />

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

RestaurantEdit.displayName = 'RestaurantEdit';

RestaurantEdit.propTypes = {
  className: PropTypes.string,
  restaurant: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

RestaurantEdit.defaultProps = {
  open: false,
  onClose: () => { }
};

export default RestaurantEdit;
