import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { RichEditor } from 'components';
import translate from 'translate';

const t = translate;
const useStyles = makeStyles(() => ({
  root: {}
}));

const ProjectDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
      style={{height:"350px", width:"900px"}}
    >
      <CardHeader title={t("Message detail")}/>
      <CardContent style={{height:"350px", width:"900px"}}>
        <RichEditor placeholder="Escriba su mensaje a continuación..." />
      </CardContent>
    </Card>
  );
};

ProjectDetails.propTypes = {
  className: PropTypes.string
};

export default ProjectDetails;
