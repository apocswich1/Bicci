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
import { ReviewStars, GenericMoreButton, TableEditBarKitchen } from 'components';

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
  const { className, kitchens, sortAsc, sortDesc, actualizar, restaurantID, ...rest } = props;
  const t = translate;
  const classes = useStyles();

  const [selectedKitchens, setSelectedKitchens] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedKitchens = event.target.checked
      ? kitchens.map(kitchen => kitchen.id)
      : [];

    setSelectedKitchens(selectedKitchens);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedKitchens.indexOf(id);
    let newSelectedKitchens = [];

    if (selectedIndex === -1) {
      newSelectedKitchens = newSelectedKitchens.concat(selectedKitchens, id);
    } else if (selectedIndex === 0) {
      newSelectedKitchens = newSelectedKitchens.concat(
        selectedKitchens.slice(1)
      );
    } else if (selectedIndex === selectedKitchens.length - 1) {
      newSelectedKitchens = newSelectedKitchens.concat(
        selectedKitchens.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedKitchens = newSelectedKitchens.concat(
        selectedKitchens.slice(0, selectedIndex),
        selectedKitchens.slice(selectedIndex + 1)
      );
    }

    setSelectedKitchens(newSelectedKitchens);
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
        {kitchens.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(kitchens.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="Lista de Kitchenos"
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
                        checked={selectedKitchens.length === kitchens.length}
                        color="primary"
                        indeterminate={
                          selectedKitchens.length > 0 &&
                          selectedKitchens.length < kitchens.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(kitchens,'name',sort)}>{t("Name")}</TableCell>
                    <TableCell onClick={()=>sortData(kitchens,'description',sort)}>{t("Description")}</TableCell>
                    <TableCell onClick={()=>sortData(kitchens,'price',sort)}>{t("Price")}</TableCell>
                    <TableCell onClick={()=>sortData(kitchens,'estimatedDeliveryTime',sort)}>{t("Estimated Delivery Time")}</TableCell>
                    <TableCell onClick={()=>sortData(kitchens,'stock',sort)}>{t("Stock")}</TableCell>
                    <TableCell onClick={()=>sortData(kitchens,'sku',sort)}>{t("Sku")}</TableCell>
                    <TableCell onClick={()=>sortData(kitchens,'isActive',sort)}>{t("disabled")}</TableCell>
                    {/*<TableCell>Reviews</TableCell>*/}
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//kitchens.slice(0, rowsPerPage).map(kitchen => (
                    kitchens.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(kitchen => (
                    <TableRow
                      hover
                      key={kitchen.id}
                      selected={selectedKitchens.indexOf(kitchen.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedKitchens.indexOf(kitchen.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, kitchen.id)
                          }
                          value={selectedKitchens.indexOf(kitchen.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={kitchen.thumbnail}
                          >
                            {getInitials(kitchen.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/kitchens/${kitchen.id}/${restaurantID}`}
                              //to="/management/kitchens/1"
                              variant="h6"
                            >
                              {kitchen.brand}
                            </Link>
                            <div>{kitchen.name}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{kitchen.description}</TableCell>
                      <TableCell>{kitchen.price}</TableCell>
                      <TableCell>
                        {/*kitchen.currency*/}
                        {/*kitchen.spent*/}
                        {kitchen.estimatedDeliveryTime}
                      </TableCell>
                      <TableCell>{kitchen.stock}</TableCell>
                      <TableCell>
                        {/*kitchen.currency*/}
                        {/*kitchen.spent*/}
                        {kitchen.sku}
                      </TableCell>
                      <TableCell>{new String(kitchen.active != undefined ? kitchen.active : true)}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/kitchens/${kitchen.id}/${restaurantID}`}
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
            count={kitchens.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarKitchen selected={selectedKitchens} actualizar={actualizar} setSelectedKitchens={setSelectedKitchens}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  kitchens: PropTypes.array.isRequired
};

Results.defaultProps = {
  kitchens: []
};

export default Results;
