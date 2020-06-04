import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Radio,
  colors,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  option: {
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    maxWidth: 560,
    '& + &': {
      marginTop: theme.spacing(2)
    }
  },
  selectedOption: {
    backgroundColor: colors.grey[50]
  },
  optionRadio: {
    margin: -10
  },
  optionDetails: {
    marginLeft: theme.spacing(2)
  }
}));

const AboutDocument = props => {
  const { className,setFilesOption,setFilesName, ...rest } = props;

  const classes = useStyles();

  const [selected, setSelected] = useState('');

  const handleChange = (event, option) => {
    setSelected(option.value);
    setFilesOption(true);
    setFilesName(option.value);
  };

  const options = [
    {
      value: 'technicalReview',
      title: 'Technical Review',
      description: ''
    },
    {
      value: 'license',
      title: 'Driving License',
      description:
        ''
    },
    {
      value: 'carDni',
      title: 'Car Dni',
      description:
        ''
    },
    {
      value: 'carPermission',
      title: 'Car Permission',
      description:
        ''
    },
    {
      value: 'vehicleInsurance',
      title: 'Vehicle Insurance',
      description: ''
    }
  ];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="What do you want to upload exactly?" />
      <CardContent>
      <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
      >
        {options.map(option => (
          <Grid
          key={option.value}
          item
          lg={6}
          md={6}
          xl={6}
          xs={12}
        >
          <div
            className={clsx(classes.option, {
              [classes.selectedOption]: selected === option.value
            })}
            key={option.value}
          >
            <Radio
              checked={selected === option.value}
              className={classes.optionRadio}
              color="primary"
              onClick={event => handleChange(event, option)}
            />
            <div className={classes.optionDetails}>
              <Typography
                gutterBottom
                variant="h5"
              >
                {option.title}
              </Typography>
              <Typography variant="body1">{option.description}</Typography>
            </div>
          </div>
          </Grid>
        ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

AboutDocument.propTypes = {
  className: PropTypes.string
};

export default AboutDocument;
