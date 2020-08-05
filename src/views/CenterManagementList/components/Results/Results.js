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
import { ReviewStars, GenericMoreButton, TableEditBarCenter } from 'components';

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
  const { className, centers, sortAsc, sortDesc, actualizar, ...rest } = props;
  const t = translate;
  const classes = useStyles();

  const [selectedCenters, setSelectedCenters] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedCenters = event.target.checked
      ? centers.map(center => center.id)
      : [];

    setSelectedCenters(selectedCenters);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCenters.indexOf(id);
    let newSelectedCenters = [];

    if (selectedIndex === -1) {
      newSelectedCenters = newSelectedCenters.concat(selectedCenters, id);
    } else if (selectedIndex === 0) {
      newSelectedCenters = newSelectedCenters.concat(
        selectedCenters.slice(1)
      );
    } else if (selectedIndex === selectedCenters.length - 1) {
      newSelectedCenters = newSelectedCenters.concat(
        selectedCenters.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCenters = newSelectedCenters.concat(
        selectedCenters.slice(0, selectedIndex),
        selectedCenters.slice(selectedIndex + 1)
      );
    }

    setSelectedCenters(newSelectedCenters);
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
        {centers.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(centers.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title={t("Centers List")}
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
                        checked={selectedCenters.length === centers.length}
                        color="primary"
                        indeterminate={
                          selectedCenters.length > 0 &&
                          selectedCenters.length < centers.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(centers,'name',sort)}>{t("name")}</TableCell>
                    <TableCell onClick={()=>sortData(centers,'id',sort)}>{t("id")}</TableCell>
                    <TableCell onClick={()=>sortData(centers,'isActive',sort)}>{t("isActive")}</TableCell>
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//centers.slice(0, rowsPerPage).map(center => (
                    centers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(center => (
                    <TableRow
                      hover
                      key={center.id}
                      selected={selectedCenters.indexOf(center.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedCenters.indexOf(center.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, center.id)
                          }
                          value={selectedCenters.indexOf(center.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={center.thumbnail}
                          >
                            {getInitials(center.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/centers/${center.id}`}
                              //to="/management/centers/1"
                              variant="h6"
                            >
                              {center.name}
                            </Link>
                            <div>{center.name}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{center.id}</TableCell>
                      <TableCell>{new String(center.active != undefined ? center.active : true)}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/centers/${center.id}`}
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
            count={centers.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarCenter selected={selectedCenters} setSelectedCenters = {setSelectedCenters} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  centers: PropTypes.array.isRequired
};

Results.defaultProps = {
  centers: []
};

export default Results;
