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
import { AdministratorEdit } from './components';
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

const AdministratorInfo = props => {
  const { administrator, className, actualizar, ...rest } = props;

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
    var emailAddress = administrator.email;
    
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
      <CardHeader title={"Administrador info"} />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
          <TableRow>
              <TableCell>{t("name")}</TableCell>
              <TableCell>{administrator.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("email")}</TableCell>
              <TableCell>
                {administrator.email}
                <div>
                  <Label
                    color={
                      administrator.verified ? colors.green[600] : colors.orange[600]
                    }
                  >
                    {administrator.verified
                      ? 'Email verified'
                      : 'Email not verified'}
                  </Label>
                </div>
              </TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>{t("language")}</TableCell>
              <TableCell>{administrator.language}</TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell>{t("phone")}</TableCell>
              <TableCell>{administrator.phone ? '+56 9 '+administrator.phone : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Id Usuario</TableCell>
              <TableCell>{administrator.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dni</TableCell>
              <TableCell>{administrator.dni}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>{administrator.address}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Estado")}</TableCell>
              <TableCell>{new String(administrator.active != undefined ? administrator.active : true)}</TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>{t("deleted")}</TableCell>
              <TableCell>{new String(administrator.deleted != undefined ? administrator.deleted : false)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("rol")}</TableCell>
              <TableCell>{new String(administrator.role != undefined ? administrator.role : 'No definido')}</TableCell>
            </TableRow> */}
            {/*<TableRow>
              <TableCell>State/Region</TableCell>
              <TableCell>{administrator.state}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Country</TableCell>
              <TableCell>{administrator.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 1</TableCell>
              <TableCell>{administrator.address1}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Address 2</TableCell>
              <TableCell>{administrator.address2}</TableCell>
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
          Login as Administrator
        </Button> */}
      </CardActions>
      <AdministratorEdit
        administrator={administrator}
        actualizar={actualizar}
        onClose={handleEditClose}
        open={openEdit}
      />
    </Card>
  );
};

AdministratorInfo.propTypes = {
  className: PropTypes.string,
  administrator: PropTypes.object.isRequired
};

export default AdministratorInfo;
