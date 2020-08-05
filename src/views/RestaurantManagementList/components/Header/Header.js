import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { RestaurantAdd } from '../../../RestaurantManagementDetails/components/Summary/components/RestaurantInfo/components';
import { ReportRestaurants } from 'reportes';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className, actualizar,setLoading,cboRegion, cboCategories, cboAdministrators, ...rest } = props;
  const session = useSelector(state => state.session);
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
            Restaurantes
          </Typography>
        </Grid>
        {session.user.role=="ADMIN" && (
          <Grid item>
          {<ReportRestaurants/>}
          <Button
            color="primary"
            variant="contained"
            onClick={handleEditOpen}
          >
            Agregar Restaurante
          </Button>
        </Grid>  
        )}
      </Grid>
      <RestaurantAdd
       // restaurant={restaurant}
       cboRegion={cboRegion}
        onClose={handleEditClose}
        open={openEdit}
        actualizar={actualizar}
        setLoading={setLoading}
        cboCategories={cboCategories}
        cboAdministrators={cboAdministrators}
        />
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
