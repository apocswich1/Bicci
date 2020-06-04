import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { Reports } from '../Reports';
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
  const { className, owners, actualizar, ...rest } = props;

  const classes = useStyles();

  const [selectedOwners, setSelectedOwners] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleSelectAll = event => {
    const selectedOwners = event.target.checked
      ? owners.map(owner => owner.id)
      : [];

    setSelectedOwners(selectedOwners);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedOwners.indexOf(id);
    let newSelectedOwners = [];

    if (selectedIndex === -1) {
      newSelectedOwners = newSelectedOwners.concat(selectedOwners, id);
    } else if (selectedIndex === 0) {
      newSelectedOwners = newSelectedOwners.concat(
        selectedOwners.slice(1)
      );
    } else if (selectedIndex === selectedOwners.length - 1) {
      newSelectedOwners = newSelectedOwners.concat(
        selectedOwners.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedOwners = newSelectedOwners.concat(
        selectedOwners.slice(0, selectedIndex),
        selectedOwners.slice(selectedIndex + 1)
      );
    }

    setSelectedOwners(newSelectedOwners);
  };

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
        {owners.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(owners.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="All owners"
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
                        checked={selectedOwners.length === owners.length}
                        color="primary"
                        indeterminate={
                          selectedOwners.length > 0 &&
                          selectedOwners.length < owners.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Dni</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//owners.slice(0, rowsPerPage).map(owner => (
                    owners.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(owner => (
                    <TableRow
                      hover
                      key={owner.id}
                      selected={selectedOwners.indexOf(owner.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedOwners.indexOf(owner.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, owner.id)
                          }
                          value={selectedOwners.indexOf(owner.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={owner.avatar}
                          >
                            {getInitials(owner.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/owners/${owner.id}`}
                              //to="/management/owners/1"
                              variant="h6"
                            >
                              {owner.name}
                            </Link>
                            <div>{owner.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{owner.email}</TableCell>
                      <TableCell>
                        {owner.dni}
                      </TableCell>
                      <TableCell>{owner.phone}</TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/owners/${owner.id}`}
                          variant="outlined"
                        >
                          View
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
            count={owners.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBar selected={selectedOwners} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  owners: PropTypes.array.isRequired
};

Results.defaultProps = {
  owners: []
};

export default Results;
