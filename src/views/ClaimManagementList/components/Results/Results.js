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
import { ReviewStars, GenericMoreButton, TableEditBarClaim } from 'components';

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
  const { className, claims, sortAsc, sortDesc, actualizar, ...rest } = props;
  const t = translate;
  const classes = useStyles();

  const [selectedClaims, setSelectedClaims] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedClaims = event.target.checked
      ? claims.map(claim => claim.id)
      : [];

    setSelectedClaims(selectedClaims);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedClaims.indexOf(id);
    let newSelectedClaims = [];

    if (selectedIndex === -1) {
      newSelectedClaims = newSelectedClaims.concat(selectedClaims, id);
    } else if (selectedIndex === 0) {
      newSelectedClaims = newSelectedClaims.concat(
        selectedClaims.slice(1)
      );
    } else if (selectedIndex === selectedClaims.length - 1) {
      newSelectedClaims = newSelectedClaims.concat(
        selectedClaims.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedClaims = newSelectedClaims.concat(
        selectedClaims.slice(0, selectedIndex),
        selectedClaims.slice(selectedIndex + 1)
      );
    }

    setSelectedClaims(newSelectedClaims);
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
        {claims.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(claims.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title={t("Lista de Mensajes")}
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
                        checked={selectedClaims.length === claims.length}
                        color="primary"
                        indeterminate={
                          selectedClaims.length > 0 &&
                          selectedClaims.length < claims.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(claims,'senderName',sort)}>{t("Usuario")}</TableCell>
                    <TableCell onClick={()=>sortData(claims,'comment',sort)}>{t("Comment")}</TableCell>
                    <TableCell onClick={()=>sortData(claims,'orderID',sort)}>{t("Orden ID")}</TableCell>
                    <TableCell onClick={()=>sortData(claims,'driver',sort)}>{t("Tipo")}</TableCell>
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//claims.slice(0, rowsPerPage).map(claim => (
                    claims.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(claim => (
                    <TableRow
                      hover
                      key={claim.id}
                      selected={selectedClaims.indexOf(claim.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedClaims.indexOf(claim.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, claim.id)
                          }
                          value={selectedClaims.indexOf(claim.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={claim.thumbnail}
                          >
                            {getInitials(claim.senderName)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              //to={`/management/orders/${order.id}`}
                              to={"/management/orders/"+claim.orderID}
                              //to="/management/claims/1"
                              variant="h6"
                            >
                              {claim.senderName}
                            </Link>
                            <div>{claim.id}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{claim.comment}</TableCell>
                      <TableCell>{claim.orderID}</TableCell>
                      <TableCell>{new String(claim.driver !== true ? 'Cliente' : 'Driver')}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        {claim.orderID && (
                          <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={"/management/orders/"+claim.orderID}
                          //to={"/management/claims/"+claim.id}
                          variant="outlined"
                        >
                          {t("view")} {"Orden"}
                        </Button>
                        )}
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
            count={claims.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarClaim selected={selectedClaims} setSelectedClaims = {setSelectedClaims} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  claims: PropTypes.array.isRequired
};

Results.defaultProps = {
  claims: []
};

export default Results;