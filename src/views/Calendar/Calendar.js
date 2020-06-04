import React, { useState, useRef, useEffect } from 'react';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timelinePlugin from '@fullcalendar/timeline';
import { makeStyles } from '@material-ui/styles';
import {
  Modal,
  Card,
  CardContent,
  colors,
  useTheme,
  useMediaQuery
} from '@material-ui/core';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';
import uuid from 'uuid/v1';
import axios from 'utils/axios';
import { Page } from 'components';
import { AddEditEvent, Toolbar } from './components';
import firebase from  'utils/firebase';
moment.locale('es');
const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    padding: theme.spacing(3),
    '& .fc-unthemed td': {
      borderColor: theme.palette.divider
    },
    '& .fc-widget-header': {
      backgroundColor: colors.grey[50]
    },
    '& .fc-axis': {
      ...theme.typography.body2
    },
    '& .fc-list-item-time': {
      ...theme.typography.body2
    },
    '& .fc-list-item-title': {
      ...theme.typography.body1
    },
    '& .fc-list-heading-main': {
      ...theme.typography.h6
    },
    '& .fc-list-heading-alt': {
      ...theme.typography.h6
    },
    '& .fc th': {
      borderColor: theme.palette.divider
    },
    '& .fc-day-header': {
      ...theme.typography.subtitle2,
      fontWeight: 500,
      color: theme.palette.text.secondary,
      padding: theme.spacing(1),
      backgroundColor: colors.grey[50]
    },
    '& .fc-day-top': {
      ...theme.typography.body2
    },
    '& .fc-highlight': {
      backgroundColor: colors.blueGrey[50]
    },
    '& .fc-event': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      borderWidth: 2,
      opacity: 0.9,
      '& .fc-time': {
        ...theme.typography.h6,
        color: 'inherit'
      },
      '& .fc-title': {
        ...theme.typography.body1,
        color: 'inherit'
      }
    },
    '& .fc-list-empty': {
      ...theme.typography.subtitle1
    }
  },
  card: {
    marginTop: theme.spacing(3)
  }
}));

