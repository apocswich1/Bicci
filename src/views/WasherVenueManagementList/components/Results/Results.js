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
import { ReviewStars, GenericMoreButton, TableEditBarWasher } from 'components';
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
  const { className, washers, sortAsc, sortDesc, actualizar, ...rest } = props;

  const classes = useStyles();

  const [selectedWashers, setSelectedWashers] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedWashers = event.target.checked
      ? washers.map(washer => washer.id)
      : [];

    setSelectedWashers(selectedWashers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedWashers.indexOf(id);
    let newSelectedWashers = [];

    if (selectedIndex === -1) {
      newSelectedWashers = newSelectedWashers.concat(selectedWashers, id);
    } else if (selectedIndex === 0) {
      newSelectedWashers = newSelectedWashers.concat(
        selectedWashers.slice(1)
      );
    } else if (selectedIndex === selectedWashers.length - 1) {
      newSelectedWashers = newSelectedWashers.concat(
        selectedWashers.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedWashers = newSelectedWashers.concat(
        selectedWashers.slice(0, selectedIndex),
        selectedWashers.slice(selectedIndex + 1)
      );
    }

    setSelectedWashers(newSelectedWashers);
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
        {washers.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(washers.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title={t("Prowasher list")}
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
                        checked={selectedWashers.length === washers.length}
                        color="primary"
                        indeterminate={
                          selectedWashers.length > 0 &&
                          selectedWashers.length < washers.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(washers,'name',sort)}>{t("name")}</TableCell>
                    <TableCell onClick={()=>sortData(washers,'email',sort)}>{t("email")}</TableCell>
                    <TableCell onClick={()=>sortData(washers,'phone',sort)}>{t("phone")}</TableCell>
                    <TableCell onClick={()=>sortData(washers,'dni',sort)}>{t("dni")}</TableCell>
                    <TableCell onClick={()=>sortData(washers,'active',sort)}>{t("active")}</TableCell>
                    {/*<TableCell>Reviews</TableCell>*/}
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//washers.slice(0, rowsPerPage).map(washer => (
                    washers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(washer => (
                    <TableRow
                      hover
                      key={washer.id}
                      selected={selectedWashers.indexOf(washer.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedWashers.indexOf(washer.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, washer.id)
                          }
                          value={selectedWashers.indexOf(washer.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={washer.avatar}
                          >
                            {getInitials(washer.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/washersvenue/${washer.id}`}
                              //to="/management/washers/1"
                              variant="h6"
                            >
                              {washer.name}
                            </Link>
                            <div>{washer.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{washer.email}</TableCell>
                      <TableCell>
                        {/*washer.currency*/}
                        {/*washer.spent*/}
                        {washer.phone ? '+56 9 '+washer.phone : 'undefined'}
                      </TableCell>
                      <TableCell>{washer.dni}</TableCell>
                      <TableCell>{new String(washer.active != undefined ? washer.active : true)}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/washersvenue/${washer.id}`}
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
            count={washers.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarWasher selected={selectedWashers} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  washers: PropTypes.array.isRequired
};

Results.defaultProps = {
  washers: []
};

export default Results;
