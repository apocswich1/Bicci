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

const VehicleEdit = props => {
  const { open, onClose, vehicle,ownerNames, driverNames, categoriesNames,actualizar, className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    ...vehicle
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

  const handleFieldChangeSelect = event => {
    event.persist();
    const selectedIndex = event.target.options.selectedIndex;
    //console.log(selectedIndex);
    console.log(event.target.options[selectedIndex].attributes.clave.value);
    setFormState(formState => ({
      ...formState,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
      ['ownerID']:event.target.options[selectedIndex].attributes.clave.value  
    }));
  };

  const handleFieldChangeSelectDriver = event => {
    event.persist();
    const selectedIndex = event.target.options.selectedIndex;
    //console.log(selectedIndex);
    console.log(event.target.options[selectedIndex].attributes.clave.value);
    setFormState(formState => ({
      ...formState,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
      ['driverID']:event.target.options[selectedIndex].attributes.clave.value  
    }));
  };

  const handleFieldChangeCategory = event => {
    event.persist();
    const selectedIndex = event.target.options.selectedIndex;
    setFormState(formState => ({
      ...formState,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
      ['categoryID']:event.target.options[selectedIndex].attributes.clave.value  
    }));
  };

  const handleSave = () => {
    console.log(formState);
    let params = { 
      "objectId":formState.id, 
      "brand":formState.brand, 
      "owner":{
        "name":formState.ownerName, 
        "id":formState.ownerID
      },
      "driver":{
        "name":formState.driverName, 
        "id":formState.driverID
      }, 
      "categoryName":formState.categoryName,
      "categoryID":formState.categoryID,
      "model":formState.model,
      "ppn":formState.ppn,
      "maxPassengers":formState.maxPassengers,
      "maxSuitcases":formState.maxSuitcases,
      "currentPassengersCapacity":formState.currentPassengersCapacity,
      "currentSuitcasesCapacity":formState.currentSuitcasesCapacity, 
      "color":formState.color, 
      "active":formState.active 
    }
    console.log(params);
    
    fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/updateVehiclesAdmin', {
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
              Edit Vehicle
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
                    className={classes.field}
                    fullWidth
                    label="Owner"
                    margin="dense"
                    name="ownerName"
                    onChange={event =>
                      handleFieldChangeSelect(
                        event,
                        'ownerName',
                        event.target.value
                      )
                    }
                    select
                    // eslint-disable-next-line react/jsx-sort-props
                    SelectProps={{ native: true }}
                    value={formState.ownerName}
                    variant="outlined"
                  >
                    <option
                      disabled
                      value=""
                    />
                    {ownerNames.map(option => (
                      <option
                        key={option.id}
                        clave={option.id}
                        value={option.name}
                      >
                        {option.name}
                      </option>
                    ))}
                  </TextField>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                    className={classes.field}
                    fullWidth
                    label="Driver"
                    margin="dense"
                    name="driverName"
                    onChange={event =>
                      handleFieldChangeSelectDriver(
                        event,
                        'driverName',
                        event.target.value
                      )
                    }
                    select
                    // eslint-disable-next-line react/jsx-sort-props
                    SelectProps={{ native: true }}
                    value={formState.driverName}
                    variant="outlined"
                  >
                    <option
                      disabled
                      value=""
                    />
                    {driverNames.map(option => (
                      <option
                        key={option.id}
                        clave={option.id}
                        value={option.name}
                      >
                        {option.name}
                      </option>
                    ))}
                  </TextField>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                    className={classes.field}
                    fullWidth
                    label="Category Name"
                    margin="dense"
                    name="categoryName"
                    onChange={event =>
                      handleFieldChangeCategory(
                        event,
                        'categoryName',
                        event.target.value
                      )
                    }
                    select
                    // eslint-disable-next-line react/jsx-sort-props
                    SelectProps={{ native: true }}
                    value={formState.categoryName}
                    variant="outlined"
                  >
                    <option
                      disabled
                      value=""
                    />
                    {categoriesNames.map(option => (
                      <option
                        key={option.id}
                        clave={option.id}
                        value={option.name}
                      >
                        {option.name}
                      </option>
                    ))}
                  </TextField>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Model"
                  name="model"
                  onChange={handleFieldChange}
                  value={formState.model}
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
                  label="PPN"
                  name="ppn"
                  onChange={handleFieldChange}
                  value={formState.ppn}
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
                  label="Max Passengers"
                  name="maxPassengers"
                  onChange={handleFieldChange}
                  value={formState.maxPassengers}
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
                  label="Max Suitcases"
                  name="maxSuitcases"
                  onChange={handleFieldChange}
                  value={formState.maxSuitcases}
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
                  label="Current Passengers Capacity"
                  name="currentPassengersCapacity"
                  onChange={handleFieldChange}
                  value={formState.currentPassengersCapacity}
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
                  label="Current Suitcases Capacity"
                  name="currentSuitcasesCapacity"
                  onChange={handleFieldChange}
                  value={formState.currentSuitcasesCapacity}
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
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Color"
                  name="color"
                  onChange={handleFieldChange}
                  value={formState.color}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <Typography variant="h5">Active</Typography>
                <Switch
                  checked={formState.active}
                  color="secondary"
                  edge="start"
                  name="active"
                  onChange={handleFieldChange}
                  value={new Boolean(formState.active)}
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

VehicleEdit.displayName = 'VehicleEdit';

VehicleEdit.propTypes = {
  className: PropTypes.string,
  vehicle: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

VehicleEdit.defaultProps = {
  open: false,
  onClose: () => {}
};

export default VehicleEdit;
