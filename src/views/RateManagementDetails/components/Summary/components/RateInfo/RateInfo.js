import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import moment from 'moment';
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
import { RateEdit } from './components';
import { Loading } from './components';

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

const RateInfo = props => {
  const { rate, className, ...rest } = props;

  const classes = useStyles();

  const [openEdit, setOpenEdit] = useState(false);

  const [openLoading, setOpenLoading] = useState(false);

  const [openLoad, setOpenLoad] = useState('none');

  const [openForm, setOpenForm] = useState('block');

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleLoadingOpen = () => {
    setOpenLoading(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const handleLoadingClose = () => {
    setOpenLoading(false);
  };

  return (
    <div>
    <React.Fragment>
    <Card
      {...rest}
      className={clsx(classes.root, className)}
      style={{"display":openLoad}}
    >
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
          <TableRow alignItems={"center"}>
              <img src="/images/tenor.gif" width="250px"/>
            </TableRow>
      </TableBody>
      </Table>
      </CardContent>
    </Card>
    </React.Fragment>
    <React.Fragment>
    <Card
      {...rest}
      className={clsx(classes.root, className)}
      style={{"display":openForm}}
    >
      <CardHeader title="Price info" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
          <TableRow>
              <TableCell>id</TableCell>
              <TableCell>{rate.id}</TableCell>
            </TableRow>
          <TableRow>
              <TableCell>Min Price</TableCell>
              <TableCell>{rate.minRate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Base Price</TableCell>
              <TableCell>
                {rate.baseRate}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Commission Auto</TableCell>
              <TableCell>
              { rate.commissionAuto }
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Commission Van</TableCell>
              <TableCell>
              { rate.commissionVan }
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Price per kilometer</TableCell>
              <TableCell>
              { rate.pricePerKilometer }
              </TableCell>
            </TableRow>
            {/*<TableRow>
              <TableCell>State/Region</TableCell>
              <TableCell>{rate.state}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Country</TableCell>
              <TableCell>{rate.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 1</TableCell>
              <TableCell>{rate.address1}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Address 2</TableCell>
              <TableCell>{rate.address2}</TableCell>
            </TableRow>*/}
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          Edit
        </Button>
       {/*
      <Button>
          <LockOpenIcon className={classes.buttonIcon} />
          Reset &amp; Send Password
        </Button>
        <Button>
          <PersonIcon className={classes.buttonIcon} />
          Login as Rate
        </Button>
      */} 
      </CardActions>
      <RateEdit
        rate={rate}
        onClose={handleEditClose}
        open={openEdit}
        actualizar={props.actualizar}
        setOpenLoad={setOpenLoad}
        setOpenForm={setOpenForm}
      />
      <Loading
        rate={rate}
        onClose={handleEditClose}
        open={openLoading}
        actualizar={props.actualizar}
        setOpenLoad={setOpenLoad}
        setOpenForm={setOpenForm}
      />
    </Card>
    </React.Fragment>
    </div>
  );
};

RateInfo.propTypes = {
  className: PropTypes.string,
  rate: PropTypes.object.isRequired
};

export default RateInfo;
