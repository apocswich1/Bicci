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
import { ReviewStars, GenericMoreButton, TableEditBarProduct } from 'components';

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
  const { className, products, sortAsc, sortDesc, actualizar, restaurantID, ...rest } = props;
  const t = translate;
  const classes = useStyles();

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedProducts = event.target.checked
      ? products.map(product => product.id)
      : [];

    setSelectedProducts(selectedProducts);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedProducts.indexOf(id);
    let newSelectedProducts = [];

    if (selectedIndex === -1) {
      newSelectedProducts = newSelectedProducts.concat(selectedProducts, id);
    } else if (selectedIndex === 0) {
      newSelectedProducts = newSelectedProducts.concat(
        selectedProducts.slice(1)
      );
    } else if (selectedIndex === selectedProducts.length - 1) {
      newSelectedProducts = newSelectedProducts.concat(
        selectedProducts.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedProducts = newSelectedProducts.concat(
        selectedProducts.slice(0, selectedIndex),
        selectedProducts.slice(selectedIndex + 1)
      );
    }

    setSelectedProducts(newSelectedProducts);
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
        {products.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(products.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="Lista de Productos"
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
                        checked={selectedProducts.length === products.length}
                        color="primary"
                        indeterminate={
                          selectedProducts.length > 0 &&
                          selectedProducts.length < products.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(products,'name',sort)}>{t("Name")}</TableCell>
                    <TableCell onClick={()=>sortData(products,'description',sort)}>{t("Description")}</TableCell>
                    <TableCell onClick={()=>sortData(products,'price',sort)}>{t("Price")}</TableCell>
                    <TableCell onClick={()=>sortData(products,'estimatedDeliveryTime',sort)}>{t("Estimated Delivery Time")}</TableCell>
                    <TableCell onClick={()=>sortData(products,'stock',sort)}>{t("Stock")}</TableCell>
                    <TableCell onClick={()=>sortData(products,'sku',sort)}>{t("Sku")}</TableCell>
                    <TableCell onClick={()=>sortData(products,'approved',sort)}>{t("Approved")}</TableCell>
                    <TableCell onClick={()=>sortData(products,'active',sort)}>{t("Active")}</TableCell>
                    {/*<TableCell>Reviews</TableCell>*/}
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//products.slice(0, rowsPerPage).map(product => (
                    products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(product => (
                    <TableRow
                      hover
                      key={product.id}
                      selected={selectedProducts.indexOf(product.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedProducts.indexOf(product.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, product.id)
                          }
                          value={selectedProducts.indexOf(product.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={product.thumbnail}
                          >
                            {getInitials(product.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/products/${product.id}/${restaurantID}`}
                              //to="/management/products/1"
                              variant="h6"
                            >
                              {product.brand}
                            </Link>
                            <div>{product.name}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{product.description}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>
                        {/*product.currency*/}
                        {/*product.spent*/}
                        {product.estimatedDeliveryTime}
                      </TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>
                        {/*product.currency*/}
                        {/*product.spent*/}
                        {product.sku}
                      </TableCell>
                      <TableCell>{new String(product.approved ? product.approved : false)}</TableCell>
                      <TableCell>{new String(product.active ? product.active : false)}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/products/${product.id}/${restaurantID}`}
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
            count={products.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarProduct selected={selectedProducts} actualizar={actualizar} setSelectedProducts={setSelectedProducts}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array.isRequired
};

Results.defaultProps = {
  products: []
};

export default Results;
