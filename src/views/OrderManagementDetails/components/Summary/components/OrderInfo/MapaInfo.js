import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
  colors
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import PersonIcon from '@material-ui/icons/PersonOutline';
import moment from 'moment';
import { Label } from 'components';
import { OrderEdit } from './components';
import { Mapa } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  actions: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > * + *': {
      marginLeft: 0
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

const MapaInfo = props => {
  const { order, className, actualizar, ...rest } = props;

  const classes = useStyles();

  const [openEdit, setOpenEdit] = useState(false);
  const [washers, setWashers] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  useEffect(() => {
    let mounted = true;

    const fetchWashers = () => {
      fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/listWashersAdminFree', {
        method: 'get',
        mode: 'cors',
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          setWashers(body.usuarios);
          console.log(body.usuarios);
        });
      }).catch(function (err) {
        // Error :(
      });
    };

    fetchWashers();

    return () => {
      mounted = false;
    };
  }, []);
  
  return (

    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Route info" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
        <Mapa order={order}/>
        </Table>
      </CardContent>
    </Card>
  );
};

MapaInfo.propTypes = {
  className: PropTypes.string,
  order: PropTypes.object.isRequired
};

export default MapaInfo;
