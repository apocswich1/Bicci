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
import { ReviewStars, GenericMoreButton, TableEditBarAdministrator } from 'components';

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
  const { className, administrators, sortAsc, sortDesc, actualizar, ...rest } = props;
  const t = translate;
  const classes = useStyles();

  const [selectedAdministrators, setSelectedAdministrators] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedAdministrators = event.target.checked
      ? administrators.map(administrator => administrator.id)
      : [];

    setSelectedAdministrators(selectedAdministrators);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedAdministrators.indexOf(id);
    let newSelectedAdministrators = [];

    if (selectedIndex === -1) {
      newSelectedAdministrators = newSelectedAdministrators.concat(selectedAdministrators, id);
    } else if (selectedIndex === 0) {
      newSelectedAdministrators = newSelectedAdministrators.concat(
        selectedAdministrators.slice(1)
      );
    } else if (selectedIndex === selectedAdministrators.length - 1) {
      newSelectedAdministrators = newSelectedAdministrators.concat(
        selectedAdministrators.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedAdministrators = newSelectedAdministrators.concat(
        selectedAdministrators.slice(0, selectedIndex),
        selectedAdministrators.slice(selectedIndex + 1)
      );
    }

    setSelectedAdministrators(newSelectedAdministrators);
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
        {administrators.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(administrators.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="Lista de Administradores"
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
                        checked={selectedAdministrators.length === administrators.length}
                        color="primary"
                        indeterminate={
                          selectedAdministrators.length > 0 &&
                          selectedAdministrators.length < administrators.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(administrators,'name',sort)}>{t("name")}</TableCell>
                    <TableCell onClick={()=>sortData(administrators,'email',sort)}>{t("email")}</TableCell>
                    <TableCell onClick={()=>sortData(administrators,'phone',sort)}>{t("phone")}</TableCell>
                    <TableCell onClick={()=>sortData(administrators,'rate',sort)}>{t("Evaluación")}</TableCell>
                    <TableCell onClick={()=>sortData(administrators,'active',sort)}>{t("Estado")}</TableCell>
                    {/*<TableCell>Reviews</TableCell>*/}
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//administrators.slice(0, rowsPerPage).map(administrator => (
                    administrators.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(administrator => (
                    <TableRow
                      hover
                      key={administrator.id}
                      selected={selectedAdministrators.indexOf(administrator.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedAdministrators.indexOf(administrator.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, administrator.id)
                          }
                          value={selectedAdministrators.indexOf(administrator.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={administrator.avatar}
                          >
                            {getInitials(administrator.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/administrators/${administrator.id}`}
                              //to="/management/administrators/1"
                              variant="h6"
                            >
                              {administrator.name}
                            </Link>
                            <div>{administrator.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{administrator.email}</TableCell>
                      <TableCell>
                        {/*administrator.currency*/}
                        {/*administrator.spent*/}
                        {administrator.phone}
                      </TableCell>
                      <TableCell>{new String(administrator.rate != undefined ? administrator.rate : 0)}</TableCell>
                      <TableCell>{new String(administrator.active != undefined ? administrator.active : true)}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/administrators/${administrator.id}`}
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
            count={administrators.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarAdministrator selected={selectedAdministrators} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  administrators: PropTypes.array.isRequired
};

Results.defaultProps = {
  administrators: []
};

export default Results;
