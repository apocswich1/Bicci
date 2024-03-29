import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';
import translate from 'translate';
import { Page } from 'components';
import { Header, Summary, Invoices, Logs } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  tabs: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const ClaimManagementDetails = props => {
  const { match, history } = props;
  const classes = useStyles();
  const { id, tab } = match.params;

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  const t = translate;

  const tabs = [
    { value: 'summary', label: t('summary') },
  //  { value: 'invoices', label: 'Invoices' },
  //  { value: 'logs', label: 'Logs' }
  ];

  if (!tab) {
    return <Redirect to={"/management/claims/"+id+"/summary"} />;
  }

  if (!tabs.find(t => t.value === tab)) {
    return <Redirect to="/errors/error-404" />;
  }

  return (
    <Page
      className={classes.root}
      title="Claim Management Details"
    >
      <Header id={id}/>
      <Tabs
        className={classes.tabs}
        onChange={handleTabsChange}
        scrollButtons="auto"
        value={tab}
        variant="scrollable"
      >
        {tabs.map(tab => (
          <Tab
            key={tab.value}
            label={tab.label}
            value={tab.value}
          />
        ))}
      </Tabs>
      <Divider className={classes.divider} />
      <div className={classes.content}>
        {tab === 'summary' && <Summary id={id}/>}
        {tab === 'invoices' && <Invoices id={id}/>}
        {tab === 'logs' && <Logs id={id}/>}
      </div>
    </Page>
  );
};

ClaimManagementDetails.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default ClaimManagementDetails;