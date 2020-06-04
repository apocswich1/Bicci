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

import { Label } from 'components';
import { VehicleEdit } from './components';

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

const VehicleInfo = props => {
  const { vehicle, ownersNames, driversNames, categoriesNames, actualizar, className, ...rest } = props;

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
      <CardHeader title="Vehicle info" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
          <TableRow>
              <TableCell>Owner Name</TableCell>
              <TableCell>{vehicle.ownerName}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>Driver Name</TableCell>
              <TableCell>{vehicle.driverName}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>Category Name</TableCell>
              <TableCell>{vehicle.categoryName}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>Model</TableCell>
              <TableCell>{vehicle.model}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>PPN</TableCell>
              <TableCell>{vehicle.ppn}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>Max Passengers</TableCell>
              <TableCell>{vehicle.maxPassengers}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>Max Suitcases</TableCell>
              <TableCell>{vehicle.maxSuitcases}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>Current Passengers Capacity</TableCell>
              <TableCell>{vehicle.currentPassengersCapacity}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>Current Suitcases Capacity</TableCell>
              <TableCell>{vehicle.currentSuitcasesCapacity}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>Color</TableCell>
              <TableCell>{vehicle.color}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>Active</TableCell>
              <TableCell>{new String(vehicle.active)}</TableCell>
          </TableRow>
          {/*<TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{vehicle.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>
                {vehicle.email}
                <div>
                  <Label
                    color={
                      vehicle.verified ? colors.green[600] : colors.orange[600]
                    }
                  >
                    {vehicle.verified
                      ? 'Email verified'
                      : 'Email not verified'}
                  </Label>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dni</TableCell>
              <TableCell>{vehicle.dni}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Phone</TableCell>
              <TableCell>{vehicle.phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Airport Permission</TableCell>
              <TableCell>{new String(vehicle.airportPermission)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Agree Terms</TableCell>
              <TableCell>{new String(vehicle.agree_terms)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>isActive</TableCell>
              <TableCell>{new String(vehicle.active)}</TableCell>
            </TableRow>
            {/*<TableRow>
              <TableCell>State/Region</TableCell>
              <TableCell>{vehicle.state}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Country</TableCell>
              <TableCell>{vehicle.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 1</TableCell>
              <TableCell>{vehicle.address1}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Address 2</TableCell>
              <TableCell>{vehicle.address2}</TableCell>
            </TableRow>*/}
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          Edit
        </Button>
        {/*<Button>
          <LockOpenIcon className={classes.buttonIcon} />
          Reset &amp; Send Password
        </Button>
        <Button>
          <PersonIcon className={classes.buttonIcon} />
          Login as Vehicle
        </Button>*/}
      </CardActions>
      <VehicleEdit
        categoriesNames={categoriesNames}
        ownerNames={ownersNames}
        driverNames={driversNames}
        vehicle={vehicle}
        onClose={handleEditClose}
        open={openEdit}
        actualizar={actualizar}
      />
    </Card>
  );
};

VehicleInfo.propTypes = {
  className: PropTypes.string,
  vehicle: PropTypes.object.isRequired
};

export default VehicleInfo;
