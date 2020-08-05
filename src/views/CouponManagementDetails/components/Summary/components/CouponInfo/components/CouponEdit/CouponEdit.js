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
import { DatePicker } from '@material-ui/pickers';
import CalendarTodayIcon from '@material-ui/icons/CalendarTodayOutlined';
import moment from 'moment';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import firebase from 'utils/firebase';
import translate from 'translate';
import config from 'config';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';

const service = config.servicio;

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


const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const CouponEdit = props => {
  const { open, onClose, coupon, actualizar, cboRegion, cboRestaurants, className, chips, ...rest } = props;

  const classes = useStyles();
  const [restaurantID, setRestaurantID] = useState(coupon.restaurantID);
  const [restaurantName, setRestaurantName] = useState('');
  const [modeID, setModeID] = useState(coupon.mode);
  const [modeName, setModeName] = useState('');
  const [global, setGlobal] = useState('');
  const [venueID, setVenueID] = useState('');
  const [cboVenues, setCboVenues] = useState([...cboRestaurants]);
  const [places, setPlaces] = useState([]);
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [cboDistrict, setCboDistrict] = React.useState([]);
  const [cboZones, setCboZones] = React.useState([]);
  const [formState, setFormState] = useState({
    ...coupon, cboVenues, venueID, restaurantID, places, restaurantName, modeID,cboRestaurants,cboDistrict,cboZones
  });


  const [chipData, setChipData] = useState(chips
    // { key: 0, label: 'Angular' },
    // { key: 1, label: 'jQuery' },
    // { key: 2, label: 'Polymer' },
    // { key: 3, label: 'React' },
    // { key: 4, label: 'Vue.js' },
    // { key: 5, label: 'Angular' },
    // { key: 6, label: 'jQuery' },
    // { key: 7, label: 'Polymer' },
    // { key: 8, label: 'React' },
    // { key: 9, label: 'Vue.js' },
  );

  //const [startDate, setStartDate] = useState(moment().subtract(7, 'days'));
  const [startDate, setStartDate] = useState(moment(coupon.expirationDate));
  //const [endDate, setEndDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment(coupon.expirationDate));
  const [selectEdge, setSelectEdge] = useState(null);
  //const [calendarDate, setCalendarDate] = useState(moment());
  const [calendarDate, setCalendarDate] = useState(moment(coupon.expirationDate));

  const [selectedDate, setSelectedDate] = React.useState(moment(coupon.expirationDate));
  

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
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
      }
    }

    setSelectEdge(null);
  };

  const openn = Boolean(selectEdge);


  if (!open) {
    return null;
  }

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

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


  const handleChangeRestaurant = async event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      'restaurantID': event.target.value,
      'restaurantName': event._targetInst.memoizedProps.children[0][0],
      'cboRestaurants': (cboRestaurants) => cboRestaurants.filter((chip) => chip.key !== event.target.value),
      'places': [...places, event.target.value]
    }));

    setChipData(
      chipData => [...chipData,{key: event.target.value, label: event._targetInst.memoizedProps.children[0][0]}]
      );

    setPlaces(
        places => [...places, event.target.value]
    );

  }

  const handleChangeMode = async event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      'modeID': event.target.value,
      'modeName': event._targetInst.memoizedProps.children[0][0]
    }));

  }

  const handleChangeTicket = async event => {
    event.persist();
    
        setFormState(formState => ({
          ...formState,
          'ticketPromedioID':event.target.value,
          'ticketPromedioName':event._targetInst.memoizedProps.children[0][0]
        }));      
  }

  const validateForm = () => {
    let codeError = "";
    let codeErrorMessage = "";
    let venueIDError = "";
    let venueIDErrorMessage = "";
    let amountErrorMessage = "";
    let amountError = "";

    if (!formState.code) {
      codeError = "Debe introducir un code";
      codeErrorMessage = "Debe introducir un code";
    }

    if (!formState.amount) {
      amountError = "Debe introducir un email valido";
      amountErrorMessage = "Debe introducir un email";
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


    if (codeError || amountError) {
      setFormState(formState => ({
        ...formState,
        codeError, amountError,
        codeErrorMessage, amountErrorMessage
      }));
      return false;
    }
    return true;
  }

  const handleSave = () => {
    //  event.preventDefault();
    const isValid = validateForm();
    let msg = "Usuario actualizado exitosamente!";
    if (isValid) {
      let fecha = new Date(moment(endDate).format('YYYY-MM-DD').toString() + "T" + moment(selectedDate).add('hours', 3).format('HH:mm').toString() + ":00Z");

      let params;
      if (!formState.global) {
        if(selectedValue === 'a'){
          params = {
            "id": formState.id,
            "active": formState.active ? formState.active : true,
            "global": formState.global ? formState.global : false,
            "code": formState.code,
            "amount": +formState.amount,
            "expirationDate": fecha,
            "restaurants": chipData.map((item) => {return item.key}),
            "stock": +formState.stock,
            "mode": formState.modeID ? +formState.modeID : +1,
            "type":selectedValue
          }
        }else if(selectedValue === 'b'){
          params = {
            "id": formState.id,
            "active": formState.active ? formState.active : true,
            "global": formState.global ? formState.global : false,
            "code": formState.code,
            "amount": +formState.amount,
            "expirationDate": fecha,
            "restaurants": [],
            "stock": +formState.stock,
            "mode": formState.modeID ? +formState.modeID : +1,
            "regionName": formState.regionName,
            "regionID": formState.regionID,
            "districtName": formState.districtName,
            "districtID": formState.districtID,
            "zoneName": formState.zoneName,
            "zoneID": formState.zoneID,
            "type":selectedValue
          }
        }else{
          params = {
            "id": formState.id,
            "active": formState.active ? formState.active : true,
            "global": formState.global ? formState.global : false,
            "code": formState.code,
            "amount": +formState.amount,
            "expirationDate": fecha,
            "restaurants": [],
            "stock": +formState.stock,
            "mode": formState.modeID ? +formState.modeID : +1,
            "ticketPromedioName": formState.ticketPromedioName,
            "ticketPromedioID": formState.ticketPromedioID,
            "type":selectedValue
          }
        }
        
      } else {
        params = {
          "id": formState.id,
          "active": formState.active ? formState.active : true,
          "global": formState.global ? formState.global : false,
          "code": formState.code,
          "amount": +formState.amount,
          "expirationDate": fecha,
          "stock": +formState.stock,
          "mode": formState.modeID ? +formState.modeID : +1
        }
      }


      fetch(service + 'couponUpdateAdmin', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify(params)
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          actualizar(msg, body);
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
              {t("Edit")} {t("coupon")}
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
                  label={t("Code")}
                  name="code"
                  onChange={handleFieldChange}
                  value={formState.code}
                  variant="outlined"
                  error={formState.codeError}
                  helperText={formState.codeErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("Stock")}
                  name="stock"
                  onChange={handleFieldChange}
                  value={formState.stock}
                  variant="outlined"
                  error={formState.stockError}
                  helperText={formState.stockErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={6}
              >
                <Typography variant="h5">{t("Global")}</Typography>
                <Switch
                  checked={formState.global}
                  color="secondary"
                  edge="start"
                  name="global"
                  onChange={handleFieldChange}
                  value={formState.global}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={6}
              >
                <Typography variant="h5">{t("Active")}</Typography>
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
                className={classes.dates}
                item
                lg={6}
                xs={12}
              >
                <ButtonGroup variant="contained" fullWidth>
                  <Button onClick={() => handleCalendarOpen('end')}>
                    <CalendarTodayIcon className={classes.calendarTodayIcon} />
                    {endDate.format('DD MM YYYY')}
                  </Button>
                </ButtonGroup>
              </Grid>
              <DatePicker
                //maxDate={moment()}
                onAccept={handleCalendarAccept}
                onChange={handleCalendarChange}
                onClose={handleCalendarClose}
                open={openn}
                style={{ display: 'none' }} // Temporal fix to hide the input element
                value={calendarDate}
                variant="dialog"
              />
              <Grid
                className={classes.dates}
                item
                lg={6}
                xs={12}
              >
                <ButtonGroup variant="contained" fullWidth>
                  <Button>
                    <KeyboardTimePicker
                      id="time-picker"
                      value={selectedDate}
                      value={selectedDate}
                      onChange={handleDateChange}
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
                md={6}
                xs={6}
              >
                <InputLabel id="demo-simple-select-label">{t("mode")}</InputLabel>
                <Select
                  name="modeName"
                  value={formState.modeID}
                  onChange={handleChangeMode}
                  style={{ width: "320px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Monto Fijo</MenuItem>
                  <MenuItem value={2}>Porcentaje</MenuItem>
                  <MenuItem value={3}>Envío Gratis</MenuItem>
                </Select>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={formState.modeID == 2 ? t("Porcentaje") : t("Valor")}
                  name="amount"
                  onChange={handleFieldChange}
                  value={formState.amount}
                  variant="outlined"
                  error={formState.amountError}
                  helperText={formState.amountErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={4}
                xs={4}
                hidden={formState.global ? true : false}
              >
                <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      /> Restaurant
              </Grid>
              <Grid
                item
                md={4}
                xs={4}
                hidden={formState.global ? true : false}
              >
                <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      /> Zona
              </Grid>
              <Grid
                item
                md={4}
                xs={4}
                hidden={formState.global ? true : false}
              >
                <GreenRadio
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="c"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'C' }}
      /> Ticket Promedio
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
                hidden={selectedValue === 'a' && !formState.global ? false : true }
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
                hidden={selectedValue === 'a' && !formState.global ? false : true }
              >
                <InputLabel id="demo-simple-select-label">{t("restaurant")}</InputLabel>
                <Select
                  name="restaurantName"
                  value=""
                  onChange={handleChangeRestaurant}
                  style={{ width: "520px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {cboRestaurants.map(item => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
                hidden={selectedValue === 'b'  && !formState.global ? false : true }
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
                hidden={selectedValue === 'b'  && !formState.global ? false : true }
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
                hidden={selectedValue === 'b'  && !formState.global ? false : true }
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
                hidden={selectedValue === 'c'  && !formState.global ? false : true }              
              >
                <InputLabel id="demo-simple-select-label">{t("Ticket promedio")}</InputLabel>
                <Select
                  name="ticketPromedioName"
                  value={formState.ticketPromedioID}
                  onChange={handleChangeTicket}
                  style={{ width: "520px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                    <MenuItem value={1}>Menor a 10.000</MenuItem>
                    <MenuItem value={2}>Entre 10.001 y 20.000</MenuItem>
                    <MenuItem value={3}>Mayor a 20.000</MenuItem>
                </Select>
              </Grid>
              <Grid item />

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
              //onClick={onClose}
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

CouponEdit.displayName = 'CouponEdit';

CouponEdit.propTypes = {
  className: PropTypes.string,
  coupon: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

CouponEdit.defaultProps = {
  open: false,
  onClose: () => { }
};

export default CouponEdit;
