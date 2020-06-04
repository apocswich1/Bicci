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
  const { className, modelos, sortAsc, sortDesc, actualizar, ...rest } = props;
  const t = translate;
  const classes = useStyles();

  const [selectedModelos, setSelectedModelos] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedModelos = event.target.checked
      ? modelos.map(modelo => modelo.uid)
      : [];

    setSelectedModelos(selectedModelos);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedModelos.indexOf(id);
    let newSelectedModelos = [];

    if (selectedIndex === -1) {
      newSelectedModelos = newSelectedModelos.concat(selectedModelos, id);
    } else if (selectedIndex === 0) {
      newSelectedModelos = newSelectedModelos.concat(
        selectedModelos.slice(1)
      );
    } else if (selectedIndex === selectedModelos.length - 1) {
      newSelectedModelos = newSelectedModelos.concat(
        selectedModelos.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedModelos = newSelectedModelos.concat(
        selectedModelos.slice(0, selectedIndex),
        selectedModelos.slice(selectedIndex + 1)
      );
    }

    setSelectedModelos(newSelectedModelos);
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
        {modelos.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(modelos.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="Lista de Usuarios"
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
                        checked={selectedModelos.length === modelos.length}
                        color="primary"
                        indeterminate={
                          selectedModelos.length > 0 &&
                          selectedModelos.length < modelos.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(modelos,'name',sort)}>{t("name")}</TableCell>
                    <TableCell onClick={()=>sortData(modelos,'email',sort)}>{t("email")}</TableCell>
                    <TableCell onClick={()=>sortData(modelos,'phone',sort)}>{t("phone")}</TableCell>
                    <TableCell onClick={()=>sortData(modelos,'language',sort)}>{t("language")}</TableCell>
                    <TableCell onClick={()=>sortData(modelos,'isActive',sort)}>{t("disabled")}</TableCell>
                    {/*<TableCell>Reviews</TableCell>*/}
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//modelos.slice(0, rowsPerPage).map(modelo => (
                    modelos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(modelo => (
                    <TableRow
                      hover
                      key={modelo.uid}
                      selected={selectedModelos.indexOf(modelo.uid) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedModelos.indexOf(modelo.uid) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, modelo.uid)
                          }
                          value={selectedModelos.indexOf(modelo.uid) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={modelo.avatar}
                          >
                            {getInitials(modelo.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/modelos/${modelo.uid}`}
                              //to="/management/modelos/1"
                              variant="h6"
                            >
                              {modelo.name}
                            </Link>
                            <div>{modelo.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{modelo.email}</TableCell>
                      <TableCell>
                        {/*modelo.currency*/}
                        {/*modelo.spent*/}
                        {modelo.phone}
                      </TableCell>
                      <TableCell>{modelo.language}</TableCell>
                      <TableCell>{new String(modelo.isActive != undefined ? modelo.isActive : true)}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/modelos/${modelo.uid}`}
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
            count={modelos.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBar selected={selectedModelos} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  modelos: PropTypes.array.isRequired
};

Results.defaultProps = {
  modelos: []
};

export default Results;
