import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { CouponAdd } from '../../../CouponManagementDetails/components/Summary/components/CouponInfo/components';
import { ReportCoupons } from 'reportes';
import translate from 'translate';

const t = translate;
const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className, actualizar,setLoading,cboFranchises, ...rest } = props;

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
            {t("coupons")}
          </Typography>
        </Grid>
        <Grid item>
          {<ReportCoupons/>}
          <Button
            color="primary"
            variant="contained"
            onClick={handleEditOpen}
          >
            {t("add")} {t("coupon")}
          </Button>
        </Grid>
      </Grid>
      <CouponAdd
       // coupon={coupon}
        onClose={handleEditClose}
        open={openEdit}
        actualizar={actualizar}
        setLoading={setLoading}
        cboFranchises={cboFranchises}
        />
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
