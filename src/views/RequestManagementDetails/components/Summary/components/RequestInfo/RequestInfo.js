import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
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
import getInitials from 'utils/getInitials';

import { Label } from 'components';
import { RequestEdit } from './components';

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

const RequestInfo = props => {
  const { request, driversNames,  actualizar, className, ...rest } = props;

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
      <CardHeader title="Request info" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
          <TableRow>
              <TableCell>id</TableCell>
              <TableCell>{request.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>
              {
                        new Intl.DateTimeFormat('en-US', {year: 'numeric', 
                        day: '2-digit',
                        month: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',}).format(new Date(request.date.toDate()))
              }
              </TableCell>
            </TableRow>
            <TableRow>
            <TableCell>Passenger Photo</TableCell>  
            <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={request.passengerAvatar}
                          >
                            {getInitials(request.passengerName)}
                          </Avatar>
                        </div>
                      </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Passenger Name</TableCell>
              <TableCell>{request.passengerName}</TableCell>
            </TableRow>
          <TableRow>
              <TableCell>Driver Name</TableCell>
              <TableCell>{request.driverName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Driver Dni</TableCell>
              <TableCell>{request.driverDni}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Car Model</TableCell>
              <TableCell>{request.driverCarModel}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vehicle PPN</TableCell>
              <TableCell>{request.driverVehiclePPN}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Passenger Number</TableCell>
              <TableCell>{request.passengerNumber}</TableCell>
            </TableRow>
            {/*<TableRow>
              <TableCell>Email</TableCell>
              <TableCell>
                {request.email}
                <div>
                  <Label
                    color={
                      request.verified ? colors.green[600] : colors.orange[600]
                    }
                  >
                    {request.verified
                      ? 'Email verified'
                      : 'Email not verified'}
                  </Label>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>State/Region</TableCell>
              <TableCell>{request.state}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Country</TableCell>
              <TableCell>{request.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 1</TableCell>
              <TableCell>{request.address1}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Address 2</TableCell>
              <TableCell>{request.address2}</TableCell>
            </TableRow>*/}
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          Add Driver Request
        </Button>
       {/*} <Button>
          <LockOpenIcon className={classes.buttonIcon} />
          Reset &amp; Send Password
        </Button>
        <Button>
          <PersonIcon className={classes.buttonIcon} />
          Login as Request
          </Button>*/}
      </CardActions>
      <RequestEdit
        driverNames={driversNames}
        request={request}
        onClose={handleEditClose}
        open={openEdit}
        actualizar={actualizar}
      />
    </Card>
  );
};

RequestInfo.propTypes = {
  className: PropTypes.string,
  request: PropTypes.object.isRequired
};

export default RequestInfo;
