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
import { EmployeeEdit } from './components';
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

const EmployeeInfo = props => {
  const { employee, className, actualizar, ...rest } = props;

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
    var emailAddress = employee.email;
    
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
      <CardHeader title={"Employee info"} />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
          <TableRow>
              <TableCell>{t("name")}</TableCell>
              <TableCell>{employee.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("email")}</TableCell>
              <TableCell>
                {employee.email}
                <div>
                  <Label
                    color={
                      employee.verified ? colors.green[600] : colors.orange[600]
                    }
                  >
                    {employee.verified
                      ? 'Email verified'
                      : 'Email not verified'}
                  </Label>
                </div>
              </TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>{t("language")}</TableCell>
              <TableCell>{employee.language}</TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell>{t("phone")}</TableCell>
              <TableCell>{employee.phone ? employee.phone : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Id Employee</TableCell>
              <TableCell>{employee.uid}</TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>{t("Evaluación")}</TableCell>
              <TableCell>{new String(employee.rate != undefined ? employee.rate : 0)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Pedidos Totales")}</TableCell>
              <TableCell>{new String(employee.rate != undefined ? employee.rate : 0)}</TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell>{t("Estado")}</TableCell>
              <TableCell>{new String(employee.active != undefined ? employee.active : true)}</TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>{t("deleted")}</TableCell>
              <TableCell>{new String(employee.deleted != undefined ? employee.deleted : false)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("rol")}</TableCell>
              <TableCell>{new String(employee.role != undefined ? employee.role : 'No definido')}</TableCell>
            </TableRow> */}
            {/*<TableRow>
              <TableCell>State/Region</TableCell>
              <TableCell>{employee.state}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Country</TableCell>
              <TableCell>{employee.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 1</TableCell>
              <TableCell>{employee.address1}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Address 2</TableCell>
              <TableCell>{employee.address2}</TableCell>
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
          Login as Employee
        </Button> */}
      </CardActions>
      <EmployeeEdit
        employee={employee}
        actualizar={actualizar}
        onClose={handleEditClose}
        open={openEdit}
      />
    </Card>
  );
};

EmployeeInfo.propTypes = {
  className: PropTypes.string,
  employee: PropTypes.object.isRequired
};

export default EmployeeInfo;
