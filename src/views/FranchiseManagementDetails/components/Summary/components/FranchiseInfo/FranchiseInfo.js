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
import firebase from 'utils/firebase';
import { Label } from 'components';
import { FranchiseEdit } from './components';
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

const FranchiseInfo = props => {
  const { franchise, className, actualizar, ...rest } = props;

  const classes = useStyles();

  const [openEdit, setOpenEdit] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const handleReset = () => {
    var auth = firebase.auth();
    var emailAddress = franchise.email;

    auth.sendPasswordResetEmail(emailAddress).then(function () {
      // Email sent.
      let msg = "Se ha enviado un correo de restablecimiento de contraseña!";
      let body = {
        code: 200,
        message: "No se pudo restablecer la contraseña,por favor consulte con e administrador!"
      };
      actualizar(msg, body);
      console.log("Email enviado...")
    }).catch(function (error) {
      // An error happened.
      let msg = "Se ha enviado un correo de restablecimiento de contraseña!";
      let body = {
        code: 200,
        message: "No se pudo restablecer la contraseña,por favor consulte con e administrador!"
      };
      actualizar(msg, body);
      console.log(error);
    });

  }

    return (

      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardHeader title="Franchise info" />
        <Divider />
        <CardContent className={classes.content}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>{franchise.id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t("name")}</TableCell>
                <TableCell>{franchise.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Legal {t("name")}</TableCell>
                <TableCell>{franchise.legalName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fantasy {t("name")}</TableCell>
                <TableCell>{franchise.fantasyName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t("email")}</TableCell>
                <TableCell>
                  {franchise.email}
                  <div>
                    <Label
                      color={
                        franchise.verified ? colors.green[600] : colors.orange[600]
                      }
                    >
                      {franchise.verified
                        ? 'Email verified'
                        : 'Email not verified'}
                    </Label>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t("business")} {t("activity")}</TableCell>
                <TableCell>{franchise.businessActivity ? franchise.businessActivity : "Undefined"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t("business")} {t("name")}</TableCell>
                <TableCell>{franchise.businessName ? franchise.businessName : "Undefined"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t("phone")}</TableCell>
                <TableCell>{franchise.phone ? '+56 9 ' + franchise.phone : "Undefined"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t("dni")}</TableCell>
                <TableCell>{franchise.dni ? franchise.dni : "Undefined"}</TableCell>
              </TableRow>
              {/*} <TableRow>
              <TableCell>Latitude</TableCell>
              <TableCell>{franchise.coordinates != undefined ? franchise.coordinates._latitude : 'No definido'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Longitud</TableCell>
              <TableCell>{franchise.coordinates != undefined ? franchise.coordinates._longitude : 'No definido'}</TableCell>
                    </TableRow>*/}
            </TableBody>
          </Table>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button onClick={handleEditOpen}>
            <EditIcon className={classes.buttonIcon} />
            {t("edit")}
        </Button>
           <Button onClick={handleReset}>
          <LockOpenIcon className={classes.buttonIcon} />
          {t("reset")} &amp; {t("send password")}
        </Button>
        {/*<Button>
          <PersonIcon className={classes.buttonIcon} />
          Login as Franchise
                    </Button>*/}
        </CardActions>
        <FranchiseEdit
          franchise={franchise}
          actualizar={actualizar}
          onClose={handleEditClose}
          open={openEdit}
        />
      </Card>
    );
  };

  FranchiseInfo.propTypes = {
    className: PropTypes.string,
    franchise: PropTypes.object.isRequired
  };

  export default FranchiseInfo;
