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
import firebase from 'utils/firebase';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
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

const CouponAdd = props => {
  const { open, onClose, coupon, actualizar, cboFranchises, setLoading, className, ...rest } = props;

  const classes = useStyles();

  const [franchiseID, setFranchiseID] = useState('');
  const [franchiseName, setFranchiseName] = useState('');
  const [global, setGlobal] = useState(true);
  const [cboVenues, setCboVenues] = useState([]);
  const [formState, setFormState] = useState({
    ...coupon, cboVenues, global
  });

  //const [startDate, setStartDate] = useState(moment().subtract(7, 'days'));
  const [startDate, setStartDate] = useState(moment(new Date()));
  //const [endDate, setEndDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment(new Date()));
  const [selectEdge, setSelectEdge] = useState(null);
  //const [calendarDate, setCalendarDate] = useState(moment());
  const [calendarDate, setCalendarDate] = useState(moment(new Date()));

  const [selectedDate, setSelectedDate] = React.useState(moment(new Date()));
  console.log(selectedDate);
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

  const handleChangeFranchise = async event => {
    event.persist();
    let venues = [];
    const venuesRef = await firebase.firestore().collection('franchises').doc(event.target.value)
    .collection('venues').get();
        setFormState(formState => ({
          ...formState,
          'franchiseID':event.target.value,
          'franchiseName':event._targetInst.memoizedProps.children[0][0],
          'cboVenues': venuesRef.docs.map(d => { return d.data() })
        }));      
    
  
    console.log(formState);
  }
  
  const handleChangeVenue = event => {
    event.persist();
    
        setFormState(formState => ({
          ...formState,
          'venueID':event.target.value,
          'venueName':event._targetInst.memoizedProps.children[0][0],
        }));      
    console.log(formState);
  }

  const validateForm = () => {
    let codeError = "";
    let codeErrorMessage = "";
    let venueIDError = "";
    let venueIDErrorMessage = "";
    let amountErrorMessage = "";
    let amountError = "";
    let discountErrorMessage = "";
    let discountError = "";
    
    if(!formState.code){
      codeError = "Debe introducir un code";
      codeErrorMessage = "Debe introducir un code";
    }

    if(!formState.amount){
      amountError = "Debe introducir un email valido";
      amountErrorMessage = "Debe introducir un email";
    }

    if(formState.global){
      if(formState.venueID==""){
        venueIDError = "Debe introducir una sucursal";
        venueIDErrorMessage = "Debe introducir una sucursal";
      }
    }


    if(codeError || amountError || venueIDError){
      setFormState(formState => ({
        ...formState,
        codeError,amountError,venueIDError,
        codeErrorMessage,amountErrorMessage, venueIDErrorMessage
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
    let msg = "Coupons creado con exito";
    const isValid = validateForm();
    if(isValid){
      setLoading(true);
      
      let fecha = new Date(moment(endDate).format('YYYY-MM-DD').toString()+"T"+moment(selectedDate).add('hours',3).format('HH:mm').toString()+":00Z");
      let params;
      if(!formState.global){
        params = {
          "active": formState.active ? formState.active : true,
          "global": formState.global ? formState.global : false,
          "code": formState.code,
          "amount": formState.amount,
          "expirationDate": fecha,
          "venueID":formState.venueID,
          "discount":+formState.discount
        }
      }else{
        params = {
          "active": formState.active ? formState.active : true,
          "global": formState.global ? formState.global : false,
          "code": formState.code,
          "amount": formState.amount,
          "expirationDate": fecha
        }
      }

      console.log(params);
      fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/createCouponsAdmin', {
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
              {t("add")} {t("coupon")}
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
                  label={t("code")}
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
                  label={t("amount")}
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
                <Typography variant="h5">{t("active")}</Typography>
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
                xs={12}
                hidden={formState.global ? true : false }
              >
                <TextField
                  fullWidth
                  label={t("discount")}
                  name="discount"
                  onChange={handleFieldChange}
                  value={formState.discount}
                  variant="outlined"
                  error={formState.discountError}
                  helperText={formState.discountErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
                hidden={formState.global ? true : false }
              >
                <InputLabel id="demo-simple-select-label">{t("franchise")}</InputLabel>
                <Select
                  name="franchiseName"
                  value={formState.franchiseID}
                  onChange={handleChangeFranchise}
                  style={{ width: "520px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {cboFranchises.map(item => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
                hidden={formState.global ? true : false }
              >
                <InputLabel id="demo-simple-select-label">{t("venue")}</InputLabel>
                <Select
                  name="venueName"
                  value={formState.venueID}
                  onChange={handleChangeVenue}
                  style={{ width: "520px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {formState.cboVenues.map((item,i) => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </Grid>
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

CouponAdd.displayName = 'CouponAdd';

CouponAdd.propTypes = {
  className: PropTypes.string,
  coupon: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

CouponAdd.defaultProps = {
  open: false,
  onClose: () => { }
};

export default CouponAdd;
