import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import moment from 'moment';
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
  ButtonGroup,
  colors
} from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import CalendarTodayIcon from '@material-ui/icons/CalendarTodayOutlined';

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
  },
  dates: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1)
  }
}));

const RateAdd = props => {
  const { open, onClose, rate, className, actualizar, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    ...rate
  });

  const [startDate, setStartDate] = useState(moment().subtract(7, 'days'));
  
  const [endDate, setEndDate] = useState(moment());
  
  const [selectEdge, setSelectEdge] = useState(null);
  
  const [calendarDate, setCalendarDate] = useState(moment());
  
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

  const handleSave = () => {
    
    let params = { 
      "status":formState.status,
      "code":formState.code,
      "expirationDate":new Date(endDate),
      "amount": formState.amount
    }
    console.log(params);
    setFormState(formState => ({}));

   fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/createRatesAdmin', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify(params)
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body);
          actualizar();
        });
      }).catch(function (err) {
        // Error :(
      });
      
    onClose();
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
              Add Rate
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
                  label="Code"
                  name="code"
                  onChange={handleFieldChange}
                  value={formState.code}
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
                  label="Amount"
                  name="amount"
                  onChange={handleFieldChange}
                  value={formState.amount}
                  variant="outlined"
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
                item
                md={6}
                xs={12}
              >
                <Typography variant="h5">Status</Typography>
                <Switch
                  checked={formState.status}
                  color="secondary"
                  edge="start"
                  name="status"
                  onChange={handleFieldChange}
                  value={new Boolean(formState.status)}
                />
              </Grid>
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
              //onClick={onClose}
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

RateAdd.displayName = 'RateAdd';

RateAdd.propTypes = {
  className: PropTypes.string,
  rate: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

RateAdd.defaultProps = {
  open: false,
  onClose: () => {}
};

export default RateAdd;
