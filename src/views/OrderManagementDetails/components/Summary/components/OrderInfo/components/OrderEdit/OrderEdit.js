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
import firebase from 'utils/firebase';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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

const OrderEdit = props => {
  const { open, onClose, order, actualizar, cboWashers, className, ...rest } = props;

  const classes = useStyles();

  const [washer, setWasher] = useState([]);
  const [formState, setFormState] = useState({
    ...order, cboWashers
  });

  //console.log(cboWashers);

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

  const handleChangeWasher = event => {
    event.persist();
    
        setFormState(formState => ({
          ...formState,
          'washerID':event.target.value,
          'washerName':event._targetInst.memoizedProps.children[0][0],
        }));      
  //  console.log(formState);
  }

  const validateForm = () => {
    let nameError = "";
    let nameErrorMessage = "";
    let priceAError = "";
    let priceAErrorMessage = "";
    let priceBError = "";
    let priceBErrorMessage = "";
    let priceCError = "";
    let priceCErrorMessage = "";
    let estimatedTimeAError = "";
    let estimatedTimeAErrorMessage = "";
    let estimatedTimeBError = "";
    let estimatedTimeBErrorMessage = "";
    let estimatedTimeCError = "";
    let estimatedTimeCErrorMessage = "";
    let descriptionError = "";
    let descriptionErrorMessage = "";


    /*if (!formState.name) {
      nameError = "Debe introducir un nombre";
      nameErrorMessage = "Debe introducir un nombre";
    }

    if (!formState.priceA) {
      priceAError = "Debe introducir un precio A";
      priceAErrorMessage = "Debe introducir un precio A";
    }

    if (!formState.priceB) {
      priceBError = "Debe introducir un precio B";
      priceBErrorMessage = "Debe introducir un precio B";
    }

    if (!formState.priceC) {
      priceCError = "Debe introducir un precio C";
      priceCErrorMessage = "Debe introducir un precio C";
    }

    if (!formState.estimatedTimeA) {
      estimatedTimeAError = "Debe introducir un tiempo estimado A";
      estimatedTimeAErrorMessage = "Debe introducir un tiempo estimado A";
    }

    if (!formState.estimatedTimeB) {
      estimatedTimeBError = "Debe introducir un tiempo estimado B";
      estimatedTimeBErrorMessage = "Debe introducir un tiempo estimado B";
    }

    if (!formState.estimatedTimeC) {
      estimatedTimeCError = "Debe introducir un tiempo estimado C";
      estimatedTimeCErrorMessage = "Debe introducir un tiempo estimado C";
    }

    if (!formState.description) {
      descriptionError = "Debe introducir una descripción";
      descriptionErrorMessage = "Debe introducir una descripción";
    }*/

    if (nameError || priceAError || priceBError || priceCError || estimatedTimeAError || estimatedTimeBError || estimatedTimeCError || descriptionError) {
      setFormState(formState => ({
        ...formState,
        nameError,
        priceAError,
        priceBError,
        priceCError,
        estimatedTimeAError,
        estimatedTimeBError,
        estimatedTimeCError,
        descriptionError,
        nameErrorMessage,
        priceAErrorMessage,
        priceBErrorMessage,
        priceCErrorMessage,
        estimatedTimeAErrorMessage,
        estimatedTimeBErrorMessage,
        estimatedTimeCErrorMessage,
        descriptionErrorMessage
    
      }));
      return false;
    }
    return true;
  }

  const handleSave = async () => {
  //  event.preventDefault();
    const isValid = validateForm();
    let msg = "Orden actualizada exitosamente!";
    
    if(isValid){

       // washer
       const refWasher = firebase.firestore().collection('washers').doc(formState.washerID);
       const washery = await refWasher.get();
       let datos = washery.data();
       console.log(order.washerID);
       console.log(washery.data());
       const params = {
        "orderID": formState.id,
        "userID": order.userID,
        "washerID": datos.id,
        // "washerEmail": datos.email,
        // "washerPhone": datos.phone,
        // "washerDraft": true
       }
        
        console.log(params);
  try {
    fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/enrolleWasher', {
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
      }); 
  } catch (error) {
    console.log(error);
  }
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
              Assign prowasher
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
                <InputLabel id="demo-simple-select-label">Prowashers</InputLabel>
                <Select
                  name="washerName"
                  value={formState.washerID}
                  onChange={handleChangeWasher}
                  style={{ width: "520px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {cboWashers.map((item,i) => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
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

OrderEdit.displayName = 'OrderEdit';

OrderEdit.propTypes = {
  className: PropTypes.string,
  order: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

OrderEdit.defaultProps = {
  open: false,
  onClose: () => {}
};

export default OrderEdit;
