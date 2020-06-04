import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { Reports } from '../Reports';
import { moment } from 'moment';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Button,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';

import getInitials from 'utils/getInitials';
import { ReviewStars, GenericMoreButton, TableEditBar } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1)
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end'
  }
}));

const Results = props => {
  const { className, rates, actualizar, ...rest } = props;

  const classes = useStyles();

  const [selectedRates, setSelectedRates] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleSelectAll = event => {
    const selectedRates = event.target.checked
      ? rates.map(rate => rate.id)
      : [];

    setSelectedRates(selectedRates);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedRates.indexOf(id);
    let newSelectedRates = [];

    if (selectedIndex === -1) {
      newSelectedRates = newSelectedRates.concat(selectedRates, id);
    } else if (selectedIndex === 0) {
      newSelectedRates = newSelectedRates.concat(
        selectedRates.slice(1)
      );
    } else if (selectedIndex === selectedRates.length - 1) {
      newSelectedRates = newSelectedRates.concat(
        selectedRates.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedRates = newSelectedRates.concat(
        selectedRates.slice(0, selectedIndex),
        selectedRates.slice(selectedIndex + 1)
      );
    }

    setSelectedRates(newSelectedRates);
  };

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography
        color="textSecondary"
        gutterBottom
        variant="body2"
      >
        {rates.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(rates.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="All rates"
        />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedRates.length === rates.length}
                        color="primary"
                        indeterminate={
                          selectedRates.length > 0 &&
                          selectedRates.length < rates.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell>Id</TableCell>
                    <TableCell>Code</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Expiration Date</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//rates.slice(0, rowsPerPage).map(rate => (
                    rates.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(rate => (
                    <TableRow
                      hover
                      key={rate.id}
                      selected={selectedRates.indexOf(rate.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedRates.indexOf(rate.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, rate.id)
                          }
                          value={selectedRates.indexOf(rate.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          {/*<Avatar
                            className={classes.avatar}
                            src={rate.avatar}
                          >
                            {getInitials(rate.name)}
                          </Avatar>*/}
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/rates/${rate.id}`}
                              //to="/management/rates/1"
                              variant="h6"
                            >
                              {rate.id}
                            </Link>
                            <div>{}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{rate.code}</TableCell>
                      <TableCell>
                        {rate.amount}
                      </TableCell>
                      <TableCell>{new String(rate.status)}</TableCell>
                      <TableCell>{ new Intl.DateTimeFormat('en-US', {year: 'numeric', 
                        day: '2-digit',
                        month: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',}).format(new Date(rate.expirationDate)) }</TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/rates/${rate.id}`}
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
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={rates.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBar selected={selectedRates} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  rates: PropTypes.array.isRequired
};

Results.defaultProps = {
  rates: []
};

export default Results;
