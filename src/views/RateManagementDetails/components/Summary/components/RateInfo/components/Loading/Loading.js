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
    maxWidth: '100%',
    alignContent:'center'
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

const Loading = props => {
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
      "commission": formState.commission
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
          <CardContent>
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
                <img src="/images/tenor.gif" width="250px"/>
              </Grid>
              </Grid>
          </CardContent>
      </Card>
    </Modal>
  );
};

Loading.displayName = 'Loading';

Loading.propTypes = {
  className: PropTypes.string,
  rate: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

Loading.defaultProps = {
  open: false,
  onClose: () => { }
};

export default Loading;