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
import moment from 'moment';
import { Label } from 'components';
import { OrderEdit } from './components';
import translate from 'translate';
import DeliveryStatus from 'utils/DeliveryStatus';
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

const OrderInfo = props => {
  const { order, className, claim, datosUser, actualizar, ...rest } = props;

  const classes = useStyles();

  const [openEdit, setOpenEdit] = useState(false);
  const [washers, setWashers] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  useEffect(() => {
    let mounted = true;

    const fetchWashers = () => {
      fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/listWashersAdminFree', {
        method: 'get',
        mode: 'cors',
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          setWashers(body.usuarios);
          console.log(body.usuarios);
        });
      }).catch(function (err) {
        // Error :(
      });
    };

    fetchWashers();

    return () => {
      mounted = false;
    };
  }, []);
  
console.log(claim);
console.log(datosUser);

  return (

    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Order info" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>{order.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Username")}</TableCell>
              <TableCell>{order.userName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Driver name")}</TableCell>
              <TableCell>{order.driverName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Place Name")}</TableCell>
              <TableCell>{order.placeName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Date")}</TableCell>
              <TableCell>{tiempo.fecha(order.date)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("CreatedAt")}</TableCell>
              <TableCell>{tiempo.fecha(order.createdAt)}</TableCell>
            </TableRow>
            {
            datosUser ? (
                <TableRow>
              <TableCell>{t("Empresa")}</TableCell>
              <TableCell>{datosUser[0].companyName}</TableCell>
            </TableRow>
            ) : ("")
            }
            {
            datosUser ? (
                <TableRow>
              <TableCell>{t("Centro")}</TableCell>
              <TableCell>{datosUser[0].centerName}</TableCell>
            </TableRow>
            ) : ("")
            }
            {/* <TableRow>
              <TableCell>{t("Card brand")}</TableCell>
              <TableCell>{order.carBrand}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Card category")}</TableCell>
              <TableCell>{order.carCategory}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Card model")}</TableCell>
              <TableCell>{order.carModel}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Card patent")}</TableCell>
              <TableCell>{order.carPatent}</TableCell>
            </TableRow> */}
            {/* <TableRow>
              <TableCell>{t("Code")}</TableCell>
              <TableCell>{order.code ? order.code : 'undefined'}</TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell>{t("Comment")}</TableCell>
              <TableCell>{order.comment ? order.comment : "undefined"}</TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>{t("Evaluation comment")}</TableCell>
              <TableCell>{order.evaluationComment ? order.evaluationComment : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Evaluation rate")}</TableCell>
              <TableCell>{order.evaluationRate}</TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell>{t("Instructions")}</TableCell>
              <TableCell>{order.instructions ? order.instructions : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Indications")}</TableCell>
              <TableCell>{order.indications ? order.indications : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Status")}</TableCell>
              <TableCell>
              {DeliveryStatus(order.status)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Pay Method")}</TableCell>
              <TableCell>{order.payMethod ? order.payMethod : "Efectivo"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Tip")}</TableCell>
              <TableCell>{order.tip}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Total price")}</TableCell>
              <TableCell>{new String(order.totalAmount)}</TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>{t("Total time")}</TableCell>
              <TableCell>{new String(order.totalTime)}</TableCell>
            </TableRow> */}
            {/* <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>
                {order.email}
                <div>
                  <Label
                    color={
                      order.verified ? colors.green[600] : colors.orange[600]
                    }
                  >
                    {order.verified
                      ? 'Email verified'
                      : 'Email not verified'}
                  </Label>
                </div>
              </TableCell>
            </TableRow> */}
          </TableBody>
          </Table>
          <Table>
          <TableBody>
            <TableRow>
              <TableCell>{t("fromAddress")}</TableCell>
              <TableCell>{order.fromAddress}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>{t("toAddress")}</TableCell>
              <TableCell>{order.toAddress}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        {/* <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          {t("Assign prowasher")}
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
      { <OrderEdit
        cboWashers={washers}
        order={order}
        actualizar={actualizar}
        onClose={handleEditClose}
        open={openEdit}
      /> }
    </Card>
  );
};

OrderInfo.propTypes = {
  className: PropTypes.string,
  order: PropTypes.object.isRequired
};

export default OrderInfo;
