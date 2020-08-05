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
import tiempo from 'utils/tiempo';
import getInitials from 'utils/getInitials';
import { ReviewStars, GenericMoreButton, TableEditBarPromotion } from 'components';

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
  const { className, promotions, sortAsc, sortDesc, actualizar, ...rest } = props;
  const t = translate;
  const classes = useStyles();

  const [selectedPromotions, setSelectedPromotions] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedPromotions = event.target.checked
      ? promotions.map(promotion => promotion.id)
      : [];

    setSelectedPromotions(selectedPromotions);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedPromotions.indexOf(id);
    let newSelectedPromotions = [];

    if (selectedIndex === -1) {
      newSelectedPromotions = newSelectedPromotions.concat(selectedPromotions, id);
    } else if (selectedIndex === 0) {
      newSelectedPromotions = newSelectedPromotions.concat(
        selectedPromotions.slice(1)
      );
    } else if (selectedIndex === selectedPromotions.length - 1) {
      newSelectedPromotions = newSelectedPromotions.concat(
        selectedPromotions.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedPromotions = newSelectedPromotions.concat(
        selectedPromotions.slice(0, selectedIndex),
        selectedPromotions.slice(selectedIndex + 1)
      );
    }

    setSelectedPromotions(newSelectedPromotions);
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
        {promotions.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(promotions.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title={t("Promotions List")}
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
                        checked={selectedPromotions.length === promotions.length}
                        color="primary"
                        indeterminate={
                          selectedPromotions.length > 0 &&
                          selectedPromotions.length < promotions.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(promotions,'name',sort)}>{t("name")}</TableCell>
                    <TableCell onClick={()=>sortData(promotions,'expirationDate',sort)}>{t("expirationDate")}</TableCell>
                    <TableCell onClick={()=>sortData(promotions,'id',sort)}>{t("id")}</TableCell>
                    <TableCell onClick={()=>sortData(promotions,'isActive',sort)}>{t("isActive")}</TableCell>
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//promotions.slice(0, rowsPerPage).map(promotion => (
                    promotions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(promotion => (
                    <TableRow
                      hover
                      key={promotion.id}
                      selected={selectedPromotions.indexOf(promotion.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedPromotions.indexOf(promotion.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, promotion.id)
                          }
                          value={selectedPromotions.indexOf(promotion.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={promotion.thumbnail}
                          >
                            {getInitials(promotion.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={"/management/promotions/"+promotion.id}
                              //to="/management/promotions/1"
                              variant="h6"
                            >
                              {promotion.name}
                            </Link>
                            <div>{promotion.name}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{tiempo.fechayhora(promotion.expirationDate)}</TableCell>
                      <TableCell>{promotion.id}</TableCell>
                      <TableCell>{new String(promotion.active != undefined ? promotion.active : true)}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={"/management/promotions/"+promotion.id}
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
            count={promotions.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarPromotion selected={selectedPromotions} setSelectedPromotions = {setSelectedPromotions} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  promotions: PropTypes.array.isRequired
};

Results.defaultProps = {
  promotions: []
};

export default Results;