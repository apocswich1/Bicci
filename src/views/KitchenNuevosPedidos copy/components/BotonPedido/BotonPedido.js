import React, { useState } from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, red, blue, purple, grey } from '@material-ui/core/colors';
import firebase from 'utils/firebase';

const BootstrapButton = withStyles({
  root: {
    marginRight: 30,
    float: 'right',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ColorButtonIn = withStyles((theme) => ({
  root: {
    fontSize:12,
    width:150,
    marginRight: 20,
    float: 'right',
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[300],
    '&:hover': {
      backgroundColor: grey[500],
    },
  },
}))(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    fontSize:12,
    width:150,
    marginRight: 20,
    float: 'right',
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
}))(Button);

const ColorButtonRec = withStyles((theme) => ({
  root: {
    fontSize:12,
    width:150,
    marginRight: 20,
    float: 'right',
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    //margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: grey,
  },
});

const BotonPedido = props => {
  const classes = useStyles();
  const [estado, setEstado] = React.useState(false);
  const aceptarPedido = async event => {
    try {
      await firebase.firestore().collection('orders').doc(props.id).set({ status: 2 }, { merge: true });
      setEstado(true);
      //console.log(`Pedido ${props.id} tomado con exito`);
    } catch (error) {
      console.log(`Ocurrio un error al aprobar el pedido ${props.id}`);
    }
    event.stopPropagation();
  }

  const rechazarPedido = async event => {
    try {
      await firebase.firestore().collection('orders').doc(props.id).set({ status: -1 }, { merge: true });
      setEstado(true);
      //console.log(`Pedido ${props.id} rechazado con exito`);
    } catch (error) {
      console.log(`Ocurrio un error al rechazar el pedido ${props.id}`);
    }
    event.stopPropagation();
  }

  return (
    <div>
      {(props.status == 1 && estado === false ? (
        <React.Fragment>
          <ColorButton onClick={(e) => aceptarPedido(e)} variant="contained" color="primary" align="right" disableRipple className={classes.margin}>
            Aceptar Pedido
      </ColorButton>
          <ColorButtonRec onClick={(e) => rechazarPedido(e)} variant="contained" color="primary" align="right" disableRipple className={classes.margin}>
            Rechazar Pedido
      </ColorButtonRec>
        </React.Fragment>
      ) : (
          <ColorButtonIn variant="contained" color="primary" align="right" disableRipple className={classes.margin}>
              Pedido gestionado
      </ColorButtonIn>
        ))}

    </div>
  );
}

export default BotonPedido;