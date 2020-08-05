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
import { CompanyEdit } from './components';
import translate from 'translate';
import firebase from 'utils/firebase';
import tiempo from 'utils/tiempo';

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

const CompanyInfo = props => {
  const { company, className, cboCategories, chips, cboCenters, cboAdministrators, actualizar, ...rest } = props;

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
    var emailAddress = company.email;

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
      <CardHeader title={"Company info"} />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>{t("name")}</TableCell>
              <TableCell>{company.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("reason")}</TableCell>
              <TableCell>{company.reason}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("contactName")}</TableCell>
              <TableCell>{company.contactName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("phone")}</TableCell>
              <TableCell>{company.phone ? company.phone : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Rut")}</TableCell>
              <TableCell>{company.rut ? company.rut : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>{company.address ? company.address : "Sin dirección"}</TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>Open Week Time</TableCell>
              <TableCell>{tiempo.hora(company.openWeekTime)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Close Week Time</TableCell>
              <TableCell>{tiempo.hora(company.closeWeekTime)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Open Weekend Time</TableCell>
              <TableCell>{tiempo.hora(company.openWeekendTime)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Close Weekend Time</TableCell>
              <TableCell>{tiempo.hora(company.closeWeekendTime)}</TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>{company.email}</TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>Rate</TableCell>
              <TableCell>{company.rate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Average Delivery Time</TableCell>
              <TableCell>{company.averageDeliveryTime}</TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          {t("edit")}
        </Button>
        {/* <Button onClick={handleReset}>
          <LockOpenIcon className={classes.buttonIcon} />
          {t("Reset")} &amp; {t("Send Password")}
        </Button> */}
        {/* <Button>
          <PersonIcon className={classes.buttonIcon} />
          Login as Company
        </Button> */}
      </CardActions>
      <CompanyEdit
        chips={chips}
        cboCenters={cboCenters}
        company={company}
        actualizar={actualizar}
        onClose={handleEditClose}
        open={openEdit}
        cboCategories={cboCategories}
        cboAdministrators={cboAdministrators}
      />
    </Card>
  );
};

CompanyInfo.propTypes = {
  className: PropTypes.string,
  company: PropTypes.object.isRequired
};

export default CompanyInfo;
