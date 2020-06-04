import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Typography
} from '@material-ui/core';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import translate from 'translate';

const t = translate;
const useStyles = makeStyles(theme => ({
  root: {},
  mainActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  notice: {
    marginTop: theme.spacing(1)
  },
  deleteButton: {
    marginTop: theme.spacing(1),
    color: theme.palette.white,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));
const OtherActions = props => {
  const { className, venue,actualizar, ...rest } = props;
  const venueId = venue.id;
  const classes = useStyles();
  
  const disableAccount = ()=>{
  let params = { "id":venueId, "isActive":false }
  let msg = "Franquicia desactivada exitosamente!";
  console.log(params);  
    fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/venueStatusAdmin', {
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
  }

  const enableAccount = ()=>{
    let params = { "id":venueId, "isActive":true }
    let msg = "Franquicia activada exitosamente!";
    console.log(params);  
      fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/venueStatusAdmin', {
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
    }

    const deleteAccount = ()=>{
      let params = { "id":venueId }
      let msg = "Franquicia borrada exitosamente!";
      console.log(params);  
        fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/venueDeleteAdmin', {
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
      }
  
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title={t("other actions")} />
      <Divider />
      <CardContent>
      <div className={classes.mainActions}>
          {(venue.isActive)?(
            <Button onClick={disableAccount}>
            <NotInterestedIcon className={classes.buttonIcon} />
            {t("disable")} {t("Venue")} Account
          </Button>
          ):(
            <Button onClick={enableAccount}>
            <NotInterestedIcon className={classes.buttonIcon} />
            {t("enable")} {t("Venue")} Account
          </Button>
          )}
          <Button>
            <GetAppIcon className={classes.buttonIcon} />
            {t("export")} {t("data")}
          </Button>
        </div>
        <Typography
          className={classes.notice}
          variant="body2"
        >
          Remove this this venue’s data if he requested that, if not please
          be aware that what has been deleted can never brough back
        </Typography>
        <Button className={classes.deleteButton} onClick={deleteAccount}>
          <DeleteIcon className={classes.buttonIcon} />
          {t("delete")} {t("Venue")} Account
        </Button>
      </CardContent>
    </Card>
  );
};

OtherActions.propTypes = {
  className: PropTypes.string
};

export default OtherActions;
