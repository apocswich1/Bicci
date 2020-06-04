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
import { ReviewStars, GenericMoreButton, TableEditBarDriver } from 'components';

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
  const { className, drivers, sortAsc, sortDesc, actualizar, ...rest } = props;
  const t = translate;
  const classes = useStyles();

  const [selectedDrivers, setSelectedDrivers] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedDrivers = event.target.checked
      ? drivers.map(driver => driver.id)
      : [];

    setSelectedDrivers(selectedDrivers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedDrivers.indexOf(id);
    let newSelectedDrivers = [];

    if (selectedIndex === -1) {
      newSelectedDrivers = newSelectedDrivers.concat(selectedDrivers, id);
    } else if (selectedIndex === 0) {
      newSelectedDrivers = newSelectedDrivers.concat(
        selectedDrivers.slice(1)
      );
    } else if (selectedIndex === selectedDrivers.length - 1) {
      newSelectedDrivers = newSelectedDrivers.concat(
        selectedDrivers.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedDrivers = newSelectedDrivers.concat(
        selectedDrivers.slice(0, selectedIndex),
        selectedDrivers.slice(selectedIndex + 1)
      );
    }

    setSelectedDrivers(newSelectedDrivers);
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
        {drivers.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(drivers.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="Lista de Conductores"
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
                        checked={selectedDrivers.length === drivers.length}
                        color="primary"
                        indeterminate={
                          selectedDrivers.length > 0 &&
                          selectedDrivers.length < drivers.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(drivers,'name',sort)}>{t("name")}</TableCell>
                    <TableCell onClick={()=>sortData(drivers,'email',sort)}>{t("email")}</TableCell>
                    <TableCell onClick={()=>sortData(drivers,'phone',sort)}>{t("phone")}</TableCell>
                    <TableCell onClick={()=>sortData(drivers,'rate',sort)}>{t("Evaluación")}</TableCell>
                    <TableCell onClick={()=>sortData(drivers,'active',sort)}>{t("Estado")}</TableCell>
                    {/*<TableCell>Reviews</TableCell>*/}
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//drivers.slice(0, rowsPerPage).map(driver => (
                    drivers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(driver => (
                    <TableRow
                      hover
                      key={driver.id}
                      selected={selectedDrivers.indexOf(driver.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedDrivers.indexOf(driver.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, driver.id)
                          }
                          value={selectedDrivers.indexOf(driver.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={driver.avatar}
                          >
                            {getInitials(driver.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/drivers/${driver.id}`}
                              //to="/management/drivers/1"
                              variant="h6"
                            >
                              {driver.name}
                            </Link>
                            <div>{driver.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{driver.email}</TableCell>
                      <TableCell>
                        {/*driver.currency*/}
                        {/*driver.spent*/}
                        {driver.phone}
                      </TableCell>
                      <TableCell>{new String(driver.rate != undefined ? driver.rate : 0)}</TableCell>
                      <TableCell>{new String(driver.active != undefined ? driver.active : true)}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/drivers/${driver.id}`}
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
            count={drivers.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarDriver selected={selectedDrivers} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  drivers: PropTypes.array.isRequired
};

Results.defaultProps = {
  drivers: []
};

export default Results;
