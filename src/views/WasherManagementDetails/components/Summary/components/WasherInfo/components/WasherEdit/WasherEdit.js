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
} from '@material-ui/core';
import firebase from 'utils/firebase';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FilesDropzone } from 'components';
import InputAdornment from '@material-ui/core/InputAdornment';
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

const WasherEdit = props => {
  const { open, onClose, washer, cboFranchises, actualizar, className, ...rest } = props;

  const classes = useStyles();


  const [franchiseID, setFranchiseID] = useState('');
  const [franchiseName, setFranchiseName] = useState('');
  const [cboVenues, setCboVenues] = useState([]);
  const [filess, setFiless] = useState([]);
  const [formState, setFormState] = useState({
    ...washer, cboVenues
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
    let nameError = "";
    let emailError = "";
    // let passwordError = "";
    // let passwordRepeatError = "";
    // let rolError = "";
    let phoneError = "";
    let email = formState.email ? formState.email : "";
    let nameErrorMessage = "";
    let emailErrorMessage = "";
    //  let passwordErrorMessage = "";
    //  let passwordRepeatErrorMessage = "";
    //  let rolErrorMessage = "";
    let phoneErrorMessage = "";
    let dniErrorMessage = "";
    let dniError = "";

    if (!formState.name) {
      nameError = "Debe introducir un nombre";
      nameErrorMessage = "Debe introducir un nombre";
    }

    if (!email.includes('@')) {
      emailError = "Debe introducir un email valido";
      emailErrorMessage = "Debe introducir un email valido";
    }

    if (!formState.email) {
      emailError = "Debe introducir un email valido";
      emailErrorMessage = "Debe introducir un email";
    }

    /*
    if(!formState.password){
      passwordError = "Debe introducir un password valido";
      passwordErrorMessage = "Debe introducir un password valido";
    }

    if(!formState.passwordRepeat){
      passwordRepeatError = "Debe introducir la confirmación del password";
      passwordRepeatErrorMessage = "Debe introducir la confirmación del password";
    }

    if(formState.passwordRepeat != formState.password){
      passwordRepeatError = "error";
      passwordRepeatErrorMessage = "Los password no coinciden, verifique";
      passwordError = "error";
      passwordErrorMessage = "Los password no coinciden, verifique";
    }
    

    if(!formState.rol){
      rolError = "Debe introducir un email valido";
      rolErrorMessage = "Debe introducir un rol valido";
    }
*/
    if (!formState.phone) {
      phoneError = "Debe introducir un email valido";
      phoneErrorMessage = "Debe introducir un rol valido";
    }

    if (!formState.dni || (formState.dni == "")) {
      dniError = "Debe introducir un dni valido";
      dniErrorMessage = "Debe introducir un dni valido";
    }

    if (nameError || emailError || dniError || phoneError) {
      setFormState(formState => ({
        ...formState,
        nameError, emailError, phoneError, dniError,
        nameErrorMessage, emailErrorMessage, phoneErrorMessage, dniErrorMessage
      }));
      return false;
    }
    return true;
  }

  const handleSave = () => {
    //event.preventDefault();
    console.log(formState);
    const isValid = validateForm();
    let msg = "Usuario actualizado exitosamente!";
    if (isValid) {

      let params = {
        "id": formState.id,
        "active": formState.active,
        "name": formState.name,
        //"rol":formState.rol,
        "email": formState.email,
        "phone": formState.phone,
        "dni": formState.dni,
        "franchiseID": formState.franchiseID ? formState.franchiseID:"",
        "venueID": formState.venueID ? formState.venueID:"",
        "franchiseName":formState.franchiseName ? formState.franchiseName:"",
        "venueName":formState.venueName?formState.venueName:"",
        //"agree_terms":formState.agree_terms 
      }

      const idwasher = formState.id;

      console.log(params);

      fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/washerUpdateAdmin', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify(params)
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body);
           /************* */
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
               let document = "avatar";
               let data = {}
               data[document] = downloadURL;
               console.log(data);
              const refWasher = firebase.firestore().collection('washers').doc(idwasher);
                refWasher.set(data, { merge: true }).then(async resp => {
                  console.log("Congrats...");
                  actualizar(msg, body);
                }).catch(err => console.log(err));
             });
           });
               /************* */
          actualizar(msg, body);
        });
      }).catch(function (err) {
        // Error :(
      });
      onClose();
    }
  };
  console.log(formState);
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
              {t("edit")} Prowasher
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
                <InputLabel id="demo-simple-select-label">Franchise</InputLabel>
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
              >
                <InputLabel id="demo-simple-select-label">Venue</InputLabel>
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
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("full name")}
                  name="name"
                  onChange={handleFieldChange}
                  value={formState.name}
                  variant="outlined"
                  error={formState.nameError}
                  helperText={formState.nameErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("email address")}
                  name="email"
                  onChange={handleFieldChange}
                  value={formState.email}
                  variant="outlined"
                  error={formState.emailError}
                  helperText={formState.emailErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("dni")}
                  name="dni"
                  onChange={handleFieldChange}
                  value={formState.dni}
                  variant="outlined"
                  error={formState.dniError}
                  helperText={formState.dniErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("phone number")}
                  name="phone"
                  onChange={handleFieldChange}
                  value={formState.phone}
                  variant="outlined"
                  error={formState.phoneError}
                  helperText={formState.phoneErrorMessage}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">+56 9</InputAdornment>,
                  }}
                />
              </Grid>
              {/**    <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Rol"
                  name="rol"
                  onChange={handleFieldChange}
                  value={formState.rol}
                  variant="outlined"
                  error={formState.rolError}
                  helperText={formState.rolErrorMessage}
                />
              </Grid>*/}
              <Grid
                item
                md={6}
                xs={6}
              >
                <Typography variant="h5">{t("isactive")}</Typography>
                <Switch
                  checked={formState.active}
                  color="secondary"
                  edge="start"
                  name="active"
                  onChange={handleFieldChange}
                  value={formState.active}
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
              <Grid item />
              {/*<Grid
                item
                md={6}
                xs={12}
              >
                <Typography variant="h5">Discounted Prices</Typography>
                <Typography variant="body2">
                  This will give the washer discountedprices for all products
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
              {t("close")}
            </Button>
            <Button
              className={classes.saveButton}
              //onClick={onClose}
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

WasherEdit.displayName = 'WasherEdit';

WasherEdit.propTypes = {
  className: PropTypes.string,
  washer: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

WasherEdit.defaultProps = {
  open: false,
  onClose: () => { }
};

export default WasherEdit;
