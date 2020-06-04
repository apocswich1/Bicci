import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';
import WasherVenueManagementList from '../WasherVenueManagementList';
import { Page } from 'components';
import { Header, Summary, Invoices, Logs, Radio, Ubicacion } from './components';
import TemplateManagement from '../TemplateManagement';
import AvailabilityManagement from '../AvailabilityManagement';
import translate from 'translate';

const t = translate;
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

const VenueManagementDetails = props => {
  const { match, history } = props;
  const classes = useStyles();
  const { id, idfranchise, tab } = match.params;

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  const tabs = [
    { value: 'summary', label: t("summary") },
    { value: 'invoices', label: 'Prowashers' },
    { value: 'template', label: t("template") },
    { value: 'availabilities', label: t('Availabilities') },
  ];

  if (!tab) {
    //return <Redirect to={`/management/venues/${id}/summary`} />;
    return <Redirect to={`/management/venues/${id}/${idfranchise}/summary`} />;
  }

  if (!tabs.find(t => t.value === tab)) {
    return <Redirect to="/errors/error-404" />;
  }
console.log(id);
  return (
    <Page
      className={classes.root}
      title={t("Venue Management Details")}
    >
      <Header id={id} idfranchise={idfranchise}/>
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
        {tab === 'summary' && <Summary id={id} idfranchise={idfranchise}/>}
        {tab === 'invoices' && <WasherVenueManagementList venueID={id} idfranchise={idfranchise}/>}
        {tab === 'template' && <TemplateManagement id={id} venueID={id} />}
        {tab === 'availabilities' && <AvailabilityManagement id={id} venueID={id} idfranchise={idfranchise}/>}
      </div>
    </Page>
  );
};

VenueManagementDetails.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default VenueManagementDetails;