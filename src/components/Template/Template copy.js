import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import { makeStyles } from '@material-ui/styles';
import {
  Scheduler,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  WeekView,
  EditRecurrenceMenu,
  AllDayPanel,
  ConfirmationDialog,
  Resources
} from '@devexpress/dx-react-scheduler-material-ui';
import { green, orange } from '@material-ui/core/colors';

//import { appointments } from './data';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  altura: {
    marginTop: 50,
    paddingTop: 50
  },
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1)
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end'
  }
}));

const Template = props => {
  
  //const { currentDate } = props;
  const [currentDate, setCurrentDate] = useState('2018-06-27');
  const [addedAppointment, setAddedAppointment] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [appointmentChanges, setAppointmentChanges] = useState({});
  const [editingAppointmentId, setEditingAppointmentId] = useState(undefined);
  const [data, setData] = useState(appointments);
  let instances = [
    { text: 'Low Priority', id: 1, color: green },
    { text: 'High Priority', id: 2, color: orange },
  ];
  const [resources, setResources] = useState({resources : [
    {
    fieldName: 'priorityId',
    title: 'Priority',
    instances: instances,
    allowMultiple: true, 
  }
]});
  console.log(resources.resources[0]);
  const changeAddedAppointment = (addedAppointment) =>{
    setAddedAppointment(addedAppointment);
  }

  const changeAppointmentChanges = (appointmentChanges) =>{
    setAppointmentChanges(appointmentChanges);
  }

  const changeEditingAppointmentId = (editingAppointmentId) =>{
    setEditingAppointmentId(editingAppointmentId);
  }

  const commitChanges = ({ added, changed, deleted }) =>{
    
      let data = appointments;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
        console.log({...added});
        setData(data);
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
          setData(data);
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
        setData(data);
      }
      console.log(data);
      return { data };
  }

    // const {
    //   currentDate, data, addedAppointment, appointmentChanges, editingAppointmentId,
    // } = this.state;
    const classes = useStyles();
   

  const grouping = [{
    resourceName: 'priorityId',
  }];
    return (
      <Paper classes={{
        root: classes.altura, // class name, e.g. `classes-nesting-root-x`
      }}>
        <Scheduler
          data={data}
          height={660}
        >
          <ViewState
            currentDate={currentDate}
          />
          <EditingState
            onCommitChanges={commitChanges}

            addedAppointment={addedAppointment}
            onAddedAppointmentChange={changeAddedAppointment}

            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={changeAppointmentChanges}

            editingAppointmentId={editingAppointmentId}
            onEditingAppointmentIdChange={changeEditingAppointmentId}
          />
          <WeekView
            startDayHour={9}
            endDayHour={17}
          />
          <AllDayPanel />
          <EditRecurrenceMenu />
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip
            showOpenButton
            showDeleteButton
          />
          <AppointmentForm />
          <Resources
            data={resources.resources}
            mainResourceName="priorityId"
            allowMultiple={true}
          >
          </Resources>
        </Scheduler>
      </Paper>
    );
  }

  export default Template;