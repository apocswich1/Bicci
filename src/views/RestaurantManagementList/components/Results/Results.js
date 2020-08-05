import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import translate  from 'translate';

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
import { ReviewStars, GenericMoreButton, TableEditBarRestaurant } from 'components';

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
  const { className, restaurants, sortAsc, sortDesc, actualizar, ...rest } = props;
  const t = translate;
  const classes = useStyles();

  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedRestaurants = event.target.checked
      ? restaurants.map(restaurant => restaurant.id)
      : [];

    setSelectedRestaurants(selectedRestaurants);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedRestaurants.indexOf(id);
    let newSelectedRestaurants = [];

    if (selectedIndex === -1) {
      newSelectedRestaurants = newSelectedRestaurants.concat(selectedRestaurants, id);
    } else if (selectedIndex === 0) {
      newSelectedRestaurants = newSelectedRestaurants.concat(
        selectedRestaurants.slice(1)
      );
    } else if (selectedIndex === selectedRestaurants.length - 1) {
      newSelectedRestaurants = newSelectedRestaurants.concat(
        selectedRestaurants.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedRestaurants = newSelectedRestaurants.concat(
        selectedRestaurants.slice(0, selectedIndex),
        selectedRestaurants.slice(selectedIndex + 1)
      );
    }

    setSelectedRestaurants(newSelectedRestaurants);
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
        {restaurants.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(restaurants.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="Lista de Restaurantes"
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
                        checked={selectedRestaurants.length === restaurants.length}
                        color="primary"
                        indeterminate={
                          selectedRestaurants.length > 0 &&
                          selectedRestaurants.length < restaurants.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(restaurants,'name',sort)}>{t("Name")}</TableCell>
                    <TableCell onClick={()=>sortData(restaurants,'categoryName',sort)}>{t("Categorias")}</TableCell>
                    <TableCell onClick={()=>sortData(restaurants,'phone',sort)}>{t("Phone")}</TableCell>
                    <TableCell onClick={()=>sortData(restaurants,'address',sort)}>{t("Address")}</TableCell>
                    <TableCell onClick={()=>sortData(restaurants,'active',sort)}>{t("Estado")}</TableCell>
                    {/*<TableCell>Reviews</TableCell>*/}
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//restaurants.slice(0, rowsPerPage).map(restaurant => (
                    restaurants.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(restaurant => (
                    <TableRow
                      hover
                      key={restaurant.id}
                      selected={selectedRestaurants.indexOf(restaurant.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedRestaurants.indexOf(restaurant.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, restaurant.id)
                          }
                          value={selectedRestaurants.indexOf(restaurant.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={restaurant.avatar}
                          >
                            {getInitials(restaurant.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/restaurants/${restaurant.id}`}
                              //to="/management/restaurants/1"
                              variant="h6"
                            >
                              {restaurant.name}
                            </Link>
                            <div>{restaurant.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{restaurant.categoryName}</TableCell>
                      <TableCell>
                        {/*restaurant.currency*/}
                        {/*restaurant.spent*/}
                        {restaurant.phone}
                      </TableCell>
                      <TableCell>{new String(restaurant.address != undefined ? restaurant.address : "Sin dirección")}</TableCell>
                      <TableCell>{new String(restaurant.active != undefined ? restaurant.active : true)}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/restaurants/${restaurant.id}`}
                          variant="outlined"
                        >
                          {t("view")}
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
            count={restaurants.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarRestaurant selected={selectedRestaurants} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  restaurants: PropTypes.array.isRequired
};

Results.defaultProps = {
  restaurants: []
};

export default Results;
