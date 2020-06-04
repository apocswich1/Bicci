import React, { useState } from 'react';
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
import ReactGoogleMapLoader from "react-google-maps-loader";
import GoogleMapReact from 'google-map-react';

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

const OrderInfo = props => {
  const { order, className, actualizar, ...rest } = props;

  const classes = useStyles();

  const [openEdit, setOpenEdit] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  return (

    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Información de Ubicación" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
            <ReactGoogleMapLoader
    params={{
        key: 'AIzaSyARbD4ypapuQsPuquP2UPaTSNuffK3TdZ0', // Define your api key here
        libraries: "places", // To request multiple libraries, separate them with a comma
    }}
    render={(googleMaps, error) =>
        googleMaps ? (
            <div>
                {/*Show a custom error if SDK Authentication Error. See N/B 2 below.*/}
                {error ? error : 
                   <div style={{ height: '70vh', width: '100%' }}>
                   <GoogleMapReact
                     bootstrapURLKeys={{ key: 'AIzaSyARbD4ypapuQsPuquP2UPaTSNuffK3TdZ0' }}
                     defaultCenter={{
                      lat: 59.95,
                      lng: 30.33
                    }}
                     defaultZoom={15}
                   >
                   </GoogleMapReact>
                 </div>
                }
            </div>
        )   :   (
            <div>
                {/*Check for network error so loading state ends if user lost connection.*/}
                {error === "Network Error" ? <p>{error}</p> : <p>isLoading...</p>}
            </div>
        )
    }/>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

OrderInfo.propTypes = {
  className: PropTypes.string,
  order: PropTypes.object.isRequired
};

export default OrderInfo;
