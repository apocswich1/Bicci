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
import { KitchenEdit } from './components';
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

const KitchenInfo = props => {
  const { kitchen, className, actualizar,chips,chips2, cboCategories,cboRestaurants,cboIngredients, ...rest } = props;

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
    var emailAddress = kitchen.email;
    
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
      <CardHeader title={"Información del Kitcheno"} />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
          <TableRow>
              <TableCell>Uid</TableCell>
              <TableCell>{kitchen.id}</TableCell>
            </TableRow>
          <TableRow>
              <TableCell>{t("name")}</TableCell>
              <TableCell>{kitchen.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Restaurant")}</TableCell>
              <TableCell>{kitchen.restaurantName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Description")}</TableCell>
              <TableCell>{kitchen.description}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Details")}</TableCell>
              <TableCell>{kitchen.details }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Instructions")}</TableCell>
              <TableCell>{kitchen.instructions}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Estimated Delivery Time")}</TableCell>
              <TableCell>{new String(kitchen.estimatedDeliveryTime)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("stock")}</TableCell>
              <TableCell>{new String(kitchen.stock)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("sku")}</TableCell>
              <TableCell>{new String(kitchen.sku)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("isactive")}</TableCell>
              <TableCell>{new String(kitchen.active != undefined ? kitchen.active : true)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("deleted")}</TableCell>
              <TableCell>{new String(kitchen.deleted != undefined ? kitchen.deleted : false)}</TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>{t("promo")}</TableCell>
              <TableCell>{new String(kitchen.promo != undefined ? kitchen.promo : false)}</TableCell>
            </TableRow> */}
            {/*<TableRow>
              <TableCell>State/Region</TableCell>
              <TableCell>{kitchen.state}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Country</TableCell>
              <TableCell>{kitchen.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 1</TableCell>
              <TableCell>{kitchen.address1}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Address 2</TableCell>
              <TableCell>{kitchen.address2}</TableCell>
            </TableRow>*/}
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
          Login as Kitchen
        </Button> */}
      </CardActions>
      <KitchenEdit
        kitchen={kitchen}
        actualizar={actualizar}
        onClose={handleEditClose}
        open={openEdit}
        cboCategories={cboCategories} 
        cboIngredients={cboIngredients} 
        cboRestaurants={cboRestaurants} 
        chips={chips}
        chips2={chips2}
      />
    </Card>
  );
};

KitchenInfo.propTypes = {
  className: PropTypes.string,
  kitchen: PropTypes.object.isRequired
};

export default KitchenInfo;
