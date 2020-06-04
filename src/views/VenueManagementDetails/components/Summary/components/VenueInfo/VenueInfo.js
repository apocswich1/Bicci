import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
  colors
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import PersonIcon from '@material-ui/icons/PersonOutline';
import { Label } from 'components';
import { VenueEdit } from './components';
import translate from 'translate';

const t = translate;
const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  actions: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > * + *': {
      marginLeft: 0
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

const VenueInfo = props => {
  const { venue, className, actualizar, idfranchise, ...rest } = props;

  const classes = useStyles();

  const [openEdit, setOpenEdit] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  return (
   
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title={t("Venue info")} />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
          <TableRow>
              <TableCell>id</TableCell>
              <TableCell>{venue.id}</TableCell>
            </TableRow>
          <TableRow>
              <TableCell>{t("name")}</TableCell>
              <TableCell>{venue.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("email")}</TableCell>
              <TableCell>{venue.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("phone")}</TableCell>
              <TableCell>{venue.phone ? '+56 9 '+venue.phone : "Undefined"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("address")}</TableCell>
              <TableCell>{venue.address ? venue.address : "Undefined"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Latitude")}</TableCell>
              <TableCell>{venue.coordinates._latitude ? venue.coordinates._latitude : "Undefined"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("Longitude")}</TableCell>
              <TableCell>{venue.coordinates._longitude ? venue.coordinates._longitude : "Undefined"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          {t("edit")}
        </Button>
      {/**   <Button>
          <LockOpenIcon className={classes.buttonIcon} />
          Reset &amp; Send Password
        </Button>
        <Button>
          <PersonIcon className={classes.buttonIcon} />
          Login as Venue
        </Button>*/}
      </CardActions>
      <VenueEdit
        venue={venue}
        actualizar={actualizar}
        onClose={handleEditClose}
        open={openEdit}
        idfranchise={idfranchise}
      />
    </Card>
  );
};

VenueInfo.propTypes = {
  className: PropTypes.string,
  venue: PropTypes.object.isRequired
};

export default VenueInfo;
