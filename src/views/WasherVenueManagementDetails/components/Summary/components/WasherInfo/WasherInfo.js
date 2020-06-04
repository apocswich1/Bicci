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
import { WasherEdit } from './components';
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

const WasherInfo = props => {
  const { washer, className, actualizar, ...rest } = props;

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
      <CardHeader title="Prowasher info" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
          <TableRow>
              <TableCell>
                <div style={{width:"150px", height:"150px",borderRadius:"50%"}}>
                <img src={washer.avatar ? washer.avatar : '/images/perfil.png'} style={{borderRadius:"50%"}} width="180px"/>
                </div>
              </TableCell>
              <TableCell>
              <TableRow>
              <TableCell>{t('translate')}: {washer.name}</TableCell>
              </TableRow>
              <TableRow>
              <TableCell>{t('email')}: {washer.email}</TableCell>
              </TableRow>
              </TableCell>
            </TableRow>  
          <TableRow>
              <TableCell>id</TableCell>
              <TableCell>{washer.id}</TableCell>
            </TableRow>
          {/* <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{washer.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>
                {washer.email}
                <div>
                  <Label
                    color={
                      washer.verified ? colors.green[600] : colors.orange[600]
                    }
                  >
                    {washer.verified
                      ? 'Email verified'
                      : 'Email not verified'}
                  </Label>
                </div>
              </TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell>{t('dni')}</TableCell>
              <TableCell>{washer.dni}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t('phone')}</TableCell>
              <TableCell>{washer.phone ? '+56 9 '+washer.phone : 'undefined'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t('isactive')}</TableCell>
              <TableCell>{new String(washer.active != undefined ? washer.active : true)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t('deleted')}</TableCell>
              <TableCell>{new String(washer.deleted != undefined ? washer.deleted : false)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t('rol')}</TableCell>
              <TableCell>{new String(washer.rol != undefined ? washer.rol : 'Washer')}</TableCell>
            </TableRow>
            {/*<TableRow>
              <TableCell>State/Region</TableCell>
              <TableCell>{washer.state}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Country</TableCell>
              <TableCell>{washer.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 1</TableCell>
              <TableCell>{washer.address1}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Address 2</TableCell>
              <TableCell>{washer.address2}</TableCell>
            </TableRow>*/}
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          {t('edit')}
        </Button>
        <Button>
          <LockOpenIcon className={classes.buttonIcon} />
          {t('reset')} &amp; {t('send password')}
        </Button>
        <Button>
          <PersonIcon className={classes.buttonIcon} />
          {t('login as')} Washer
        </Button>
      </CardActions>
      <WasherEdit
        washer={washer}
        actualizar={actualizar}
        onClose={handleEditClose}
        open={openEdit}
      />
    </Card>
  );
};

WasherInfo.propTypes = {
  className: PropTypes.string,
  washer: PropTypes.object.isRequired
};

export default WasherInfo;