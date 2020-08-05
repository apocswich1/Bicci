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
import { ReviewStars, GenericMoreButton, TableEditBarKind } from 'components';

const useStyles = makeStyles(theme => ({
  root: {
   // width:400
  },
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 440
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
  const { className, kinds, sortAsc, sortDesc, actualizar,actualizarKind,restaurant, ...rest } = props;
  const t = translate;
  const classes = useStyles();

  const [selectedKinds, setSelectedKinds] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedKinds = event.target.checked
      ? kinds.map(kind => kind.id)
      : [];

    setSelectedKinds(selectedKinds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedKinds.indexOf(id);
    let newSelectedKinds = [];

    if (selectedIndex === -1) {
      newSelectedKinds = newSelectedKinds.concat(selectedKinds, id);
    } else if (selectedIndex === 0) {
      newSelectedKinds = newSelectedKinds.concat(
        selectedKinds.slice(1)
      );
    } else if (selectedIndex === selectedKinds.length - 1) {
      newSelectedKinds = newSelectedKinds.concat(
        selectedKinds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedKinds = newSelectedKinds.concat(
        selectedKinds.slice(0, selectedIndex),
        selectedKinds.slice(selectedIndex + 1)
      );
    }

    setSelectedKinds(newSelectedKinds);
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
        {kinds.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(kinds.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title={t("Category List")}
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
                        checked={selectedKinds.length === kinds.length}
                        color="primary"
                        indeterminate={
                          selectedKinds.length > 0 &&
                          selectedKinds.length < kinds.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(kinds,'name',sort)}>{t("name")}</TableCell>
                    {/* <TableCell onClick={()=>sortData(kinds,'id',sort)}>{t("id")}</TableCell> */}
                    {/* <TableCell onClick={()=>sortData(kinds,'isActive',sort)}>{t("isActive")}</TableCell> */}
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//kinds.slice(0, rowsPerPage).map(kind => (
                    kinds.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(kind => (
                    <TableRow
                      hover
                      key={kind.id}
                      selected={selectedKinds.indexOf(kind.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedKinds.indexOf(kind.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, kind.id)
                          }
                          value={selectedKinds.indexOf(kind.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={kind.thumbnail}
                          >
                            {getInitials(kind.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/kinds/${kind.id}/${restaurant.id}`}
                              //to="/management/kinds/1"
                              variant="h6"
                            >
                              {kind.name}
                            </Link>
                            <div>{kind.name}</div>
                          </div>
                        </div>
                      </TableCell>
                      {/* <TableCell>{kind.id}</TableCell> */}
                      {/* <TableCell>{new String(kind.active != undefined ? kind.active : true)}</TableCell> */}
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/kinds/${kind.id}/${restaurant.id}`}
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
            count={kinds.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarKind selected={selectedKinds} setSelectedKinds = {setSelectedKinds} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  kinds: PropTypes.array.isRequired
};

Results.defaultProps = {
  kinds: []
};

export default Results;
