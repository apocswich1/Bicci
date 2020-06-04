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
import { ReviewStars, GenericMoreButton, TableEditBarCoupon } from 'components';
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
  const { className, coupons, sortAsc, sortDesc, actualizar, ...rest } = props;

  const classes = useStyles();

  const [selectedCoupons, setSelectedCoupons] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedCoupons = event.target.checked
      ? coupons.map(coupon => coupon.id)
      : [];

    setSelectedCoupons(selectedCoupons);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCoupons.indexOf(id);
    let newSelectedCoupons = [];

    if (selectedIndex === -1) {
      newSelectedCoupons = newSelectedCoupons.concat(selectedCoupons, id);
    } else if (selectedIndex === 0) {
      newSelectedCoupons = newSelectedCoupons.concat(
        selectedCoupons.slice(1)
      );
    } else if (selectedIndex === selectedCoupons.length - 1) {
      newSelectedCoupons = newSelectedCoupons.concat(
        selectedCoupons.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCoupons = newSelectedCoupons.concat(
        selectedCoupons.slice(0, selectedIndex),
        selectedCoupons.slice(selectedIndex + 1)
      );
    }

    setSelectedCoupons(newSelectedCoupons);
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
        {coupons.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(coupons.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title={t("Coupon list")}
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
                        checked={selectedCoupons.length === coupons.length}
                        color="primary"
                        indeterminate={
                          selectedCoupons.length > 0 &&
                          selectedCoupons.length < coupons.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(coupons,'id',sort)}>Id</TableCell>
                    <TableCell onClick={()=>sortData(coupons,'code',sort)}>{t("Code")}</TableCell>
                    <TableCell onClick={()=>sortData(coupons,'amount',sort)}>{t("Amount")}</TableCell>
                    <TableCell onClick={()=>sortData(coupons,'expirationDate',sort)}>{t("Expiration date")}</TableCell>
                    <TableCell onClick={()=>sortData(coupons,'global',sort)}>{t("Global")}</TableCell>
                    {/*<TableCell>Reviews</TableCell>*/}
                    <TableCell align="right">{t("Actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//coupons.slice(0, rowsPerPage).map(coupon => (
                    coupons.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(coupon => (
                    <TableRow
                      hover
                      key={coupon.id}
                      selected={selectedCoupons.indexOf(coupon.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedCoupons.indexOf(coupon.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, coupon.id)
                          }
                          value={selectedCoupons.indexOf(coupon.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={coupon.avatar}
                          >
                            {getInitials(coupon.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/coupons/${coupon.id}`}
                              //to="/management/coupons/1"
                              variant="h6"
                            >
                              {coupon.id}
                            </Link>
                            <div>{coupon.id}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{coupon.code}</TableCell>
                      <TableCell>
                        {/*coupon.currency*/}
                        {/*coupon.spent*/}
                        {coupon.amount}
                      </TableCell>
                      <TableCell>{new String(new Date(coupon.expirationDate).toString())}</TableCell>
                      <TableCell>{new String(coupon.global != undefined ? coupon.global : false)}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/coupons/${coupon.id}`}
                          variant="outlined"
                        >
                          {t("View")}
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
            count={coupons.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarCoupon selected={selectedCoupons} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  coupons: PropTypes.array.isRequired
};

Results.defaultProps = {
  coupons: []
};

export default Results;
