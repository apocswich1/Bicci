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
import { ServiceEdit } from './components';
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

const ServiceInfo = props => {
  const { service, className, actualizar, ...rest } = props;

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
      <CardHeader title={t("Service info")} />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>{service.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("name")}</TableCell>
              <TableCell>{service.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Price")} A</TableCell>
              <TableCell>{service.priceA}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Price")} B</TableCell>
              <TableCell>{service.priceB}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Price")} C</TableCell>
              <TableCell>{service.priceC}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Estimated Time")} A</TableCell>
              <TableCell>{service.estimatedTimeA}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Estimated Time")} B</TableCell>
              <TableCell>{service.estimatedTimeB}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Estimated Time")} C</TableCell>
              <TableCell>{service.estimatedTimeC}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Pack")}</TableCell>
              <TableCell>{new String(service.pack)}</TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>
                {service.email}
                <div>
                  <Label
                    color={
                      service.verified ? colors.green[600] : colors.orange[600]
                    }
                  >
                    {service.verified
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
              <TableCell>{t("Description")}</TableCell>
              <TableCell>{service.description}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          {t("Edit")}
        </Button>
        {/*}  <Button>
          <LockOpenIcon className={classes.buttonIcon} />
          Reset &amp; Send Password
        </Button>
        <Button>
          <PersonIcon className={classes.buttonIcon} />
          Login as Service
                    </Button>*/}
      </CardActions>
      <ServiceEdit
        service={service}
        actualizar={actualizar}
        onClose={handleEditClose}
        open={openEdit}
      />
    </Card>
  );
};

ServiceInfo.propTypes = {
  className: PropTypes.string,
  service: PropTypes.object.isRequired
};

export default ServiceInfo;
