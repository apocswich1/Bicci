/* eslint-disable react/display-name */
import React, { useState, forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import uuid from 'uuid/v1';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  FormControlLabel,
  Switch,
  colors
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%'
  },
  field: {
    marginTop: theme.spacing(3)
  },
  cancelButton: {
    marginLeft: 'auto'
  },
  confirmButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    //maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const getStyles = (name, personName, theme) => {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AddEditEvent = forwardRef((props, ref) => {
  const {
    eventTarget,
    event,
    onDelete,
    onCancel,
    onAdd,
    onEdit,
    washerName,
    washer,
    className,
    washers,
    ...rest
  } = props;

  console.log(washers);
  const classes = useStyles();

  const defaultEvent2 = {
    title: 'Event title',
    desc: 'Event description',
    allDay: false,
    start: moment().toDate(),
    end: moment().toDate()
  };
console.log(eventTarget);
console.log(washerName);
  const defaultEvent = eventTarget;
  const [values, setValues] = useState(event || defaultEvent);
  const mode = event ? 'edit' : 'add';
  const theme = useTheme();
  const [personName, setPersonName] = React.useState(event ? event.personName : washerName);
  const [washerID, setWasherID] = React.useState(event ? event.personID : washer);
  const handleChange = event => {
    console.log(event);
    console.log(event._targetInst.memoizedProps.children[0][0]);
    console.log(event._targetInst.memoizedProps);
    setPersonName(event.target.value);
    //setPersonName(event.target.value);
    setWasherID(event._targetInst.memoizedProps.children[0][0]);
    // setPersonName([{
    //   'name':event._targetInst.memoizedProps.children[0][0],
    //   'id':event._targetInst.memoizedProps['data-value']}]);
  };

  const handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  const handleFieldChange = e => {
    e.persist();
    setValues(values => ({
      ...values,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
    }));
  };

  const handleDelete = () => {
    onDelete && onDelete(event);
  };

  const handleAdd = () => {
    if (!values.title || !values.desc) {
      return;
    }
    console.log({ ...values});
    onAdd({ ...values, id: uuid(), personName: personName });
  };

  const handleEdit = () => {
    console.log(values);
    if (!values.title || !values.desc) {
      return;
    }

    onEdit({...values, personName: personName, washerID: washerID });
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
      ref={ref}
    >
      <form>
        <CardContent>
          <Typography
            align="center"
            gutterBottom
            variant="h3"
          >
            {mode === 'add' ? 'Add Event' : 'Edit Event'}
          </Typography>
          <TextField
            className={classes.field}
            fullWidth
            label="Title"
            name="title"
            onChange={handleFieldChange}
            value={values.title}
            variant="outlined"
          />
          <TextField
            className={classes.field}
            fullWidth
            label="Description"
            name="desc"
            onChange={handleFieldChange}
            value={values.desc}
            variant="outlined"
          />
          {/* <FormControlLabel
            className={classes.field}
            control={
              <Switch
                checked={values.allDay}
                name="allDay"
                onChange={handleFieldChange}
              />
            }
            label="All day"
          /> */}
          <TextField
            className={classes.field}
            defaultValue={moment(values.start).format('YYYY-MM-DDThh:mm:ss')}
            fullWidth
            label="Start date"
            name="start"
            onChange={handleFieldChange}
            type="datetime-local"
            variant="outlined"
          />
          <TextField
            className={classes.field}
            defaultValue={moment(values.end).subtract(30, 'minutes').format('YYYY-MM-DDThh:mm:ss')}
            disabled={values.allDay}
            fullWidth
            label="End date"
            name="end"
            onChange={handleFieldChange}
            type="datetime-local"
            variant="outlined"
          />
          <FormControl className={classes.formControl}>
        
        <Select
        fullWidth
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        key={value} label={value}
        onDelete={handleDelete}
      />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {washers.map(name => (
            <MenuItem key={name.id} value={name.id} style={getStyles(name, personName, theme)}>
              {name.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        </CardContent>
        <Divider />
        <CardActions>
          <IconButton
            edge="start"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
          <Button
            className={classes.cancelButton}
            onClick={onCancel}
            variant="contained"
          >
            Cancel
          </Button>
          {mode === 'add' ? (
            <Button
              className={classes.confirmButton}
              onClick={handleAdd}
              variant="contained"
            >
              Add
            </Button>
          ) : (
            <Button
              className={classes.confirmButton}
              onClick={handleEdit}
              variant="contained"
            >
              Save
            </Button>
          )}
        </CardActions>
      </form>
    </Card>
  );
});

AddEditEvent.propTypes = {
  className: PropTypes.string,
  event: PropTypes.object,
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func
};

export default AddEditEvent;
