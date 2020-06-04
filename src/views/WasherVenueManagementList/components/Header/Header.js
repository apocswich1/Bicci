import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { WasherAdd } from '../../../WasherVenueManagementDetails/components/Summary/components/WasherInfo/components';
import { ReportWashersVenues } from 'reportes';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className, actualizar,setLoading,venueID,idfranchise,venueName, franchiseName, ...rest } = props;

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
            Management
          </Typography>
          <Typography
            component="h1"
            variant="h3"
          >
            Prowashers Venue
          </Typography>
        </Grid>
        <Grid item>
          {<ReportWashersVenues/>}
          <Button
            color="primary"
            variant="contained"
            onClick={handleEditOpen}
          >
            Add prowasher venue
          </Button>
        </Grid>
      </Grid>
      <WasherAdd
        venueName={venueName}
        franchiseName={franchiseName}
        idfranchise={idfranchise}
        venueID={venueID}
        onClose={handleEditClose}
        open={openEdit}
        actualizar={actualizar}
        setLoading={setLoading}
        />
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
