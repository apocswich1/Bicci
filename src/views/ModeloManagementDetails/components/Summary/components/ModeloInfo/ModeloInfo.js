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
import { ModeloEdit } from './components';
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

const ModeloInfo = props => {
  const { modelo, className, actualizar, ...rest } = props;

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
    var emailAddress = modelo.email;
    
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
              <TableCell>Uid</TableCell>
              <TableCell>{modelo.uid}</TableCell>
            </TableRow>
          <TableRow>
              <TableCell>{t("name")}</TableCell>
              <TableCell>{modelo.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("email")}</TableCell>
              <TableCell>
                {modelo.email}
                <div>
                  <Label
                    color={
                      modelo.verified ? colors.green[600] : colors.orange[600]
                    }
                  >
                    {modelo.verified
                      ? 'Email verified'
                      : 'Email not verified'}
                  </Label>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("language")}</TableCell>
              <TableCell>{modelo.language}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("phone")}</TableCell>
              <TableCell>{modelo.phone ? '+56 9 '+modelo.phone : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("agree terms")}</TableCell>
              <TableCell>{new String(modelo.agree_terms)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("isactive")}</TableCell>
              <TableCell>{new String(modelo.isActive != undefined ? modelo.isActive : true)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("deleted")}</TableCell>
              <TableCell>{new String(modelo.deleted != undefined ? modelo.deleted : false)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("rol")}</TableCell>
              <TableCell>{new String(modelo.role != undefined ? modelo.role : 'No definido')}</TableCell>
            </TableRow>
            {/*<TableRow>
              <TableCell>State/Region</TableCell>
              <TableCell>{modelo.state}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Country</TableCell>
              <TableCell>{modelo.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 1</TableCell>
              <TableCell>{modelo.address1}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Address 2</TableCell>
              <TableCell>{modelo.address2}</TableCell>
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
          Login as Modelo
        </Button> */}
      </CardActions>
      <ModeloEdit
        modelo={modelo}
        actualizar={actualizar}
        onClose={handleEditClose}
        open={openEdit}
      />
    </Card>
  );
};

ModeloInfo.propTypes = {
  className: PropTypes.string,
  modelo: PropTypes.object.isRequired
};

export default ModeloInfo;
