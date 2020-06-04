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
import { ReviewStars, GenericMoreButton, TableEditBarStore } from 'components';

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
  const { className, stores, sortAsc, sortDesc, actualizar, ...rest } = props;
  const t = translate;
  const classes = useStyles();

  const [selectedStores, setSelectedStores] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedStores = event.target.checked
      ? stores.map(store => store.id)
      : [];

    setSelectedStores(selectedStores);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedStores.indexOf(id);
    let newSelectedStores = [];

    if (selectedIndex === -1) {
      newSelectedStores = newSelectedStores.concat(selectedStores, id);
    } else if (selectedIndex === 0) {
      newSelectedStores = newSelectedStores.concat(
        selectedStores.slice(1)
      );
    } else if (selectedIndex === selectedStores.length - 1) {
      newSelectedStores = newSelectedStores.concat(
        selectedStores.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedStores = newSelectedStores.concat(
        selectedStores.slice(0, selectedIndex),
        selectedStores.slice(selectedIndex + 1)
      );
    }

    setSelectedStores(newSelectedStores);
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
        {stores.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(stores.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title={t("Stores list")}
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
                        checked={selectedStores.length === stores.length}
                        color="primary"
                        indeterminate={
                          selectedStores.length > 0 &&
                          selectedStores.length < stores.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(stores,'name',sort)}>{t("name")}</TableCell>
                    <TableCell onClick={()=>sortData(stores,'id',sort)}>{t("id")}</TableCell>
                    <TableCell onClick={()=>sortData(stores,'isActive',sort)}>{t("isActive")}</TableCell>
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//stores.slice(0, rowsPerPage).map(store => (
                    stores.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(store => (
                    <TableRow
                      hover
                      key={store.id}
                      selected={selectedStores.indexOf(store.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedStores.indexOf(store.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, store.id)
                          }
                          value={selectedStores.indexOf(store.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={store.thumbnail}
                          >
                            {getInitials(store.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/stores/${store.id}`}
                              //to="/management/stores/1"
                              variant="h6"
                            >
                              {store.name}
                            </Link>
                            <div>{store.name}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{store.id}</TableCell>
                      <TableCell>{new String(store.active != undefined ? store.active : true)}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/stores/${store.id}`}
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
            count={stores.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarStore selected={selectedStores} setSelectedStores = {setSelectedStores} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  stores: PropTypes.array.isRequired
};

Results.defaultProps = {
  stores: []
};

export default Results;
