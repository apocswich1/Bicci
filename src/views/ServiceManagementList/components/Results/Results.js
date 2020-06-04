import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';

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
import { ReviewStars, GenericMoreButton, TableEditBarService } from 'components';
import translate from 'translate';

const t = translate;
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
  const { className, services, sortAsc, sortDesc, actualizar, ...rest } = props;

  const classes = useStyles();

  const [selectedServices, setSelectedServices] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedServices = event.target.checked
      ? services.map(service => service.id)
      : [];

    setSelectedServices(selectedServices);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedServices.indexOf(id);
    let newSelectedServices = [];

    if (selectedIndex === -1) {
      newSelectedServices = newSelectedServices.concat(selectedServices, id);
    } else if (selectedIndex === 0) {
      newSelectedServices = newSelectedServices.concat(
        selectedServices.slice(1)
      );
    } else if (selectedIndex === selectedServices.length - 1) {
      newSelectedServices = newSelectedServices.concat(
        selectedServices.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedServices = newSelectedServices.concat(
        selectedServices.slice(0, selectedIndex),
        selectedServices.slice(selectedIndex + 1)
      );
    }

    setSelectedServices(newSelectedServices);
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
        {services.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(services.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title={t("Service list")}
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
                        checked={selectedServices.length === services.length}
                        color="primary"
                        indeterminate={
                          selectedServices.length > 0 &&
                          selectedServices.length < services.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(services,'name',sort)}>{t("name")}</TableCell>
                    <TableCell onClick={()=>sortData(services,'description',sort)}>{t("Description")}</TableCell>
                    <TableCell>{t("price")} A</TableCell>
                    <TableCell>{t("price")} B</TableCell>
                    <TableCell>{t("price")} C</TableCell>
                    <TableCell>{t("Status")}</TableCell>
                    <TableCell align="right">{t("Actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//services.slice(0, rowsPerPage).map(service => (
                    services.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(service => (
                    <TableRow
                      hover
                      key={service.id}
                      selected={selectedServices.indexOf(service.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedServices.indexOf(service.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, service.id)
                          }
                          value={selectedServices.indexOf(service.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={service.thumbnail}
                          >
                            {getInitials(service.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/services/${service.id}`}
                              //to="/management/services/1"
                              variant="h6"
                            >
                              {service.name}
                            </Link>
                            <div>{service.name}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{(service.description != undefined) ? new String(service.description.substr(0,100))+'...' : 'No Definido'}</TableCell>
                      <TableCell>{(service.priceA != undefined) ? new String(service.priceA) : 'No Definido'}</TableCell>
                      <TableCell>{(service.priceB != undefined) ? new String(service.priceB) : 'No Definido'}</TableCell>
                      <TableCell>{(service.priceC != undefined) ? new String(service.priceC) : 'No Definido'}</TableCell>
                      <TableCell>{(service.active != undefined) ? new String(service.active) : "true"}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/services/${service.id}`}
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
            count={services.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarService selected={selectedServices} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  services: PropTypes.array.isRequired
};

Results.defaultProps = {
  services: []
};

export default Results;
