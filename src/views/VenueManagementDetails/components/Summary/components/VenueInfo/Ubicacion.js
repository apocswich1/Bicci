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
import { Label } from 'components';
import { VenueEdit } from './components';
import GoogleMapReact from 'google-map-react';
import { Marker } from 'components';
import { parse } from 'url';
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

const Ubicacion = props => {
  const { venue, className, actualizar, idfranchise, ...rest } = props;
  const [center, setCenter] = useState({lat: new Number(venue.coordinates._latitude), lng: new Number(venue.coordinates._longitude) });
  const [zoom, setZoom] = useState(15);
  const classes = useStyles();

  const [openEdit, setOpenEdit] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };
const coordenadas = {
  lat: 11.0168,
  lng: 76.9558
}

// useEffect(() => {

  
//   return () => {
//     mounted = false;
//   };
// }, []);

console.log(props);
const lat = venue.coordinates._lat;
const lng = venue.coordinates._long;

if (!venue) {
  return null;
}

  return (
   
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Ubication info" />
      <Divider />
      <CardContent className={classes.content}>
        {/* <Table> */}
          {/* <TableBody> */}
          {/* <TableRow> */}
            {(venue.coordinates._latitude && 
              <div style={{ height: '44vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyARbD4ypapuQsPuquP2UPaTSNuffK3TdZ0' }}
                defaultCenter={{lat:props.lat, lng:props.lng}}
                defaultZoom={15}
              >
                  <Marker
        lat = {props.lat}
        lng= {props.lng}
       name="Ubicación"
       color="blue"
     />
              </GoogleMapReact>
            </div>
            )}
            {/* </TableRow> */}
          {/* </TableBody> */}
        {/* </Table> */}
      </CardContent>
    </Card>
  );
};


export default Ubicacion;
