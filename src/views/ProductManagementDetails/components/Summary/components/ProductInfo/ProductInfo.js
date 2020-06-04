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
import { ProductEdit } from './components';
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

const ProductInfo = props => {
  const { product, className, actualizar,cboCategories, ...rest } = props;

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
    var emailAddress = product.email;
    
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
      <CardHeader title={"Información del Producto"} />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
          <TableRow>
              <TableCell>Uid</TableCell>
              <TableCell>{product.id}</TableCell>
            </TableRow>
          <TableRow>
              <TableCell>{t("name")}</TableCell>
              <TableCell>{product.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("category")}</TableCell>
              <TableCell>{product.category}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Presentation")}</TableCell>
              <TableCell>{product.presentation}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Product Line")}</TableCell>
              <TableCell>{product.productLine }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("concentration")}</TableCell>
              <TableCell>{new String(product.concentration)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("composition")}</TableCell>
              <TableCell>{new String(product.composition)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("deseases")}</TableCell>
              <TableCell>{new String(product.deseases)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Descripción")}</TableCell>
              <TableCell>{new String(product.description)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("posology")}</TableCell>
              <TableCell>{new String(product.posology)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("quantity")}</TableCell>
              <TableCell>{new String(product.quantity)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("sku")}</TableCell>
              <TableCell>{new String(product.sku)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("substance")}</TableCell>
              <TableCell>{new String(product.substance)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("treatment")}</TableCell>
              <TableCell>{new String(product.treatment != undefined ? product.treatment : 'No definido')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("isactive")}</TableCell>
              <TableCell>{new String(product.active != undefined ? product.active : true)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("deleted")}</TableCell>
              <TableCell>{new String(product.deleted != undefined ? product.deleted : false)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("promo")}</TableCell>
              <TableCell>{new String(product.promo != undefined ? product.promo : false)}</TableCell>
            </TableRow>
            {/*<TableRow>
              <TableCell>State/Region</TableCell>
              <TableCell>{product.state}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Country</TableCell>
              <TableCell>{product.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 1</TableCell>
              <TableCell>{product.address1}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Address 2</TableCell>
              <TableCell>{product.address2}</TableCell>
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
          Login as Product
        </Button> */}
      </CardActions>
      <ProductEdit
        product={product}
        actualizar={actualizar}
        onClose={handleEditClose}
        open={openEdit}
        cboCategories={cboCategories} 
      />
    </Card>
  );
};

ProductInfo.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductInfo;
