import React, { Fragment, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Drawer, Divider, Paper, Avatar, Typography } from '@material-ui/core';
import { Hidden } from '@material-ui/core';
import useRouter from 'utils/useRouter';
import { Navigation } from 'components';
import navigationConfig from './navigationConfig';
import navigationConfigPlace from './navigationConfigPlace';
import NavBarVertical from './NavBarVertical';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    overflowY: 'auto'
  },
  content: {
    padding: theme.spacing(2)
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  },
  divider: {
    marginTop: theme.spacing(2)
  },
  navigation: {
    marginTop: theme.spacing(2)
  }
}));

const NavBar = props => {
  const { openMobile, onMobileClose, className, ...rest } = props;

  const classes = useStyles();
  const router = useRouter();
  const session = useSelector(state => state.session);


  useEffect(() => {
    if (openMobile) {
      onMobileClose && onMobileClose();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.location.pathname]);

  const navbarContent = (
    <div className={classes.content}>
      <div className={classes.profile}>
        <Avatar
          alt="Person"
          className={classes.avatar}
          component={RouterLink}
          src={session.user.avatar}
        //  to="/profile/1/timeline"
        />
        <Typography
          className={classes.name}
          variant="h4"
        >
          {session.user.username} {/*session.user.last_name*/}
        </Typography>
        <Typography variant="body2">{session.user.bio}</Typography>
      </div>
      <Divider className={classes.divider} />
      <nav className={classes.navigation}>
        {session.user.role=="ADMIN" && (
          navigationConfig.map(list => (
            <Navigation
              component="div"
              key={list.title}
              pages={list.pages}
              title={list.title}
            />
          ))
        )}
        {session.user.role=="Administrator" && (
          navigationConfigPlace.map(list => (
            <Navigation
              component="div"
              key={list.title}
              pages={list.pages}
              title={list.title}
            />
          ))
        )}
      </nav>
    </div>
  );

  return (
    <Fragment>
      {/* <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          <div
            {...rest}
            className={clsx(classes.root, className)}
          >
            {navbarContent}
          </div>
        </Drawer>
      </Hidden> */}
      {/* <Hidden mdDown> */}
        <Paper
          {...rest}
          className={clsx(classes.root, className)}
          elevation={1}
          square
        >
           <NavBarVertical icono={1} marcado={props.location.pathname == "/dashboards/nuevos" ? true : false} titulo="Nuevos Pedidos" link={`/dashboards/nuevos`}/>
           <NavBarVertical icono={6} marcado={props.location.pathname == "/dashboards/programados" ? true : false} titulo="Programados" link={`/dashboards/programados`}/>
           <NavBarVertical icono={2} marcado={props.location.pathname == "/dashboards/encocina" ? true : false} titulo="En Cocina" link={`/dashboards/encocina`}/>
           <NavBarVertical icono={3} marcado={props.location.pathname == "/dashboards/entrega" ? true : false} titulo="Entrega" link={`/dashboards/entrega`}/>
           <NavBarVertical icono={4} marcado={props.location.pathname == "/dashboards/historial" ? true : false} titulo="Historial" link={`/dashboards/historial`}/>
           <NavBarVertical icono={5} marcado={props.location.pathname == "/dashboards/productos" ? true : false} titulo="Productos" link={`/dashboards/productos`}/>
           {/* {navbarContent} */}
        </Paper>
      {/* </Hidden> */}
    </Fragment>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default withRouter(NavBar);
