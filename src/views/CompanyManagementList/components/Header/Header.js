import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { CompanyAdd } from '../../../CompanyManagementDetails/components/Summary/components/CompanyInfo/components';
import { ReportCompanies } from 'reportes';
import configModel from 'models/Company';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className, actualizar,setLoading,cboCategories, cboCenters, cboAdministrators, ...rest } = props;

  const [openEdit, setOpenEdit] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="flex-end"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid item>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Administrar
          </Typography>
          <Typography
            component="h1"
            variant="h3"
          >
            {configModel.header}
          </Typography>
        </Grid>
        <Grid item>
          {<ReportCompanies/>}
          <Button
            color="primary"
            variant="contained"
            onClick={handleEditOpen}
          >
            {`${configModel.headerAdd}`}
          </Button>
        </Grid>
      </Grid>
      <CompanyAdd
       // restaurant={restaurant}
        onClose={handleEditClose}
        open={openEdit}
        actualizar={actualizar}
        setLoading={setLoading}
        cboCategories={cboCategories}
        cboCenters={cboCenters}
        cboAdministrators={cboAdministrators}
        />
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
