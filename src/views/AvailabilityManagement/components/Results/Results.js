import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import moment from 'moment';
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
import { ReviewStars, GenericMoreButton, TableEditBarOrder } from 'components';

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
  const { className, orders, sortAsc, sortDesc, actualizar, ...rest } = props;

  const classes = useStyles();

  const [selectedOrders, setSelectedOrders] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedOrders = event.target.checked
      ? orders.map(order => order.id)
      : [];

    setSelectedOrders(selectedOrders);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedOrders.indexOf(id);
    let newSelectedOrders = [];

    if (selectedIndex === -1) {
      newSelectedOrders = newSelectedOrders.concat(selectedOrders, id);
    } else if (selectedIndex === 0) {
      newSelectedOrders = newSelectedOrders.concat(
        selectedOrders.slice(1)
      );
    } else if (selectedIndex === selectedOrders.length - 1) {
      newSelectedOrders = newSelectedOrders.concat(
        selectedOrders.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedOrders = newSelectedOrders.concat(
        selectedOrders.slice(0, selectedIndex),
        selectedOrders.slice(selectedIndex + 1)
      );
    }

    setSelectedOrders(newSelectedOrders);
  };

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const sortData = (datos, label, sort) =>{
    let data = [];
    
    if(sort === 'asc'){
      data = sortAsc(datos,label);
      setSort('desc');
      console.log(data);
      console.log(sort);
    }

    if(sort === 'desc'){
      data = sortDesc(datos,label);
      setSort('asc');
      console.log(data);
      console.log(sort);
    }
    
    console.log(label);
    return;
  }

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
        {orders.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(orders.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="Lista de ordenes"
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
                        checked={selectedOrders.length === orders.length}
                        color="primary"
                        indeterminate={
                          selectedOrders.length > 0 &&
                          selectedOrders.length < orders.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(orders,'name',sort)}>User Name</TableCell>
                    <TableCell onClick={()=>sortData(orders,'washerName',sort)}>Washer Name</TableCell>
                    <TableCell onClick={()=>sortData(orders,'franchiseName',sort)}>Franchise Name</TableCell>
                    <TableCell onClick={()=>sortData(orders,'direction',sort)}>Direction</TableCell>
                    <TableCell onClick={()=>sortData(orders,'date',sort)}>Date</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//orders.slice(0, rowsPerPage).map(order => (
                    orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(order => (
                    <TableRow
                      hover
                      key={order.id}
                      selected={selectedOrders.indexOf(order.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedOrders.indexOf(order.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, order.id)
                          }
                          value={selectedOrders.indexOf(order.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={order.thumbnail}
                          >
                            {getInitials(order.userName)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/orders/${order.id}`}
                              //to="/management/orders/1"
                              variant="h6"
                            >
                              {order.userName}
                            </Link>
                            <div>{order.id}</div>
                          </div>
                        </div>
                      </TableCell>
                      {/* <TableCell>{(order.washerName != undefined) ? new String(order.description.substr(0,100))+'...' : 'No Definido'}</TableCell> */}
                      <TableCell>{(order.washerName != undefined) ? new String(order.washerName) : 'No Definido'}</TableCell>
                      <TableCell>{(order.franchiseName != undefined) ? new String(order.franchiseName) : 'No Definido'}</TableCell>
                      <TableCell>{(order.address != undefined) ? new String(order.address) : 'No Definido'}</TableCell>
                      <TableCell>{(order.date != undefined) ? new String(moment(order.date).format("DD/MM/YYYY")) : 'No Definido'}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/orders/${order.id}`}
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
            count={orders.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarOrder selected={selectedOrders} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  orders: PropTypes.array.isRequired
};

Results.defaultProps = {
  orders: []
};

export default Results;
