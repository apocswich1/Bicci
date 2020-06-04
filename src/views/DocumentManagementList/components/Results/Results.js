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
import { ReviewStars, GenericMoreButton, TableEditBarDocument } from 'components';

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
  const { className, documents, sortAsc, sortDesc, actualizar, ...rest } = props;
  const t = translate;
  const classes = useStyles();

  const [selectedDocuments, setSelectedDocuments] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState('asc');

  const handleSelectAll = event => {
    const selectedDocuments = event.target.checked
      ? documents.map(document => document.id)
      : [];

    setSelectedDocuments(selectedDocuments);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedDocuments.indexOf(id);
    let newSelectedDocuments = [];

    if (selectedIndex === -1) {
      newSelectedDocuments = newSelectedDocuments.concat(selectedDocuments, id);
    } else if (selectedIndex === 0) {
      newSelectedDocuments = newSelectedDocuments.concat(
        selectedDocuments.slice(1)
      );
    } else if (selectedIndex === selectedDocuments.length - 1) {
      newSelectedDocuments = newSelectedDocuments.concat(
        selectedDocuments.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedDocuments = newSelectedDocuments.concat(
        selectedDocuments.slice(0, selectedIndex),
        selectedDocuments.slice(selectedIndex + 1)
      );
    }

    setSelectedDocuments(newSelectedDocuments);
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
        {documents.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(documents.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title={t("Documents list")}
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
                        checked={selectedDocuments.length === documents.length}
                        color="primary"
                        indeterminate={
                          selectedDocuments.length > 0 &&
                          selectedDocuments.length < documents.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell onClick={()=>sortData(documents,'name',sort)}>{t("name")}</TableCell>
                    <TableCell onClick={()=>sortData(documents,'id',sort)}>{t("id")}</TableCell>
                    <TableCell onClick={()=>sortData(documents,'isActive',sort)}>{t("isActive")}</TableCell>
                    <TableCell align="right">{t("actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {//documents.slice(0, rowsPerPage).map(document => (
                    documents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(document => (
                    <TableRow
                      hover
                      key={document.id}
                      selected={selectedDocuments.indexOf(document.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedDocuments.indexOf(document.id) !== -1
                          }
                          color="primary"
                          onChange={event =>
                            handleSelectOne(event, document.id)
                          }
                          value={selectedDocuments.indexOf(document.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={document.thumbnail}
                          >
                            {getInitials(document.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={`/management/documents/${document.id}`}
                              //to="/management/documents/1"
                              variant="h6"
                            >
                              {document.name}
                            </Link>
                            <div>{document.name}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{document.id}</TableCell>
                      <TableCell>{new String(document.active != undefined ? document.active : true)}</TableCell>
                    {/*}  <TableCell>
                        <ReviewStars value={5} />
                        </TableCell>*/}
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={`/management/documents/${document.id}`}
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
            count={documents.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBarDocument selected={selectedDocuments} setSelectedDocuments = {setSelectedDocuments} actualizar={actualizar}/>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  documents: PropTypes.array.isRequired
};

Results.defaultProps = {
  documents: []
};

export default Results;
