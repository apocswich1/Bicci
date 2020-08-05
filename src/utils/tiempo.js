import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
const tiempo = {
    fechaEs: (fecha)=>{
        return new Date(fecha.seconds * 1000).toLocaleDateString("es-ES");
    },
    fechaEn: (fecha)=>{
        return new Date(fecha.seconds * 1000).toLocaleDateString("en-US");
    },
    fechayhora: (fecha)=>{
        return moment(new Date(fecha.seconds * 1000)).format('YYYY-MM-DD hh:mm:ss');
    },
    fecha: (fecha)=>{
        return moment(new Date(fecha.seconds * 1000)).format('DD/MM/YYYY');
    },
    fechaLarga: (fecha)=>{
        return moment(new Date(fecha.seconds * 1000)).format('DD MMMM YYYY hh:mm:ss');
    },
    fechaCorta: (fecha)=>{
        return moment(new Date(fecha.seconds * 1000)).format('DD MMMM YYYY');
    },
    hora: (fecha, minutos)=>{
        return moment(new Date(fecha.seconds * 1000)).add(minutos,'minutes').format('hh:mm');
    },
    horaSeconds: (fecha)=>{
        return moment(new Date(fecha._seconds * 1000)).format('hh:mm');
    },
    horaCorta: (fecha)=>{
        return moment(new Date(fecha._seconds * 1000)).format('hh:mm:ss');
    },
    time: (fecha)=>{
        return moment(new Date(fecha.seconds * 1000)).format('LTS');
    }
}

export default tiempo;