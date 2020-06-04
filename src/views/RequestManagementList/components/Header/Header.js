import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { RequestAdd } from '../../../RequestManagementDetails/components/Summary/components/RequestInfo/components';
const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className,actualizar, ...rest } = props;

  const classes = useStyles();

  const [openEdit, setOpenEdit] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const request = [];

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
            Requests
          </Typography>
        </Grid>
        <Grid item>
         {/*<Button
            color="primary"
            variant="contained"
            onClick={handleEditOpen}
          >
            Add Driver Request
         </Button>*/}
        </Grid>
        <RequestAdd
        request={request}
        onClose={handleEditClose}
        open={openEdit}
        actualizar={actualizar}
        />
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
