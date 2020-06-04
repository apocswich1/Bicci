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
              <TableCell>{t("Prowasher name")}</TableCell>
              <TableCell>{order.washerName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Date")}</TableCell>
              <TableCell>{new String(moment(order.date).format('DD/MM/YY'))}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Service date")}</TableCell>
              <TableCell>{new String(moment(order.serviceDate).format('DD/MM/YY'))}</TableCell>
            </TableRow>
            <TableRow>
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
            </TableRow>
            <TableRow>
              <TableCell>{t("Code")}</TableCell>
              <TableCell>{order.code ? order.code : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Comment")}</TableCell>
              <TableCell>{order.comment ? order.comment : "undefined"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Evaluation comment")}</TableCell>
              <TableCell>{order.evaluationComment ? order.evaluationComment : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Evaluation rate")}</TableCell>
              <TableCell>{order.evaluationRate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Indications")}</TableCell>
              <TableCell>{order.indications ? order.indications : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Status")}</TableCell>
              <TableCell>
              {order.status==1 && "Solicitado"}
                        {order.status==2 && "Asignado"}
                        {order.status==3 && "En camino"}
                        {order.status==4 && "Llegado"}
                        {order.status==5 && "Lavando"}
                        {order.status==6 && "Lavado Finalizado"}
                        {order.status==7 && "Cerrado"}
                        {order.status==-1 && "Cancelado"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Total price")}</TableCell>
              <TableCell>{new String(order.totalPrice)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Total time")}</TableCell>
              <TableCell>{new String(order.totalTime)}</TableCell>
            </TableRow>
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
              <TableCell>{t("address")}</TableCell>
              <TableCell>{order.address}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          {t("Assign prowasher")}
        </Button>
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
