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
  colors,
  ButtonGroup
} from '@material-ui/core';

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

const RateEdit = props => {
  const { open, onClose, rate,setOpenLoad,setOpenForm, className,actualizar, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    ...rate
  });

  const [load, setLoad] = useState(null);

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
    setOpenLoad('block');
    setOpenForm('none');
    console.log(formState);
    let params = {
      "id": formState.id,
      "baseRate": formState.baseRate,
      "minRate": formState.minRate,
      "pricePerKilometer": formState.pricePerKilometer,
      "commissionAuto": formState.commissionAuto,
      "commissionVan": formState.commissionVan
    }

    console.log(formState);
    fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/updateRatesAdmin', {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify(params)
    }).then(function (respuesta) {
      respuesta.json().then(body => {
        console.log(body);
        actualizar();
        setOpenLoad('none');
        setOpenForm('block');
      });
    }).catch(function (err) {
      // Error :(
        setOpenForm('block');
        setOpenLoad('none');
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
              Edit Price
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
                  label="Min Price"
                  name="minRate"
                  onChange={handleFieldChange}
                  value={formState.minRate}
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
                  label="Base Price"
                  name="baseRate"
                  onChange={handleFieldChange}
                  value={formState.baseRate}
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
                  label="Commission Auto"
                  name="commissionAuto"
                  onChange={handleFieldChange}
                  value={formState.commissionAuto}
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
                  label="Commission Van"
                  name="commissionVan"
                  onChange={handleFieldChange}
                  value={formState.commissionVan}
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
                  label="Price per kilometer"
                  name="pricePerKilometer"
                  onChange={handleFieldChange}
                  value={formState.pricePerKilometer}
                  variant="outlined"
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

RateEdit.displayName = 'RateEdit';

RateEdit.propTypes = {
  className: PropTypes.string,
  rate: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

RateEdit.defaultProps = {
  open: false,
  onClose: () => { }
};

export default RateEdit;
