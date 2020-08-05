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
import tiempo from 'utils/tiempo';
import { Label } from 'components';
import { PromotionEdit } from './components';
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

const PromotionInfo = props => {
  const { promotion, className, actualizar, chips, cboRestaurants, ...rest } = props;

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
    var emailAddress = promotion.email;
    
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
      <CardHeader title={t("Promotion info")} />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
          <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>{promotion.id}</TableCell>
            </TableRow>
          <TableRow>
              <TableCell>{t("name")}</TableCell>
              <TableCell>{promotion.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("expirationDate")}</TableCell>
              <TableCell>{tiempo.fecha(promotion.expirationDate)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("isactive")}</TableCell>
              <TableCell>{new String(promotion.active != undefined ? promotion.active : true)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("deleted")}</TableCell>
              <TableCell>{new String(promotion.deleted != undefined ? promotion.deleted : false)}</TableCell>
            </TableRow>
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
          Login as Promotion
        </Button> */}
      </CardActions>
      <PromotionEdit
        cboRestaurants={cboRestaurants}
        promotion={promotion}
        actualizar={actualizar}
        onClose={handleEditClose}
        open={openEdit}
        chips={chips}
      />
    </Card>
  );
};

PromotionInfo.propTypes = {
  className: PropTypes.string,
  promotion: PropTypes.object.isRequired
};

export default PromotionInfo;