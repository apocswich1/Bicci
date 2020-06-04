import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { lighten, withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Card, CardHeader,Grid,TextField,TextareaAutosize, CardContent } from '@material-ui/core';
import { Page } from 'components';
import {
  Header,
  AboutAuthor,
  AboutProject,
  Preferences,
  ProjectCover,
  ProjectDetails
} from './components';
import translate from 'translate';
import config from 'config';
import { useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import AuthGuard from '../../../src/components/AuthGuard/AuthGuard';
import LinearProgress from '@material-ui/core/LinearProgress';

const service = config.servicio;

const t = translate;

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3, 3, 6, 3)
  },
  aboutAuthor: {
    marginTop: theme.spacing(3)
  },
  aboutProject: {
    marginTop: theme.spacing(3)
  },
  projectCover: {
    marginTop: theme.spacing(3)
  },
  projectDetails: {
    marginTop: theme.spacing(3)
  },
  preferences: {
    marginTop: theme.spacing(3)
  },
  actions: {
    marginTop: theme.spacing(3)
  }
}));

const ProjectCreate = () => {

  const [formState, setFormState] = useState({});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [vertical, setVertical] = React.useState('top');
  const [horizontal, setHorizontal] = React.useState('center');
  const [typeMessage, setTypeMessage] = React.useState('');
  const classes = useStyles();

  const session = useSelector(state => state.session);
  console.log(session);
  AuthGuard(session);

  const ColorLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: '#b2dfdb',
    },
    barColorPrimary: {
      backgroundColor: '#00695c',
    },
  })(LinearProgress);

const validateForm = () => {
  let titleError = "";
  let titleErrorMessage = "";
  let messageError = "";
  let messageErrorMessage = "";
  
  if(!formState.title){
    titleError = "Debe introducir el titulo";
    titleErrorMessage = "Debe introducir el titulo";
  }

  if(!formState.message){
    messageError = "Debe introducir un mensaje";
    messageErrorMessage = "Debe introducir un mensaje";
  }

  if(messageError || titleError){
    setFormState(formState => ({
      ...formState,
      titleError,titleErrorMessage,messageError,messageErrorMessage
    }));
    return false;
  }
  return true;
}


const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const handleFieldChange = event => {
  event.persist();
  setFormState(formState => ({
    ...formState,
    [event.target.name]:
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value,
  }));
};

const handleSend = (event) => {
  event.preventDefault();
  console.log(formState);
  let msg = "Comisión actualizada con exito";
  const isValid = validateForm();
  if(isValid){
    setLoading(true);
    let params = {
      "title": formState.title,
      "message": formState.message
    }

    fetch(service+'sendNotification', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify(params)
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body);
          setFormState(formState => ({
            ...formState,
            title:'',
            message:''
          }));
          setMessage("Mensaje enviado exitosamente");
          setTypeMessage('success');
          setLoading(false);
          setOpen(true);
        //  actualizar(msg,body);
          });
      }).catch(function (err) {
        setMessage("Ocurrio un error al intentar enviar el mensaje");
        setTypeMessage('warning');
        console.log(err);
        setLoading(false);
        setOpen(true);
        setFormState(formState => ({
          ...formState,
          title:'',
          message:''
        }));
      });

  //  // onClose();
  //   setFormState(formState => ({}));
  }

}

  return (
    <Page
      className={classes.root}
      title={t("Create Message")}
    >
       <Snackbar
        autoHideDuration={6000}
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        open={open}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={typeMessage}>
          {message}
        </Alert>
        </Snackbar>
      <Header />
      <Card
      style={{height:"350px", width:"900px", marginTop:"50px"}}
    >
        {loading && (
      <ColorLinearProgress className={classes.margin} />
      )}
      <CardHeader title={t("Message detail")}/>
      <CardContent style={{height:"350px", width:"900px"}}>
      <Grid
              className={classes.container}
              container
              spacing={3}
            >
             
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("Titulo")}
                  name="title"
                  onChange={handleFieldChange}
                  value={formState.title}
                  variant="outlined"
                  error={formState.titleError}
                  helperText={formState.titleErrorMessage}
                  placeholder="Title..."
                  disabled={loading}
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("Mensaje")}
                  name="message"
                  onChange={handleFieldChange}
                  value={formState.message}
                  variant="outlined"
                  error={formState.messageError}
                  helperText={formState.messageErrorMessage}
                  multiline
                  rowsMax={5}
                  aria-label="maximum height"
                  placeholder="Message..."
                  disabled={loading}
                />
              </Grid>
             
            </Grid>
      </CardContent>
    </Card>
      {/* <AboutAuthor className={classes.aboutAuthor} />
      <AboutProject className={classes.aboutProject} />
      <ProjectCover className={classes.projectCover} /> */}
      {/* <ProjectDetails className={classes.projectDetails} handleFieldChange={handleFieldChange} formState={formState}/> */}
      {/* <Preferences className={classes.preferences} /> */}
      <div className={classes.actions}>
        <Button
          color="primary"
          variant="contained"
          onClick={handleSend}
          disabled={loading}
        >
          {t("Create Message")}
        </Button>
      </div>
    </Page>
  );
};

export default ProjectCreate;
