import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { ModeloAdd } from '../../../ModeloManagementDetails/components/Summary/components/ModeloInfo/components';
import { ReportUsers } from 'reportes';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className, actualizar,setLoading, ...rest } = props;

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
            Usuarios
          </Typography>
        </Grid>
        <Grid item>
          {<ReportUsers/>}
          <Button
            color="primary"
            variant="contained"
            onClick={handleEditOpen}
          >
            Agregar Usuario
          </Button>
        </Grid>
      </Grid>
      <ModeloAdd
       // modelo={modelo}
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
