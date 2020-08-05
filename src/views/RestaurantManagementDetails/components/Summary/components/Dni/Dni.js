import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
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
  Link,
  colors
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import PersonIcon from '@material-ui/icons/PersonOutline';

import { Label } from 'components';
import { DniEdit } from './components';
import translate from 'translate';
import firebase from 'utils/firebase';

const t = translate;
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

const Dni = props => {
  const { restaurant, className, actualizar, ...rest } = props;

  const classes = useStyles();

  const [openEdit, setOpenEdit] = useState(false);
  const [admininfo, setAdmininfo] = useState();

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  useEffect(() => {
    let mounted = true;
    const administrator = async () => {
      const administrators = await firebase.firestore().collection("administrators").doc(restaurant.starredBy[0]).get();
      const result = await administrators.data();
      setAdmininfo(result);
      console.log(result);
      return () => {
        mounted = false;
      };
    }

    administrator();
  }, []);

  if (!admininfo) {
    return null;
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title={"Administrador"} />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                {admininfo.avatar ? (
                  <img width="150" height="130" src={admininfo.avatar} />
                ) : (
                    "No Disponible"
                  )}
              </TableCell>
              <TableCell>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>
                    <Link
                      color="inherit"
                      component={RouterLink}
                      to={`/management/administrators/${admininfo.id}`}
                      //to="/management/administrators/1"
                      variant="h6"
                    >
                      {admininfo.name}
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Phone</TableCell>
                  <TableCell>{admininfo.phone}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>{admininfo.email}</TableCell>
                </TableRow>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        {/* <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          {t("edit")}
        </Button> */}
        {/* <Button>
          <PersonIcon className={classes.buttonIcon} />
          Login as Restaurant
        </Button> */}
      </CardActions>
      <DniEdit
        restaurant={restaurant}
        actualizar={actualizar}
        onClose={handleEditClose}
        open={openEdit}
      />
    </Card>
  );
};

Dni.propTypes = {
  className: PropTypes.string,
  restaurant: PropTypes.object.isRequired
};

export default Dni;