const Calendar = (props) => {
  const classes = useStyles();
  const calendarRef = useRef(null);
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
  const [view, setView] = useState(mobileDevice ? 'timeGridWeek' : 'timeGridWeek');
  const [date, setDate] = useState(moment('2020-03-01').toDate());
  
  const [events, setEvents] = useState([]);
  const [washers, setWashers] = useState([]);
  const [daysTemp, setDaysTemp] = useState([]);
  const [eventModal, setEventModal] = useState({
    open: false,
    event: null
  });

  
  useEffect(() => {
    let mounted = true;

    const fetchEvents = () => {
      if (mounted) {

        let daysTemp = [];
        let inicio = "";
        let cadena = "";
        const refTemplate = firebase.firestore().collection('templates').doc(props.venueID)
        .collection('hours').get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.');
            return;
          }
      
          snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            //daysTemp.push(doc.data());
            switch (doc.data().id.split("-")[0]) {

              case "LU":
        
                inicio = "MON";
                cadena = "2020-03-02";
        
                break;
        
              case "MA":
        
                inicio = "TUE";
                cadena = "2020-03-03";
        
                break;
        
              case "MI":
        
                inicio = "WED";
                cadena = "2020-03-04";
        
                break;
        
              case "JU":
        
                inicio = "THU";
                cadena = "2020-03-05";
        
                break;
        
              case "VI":
        
                inicio = "FRI";
                cadena = "2020-03-06";
        
                break;
        
              case "SA":
        
                inicio = "SAT";
                cadena = "2020-03-07";
        
                break;
        
              case "DO":
        
                inicio = "SUN";
                cadena = "2020-03-01";
        
                break;
        
        
              default:
        
               // sentencias;
        
                break;
        
            }

            daysTemp.push({
              id: doc.data().id,
              title: "Evento Nuevo",
              color: colors.green['700'],
              start: moment(cadena+" "+doc.data().hour+":"+"00").toDate(),
              end: (moment(cadena+" "+doc.data().hour+":"+"00").add(30,'minutes')).toDate(),
              personName: doc.data().washers,
              desc: "Hora programada del día"
            });
          });
          console.log(daysTemp)
          setDaysTemp(daysTemp);
          setEvents(daysTemp);
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });


        const fetchWashers = () => {
          fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/listWashersAdmin', {
            method: 'get',
            mode: 'cors',
          }).then(function (respuesta) {
            respuesta.json().then(body => {
              setWashers(body.usuarios.filter(item => item.active != false && item.deleted !== true && item.venueID === props.venueID));
              console.log(body.usuarios);
            });
          }).catch(function (err) {
            // Error :(
          });
        };

        fetchWashers();

        // setEvents([{
        //   id: uuid(),
        //   title: "Evento Nuevo",
        //   color: "#000000",
        //   start: moment('2020-03-01 08:00:00').toDate(),
        //   end: moment('2020-03-01 08:30:00').toDate(),
        //   personName: ['Elvis Hernandez', 'Ernesto Hernandez'],
        //   desc: "asdasdasd"
        // }]);
      }


    };

    fetchEvents();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const calendarApi = calendarRef.current.getApi();
    const newView = mobileDevice ? 'timeGridWeek' : 'timeGridWeek';

    calendarApi.changeView(newView);
    setView(newView);
  }, [mobileDevice]);

  const handleEventClick = info => {
    const selected = events.find(event => event.id === info.event.id);

    setEventModal({
      open: true,
      event: selected
    });
  };

  const handleEventNew = () => {
    setEventModal({
      open: true,
      event: null
    });
  };

  const handleEventDelete = event => {
    setEvents(events => events.filter(e => e.id !== event.id));
    setEventModal({
      open: false,
      event: null
    });
  };

  const handleModalClose = () => {
    setEventModal({
      open: false,
      event: null
    });
  };

  const handleEventAdd = event => {
    console.log(event);
    //let cadena = event.split(" ");
    let cadena = new String(event.start);
    let dia = cadena.split(" ")[0].toUpperCase();
    let hora = cadena.split(" ")[4].split(":");
    console.log(dia + "-" + hora[0] + ":" + hora[1]);
    let inicio = "";
    switch (dia) {

      case "MON":

        inicio = "LU";

        break;

      case "TUE":

        inicio = "MA";

        break;

      case "WED":

        inicio = "MI";

        break;

      case "THU":

        inicio = "JU";

        break;

      case "FRI":

        inicio = "VI";

        break;

      case "SAT":

        inicio = "SA";

        break;

      case "SUN":

        inicio = "DO";

        break;


      default:

        //sentencias;

        break;

    }
    let name = inicio + "-" + hora[0] + ":" + hora[1];
    let hour = hora[0] + ":" + hora[1];

    let data = {
      uid:props.venueID,
      hours:[
        {
          name: name,
          hour: hour,
          washers: event.personName
        }
      ]
    }

    console.log(data);
    const evento = { ...event }
    fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/updateTemplate', {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify(data)
    }).then(function (respuesta) {
      respuesta.json().then(body => {
        console.log(body);
        setEvents(events => [...events, event]);
        setEventModal({
          open: false,
          event: null
        });
        // actualizar(msg,body);
      });
    }).catch(function (err) {
      setEvents(events => [...events, event]);
        setEventModal({
          open: false,
          event: null
        });
      // Error :(
      console.log(err);
    });
  };

  const handleEventEdit = event => {
    setEvents(events => events.map(e => (e.id === event.id ? event : e)));
    setEventModal({
      open: false,
      event: null
    });
  };

  const handleDateToday = () => {
    const calendarApi = calendarRef.current.getApi();

    calendarApi.today();
    setDate(calendarApi.getDate());
  };

  const handleViewChange = view => {
    const calendarApi = calendarRef.current.getApi();

    calendarApi.changeView(view);
    setView(view);
  };

  const handleDatePrev = () => {
    const calendarApi = calendarRef.current.getApi();

    calendarApi.prev();
    setDate(calendarApi.getDate());
  };

  const handleDateNext = () => {
    const calendarApi = calendarRef.current.getApi();

    calendarApi.next();
    setDate(calendarApi.getDate());
  };

  const handleAddClick = (arg) => {
    const calendarApi = calendarRef.current.getApi();
    const newView = mobileDevice ? 'timeGridWeek' : 'timeGridWeek';

    // console.log(arg);

    var fecha = new Date(arg.dateStr);
    // console.log(fecha);
    // console.log(fecha.getMinutes()+30);
    // console.log(fecha.getDate());
    // console.log(fecha.getUTCMonth());
    // console.log(fecha.getFullYear());
    calendarApi.changeView(newView);
    setView(newView);
    setEventModal({
      open: true,
      event: null,
      eventTarget: {
        id: uuid(),
        title: 'Día programado',
        color: colors.green['700'],
        desc: 'Programación del día de trabajo.',
        start: new Date(arg.dateStr),
        end: new Date(fecha.setMinutes(fecha.getMinutes() + 30)),
        personName: []
      },
      personName: []
    });

   
  }


  console.log(events);
  return (
    <Page
      className={classes.root}
      title="Calendar"
    >
      {/* <Toolbar
        date={moment('2020-03-01').toDate()}
        onDateNext={handleDateNext}
        onDatePrev={handleDatePrev}
        onDateToday={handleDateToday}
        onEventAdd={handleEventNew}
        onViewChange={handleViewChange}
        view={view}
      /> */}
      <Card className={classes.card}>
        <CardContent>
          <FullCalendar
            //allDayMaintainDuration
            minTime= {'09:00'}
            maxTime= {'19:00'}
            allDay={false}
            defaultDate={moment('2020-03-01').toDate()}
            defaultView={view}
            droppable
            editable
            eventClick={handleEventClick}
            eventResizableFromStart
            events={events}
            header={true}
            height={800}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
              timelinePlugin
            ]}
            ref={calendarRef}
            rerenderDelay={10}
            selectable
            weekends
            dateClick={handleAddClick}
          />
        </CardContent>
      </Card>
      <Modal
        onClose={handleModalClose}
        open={eventModal.open}
      >
        <AddEditEvent
          washers={washers}
          washerName={eventModal.personName}
          eventTarget={eventModal.eventTarget}
          event={eventModal.event}
          onAdd={handleEventAdd}
          onCancel={handleModalClose}
          onDelete={handleEventDelete}
          onEdit={handleEventEdit}
        />
      </Modal>
    </Page>
  );
};

export default Calendar;
