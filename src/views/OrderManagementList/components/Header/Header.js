import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { OrderAdd } from '../../../OrderManagementDetails/components/Summary/components/OrderInfo/components';
import { ReportOrders } from 'reportes';
import translate from 'translate';

const t = translate;
const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className, actualizar, setLoading, ...rest } = props;

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
            {t("orders")}
          </Typography>
        </Grid>
        {/* <Grid item>
          {<ReportOrders/>}
          <Button
            color="primary"
            variant="contained"
            onClick={handleEditOpen}
          >
            Add order
          </Button>
        </Grid> */}
      </Grid>
      <OrderAdd
       // order={order}
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
