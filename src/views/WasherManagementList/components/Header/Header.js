import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { WasherAdd } from '../../../WasherManagementDetails/components/Summary/components/WasherInfo/components';
import { ReportWashers } from 'reportes';
import translate from 'translate';

const t = translate;
const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className, actualizar,setLoading, cboFranchises, ...rest } = props;

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
            {t("management")}
          </Typography>
          <Typography
            component="h1"
            variant="h3"
          >
            Prowashers
          </Typography>
        </Grid>
        <Grid item>
          {<ReportWashers/>}
          <Button
            color="primary"
            variant="contained"
            onClick={handleEditOpen}
          >
            {t("add")} prowasher
          </Button>
        </Grid>
      </Grid>
      <WasherAdd
       // washer={washer}
        cboFranchises={cboFranchises}
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
