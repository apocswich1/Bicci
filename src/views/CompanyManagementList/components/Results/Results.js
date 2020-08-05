import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import translate  from 'translate';
import configModel from 'models/Company';
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
import { ReviewStars, GenericMoreButton, TableEditBarCompany } from 'components';

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
  const { className, companies, sortAsc, sortDesc, actualizar, ...rest } = props;
  const t = translate;
  const classes = useStyles();

  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedCompanies = event.target.checked
      ? companies.map(company => company.id)
      : [];

    setSelectedCompanies(selectedCompanies);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCompanies.indexOf(id);
    let newSelectedCompanies = [];

    if (selectedIndex === -1) {
      newSelectedCompanies = newSelectedCompanies.concat(selectedCompanies, id);
    } else if (selectedIndex === 0) {
      newSelectedCompanies = newSelectedCompanies.concat(
        selectedCompanies.slice(1)
      );
    } else if (selectedIndex === selectedCompanies.length - 1) {
      newSelectedCompanies = newSelectedCompanies.concat(
        selectedCompanies.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCompanies = newSelectedCompanies.concat(
        selectedCompanies.slice(0, selectedIndex),
        selectedCompanies.slice(selectedIndex + 1)
      );
    }

    setSelectedCompanies(newSelectedCompanies);
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
        {companies.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(companies.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title={`${configModel.headerList}`}
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
                        checked={selectedCompanies.length === companies.length}
                        color="primary"
                        indeterminate={
                          selectedCompanies.length > 0 &&
                          selectedCompanies.length < companies.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(companies,'name',sort)}>{t("Name")}</TableCell>
                    <TableCell onClick={()=>sortData(companies,'email',sort)}>{t("Email")}</TableCell>
                    <TableCell onClick={()=>sortData(companies,'phone',sort)}>{t("Phone")}</TableCell>
                    <TableCell onClick={()=>sortData(companies,'Contacto',sort)}>{t("Contacto")}</TableCell>
                    <TableCell onClick={()=>sortData(companies,'active',sort)}>{t("Estado")}</TableCell>
                    {/*<TableCell>Reviews</TableCell>*/}
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//companies.slice(0, rowsPerPage).map(company => (
                    companies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(company => (
                    <TableRow
                      hover
                      key={company.id}
                      selected={selectedCompanies.indexOf(company.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedCompanies.indexOf(company.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, company.id)
                          }
                          value={selectedCompanies.indexOf(company.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={company.avatar}
                          >
                            {getInitials(company.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/companies/${company.id}`}
                              //to="/management/companies/1"
                              variant="h6"
                            >
                              {company.name}
                            </Link>
                            <div>{company.reason}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{company.email}</TableCell>
                      <TableCell>
                        {/*company.currency*/}
                        {/*company.spent*/}
                        {company.phone}
                      </TableCell>
                      <TableCell>{new String(company.contacto != undefined ? company.contacto : "Sin contacto")}</TableCell>
                      <TableCell>{new String(company.active != undefined ? company.active : true)}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/companies/${company.id}`}
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
            count={companies.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarCompany selected={selectedCompanies} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  companies: PropTypes.array.isRequired
};

Results.defaultProps = {
  companies: []
};

export default Results;
