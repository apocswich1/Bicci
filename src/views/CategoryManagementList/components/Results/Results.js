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
import { ReviewStars, GenericMoreButton, TableEditBarCategory } from 'components';

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
  const { className, categorys, sortAsc, sortDesc, actualizar, ...rest } = props;
  const t = translate;
  const classes = useStyles();

  const [selectedCategorys, setSelectedCategorys] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedCategorys = event.target.checked
      ? categorys.map(category => category.id)
      : [];

    setSelectedCategorys(selectedCategorys);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCategorys.indexOf(id);
    let newSelectedCategorys = [];

    if (selectedIndex === -1) {
      newSelectedCategorys = newSelectedCategorys.concat(selectedCategorys, id);
    } else if (selectedIndex === 0) {
      newSelectedCategorys = newSelectedCategorys.concat(
        selectedCategorys.slice(1)
      );
    } else if (selectedIndex === selectedCategorys.length - 1) {
      newSelectedCategorys = newSelectedCategorys.concat(
        selectedCategorys.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCategorys = newSelectedCategorys.concat(
        selectedCategorys.slice(0, selectedIndex),
        selectedCategorys.slice(selectedIndex + 1)
      );
    }

    setSelectedCategorys(newSelectedCategorys);
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
        {categorys.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(categorys.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title={t("Categories List")}
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
                        checked={selectedCategorys.length === categorys.length}
                        color="primary"
                        indeterminate={
                          selectedCategorys.length > 0 &&
                          selectedCategorys.length < categorys.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(categorys,'name',sort)}>{t("name")}</TableCell>
                    <TableCell onClick={()=>sortData(categorys,'id',sort)}>{t("id")}</TableCell>
                    <TableCell onClick={()=>sortData(categorys,'isActive',sort)}>{t("isActive")}</TableCell>
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//categorys.slice(0, rowsPerPage).map(category => (
                    categorys.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(category => (
                    <TableRow
                      hover
                      key={category.id}
                      selected={selectedCategorys.indexOf(category.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedCategorys.indexOf(category.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, category.id)
                          }
                          value={selectedCategorys.indexOf(category.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={category.thumbnail}
                          >
                            {getInitials(category.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/categories/${category.id}`}
                              //to="/management/categorys/1"
                              variant="h6"
                            >
                              {category.name}
                            </Link>
                            <div>{category.name}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{category.id}</TableCell>
                      <TableCell>{new String(category.active != undefined ? category.active : true)}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/categories/${category.id}`}
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
            count={categorys.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarCategory selected={selectedCategorys} setSelectedCategorys = {setSelectedCategorys} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  categorys: PropTypes.array.isRequired
};

Results.defaultProps = {
  categorys: []
};

export default Results;
