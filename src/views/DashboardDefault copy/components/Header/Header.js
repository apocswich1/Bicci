import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import translate from 'translate';

const t = translate;
const useStyles = makeStyles(theme => ({
  root: {},
  dates: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  startDateButton: {
    marginRight: theme.spacing(1)
  },
  endDateButton: {
    marginLeft: theme.spacing(1)
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Header = props => {
  const { className, session, ...rest } = props;

  const classes = useStyles();

  const data = {
    name: session.user.first_name
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography
        component="h2"
        gutterBottom
        variant="overline"
      >
        {t("Home")}
      </Typography>
      <Typography
        component="h1"
        gutterBottom
        variant="h3"
      >
        {t("Good Morning")}, {data.name}
      </Typography>
      <Typography variant="subtitle1">{t("Here's what's happening")}</Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {};

export default Header;
