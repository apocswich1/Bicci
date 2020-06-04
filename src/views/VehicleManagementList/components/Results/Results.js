import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { Reports } from '../Reports';
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
  const { className, vehicles, actualizar, ...rest } = props;

  const classes = useStyles();

  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleSelectAll = event => {
    const selectedVehicles = event.target.checked
      ? vehicles.map(vehicle => vehicle.id)
      : [];

    setSelectedVehicles(selectedVehicles);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedVehicles.indexOf(id);
    let newSelectedVehicles = [];

    if (selectedIndex === -1) {
      newSelectedVehicles = newSelectedVehicles.concat(selectedVehicles, id);
    } else if (selectedIndex === 0) {
      newSelectedVehicles = newSelectedVehicles.concat(
        selectedVehicles.slice(1)
      );
    } else if (selectedIndex === selectedVehicles.length - 1) {
      newSelectedVehicles = newSelectedVehicles.concat(
        selectedVehicles.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedVehicles = newSelectedVehicles.concat(
        selectedVehicles.slice(0, selectedIndex),
        selectedVehicles.slice(selectedIndex + 1)
      );
    }

    setSelectedVehicles(newSelectedVehicles);
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
        {vehicles.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(vehicles.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="All vehicles"
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
                        checked={selectedVehicles.length === vehicles.length}
                        color="primary"
                        indeterminate={
                          selectedVehicles.length > 0 &&
                          selectedVehicles.length < vehicles.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell>Owner Name</TableCell>
                    <TableCell>Category Name</TableCell>
                    <TableCell>Brand</TableCell>
                    <TableCell>Model</TableCell>
                    <TableCell>PPN</TableCell>
                    <TableCell>Max Passengers</TableCell>
                    <TableCell>Max Suitcases</TableCell>
                    <TableCell>Color</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//vehicles.slice(0, rowsPerPage).map(vehicle => (
                    vehicles.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(vehicle => (
                      <TableRow
                        hover
                        key={vehicle.id}
                        selected={selectedVehicles.indexOf(vehicle.id) !== -1}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={
                              selectedVehicles.indexOf(vehicle.id) !== -1
                            }
                            color="primary"
                            onChange={event =>
                              handleSelectOne(event, vehicle.id)
                            }
                            value={selectedVehicles.indexOf(vehicle.id) !== -1}
                          />
                        </TableCell>
                        <TableCell>
                          <div className={classes.nameCell}>
                            <Avatar
                              className={classes.avatar}
                              //src={vehicle.avatar}
                                src={(vehicle.categoryName=="Van") ? 
                                  ("https://media.istockphoto.com/vectors/van-icon-front-view-vector-id1145898000")
                                :
                                  ("https://gantz.cl/wp-content/uploads/2019/07/icono-auto.png")
                              }
                            >
                              {getInitials(vehicle.ownerName)}
                            </Avatar>
                            <div>
                              <Link
                                color="inherit"
                                component={RouterLink}
                                to={`/management/vehicles/${vehicle.id}`}
                                //to="/management/vehicles/1"
                                variant="h6"
                              >
                                {vehicle.ownerName}
                              </Link>
                              <div>{vehicle.categoryName}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{vehicle.categoryName}</TableCell>
                        <TableCell>
                          {vehicle.brand}
                        </TableCell>
                        <TableCell>{ vehicle.model }</TableCell>
                        <TableCell>{ vehicle.ppn }</TableCell>
                        <TableCell>
                          { vehicle.maxPassengers }
                          {/*<ReviewStars value={5} />*/}
                        </TableCell>
                        <TableCell>
                          { vehicle.maxSuitcases }
                        </TableCell>
                        <TableCell>
                          { vehicle.color }
                        </TableCell>
                        <TableCell align="right">
                          <Button
                            color="primary"
                            component={RouterLink}
                            size="small"
                            to={`/management/vehicles/${vehicle.id}`}
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
            count={vehicles.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBar selected={selectedVehicles} actualizar={actualizar} />
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  vehicles: PropTypes.array.isRequired
};

Results.defaultProps = {
  vehicles: []
};

export default Results;
