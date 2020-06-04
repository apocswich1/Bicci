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
import { ReviewStars, GenericMoreButton, TableEditBarFranchise } from 'components';
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
  const { className, franchises, sortAsc, sortDesc, actualizar, ...rest } = props;

  const classes = useStyles();

  const [selectedFranchises, setSelectedFranchises] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedFranchises = event.target.checked
      ? franchises.map(franchise => franchise.id)
      : [];

    setSelectedFranchises(selectedFranchises);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedFranchises.indexOf(id);
    let newSelectedFranchises = [];

    if (selectedIndex === -1) {
      newSelectedFranchises = newSelectedFranchises.concat(selectedFranchises, id);
    } else if (selectedIndex === 0) {
      newSelectedFranchises = newSelectedFranchises.concat(
        selectedFranchises.slice(1)
      );
    } else if (selectedIndex === selectedFranchises.length - 1) {
      newSelectedFranchises = newSelectedFranchises.concat(
        selectedFranchises.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedFranchises = newSelectedFranchises.concat(
        selectedFranchises.slice(0, selectedIndex),
        selectedFranchises.slice(selectedIndex + 1)
      );
    }

    setSelectedFranchises(newSelectedFranchises);
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
        {franchises.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(franchises.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="Lista de Franquicias"
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
                        checked={selectedFranchises.length === franchises.length}
                        color="primary"
                        indeterminate={
                          selectedFranchises.length > 0 &&
                          selectedFranchises.length < franchises.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(franchises,'name',sort)}>{t("name")}</TableCell>
                    <TableCell onClick={()=>sortData(franchises,'email',sort)}>{t("email")}</TableCell>
                    <TableCell>{t("phone")}</TableCell>
                    <TableCell>{t("dni")}</TableCell>
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//franchises.slice(0, rowsPerPage).map(franchise => (
                    franchises.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(franchise => (
                    <TableRow
                      hover
                      key={franchise.id}
                      selected={selectedFranchises.indexOf(franchise.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedFranchises.indexOf(franchise.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, franchise.id)
                          }
                          value={selectedFranchises.indexOf(franchise.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={franchise.avatar}
                          >
                            {getInitials(franchise.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/franchises/${franchise.id}`}
                              //to="/management/franchises/1"
                              variant="h6"
                            >
                              {franchise.name}
                            </Link>
                            <div>{franchise.fantasyName}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{franchise.email}</TableCell>
                      <TableCell>{(franchise.phone != undefined) ? new String('+56 9 '+franchise.phone) : 'No Definido'}</TableCell>
                      <TableCell>{franchise.dni != undefined ? new String(franchise.dni) : 'No Definido'}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/franchises/${franchise.id}`}
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
            count={franchises.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarFranchise selected={selectedFranchises} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  franchises: PropTypes.array.isRequired
};

Results.defaultProps = {
  franchises: []
};

export default Results;
