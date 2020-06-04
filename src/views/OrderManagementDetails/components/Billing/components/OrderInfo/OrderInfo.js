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
import { OrderEdit } from './components';
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

const OrderInfo = props => {
  const { order, className, actualizar, ...rest } = props;

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
      <CardHeader title={t("order info")} />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>{t("billing activity code")}</TableCell>
              <TableCell>{order.billingActvityCode ? order.billingActvityCode : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("billing address")}</TableCell>
              <TableCell>{order.billingAddress ? order.billingAddress : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("billing dni")}</TableCell>
              <TableCell>{order.billingDNI ? order.billingDNI : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("billing email")}</TableCell>
              <TableCell>{order.billingEmail ? order.billingEmail : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("billing gyre")}</TableCell>
              <TableCell>{order.billingGyre ? order.billngGyre : "undefined"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("billing phone")}</TableCell>
              <TableCell>{order.billingPhone ? order.billingPhone : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("billing reason")}</TableCell>
              <TableCell>{order.billingReason ? order.billingReason : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("billing required")}</TableCell>
              <TableCell>{order.billingRequired ? order.billingRequired : 'undefined'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        {/* <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          Edit
        </Button> */}
        {/*}  <Button>
          <LockOpenIcon className={classes.buttonIcon} />
          Reset &amp; Send Password
        </Button>
        <Button>
          <PersonIcon className={classes.buttonIcon} />
          Login as Order
                    </Button>*/}
      </CardActions>
      {/* <OrderEdit
        order={order}
        actualizar={actualizar}
        onClose={handleEditClose}
        open={openEdit}
      /> */}
    </Card>
  );
};

OrderInfo.propTypes = {
  className: PropTypes.string,
  order: PropTypes.object.isRequired
};

export default OrderInfo;
