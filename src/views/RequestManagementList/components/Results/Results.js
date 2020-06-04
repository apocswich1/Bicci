import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { Label } from 'components';
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
  Typography,
  colors
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
  const { className, requests, actualizar,sortAsc,sortDesc, ...rest } = props;

  const classes = useStyles();

  const [selectedRequests, setSelectedRequests] = useState([]);
  const [page, setPage] = React.useState(0);
  const [sort, setSort] = React.useState('asc');
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleSelectAll = event => {
    const selectedRequests = event.target.checked
      ? requests.map(request => request.id)
      : [];

    setSelectedRequests(selectedRequests);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedRequests.indexOf(id);
    let newSelectedRequests = [];

    if (selectedIndex === -1) {
      newSelectedRequests = newSelectedRequests.concat(selectedRequests, id);
    } else if (selectedIndex === 0) {
      newSelectedRequests = newSelectedRequests.concat(
        selectedRequests.slice(1)
      );
    } else if (selectedIndex === selectedRequests.length - 1) {
      newSelectedRequests = newSelectedRequests.concat(
        selectedRequests.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedRequests = newSelectedRequests.concat(
        selectedRequests.slice(0, selectedIndex),
        selectedRequests.slice(selectedIndex + 1)
      );
    }

    setSelectedRequests(newSelectedRequests);
  };

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const sortAsc2 = (array)=> {
    array.sort(function (a, b) {
      if (b.passengerName > a.passengerName) {
          return -1;
      }
      if (a.passengerName > b.passengerName) {
          return 1;
      }
      return 0;
  });

  return array;
}

const sortDesc2 = (array)=> {
  array.sort(function (a, b) {
    if (a.passengerName > b.passengerName) {
        return -1;
    }
    if (b.passengerName > a.passengerName) {
        return 1;
    }
    return 0;
});

return array;
}

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

  let fecha = "";
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
        {requests.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(requests.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="All requests"
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
                        checked={selectedRequests.length === requests.length}
                        color="primary"
                        indeterminate={
                          selectedRequests.length > 0 &&
                          selectedRequests.length < requests.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(requests,'passengerName',sort)}>Passenger</TableCell>
                    <TableCell onClick={()=>sortData(requests,'driverName',sort)}>Driver</TableCell>
                    <TableCell onClick={()=>sortData(requests,'driverDNI',sort)}>Driver Dni</TableCell>
                    <TableCell onClick={()=>sortData(requests,'driverCarModel',sort)}>Car Model</TableCell>
                    <TableCell onClick={()=>sortData(requests,'driverVehiculePPN',sort)}>PPN</TableCell>
                    <TableCell onClick={()=>sortData(requests,'passengerNumber',sort)}>Passenger Nº</TableCell>
                    <TableCell onClick={()=>sortData(requests,'travelAmount',sort)}>Travel Amount</TableCell>
                    <TableCell onClick={()=>sortData(requests,'date',sort)}>Date</TableCell>
                    <TableCell>Hour</TableCell>
                    <TableCell onClick={()=>sortData(requests,'scheduled',sort)}>Tipo</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//requests.slice(0, rowsPerPage).map(request => (
                    requests.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(request => (
                      
                    <TableRow
                      hover
                      key={request.id}
                      selected={selectedRequests.indexOf(request.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedRequests.indexOf(request.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, request.id)
                          }
                          value={selectedRequests.indexOf(request.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={request.passengerAvatar}
                          >
                            {getInitials(request.passengerName)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/requests/${request.id}`}
                              //to="/management/requests/1"
                              variant="h6"
                            >
                              {request.passengerName}
                            </Link>
                            <div>{'Passenger'}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{request.driverName}</TableCell>
                      <TableCell>{request.driverDNI}</TableCell>
                      <TableCell>{request.driverCarModel}</TableCell>
                      <TableCell>
                        {request.driverVehiclePPN}
                      </TableCell>
                      <TableCell>{request.passengerNumber}</TableCell>
                      <TableCell>{new String(request.travelAmount)}</TableCell>
                      <TableCell>
                      {
                        new Intl.DateTimeFormat('en-US', {year: 'numeric', 
                        day: '2-digit',
                        month: '2-digit',
                      //  hour: '2-digit',
                      //  minute: '2-digit',
                      //  second: '2-digit',
                      }).format(new Date(request.date))
                      }
                        {/*<ReviewStars value={5} />*/}
                      </TableCell>
                      <TableCell>
                      {
                        new Intl.DateTimeFormat('en-US', { 
                      //  day: '2-digit',
                      //  month: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        //second: '2-digit',
                      }).format(new Date(request.date))
                      }
                        {/*<ReviewStars value={5} />*/}
                      </TableCell>
                      <TableCell>
                      {}
                <div>
                  <Label
                    color={
                      (!request.scheduled) ? colors.green[600] : colors.orange[600]
                    }
                  >
                    {(request.scheduled)
                      ? 'Agendada'
                      : 'Inmediata'}
                  </Label>
                </div>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/requests/${request.id}`}
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
            count={requests.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBar selected={selectedRequests} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  requests: PropTypes.array.isRequired
};

Results.defaultProps = {
  requests: []
};

export default Results;
