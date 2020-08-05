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
import { ReviewStars, GenericMoreButton, TableEditBarIngredient } from 'components';

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
  const { className, ingredients, sortAsc, sortDesc, actualizar,actualizarIngredient,restaurant, ...rest } = props;
  const t = translate;
  const classes = useStyles();

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedIngredients = event.target.checked
      ? ingredients.map(ingredient => ingredient.id)
      : [];

    setSelectedIngredients(selectedIngredients);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedIngredients.indexOf(id);
    let newSelectedIngredients = [];

    if (selectedIndex === -1) {
      newSelectedIngredients = newSelectedIngredients.concat(selectedIngredients, id);
    } else if (selectedIndex === 0) {
      newSelectedIngredients = newSelectedIngredients.concat(
        selectedIngredients.slice(1)
      );
    } else if (selectedIndex === selectedIngredients.length - 1) {
      newSelectedIngredients = newSelectedIngredients.concat(
        selectedIngredients.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedIngredients = newSelectedIngredients.concat(
        selectedIngredients.slice(0, selectedIndex),
        selectedIngredients.slice(selectedIndex + 1)
      );
    }

    setSelectedIngredients(newSelectedIngredients);
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
        {ingredients.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(ingredients.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title={t("Ingredient List")}
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
                        checked={selectedIngredients.length === ingredients.length}
                        color="primary"
                        indeterminate={
                          selectedIngredients.length > 0 &&
                          selectedIngredients.length < ingredients.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(ingredients,'name',sort)}>{t("name")}</TableCell>
                    <TableCell onClick={()=>sortData(ingredients,'price',sort)}>{t("Price")}</TableCell>
                    {/* <TableCell onClick={()=>sortData(ingredients,'isActive',sort)}>{t("isActive")}</TableCell> */}
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//ingredients.slice(0, rowsPerPage).map(ingredient => (
                    ingredients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(ingredient => (
                    <TableRow
                      hover
                      key={ingredient.id}
                      selected={selectedIngredients.indexOf(ingredient.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedIngredients.indexOf(ingredient.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, ingredient.id)
                          }
                          value={selectedIngredients.indexOf(ingredient.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={ingredient.thumbnail}
                          >
                            {getInitials(ingredient.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/ingredients/${ingredient.id}`}
                              //to="/management/ingredients/1"
                              variant="h6"
                            >
                              {ingredient.name}
                            </Link>
                            <div>{ingredient.name}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{ingredient.price}</TableCell>
                      {/* <TableCell>{new String(ingredient.active != undefined ? ingredient.active : true)}</TableCell> */}
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/ingredients/${ingredient.id}`}
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
            count={ingredients.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarIngredient selected={selectedIngredients} setSelectedIngredients = {setSelectedIngredients} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  ingredients: PropTypes.array.isRequired
};

Results.defaultProps = {
  ingredients: []
};

export default Results;
