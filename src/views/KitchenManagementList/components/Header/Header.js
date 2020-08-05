import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { KitchenAdd } from '../../../KitchenManagementDetails/components/Summary/components/KitchenInfo/components';
import { ReportKitchens } from 'reportes';
import translate from 'translate';

const t = translate;

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className, actualizar,setLoading,restaurantID, cboRestaurants, cboCategories, cboIngredients, ...rest } = props;

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
            {t("Kitchens")}
          </Typography>
        </Grid>
        <Grid item>
          {<ReportKitchens/>}
          <Button
            color="primary"
            variant="contained"
            onClick={handleEditOpen}
          >
            Agregar {t("Kitchen")}
          </Button>
        </Grid>
      </Grid>
      <KitchenAdd
       // kitchen={kitchen}
        onClose={handleEditClose}
        open={openEdit}
        actualizar={actualizar}
        setLoading={setLoading}
        cboCategories={cboCategories}
        cboRestaurants={cboRestaurants}
        cboIngredients={cboIngredients}
        restaurantID={restaurantID}
        />
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
