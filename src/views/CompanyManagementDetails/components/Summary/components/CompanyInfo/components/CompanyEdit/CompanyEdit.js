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
import InputLabel from '@material-ui/core/InputLabel';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import translate from 'translate';
import config from 'config';
import configModel from 'models/Company';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import moment from 'moment';
import tiempo from 'utils/tiempo';

const t = translate;
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

const CompanyEdit = props => {
  const { open, onClose, company, cboCategories, cboCenters, chips, cboAdministrators, actualizar, className, ...rest } = props;

  const classes = useStyles();
  // const [owt, setOwt] = React.useState(moment(new Date(company.openWeekTime._seconds * 1000)));
  // const [cwt, setCwt] = React.useState(moment(new Date(company.closeWeekTime._seconds * 1000)));
  // const [owdt, setOwdt] = React.useState(moment(new Date(company.openWeekendTime._seconds * 1000)));
  // const [cwdt, setCwdt] = React.useState(moment(new Date(company.closeWeekendTime._seconds * 1000)));
  // const [startDate, setStartDate] = useState(moment(new Date(company.openWeekTime._seconds * 1000)));
  const [endDate, setEndDate] = useState(moment());
  const [selectEdge, setSelectEdge] = useState(null);
  const [calendarDate, setCalendarDate] = useState(moment());
  const [administratorID, setAdministratorID] = useState();
  const [places, setPlaces] = useState([]);
  const [selectedDate, setSelectedDate] = React.useState(moment(company.openWeekTime));
  const [formState, setFormState] = useState({
    ...company,administratorID,
   // owt,cwt,owdt,cwdt
  });

  const [chipData, setChipData] = useState(chips);

  const handleChangeCenter = async event => {
    event.persist();
        setFormState(formState => ({
          ...formState,
          'centerID':event.target.value,
          'centerName':event._targetInst.memoizedProps.children[0][0],
          'places': [...places, event.target.value]
        }));
    
        setChipData(
          chipData => [...chipData,{key: event.target.value, label: event._targetInst.memoizedProps.children[0][0]}]
          );
    
        setPlaces(
            places => [...places, event.target.value]
        );  
  }

 
  const handleOWTChange = date => {
   // setOwt(date);
    setFormState(formState => ({
      ...formState,
      owt:date
    }));
  //  console.log(new Date(owt));
  };

  const handleCWTChange = date => {
   // setCwt(date);
    setFormState(formState => ({
      ...formState,
//      cwt:date
    }));
  };

  const handleOWDTChange = date => {
   // setOwdt(date);
    setFormState(formState => ({
      ...formState,
      owdt:date
    }));
  };

  const handleCWDTChange = date => {
  //  setCwdt(date);
    setFormState(formState => ({
      ...formState,
      cwdt:date
    }));
  };
  
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
  //    setStartDate(date);

      if (moment(date).isAfter(endDate)) {
        setEndDate(date);
      }
    } else {
      setEndDate(date);

    //   if (moment(date).isBefore(startDate)) {
    //  //   setStartDate(date);
    //   } else {
    // //    setStartDate(date);
    //   }
    }

    setSelectEdge(null);
  };

  const openn = Boolean(selectEdge);


  if (!open) {
    return null;
  }

  const handleChangeCategory = async event => {
    event.persist();
    let categories = [];
    setFormState(formState => ({
      ...formState,
      'categoryID': event.target.value,
      'categoryName': event._targetInst.memoizedProps.children[0][0]
    }));


    console.log(formState);
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

  const handleChangeAdministrator = async event => {
    event.persist();
        setFormState(formState => ({
          ...formState,
          'administratorID':event.target.value,
          'administratorName':event._targetInst.memoizedProps.children[0][0]
        }));      
  }

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };



  const validateForm = () => {
    let nameError = "";
    let contactNameError = "";
    let rutError = "";
    let emailError = "";
    let reasonError = "";
    let passwordRepeatError = "";
    let roleError = "";
    let phoneError = "";
    let email = formState.email ? formState.email : "";
    let nameErrorMessage = "";
    let rutErrorMessage = "";
    let emailErrorMessage = "";
    let reasonErrorMessage = "";
    let passwordRepeatErrorMessage = "";
    let roleErrorMessage = "";
    let contactNameErrorMessage = "";
    let phoneErrorMessage = "";
    
    if(!formState.name){
      nameError = "Debe introducir un nombre";
      nameErrorMessage = "Debe introducir un nombre";
    }

    
    if(!formState.phone){
      phoneError = "Debe introducir un phone valido";
      phoneErrorMessage = "Debe introducir un phone valido";
    }

    if(!formState.contactName){
      contactNameError = "Debe introducir un contactName valido";
      contactNameErrorMessage = "Debe introducir un contactName valido";
    }

    if(nameError || phoneError || reasonError || contactNameError){
      setFormState(formState => ({
        ...formState,
        nameError,emailError,phoneError,reasonError,rutError,contactNameError,
        nameErrorMessage,emailErrorMessage,phoneErrorMessage,rutErrorMessage,reasonErrorMessage,contactNameErrorMessage
      }));
      return false;
    }
    return true;
  }

  const handleSave = () => {

    console.log(formState);
    const isValid = validateForm();
    let msg = "Company actualizado exitosamente!";
    if (isValid) {

      let params = {
        "id": company.id,
        "active": formState.isActive ? formState.isActive : true,
        "name": formState.name,
        "reason": formState.reason,
        "rut": formState.rut,
        "phone": formState.phone,
        "email": formState.email,
        "contactName": formState.contactName,
        "companyCenters":chipData.map((item) => {return item.key}),
        "address": "",
      }

      console.log(params);
//return;
      fetch(service + 'companyUpdateAdmin', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify(params)
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body);
          actualizar(msg, body);
        });
      }).catch(function (error) {
        // Error :(
        console.log(error)
      });
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
              {`${configModel.headerAdd}`}
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
                <TextField
                  fullWidth
                  label={t("Company Name")}
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
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("Reason")}
                  name="reason"
                  onChange={handleFieldChange}
                  value={formState.reason}
                  variant="outlined"
                  error={formState.reasonError}
                  helperText={formState.reasonErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("Rut")}
                  name="rut"
                  onChange={handleFieldChange}
                  value={formState.rut}
                  variant="outlined"
                  error={formState.rutError}
                  helperText={formState.rutErrorMessage}
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
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("Contacto")}
                  name="contactName"
                  onChange={handleFieldChange}
                  value={formState.contactName}
                  variant="outlined"
                  error={formState.contactNameError}
                  helperText={formState.contactNameErrorMessage}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("Email")}
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
                <InputLabel id="demo-simple-select-label">{t("center")}</InputLabel>
                <Select
                  name="centerName"
                  value={formState.centerID}
                  onChange={handleChangeCenter}
                  style={{ width: "520px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {cboCenters.map(item => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid
                item
                md={6}
                xs={6}
              >
                <Typography variant="h5">{t("Estado")}</Typography>
                <Switch
                  checked={formState.active}
                  color="secondary"
                  edge="start"
                  name="active"
                  onChange={handleFieldChange}
                  value={formState.active}
                />
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
              {t("save")}
            </Button>
          </CardActions>
        </form>
      </Card>
    </Modal>
  );
};

CompanyEdit.displayName = 'CompanyEdit';

CompanyEdit.propTypes = {
  className: PropTypes.string,
  company: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

CompanyEdit.defaultProps = {
  open: false,
  onClose: () => { }
};

export default CompanyEdit;
