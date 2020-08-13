import React, { useState } from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
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
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const fecha = tiempo;
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 650,
    height: 60,
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
  const [state, setState] = React.useState({checkedA: false,checkedB: true});

  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#52d869',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

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
              style={{ width: "400px",fontSize:"22px" }}
              align="left"
              variant="h2"
            >
              {row.name}
            </Typography>
          </div>
          <div className={classes.statsItem1}>
          <Typography
              style={{ width: "200px",marginTop:"-10px" }}
              align="right"
              variant="h2" className={classes.tipo3} color="textSecondary" component="p"
            >
              <FormControlLabel
        control={<IOSSwitch checked={!state.checkedA} onChange={""} name="checkedA" />}
        label=""
      />
            </Typography>
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default OrderActivity;