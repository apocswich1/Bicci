import React, { useState, useEffect } from 'react';
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
import { ProductEditPrice } from './components';
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

const ProductInfoPrice = props => {
  const { product, store, className, cruzverde, productPrice, salcobrand, ahumada, actualizar,cboCategories, ...rest } = props;

  const classes = useStyles();

  const [openEdit, setOpenEdit] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };
  
  useEffect(() => {
    let mounted = true;
    return () => {
      mounted = false;
    };
  }, []);

  if (!salcobrand || !cruzverde || !ahumada) {
    return null;
  }

  return (
   
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title={"Precios"} />
      <Divider />
      <CardContent className={classes.content}>
      {store.length && (
        <Table>
          <TableBody>
              <TableRow>
              <TableCell>{t("Salcobrand")}</TableCell>
              <TableCell>Precio: {salcobrand.length > 0 ? salcobrand[0].price : 0}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Descuento: {salcobrand.length > 0 ? salcobrand[0].discount : 0}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Cruz Verde")}</TableCell>
              <TableCell>Precio: {cruzverde.length > 0 ? cruzverde[0].price : 0}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Descuento: {cruzverde.length > 0 ? cruzverde[0].discount : 0}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Ahumada")}</TableCell>
              <TableCell>Precio: {ahumada.length > 0 ? ahumada[0].price : 0}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Descuento: {ahumada.length > 0 ? ahumada[0].discount : 0}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        )}
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          {t("edit")} {"precios"}
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
   {salcobrand.length > 0 && ahumada.length > 0 && (
     <ProductEditPrice
     product={product}
     actualizar={actualizar}
     onClose={handleEditClose}
     open={openEdit}
     cboCategories={cboCategories} 
     salcobrand={salcobrand} 
     ahumada={ahumada} 
     cruzverde={cruzverde} 
     productPrice={productPrice}
   />
   )}
    </Card>
  );
};

ProductInfoPrice.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductInfoPrice;
