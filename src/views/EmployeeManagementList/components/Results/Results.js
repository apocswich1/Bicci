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
  const { className, employees, sortAsc, sortDesc, actualizar, ...rest } = props;
  const t = translate;
  const classes = useStyles();

  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedEmployees = event.target.checked
      ? employees.map(employee => employee.uid)
      : [];

    setSelectedEmployees(selectedEmployees);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedEmployees.indexOf(id);
    let newSelectedEmployees = [];

    if (selectedIndex === -1) {
      newSelectedEmployees = newSelectedEmployees.concat(selectedEmployees, id);
    } else if (selectedIndex === 0) {
      newSelectedEmployees = newSelectedEmployees.concat(
        selectedEmployees.slice(1)
      );
    } else if (selectedIndex === selectedEmployees.length - 1) {
      newSelectedEmployees = newSelectedEmployees.concat(
        selectedEmployees.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedEmployees = newSelectedEmployees.concat(
        selectedEmployees.slice(0, selectedIndex),
        selectedEmployees.slice(selectedIndex + 1)
      );
    }

    setSelectedEmployees(newSelectedEmployees);
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
        {employees.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(employees.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="Lista de Empleados"
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
                        checked={selectedEmployees.length === employees.length}
                        color="primary"
                        indeterminate={
                          selectedEmployees.length > 0 &&
                          selectedEmployees.length < employees.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(employees,'name',sort)}>{t("name")}</TableCell>
                    <TableCell onClick={()=>sortData(employees,'email',sort)}>{t("email")}</TableCell>
                    <TableCell onClick={()=>sortData(employees,'phone',sort)}>{t("phone")}</TableCell>
                    <TableCell onClick={()=>sortData(employees,'center',sort)}>{t("Centro de Costo")}</TableCell>
                    <TableCell onClick={()=>sortData(employees,'active',sort)}>{t("Estado")}</TableCell>
                    {/*<TableCell>Reviews</TableCell>*/}
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//employees.slice(0, rowsPerPage).map(employee => (
                    employees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(employee => (
                    <TableRow
                      hover
                      key={employee.uid}
                      selected={selectedEmployees.indexOf(employee.uid) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedEmployees.indexOf(employee.uid) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, employee.uid)
                          }
                          value={selectedEmployees.indexOf(employee.uid) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={employee.avatar}
                          >
                            {getInitials(employee.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/employees/${employee.uid}`}
                              //to="/management/employees/1"
                              variant="h6"
                            >
                              {employee.name}
                            </Link>
                            <div>{employee.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{employee.email}</TableCell>
                      <TableCell>
                        {/*employee.currency*/}
                        {/*employee.spent*/}
                        {employee.phone}
                      </TableCell>
                      <TableCell>{new String(employee.centerName != undefined ? employee.centerName : "Sin asignación")}</TableCell>
                      <TableCell>{new String(employee.active != undefined ? employee.active : true)}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/employees/${employee.uid}`}
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
            count={employees.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBar selected={selectedEmployees} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  employees: PropTypes.array.isRequired
};

Results.defaultProps = {
  employees: []
};

export default Results;
