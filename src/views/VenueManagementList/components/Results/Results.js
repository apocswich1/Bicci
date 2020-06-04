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
import { ReviewStars, GenericMoreButton, TableEditBarVenue } from 'components';
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
  const { className, venues, idFranchise, sortAsc, sortDesc, actualizar, ...rest } = props;

  const classes = useStyles();

  const [selectedVenues, setSelectedVenues] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedVenues = event.target.checked
      ? venues.map(venue => venue.id)
      : [];

    setSelectedVenues(selectedVenues);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedVenues.indexOf(id);
    let newSelectedVenues = [];

    if (selectedIndex === -1) {
      newSelectedVenues = newSelectedVenues.concat(selectedVenues, id);
    } else if (selectedIndex === 0) {
      newSelectedVenues = newSelectedVenues.concat(
        selectedVenues.slice(1)
      );
    } else if (selectedIndex === selectedVenues.length - 1) {
      newSelectedVenues = newSelectedVenues.concat(
        selectedVenues.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedVenues = newSelectedVenues.concat(
        selectedVenues.slice(0, selectedIndex),
        selectedVenues.slice(selectedIndex + 1)
      );
    }

    setSelectedVenues(newSelectedVenues);
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
        {venues.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(venues.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title={t("Venues List")}
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
                        checked={selectedVenues.length === venues.length}
                        color="primary"
                        indeterminate={
                          selectedVenues.length > 0 &&
                          selectedVenues.length < venues.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(venues,'name',sort)}>{t("name")}</TableCell>
                    <TableCell onClick={()=>sortData(venues,'address',sort)}>{t("address")}</TableCell>
                    <TableCell>{t("coordinates")} - {t("latitude")}</TableCell>
                    <TableCell>{t("coordinates")} - {t("longitude")}</TableCell>
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//venues.slice(0, rowsPerPage).map(venue => (
                    venues.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(venue => (
                    <TableRow
                      hover
                      key={venue.id}
                      selected={selectedVenues.indexOf(venue.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedVenues.indexOf(venue.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, venue.id)
                          }
                          value={selectedVenues.indexOf(venue.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={venue.avatar}
                          >
                            {getInitials(venue.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/venues/${venue.id}/${idFranchise}`}
                              //to="/management/venues/1"
                              variant="h6"
                            >
                              {venue.name}
                            </Link>
                            <div>{venue.id}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{venue.address}</TableCell>
                      <TableCell>{(venue.coordinates != undefined) ? new String(venue.coordinates._latitude) : 'No Definido'}</TableCell>
                      <TableCell>{venue.coordinates != undefined ? new String(venue.coordinates._longitude) : 'No Definido'}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/venues/${venue.id}/${idFranchise}`}
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
            count={venues.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarVenue selected={selectedVenues} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  venues: PropTypes.array.isRequired
};

Results.defaultProps = {
  venues: []
};

export default Results;
