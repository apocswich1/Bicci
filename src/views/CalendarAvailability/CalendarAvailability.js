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
import firebase from 'utils/firebase';
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

const CalendarAvailability = (props) => {
  const classes = useStyles();
  const calendarRef = useRef(null);
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
  const [view, setView] = useState(mobileDevice ? 'timeGridWeek' : 'timeGridWeek');
  const [date, setDate] = useState(moment().toDate());
  //const [date, setDate] = useState(moment('2020-02-01').toDate());
  const [venue, setVenue] = useState([]);
  const [events, setEvents] = useState([]);
  const [washers, setWashers] = useState([]);
  const [eventModal, setEventModal] = useState({
    open: false,
    event: null
  });

  useEffect(() => {
    let mounted = true;

    const fetchData = async () =>{
      try {
        let horasData = [];

        const allSucursal = await firebase.firestore().collection('franchises').doc(props.idfranchise)
        .collection("venues").doc(props.venueID).collection('availabilites').get(); 

        const sucursal = allSucursal.docs.map(item => item.data());
        
        for(var i = 0; i < sucursal.length; i++){
          const venues = await firebase.firestore().collection('franchises').doc(props.idfranchise)
        .collection("venues").doc(props.venueID).collection('availabilites').doc(sucursal[i].id)
        .collection("hours").get();
          for(var j = 0; j < venues.docs.length; j++){
            const item = venues.docs[j];

            //console.log(sucursal[i].id+' '+venues.docs[j].id+':00');
            var fecha = new String(sucursal[i].id+' '+venues.docs[j].id+':00');
           // console.log(new Date(fecha));
           console.log(item.data().timestamp.toDate());
         //  console.log(moment(item.data().timestamp).toDate().add(30,'minutes'));
            horasData.push({
              id: item.data().name,
              title: "Disponibilidad",
              color: "#353535",
              //start: moment('2020-02-01 09:00:00').toDate(),
              start: item.data().timestamp.toDate(),
              //end: moment('2020-02-01 09:30:00').toDate(),
              end: item.data().timestamp.toDate(),
              personName: [],
              desc: "Disponibilidad de trabajo"
            });
        }
      }

      setEvents(horasData);  
        console.log(sucursal);
        console.log(horasData);
      } catch (error) {
        console.log(error);
        console.log('No pudo completar la operación');
      }
    }

    fetchData();

    const fetchEvents = () => {
      if (mounted) {

        const fetchWashers = () => {
          fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/listWashersAdmin', {
            method: 'get',
            mode: 'cors',
          }).then(function (respuesta) {
            respuesta.json().then(body => {
              setWashers(body.usuarios);
            //  console.log(body.usuarios);
            });
          }).catch(function (err) {
            // Error :(
          });
        };

        fetchWashers();

        //  setEvents([{
        //    id: uuid(),
        //    title: "Evento Nuevo",
        //    color: "#000000",
        //    start: moment('2020-02-01 08:00:00').toDate(),
        //    end: moment('2020-02-01 08:30:00').toDate(),
        //    personName: ['Elvis Hernandez', 'Ernesto Hernandez'],
        //    desc: "asdasdasd"
        //  },{
        //   id: "werwerwer",
        //   title: "Evento Nuevo",
        //   color: "#000000",
        //   start: moment('2020-02-01 08:00:00').toDate(),
        //   end: moment('2020-02-01 08:30:00').toDate(),
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

     //   sentencias;

        break;

    }
    let name = inicio + "-" + hora[0] + ":" + hora[1];
    let hour = hora[0] + ":" + hora[1];

    let data = {
      uid:"FkP4UL1iNcgHxIF5ePzL",
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
      <Toolbar
        date={date}
        onDateNext={handleDateNext}
        onDatePrev={handleDatePrev}
        onDateToday={handleDateToday}
        onEventAdd={handleEventNew}
        onViewChange={handleViewChange}
        view={view}
      />
      <Card className={classes.card}>
        <CardContent>
          <FullCalendar
            //allDayMaintainDuration
            minTime= {'09:00'}
            maxTime= {'19:00'}
            defaultDate={date}
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

export default CalendarAvailability;
