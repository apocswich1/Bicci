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

const FranchiseEdit = props => {
  const { open, onClose, franchise, className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    ...franchise
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

  const handleSave = () => {
    console.log("filess");
/*
    let params = {
      "active": formState.active ? formState.active : false,
      "name": formState.name,
      "companyName": formState.companyName,
      "areaName": formState.areaName,
      "salary": formState.salary,
      "description": formState.description,
      "workingHours": formState.workingHours,
      "address": formState.address,
      "plan": formState.plan,
      "createdAt": new Date().getMilliseconds()
    }

    fetch('https://us-central1-mipractica-firebase.cloudfunctions.net/addIntershipAdmin', {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify(params)
    }).then(function (respuesta) {
      respuesta.json().then(body => {
        console.log(body.id);

        var storageRef = firebase.storage().ref();
        var uploadDoc = storageRef.child(`/thumbnails/${body.id}/${body.id}.jpg`).put(filess[0]);
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
            const refDriver = firebase.firestore().collection('interships').doc(body.id);
            refDriver.set(data, { merge: true }).then(async resp => {
              console.log("Congrats...");
            }).catch(err => console.log(err));
          });
        });
        actualizar();
      });
    }).catch(function (err) {
      // Error :(
    });*/
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
              Edit Franchise
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
                  label="Email address"
                  name="email"
                  onChange={handleFieldChange}
                  value={formState.email}
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
                  label="Full name"
                  name="name"
                  onChange={handleFieldChange}
                  value={formState.name}
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
                  label="Phone number"
                  name="phone"
                  onChange={handleFieldChange}
                  value={formState.phone}
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
              </Grid>
              <Grid item />
              <Grid
                item
                md={6}
                xs={12}
              >
                <Typography variant="h5">Email Verified</Typography>
                <Typography variant="body2">
                  Disabling this will automatically send the user a verification
                  email
                </Typography>
                <Switch
                  checked={formState.verified}
                  color="secondary"
                  edge="start"
                  name="verified"
                  onChange={handleFieldChange}
                  value={formState.verified}
                />
              </Grid>
              <Grid
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

FranchiseEdit.displayName = 'FranchiseEdit';

FranchiseEdit.propTypes = {
  className: PropTypes.string,
  franchise: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

FranchiseEdit.defaultProps = {
  open: false,
  onClose: () => {}
};

export default FranchiseEdit;
