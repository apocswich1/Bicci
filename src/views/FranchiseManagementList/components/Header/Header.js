import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { FranchiseAdd } from '../../../FranchiseManagementDetails/components/Summary/components/FranchiseInfo/components';
import { ReportFranchises } from 'reportes';
import { useSelector } from 'react-redux';
import translate from 'translate';

const t = translate;
const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className, actualizar, setLoading, ...rest } = props;
  const session = useSelector(state => state.session);
  const role = session.user.role;

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
            Franquicias
          </Typography>
        </Grid>
        <Grid item>
          {<ReportFranchises/>}
          {role=="ADMIN" && (
            <Button
            color="primary"
            variant="contained"
            onClick={handleEditOpen}
          >
            {t("add")} franchise
          </Button>
          )}
        </Grid>
      </Grid>
      <FranchiseAdd
       // franchise={franchise}
        setLoading={setLoading}
        onClose={handleEditClose}
        open={openEdit}
        actualizar={actualizar}
        />
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
