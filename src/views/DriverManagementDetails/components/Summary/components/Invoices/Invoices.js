import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  colors
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';

import { Label } from 'components';

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

const getSum = (invoices, type) => {
  const filtered = invoices.filter(invoice => invoice.type === type);
  const total = filtered
    .reduce((total, invoice) => total + invoice.value, 0)
    .toFixed(2);

  return [filtered, total];
};

const Invoices = props => {
  const { driver, className, ...rest } = props;

  const classes = useStyles();

  const handleEditOpen = () => {};

  const [paidInvoices, paidTotal] = getSum(driver.invoices, 'paid');
  const [draftInvoices, draftTotal] = getSum(driver.invoices, 'draft');
  const [dueInvoices, dueTotal] = getSum(driver.invoices, 'due');
  const [refundedInvoices, refundedTotal] = getSum(
    driver.invoices,
    'refunded'
  );
  const [incomeInvoices, incomeTotal] = getSum(driver.invoices, 'income');

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Invoices/Billing" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Auto CC Pay</TableCell>
              <TableCell>
                {driver.iban}
                <div>
                  <Label
                    color={
                      driver.autoCC ? colors.green[600] : colors.red[600]
                    }
                  >
                    {driver.autoCC ? 'YES' : 'NO'}
                  </Label>
                </div>
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Paid</TableCell>
              <TableCell>
                {paidInvoices.length} ({driver.currency}
                {paidTotal})
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Draft</TableCell>
              <TableCell>
                {draftInvoices.length} ({driver.currency}
                {draftTotal})
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Unpaid/Due</TableCell>
              <TableCell>
                {dueInvoices.length} ({driver.currency}
                {dueTotal})
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Refunded</TableCell>
              <TableCell>
                {refundedInvoices.length} ({driver.currency}
                {refundedTotal})
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Gross Income</TableCell>
              <TableCell>
                {incomeInvoices.length} ({driver.currency}
                {incomeTotal})
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          Edit
        </Button>
        <Button>
          <AttachMoneyIcon className={classes.buttonIcon} />
          Create Invoice
        </Button>
        <Button>
          <ReceiptIcon className={classes.buttonIcon} />
          Generate Due Invoices
        </Button>
      </CardActions>
    </Card>
  );
};

Invoices.propTypes = {
  className: PropTypes.string,
  driver: PropTypes.object.isRequired
};

export default Invoices;
