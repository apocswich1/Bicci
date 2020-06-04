import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { VenueAdd } from '../../../VenueManagementDetails/components/Summary/components/VenueInfo/components';
import { ReportWashersVenues } from 'reportes';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className, actualizar, setLoading, idfranchise, ...rest } = props;

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
            Sucursales
          </Typography>
        </Grid>
        <Grid item>
          {<ReportWashersVenues/>}
          <Button
            color="primary"
            variant="contained"
            onClick={handleEditOpen}
          >
            Add venue
          </Button>
        </Grid>
      </Grid>
      <VenueAdd
       // venue={venue}
        setLoading={setLoading}
        onClose={handleEditClose}
        open={openEdit}
        actualizar={actualizar}
        idfranchise={idfranchise}
        />
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
