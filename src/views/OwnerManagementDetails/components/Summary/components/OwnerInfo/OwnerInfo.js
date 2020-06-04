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
import { OwnerEdit } from './components';

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

const OwnerInfo = props => {
  const { owner, className, actualizar, ...rest } = props;

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
      <CardHeader title="Owner info" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
          <TableRow>
              <TableCell>Uid</TableCell>
              <TableCell>{owner.id}</TableCell>
            </TableRow>
          <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{owner.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>
                {owner.email}
                <div>
                  <Label
                    color={
                      owner.verified ? colors.green[600] : colors.orange[600]
                    }
                  >
                    {owner.verified
                      ? 'Email verified'
                      : 'Email not verified'}
                  </Label>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dni</TableCell>
              <TableCell>{owner.dni}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Phone</TableCell>
              <TableCell>{owner.phone}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          Edit
        </Button>
       {/*} <Button>
          <LockOpenIcon className={classes.buttonIcon} />
          Reset &amp; Send Password
        </Button>
        <Button>
          <PersonIcon className={classes.buttonIcon} />
          Login as Owner
                    </Button>*/}
      </CardActions>
      <OwnerEdit
        owner={owner}
        onClose={handleEditClose}
        open={openEdit}
        actualizar={actualizar}
      />
    </Card>
  );
};

OwnerInfo.propTypes = {
  className: PropTypes.string,
  owner: PropTypes.object.isRequired
};

export default OwnerInfo;
