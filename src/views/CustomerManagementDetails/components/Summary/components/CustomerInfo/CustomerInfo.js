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
import { CustomerEdit } from './components';
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

const CustomerInfo = props => {
  const { customer, className, actualizar, ...rest } = props;

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
    var emailAddress = customer.email;
    
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
      <CardHeader title={"Usuarios info"} />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
          <TableRow>
              <TableCell>{t("name")}</TableCell>
              <TableCell>{customer.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("email")}</TableCell>
              <TableCell>
                {customer.email}
                <div>
                  <Label
                    color={
                      customer.verified ? colors.green[600] : colors.orange[600]
                    }
                  >
                    {customer.verified
                      ? 'Email verified'
                      : 'Email not verified'}
                  </Label>
                </div>
              </TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>{t("language")}</TableCell>
              <TableCell>{customer.language}</TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell>{t("phone")}</TableCell>
              <TableCell>{customer.phone ? '+56 9 '+customer.phone : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Id Usuario</TableCell>
              <TableCell>{customer.uid}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Evaluación")}</TableCell>
              <TableCell>{new String(customer.rate != undefined ? customer.rate : 0)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Pedidos Totales")}</TableCell>
              <TableCell>{new String(customer.rate != undefined ? customer.rate : 0)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Estado")}</TableCell>
              <TableCell>{new String(customer.active != undefined ? customer.active : true)}</TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>{t("deleted")}</TableCell>
              <TableCell>{new String(customer.deleted != undefined ? customer.deleted : false)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("rol")}</TableCell>
              <TableCell>{new String(customer.role != undefined ? customer.role : 'No definido')}</TableCell>
            </TableRow> */}
            {/*<TableRow>
              <TableCell>State/Region</TableCell>
              <TableCell>{customer.state}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Country</TableCell>
              <TableCell>{customer.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 1</TableCell>
              <TableCell>{customer.address1}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Address 2</TableCell>
              <TableCell>{customer.address2}</TableCell>
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
          Login as Customer
        </Button> */}
      </CardActions>
      <CustomerEdit
        customer={customer}
        actualizar={actualizar}
        onClose={handleEditClose}
        open={openEdit}
      />
    </Card>
  );
};

CustomerInfo.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object.isRequired
};

export default CustomerInfo;
