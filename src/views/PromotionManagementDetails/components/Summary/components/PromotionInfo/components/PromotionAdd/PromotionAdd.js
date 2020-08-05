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
import { FilesDropzone } from 'components';
import firebase from 'utils/firebase';
import config from 'config';
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
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
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

const PromotionAdd = props => {
  const { open, onClose, promotion, actualizar, cboRestaurants, setLoading, className, ...rest } = props;

  const classes = useStyles();
  const [restaurantID, setRestaurantID] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [filess, setFiless] = useState([]);
  
  //const [startDate, setStartDate] = useState(moment().subtract(7, 'days'));
  const [startDate, setStartDate] = useState(moment(new Date()));
  //const [endDate, setEndDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment(new Date()));
  const [selectEdge, setSelectEdge] = useState(null);
  //const [calendarDate, setCalendarDate] = useState(moment());
  const [calendarDate, setCalendarDate] = useState(moment(new Date()));
  const [places, setPlaces] = useState([]);
  const [chipData, setChipData] = useState([]);
  const [selectedDate, setSelectedDate] = React.useState(moment(new Date()));
  const [formState, setFormState] = useState({
    ...promotion, restaurantID, places, restaurantName
  });

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

  const handleChangeRestaurant = async event => {
    event.persist();
        setFormState(formState => ({
          ...formState,
          'restaurantID':event.target.value,
          'restaurantName':event._targetInst.memoizedProps.children[0][0],
          'places': [...places, event.target.value]
        }));
    
        setChipData(
          chipData => [...chipData,{key: event.target.value, label: event._targetInst.memoizedProps.children[0][0]}]
          );
    
        setPlaces(
            places => [...places, event.target.value]
        );
    
    
    
  
  }

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const validateForm = () => {
    let nameError = "";
    let nameErrorMessage = "";
    let idError = "";
    let idErrorMessage = "";
    
    if(!formState.name){
      nameError = "Debe introducir un nombre";
      nameErrorMessage = "Debe introducir un nombre";
    }

    if(!formState.id){
      idError = "Debe introducir un id";
      idErrorMessage = "Debe introducir un id";
    }

    if(nameError){
      setFormState(formState => ({
        ...formState,
        nameError,nameErrorMessage,idError,idErrorMessage
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
    let msg = "Promotions creado con exito";
    const isValid = validateForm();
    if(isValid){
      setLoading(true);
      let fecha = new Date(moment(endDate).format('YYYY-MM-DD').toString()+"T"+moment(selectedDate).add('hours',3).format('HH:mm').toString()+":00Z");
      let params = {
        "active": formState.active ? formState.active : true,
        "name": formState.name,
        "expirationDate": fecha,
        "places": chipData.map((item) => {return item.key}),
      }

      fetch(service+'createPromotionsAdmin', {
          method: 'post',
          mode: 'cors',
          body: JSON.stringify(params)
        }).then(function (respuesta) {
          respuesta.json().then(body => {
            console.log(body);
             /************* imagen de producto*/
             if(filess.length > 0){
              var storageRef = firebase.storage().ref();
             var uploadDoc = storageRef.child("/thumbnails/"+body.id+"/"+body.id+".jpg").put(filess[0]);
             uploadDoc.on('state_changed', function (snapshot) {
               var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
               console.log('Upload is ' + progress + '% done');
               switch (snapshot.state) {
                 case firebase.storage.TaskState.PAUSED: // or 'paused'
                   //  console.log('Upload is paused');
                   break;
                 case firebase.storage.TaskState.RUNNING: // or 'running'
                   //  console.log('Upload is running');
                   break;
               }
             }, function (error) {
     
             }, function () {
               uploadDoc.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                 let document = "thumbnail";
                 let data = {}
                 data[document] = downloadURL;
                 console.log(data);
                const refWasher = firebase.firestore().collection('promos').doc(body.id);
                  refWasher.set(data, { merge: true }).then(async resp => {
                    console.log("Congrats...");
                  }).catch(err => console.log(err));
               });
             });
             }
            /************* */
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
              align="promotion"
              gutterBottom
              variant="h3"
            >
              {T('Agregar')} Promotion
            </Typography>
            <Typography
              align="promotion"
              gutterBottom
              variant="h4"
            >
              Recomendación imagen: 480x240px, Formato JPEG, PNG. Máximo 2MB
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
                <Card>
                  <CardContent>
                    <FilesDropzone handleFieldChange={handleFieldChange} setFiless={setFiless} />
                  </CardContent>
                </Card>
              </Grid>
              {/* <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={T('Id')}
                  name="id"
                  onChange={handleFieldChange}
                  value={formState.id}
                  variant="outlined"
                  error={formState.idError}
                  helperText={formState.idErrorMessage}
                />
              </Grid> */}
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
                <InputLabel id="demo-simple-select-label">{T("restaurant")}</InputLabel>
                <Select
                  name="restaurantName"
                  value={formState.restaurantID}
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

PromotionAdd.displayName = 'PromotionAdd';

PromotionAdd.propTypes = {
  className: PropTypes.string,
  promotion: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

PromotionAdd.defaultProps = {
  open: false,
  onClose: () => { }
};

export default PromotionAdd;