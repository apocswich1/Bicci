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

const VehicleAdd = props => {
  const { open, onClose, driver, className, actualizar,ownerNames, driverNames, categoriesNames, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    ...driver
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

    setFormState(formState => ({}));

   fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/createVehiclesAdmin', {
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
              Add Vehicle
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
                  label="Brand"
                  name="brand"
                  onChange={handleFieldChange}
                  value={formState.brand}
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

VehicleAdd.displayName = 'VehicleAdd';

VehicleAdd.propTypes = {
  className: PropTypes.string,
  driver: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

VehicleAdd.defaultProps = {
  open: false,
  onClose: () => {}
};

export default VehicleAdd;
