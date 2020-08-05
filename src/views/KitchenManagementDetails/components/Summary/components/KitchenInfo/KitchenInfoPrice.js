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

const KitchenInfoPrice = props => {
  const { kitchen, className, actualizar,cboCategories, ...rest } = props;

  const classes = useStyles();

  const [openEdit, setOpenEdit] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };
  
  return (
   
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title={"Kitchens info"} />
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
              <TableCell>{t("category")}</TableCell>
              <TableCell>{kitchen.category}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Presentation")}</TableCell>
              <TableCell>{kitchen.presentation}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Kitchen Line")}</TableCell>
              <TableCell>{kitchen.kitchenLine }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("concentration")}</TableCell>
              <TableCell>{new String(kitchen.concentration)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("composition")}</TableCell>
              <TableCell>{new String(kitchen.composition)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("deseases")}</TableCell>
              <TableCell>{new String(kitchen.deseases)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("posology")}</TableCell>
              <TableCell>{new String(kitchen.posology)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("quantity")}</TableCell>
              <TableCell>{new String(kitchen.quantity)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("sku")}</TableCell>
              <TableCell>{new String(kitchen.sku)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("substance")}</TableCell>
              <TableCell>{new String(kitchen.substance)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("treatment")}</TableCell>
              <TableCell>{new String(kitchen.treatment != undefined ? kitchen.treatment : 'No definido')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("isactive")}</TableCell>
              <TableCell>{new String(kitchen.active != undefined ? kitchen.active : true)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("deleted")}</TableCell>
              <TableCell>{new String(kitchen.deleted != undefined ? kitchen.deleted : false)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("promo")}</TableCell>
              <TableCell>{new String(kitchen.promo != undefined ? kitchen.promo : false)}</TableCell>
            </TableRow>
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
      />
    </Card>
  );
};

KitchenInfoPrice.propTypes = {
  className: PropTypes.string,
  kitchen: PropTypes.object.isRequired
};

export default KitchenInfoPrice;
