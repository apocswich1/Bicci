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
import { AvatarEdit } from './components';
import translate from 'translate';
import firebase from 'utils/firebase';

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

const Avatar = props => {
  const { product, className, actualizar, ...rest } = props;

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
      <CardHeader title={"Thumbnail"} />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                {product.thumbnail ? (
                  <img width="450" height="250" src={product.thumbnail} />
                ) : (
                    "No Disponible"
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
      {(!product.approved && (
        <Button onClick={handleEditOpen}>
        <EditIcon className={classes.buttonIcon} />
        {t("edit")}
      </Button>
      ))}
        {/* <Button>
          <PersonIcon className={classes.buttonIcon} />
          Login as Restaurant
        </Button> */}
      </CardActions>
      <AvatarEdit
        product={product}
        actualizar={actualizar}
        onClose={handleEditClose}
        open={openEdit}
      />
    </Card>
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default Avatar;
