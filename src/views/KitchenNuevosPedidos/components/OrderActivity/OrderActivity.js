import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import BotonPedido from '../BotonPedido';
import Typography from '@material-ui/core/Typography';
import tiempo from 'utils/tiempo';
import DeliveryStatus from 'utils/DeliveryStatus';
import moment from 'moment';

const fecha = tiempo;
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1480,
    height: 150,
    "&:hover": {
      backgroundColor: '#b2ebf2'
    }
  },
  hover: {
    "&:hover": {
      backgroundColor: 'rgb(7, 177, 77, 0.42)'
    }
  },
  seleccionado: {
    backgroundColor: '#b2ebf2'
  },
  media: {
    height: 140,
  },
  MuiTypography2: {
    marginBottom: 16,
  },
  tipo3: {
    marginBottom: 6,
  },
  statsItem: {
    padding: theme.spacing(3),
    flexGrow: 1,
    '&:first-of-type': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  },
  statsItem1: {
    padding: theme.spacing(1),
    flexGrow: 1,
    '&:first-of-type': {
      //  borderRight: `1px solid ${theme.palette.divider}`
    },
    margin: {
      margin: theme.spacing(1),
    },
  },
  statsItem2: {
    padding: theme.spacing(1),
    flexGrow: 1,
    '&:first-of-type': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  },
  statsItem3: {
    padding: theme.spacing(1),
    flexGrow: 1,
    '&:first-of-type': {
      borderRight: `1px solid ${theme.palette.divider}`
    },
    marginRight: 30,
  },
  boton: {
    padding: theme.spacing(1),
    flexGrow: 1,
    '&:first-of-type': {
      borderRight: `1px solid ${theme.palette.divider}`
    },
    align: 'right'
  },
  statsContainer: {
    display: 'flex'
  },
  statsItem2: {
    padding: theme.spacing(1),
    flexGrow: 1,
    '&:first-of-type': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  },
}));

const OrderActivity = props => {
  const classes = useStyles();
  const { row, changeColor,openDetalle } = props;
  
  return (
    <Card className={classes.root}>
      <CardActionArea id={row.id} onClick={(e) => changeColor(e)}>
        <div className={classes.statsContainer} id={row.id} onClick={(e) => changeColor(e)}>
          <div className={classes.statsItem1}>
            <Typography
              style={{ width: "200px" }}
              align="left"
              variant="h3"
            >
              {/* {fecha.fecha(row.date)} */}
            </Typography>
          </div>
          <div className={classes.statsItem3}>
            <Typography
              align="center"
              variant="h3"
            >
              {/* ${row.amount} */}
            </Typography>
          </div>
        </div>
        <div className={classes.statsContainer} id={row.id} onClick={(e) => changeColor(e)}>
          <div className={classes.statsItem1}>
            <Typography
              style={{ width: "200px" }}
              align="left"
              variant="h2"
            >
              {row.userName}
            </Typography>
          </div>
          <div className={classes.statsItem1}>
          <Typography
              style={{ width: "1150px" }}
              align="right"
              variant="h2" className={classes.tipo3} color="textSecondary" component="p"
            >
              Hora Recolección
            </Typography>
          </div>
        </div>
        <div className={classes.statsContainer} id={row.id} onClick={(e) => changeColor(e)}>
          <div className={classes.statsItem3}>
            <Typography
              style={{ width: "200px" }}
              align="left"
              variant="h2"
            >
              #{row.id}
          </Typography>
          </div>
          <div className={classes.statsItem3}>
            <Typography
              align="right"
              variant="h1"
            >
              {tiempo.hora(row.date,15)}
            </Typography>
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default OrderActivity;