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
import { ReviewStars, GenericMoreButton, TableEditBarSubstance } from 'components';

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
  const { className, substances, sortAsc, sortDesc, actualizar, ...rest } = props;
  const t = translate;
  const classes = useStyles();

  const [selectedSubstances, setSelectedSubstances] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedSubstances = event.target.checked
      ? substances.map(substance => substance.id)
      : [];

    setSelectedSubstances(selectedSubstances);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedSubstances.indexOf(id);
    let newSelectedSubstances = [];

    if (selectedIndex === -1) {
      newSelectedSubstances = newSelectedSubstances.concat(selectedSubstances, id);
    } else if (selectedIndex === 0) {
      newSelectedSubstances = newSelectedSubstances.concat(
        selectedSubstances.slice(1)
      );
    } else if (selectedIndex === selectedSubstances.length - 1) {
      newSelectedSubstances = newSelectedSubstances.concat(
        selectedSubstances.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedSubstances = newSelectedSubstances.concat(
        selectedSubstances.slice(0, selectedIndex),
        selectedSubstances.slice(selectedIndex + 1)
      );
    }

    setSelectedSubstances(newSelectedSubstances);
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
        {substances.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(substances.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="Lista de Substances"
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
                        checked={selectedSubstances.length === substances.length}
                        color="primary"
                        indeterminate={
                          selectedSubstances.length > 0 &&
                          selectedSubstances.length < substances.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(substances,'name',sort)}>{t("name")}</TableCell>
                    <TableCell onClick={()=>sortData(substances,'id',sort)}>{t("id")}</TableCell>
                    <TableCell onClick={()=>sortData(substances,'isActive',sort)}>{t("isActive")}</TableCell>
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//substances.slice(0, rowsPerPage).map(substance => (
                    substances.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(substance => (
                    <TableRow
                      hover
                      key={substance.id}
                      selected={selectedSubstances.indexOf(substance.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedSubstances.indexOf(substance.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, substance.id)
                          }
                          value={selectedSubstances.indexOf(substance.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={substance.avatar}
                          >
                            {getInitials(substance.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/substances/${substance.id}`}
                              //to="/management/substances/1"
                              variant="h6"
                            >
                              {substance.name}
                            </Link>
                            <div>{substance.name}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{substance.id}</TableCell>
                      <TableCell>{new String(substance.isActive != undefined ? substance.isActive : true)}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/substances/${substance.id}`}
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
            count={substances.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarSubstance selected={selectedSubstances} setSelectedSubstances={setSelectedSubstances} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  substances: PropTypes.array.isRequired
};

Results.defaultProps = {
  substances: []
};

export default Results;
