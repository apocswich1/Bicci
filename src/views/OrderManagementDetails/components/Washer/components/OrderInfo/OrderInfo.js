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
  const { order, className, washer, actualizar, ...rest } = props;

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
      <CardHeader title="Prowasher info" />
      <Divider />
      <CardContent className={classes.content}>
      <Table>
          <TableBody>
            <TableRow>
              <TableCell>
              <img src={washer.avatar} style={{borderRadius:"50%", width:"150px", height:"150px"}}/>
              </TableCell>
              <TableCell>
              <TableRow>
              <TableCell>{t("name")}: {washer.name}</TableCell>
              </TableRow>
              <TableRow>
              <TableCell>{t("email")}: {washer.email}</TableCell>
              </TableRow>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>{washer.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("dni")}</TableCell>
              <TableCell>{washer.dni}</TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>Washer Name</TableCell>
              <TableCell>{washer.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>{washer.email}</TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell>{t("language")}</TableCell>
              <TableCell>{new String(washer.language)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("phone")}</TableCell>
              <TableCell>{washer.phone ? '+56 9 '+washer.phone : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Franchise name")}</TableCell>
              <TableCell>{washer.franchiseName ? washer.franchiseName : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Venue name")}</TableCell>
              <TableCell>{washer.venueName ? washer.venueName : 'undefined'}</TableCell>
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
