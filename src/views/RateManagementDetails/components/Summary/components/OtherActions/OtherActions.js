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
import { parse } from 'path';

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
  const { className, rate,actualizar, ...rest } = props;
  const rateId = rate.id;
  const classes = useStyles();
  
  const disableRate = ()=>{
  let params = { "id":rateId, "status":false }
  console.log(params);  
    fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/disableRatesAdmin', {
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
  }

  const enableRate = ()=>{
    let params = { "id":rateId, "status":true }
    console.log(params);  
      fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/disableRatesAdmin', {
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
    }

    const deleteRate = ()=>{
      let params = { "id":rateId, "active":true }
      console.log(params);  
        fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/deleteRatesAdmin', {
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
      }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Other actions" />
      <Divider />
      <CardContent>
        <div className={classes.mainActions}>
          {(rate.status)?(
            <Button onClick={disableRate}>
            <NotInterestedIcon className={classes.buttonIcon} />
            disable Rate
          </Button>
          ):(
            <Button onClick={enableRate}>
            <NotInterestedIcon className={classes.buttonIcon} />
            Enable Rate
          </Button>
          )}
          <Button>
            <GetAppIcon className={classes.buttonIcon} />
            Export rate data
          </Button>
        </div>
        <Typography
          className={classes.notice}
          variant="body2"
        >
          Remove this this rate’s data if he requested that, if not please
          be aware that what has been deleted can never brough back
        </Typography>
        <Button className={classes.deleteButton} onClick={deleteRate}>
          <DeleteIcon className={classes.buttonIcon} />
          Delete Rate
        </Button>
      </CardContent>
    </Card>
  );
};

OtherActions.propTypes = {
  className: PropTypes.string
};

export default OtherActions;
