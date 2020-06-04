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
import moment from 'moment';
import { Label } from 'components';
import { CouponEdit } from './components';
import translate from 'translate';

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

const CouponInfo = props => {
  const { coupon, className, actualizar, cboFranchises, ...rest } = props;

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
      <CardHeader title={t("coupon info")} />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
          <TableRow>
              <TableCell>id</TableCell>
              <TableCell>{coupon.id}</TableCell>
            </TableRow>
          <TableRow>
              <TableCell>{t("Code")}</TableCell>
              <TableCell>{coupon.code}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("amount")}</TableCell>
              <TableCell>{new String(coupon.amount)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Active")}</TableCell>
              <TableCell>{new String(coupon.active != undefined ? coupon.active : true)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("global")}</TableCell>
              <TableCell>{new String(coupon.global != undefined ? coupon.global : true)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("discount")}</TableCell>
              <TableCell>{new String(coupon.discount != undefined ? coupon.discount : 'No aplica')}</TableCell>
            </TableRow>
            {/*<TableRow>
              <TableCell>State/Region</TableCell>
              <TableCell>{coupon.state}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Country</TableCell>
              <TableCell>{coupon.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 1</TableCell>
              <TableCell>{coupon.address1}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Address 2</TableCell>
              <TableCell>{coupon.address2}</TableCell>
            </TableRow>*/}
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          {t("edit")}
        </Button>
      {/*  <Button>
          <LockOpenIcon className={classes.buttonIcon} />
          Reset &amp; Send Password
        </Button>
        <Button>
          <PersonIcon className={classes.buttonIcon} />
          Login as Coupon
      </Button>*/}
      </CardActions>
      <CouponEdit
        coupon={coupon}
        actualizar={actualizar}
        onClose={handleEditClose}
        open={openEdit}
        cboFranchises={cboFranchises}
      />
    </Card>
  );
};

CouponInfo.propTypes = {
  className: PropTypes.string,
  coupon: PropTypes.object.isRequired
};

export default CouponInfo;
