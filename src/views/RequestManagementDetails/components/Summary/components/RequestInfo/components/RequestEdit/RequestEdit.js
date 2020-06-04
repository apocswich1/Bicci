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
import useRouter from 'utils/useRouter';

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

const RequestEdit = props => {
  const { open, onClose, request,driverNames,actualizar, className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    ...request
  });

  const { history } = useRouter();

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
      ['driverID']:event.target.options[selectedIndex].attributes.clave.value,
      ['driverDni']:event.target.options[selectedIndex].attributes.dni.value    
    }));
  };

  const handleSave = () => {
    console.log(formState);
    let params = { 
      "userID":request.userID,
      "id":formState.id,
      "driverName":formState.driverName, 
      "driverID":formState.driverID,
      "driverDni":formState.driverDni,
      "driverVehiclePPN":"PPN123",
      "driverCarModel":"PATROL",
      "driverCarBrand":"NISSAN",
      "driverCarColor":"BLANCO",
      "driverCurrentSuitcasesCapacity":"4",
      "driverCurrentPassengersCapacity":"4"
    }
    console.log(params);


    fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/updateRequestAdmin', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify(params)
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body);
          //history.push(`/management/requests/${formState.id}/summary`);
          history.push(`/management/requests/`);
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
              Select Driver Request
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
                    label="Driver"
                    margin="dense"
                    name="driverName"
                    onChange={event =>
                      handleFieldChangeSelect(
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
                        dni={option.dni}
                        value={option.name}
                      >
                        {option.name}
                      </option>
                    ))}
                  </TextField>
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

RequestEdit.displayName = 'RequestEdit';

RequestEdit.propTypes = {
  className: PropTypes.string,
  request: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

RequestEdit.defaultProps = {
  open: false,
  onClose: () => {}
};

export default RequestEdit;
