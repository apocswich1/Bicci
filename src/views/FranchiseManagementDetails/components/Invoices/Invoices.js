import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles,withStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  colors
} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

import { Label, GenericMoreButton } from 'components';

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1150
  }
}));

const Invoices = props => {
  const { className, id, ...rest} = props;

  const classes = useStyles();
  const [invoices, setInvoices] = useState([]);
  const [invoicesBkp, setInvoicesBkp] = useState([]);
  const [loading, setLoading] = React.useState(false);

  const ColorLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: '#b2dfdb',
    },
    barColorPrimary: {
      backgroundColor: '#00695c',
    },
  })(LinearProgress);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    const fetchInvoices = () => {
      fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/listFranchisesVenuesAdminByFranchiseId', {
          method: 'post',
          mode: 'cors',
          body: JSON.stringify({ 'id':props.id }),
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          setInvoices(body.data);
          setInvoicesBkp(body.data);
          console.log(body.data);
          setLoading(false);
        });
      }).catch(function (err) {
        // Error :(
      });
    };

    fetchInvoices();

    return () => {
      mounted = false;
    };
  }, []);

  const statusColors = {
    pending: colors.orange[600],
    paid: colors.green[600],
    rejected: colors.red[600]
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Card>
      {loading && (
      <ColorLinearProgress className={classes.margin} />
      )}
        <CardHeader
          action={<GenericMoreButton />}
          title="Franchise Venues"
        />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Dni</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Legal Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Business Name</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {invoices.map(invoice => (
                    <TableRow key={invoice.id}>
                      <TableCell>#{invoice.dni.split('-').shift()}</TableCell>
                      <TableCell>{invoice.name}</TableCell>
                      <TableCell>{invoice.legalName}</TableCell>
                      <TableCell>{invoice.email}</TableCell>
                      <TableCell>{new String(invoice.phone)}</TableCell>
                      <TableCell>{new String(invoice.businessName)}</TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={'/management/invoices/1'}
                          variant="outlined"
                        >
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    </div>
  );
};

Invoices.propTypes = {
  className: PropTypes.string
};

export default Invoices;
