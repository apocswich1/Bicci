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
import { AntecedentesEdit } from './components';
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

const Antecedentes = props => {
  const { driver, className, actualizar, ...rest } = props;

  const classes = useStyles();

  const [openEdit, setOpenEdit] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const handleReset = () => {
    var auth = firebase.auth();
    var emailAddress = driver.email;

    auth.sendPasswordResetEmail(emailAddress).then(function () {
      // Email sent.
      let msg = "Se ha enviado un correo de restablecimiento de contraseña!";
      let body = {
        code: 200,
        message: "No se pudo restablecer la contraseña,por favor consulte con e administrador!"
      };
      actualizar(msg, body);
      console.log("Email enviado...")
    }).catch(function (error) {
      // An error happened.
      let msg = "Se ha enviado un correo de restablecimiento de contraseña!";
      let body = {
        code: 200,
        message: "No se pudo restablecer la contraseña,por favor consulte con e administrador!"
      };
      actualizar(msg, body);
      console.log(error);
    });

  }

  return (

    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title={"Antecedentes File"} />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                {driver.antecedentesFile ? (
                  <img width="100" height="90" src={driver.antecedentesFile} />
                ) : (
                    "No Disponible"
                  )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          {t("edit")}
        </Button>
        {/* <Button>
          <PersonIcon className={classes.buttonIcon} />
          Login as Driver
        </Button> */}
      </CardActions>
      <AntecedentesEdit
        driver={driver}
        actualizar={actualizar}
        onClose={handleEditClose}
        open={openEdit}
      />
    </Card>
  );
};

Antecedentes.propTypes = {
  className: PropTypes.string,
  driver: PropTypes.object.isRequired
};

export default Antecedentes;
