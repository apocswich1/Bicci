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
import { DriverEdit } from './components';
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

const DriverInfo = props => {
  const { driver, className, actualizar, ...rest } = props;

  const classes = useStyles();

  const [openEdit, setOpenEdit] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const handleReset = ()=>{
    var auth = firebase.auth();
    var emailAddress = driver.email;
    
  auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
  let msg = "Se ha enviado un correo de restablecimiento de contraseña!";
  let body = {
    code: 200,
    message: "No se pudo restablecer la contraseña,por favor consulte con e administrador!"
  };
  actualizar(msg,body);
  console.log("Email enviado...")
  }).catch(function(error) {
  // An error happened.
  let msg = "Se ha enviado un correo de restablecimiento de contraseña!";
  let body = {
    code: 200,
    message: "No se pudo restablecer la contraseña,por favor consulte con e administrador!"
  };
  actualizar(msg,body);
  console.log(error);
  });

  }
  
  return (
   
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title={"Conductor info"} />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
          <TableRow>
              <TableCell>{t("name")}</TableCell>
              <TableCell>{driver.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("email")}</TableCell>
              <TableCell>
                {driver.email}
                <div>
                  <Label
                    color={
                      driver.verified ? colors.green[600] : colors.orange[600]
                    }
                  >
                    {driver.verified
                      ? 'Email verified'
                      : 'Email not verified'}
                  </Label>
                </div>
              </TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>{t("language")}</TableCell>
              <TableCell>{driver.language}</TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell>{t("phone")}</TableCell>
              <TableCell>{driver.phone ? driver.phone : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Id Usuario</TableCell>
              <TableCell>{driver.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bicci Number</TableCell>
              <TableCell>{driver.bicciNumber}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dni</TableCell>
              <TableCell>{driver.dni}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>{driver.address}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>wallet</TableCell>
              <TableCell>{driver.wallet}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Evaluación")}</TableCell>
              <TableCell>{new String(driver.rate != undefined ? driver.rate : 0)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Pedidos Totales")}</TableCell>
              <TableCell>{new String(driver.rate != undefined ? driver.rate : 0)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Estado")}</TableCell>
              <TableCell>{new String(driver.active != undefined ? driver.active : true)}</TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>{t("deleted")}</TableCell>
              <TableCell>{new String(driver.deleted != undefined ? driver.deleted : false)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("rol")}</TableCell>
              <TableCell>{new String(driver.role != undefined ? driver.role : 'No definido')}</TableCell>
            </TableRow> */}
            {/*<TableRow>
              <TableCell>State/Region</TableCell>
              <TableCell>{driver.state}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Country</TableCell>
              <TableCell>{driver.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 1</TableCell>
              <TableCell>{driver.address1}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Address 2</TableCell>
              <TableCell>{driver.address2}</TableCell>
            </TableRow>*/}
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          {t("edit")}
        </Button>
        <Button onClick={handleReset}>
          <LockOpenIcon className={classes.buttonIcon} />
          {t("Reset")} &amp; {t("Send Password")}
        </Button>
        {/* <Button>
          <PersonIcon className={classes.buttonIcon} />
          Login as Driver
        </Button> */}
      </CardActions>
      <DriverEdit
        driver={driver}
        actualizar={actualizar}
        onClose={handleEditClose}
        open={openEdit}
      />
    </Card>
  );
};

DriverInfo.propTypes = {
  className: PropTypes.string,
  driver: PropTypes.object.isRequired
};

export default DriverInfo;
