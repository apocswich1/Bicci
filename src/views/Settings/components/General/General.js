import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import axios from 'utils/axios';
import { ProfileDetails, GeneralSettings } from './components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const General = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [profile, setProfile] = useState(null);
  const session = useSelector(state => state.session);

  useEffect(() => {
    let mounted = true;

    const fetchProfile = () => {
      axios.get('/api/account/profile').then(response => {
        if (mounted) {
          console.log(response)
         // setProfile(response.data.profile);
        }
      });
    };
    
    //fetchProfile();
    setProfile(session);  
    return () => {
      mounted = false;
    };
  }, []);

  console.log(session)

  if (!profile) {
    return null;
  }

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <ProfileDetails profile={session.user} />
      </Grid>
      <Grid
        item
        lg={8}
        md={6}
        xl={9}
        xs={12}
      >
        <GeneralSettings profile={session.user} />
      </Grid>
    </Grid>
  );
};

General.propTypes = {
  className: PropTypes.string
};

export default General;
