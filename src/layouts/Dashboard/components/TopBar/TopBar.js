/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch, connect, useSelector } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/styles';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Hidden,
  Input,
  colors,
  Popper,
  Paper,
  List,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  ClickAwayListener
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import PhoneIcon from '@material-ui/icons/Phone';
import LockIcon from '@material-ui/icons/LockOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import firebase from 'utils/firebase';
import axios from 'utils/axios';
import useRouter from 'utils/useRouter';
import { PricingModal, NotificationsPopover } from 'components';
import { logout } from 'actions';
import moment from 'moment';
import translate from 'translate';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Help from '../Help';
import { withRouter } from 'react-router-dom';

const t = translate;
const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  search: {
    backgroundColor: 'rgba(255,255,255, 0.1)',
    borderRadius: 4,
    flexBasis: 300,
    height: 36,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: 'inherit'
  },
  searchInput: {
    flexGrow: 1,
    color: 'inherit',
    '& input::placeholder': {
      opacity: 1,
      color: 'inherit'
    }
  },
  searchPopper: {
    zIndex: theme.zIndex.appBar + 100
  },
  searchPopperContent: {
    marginTop: theme.spacing(1)
  },
  trialButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  },
  trialIcon: {
    marginRight: theme.spacing(1)
  },
  notificationsButton: {
    marginLeft: theme.spacing(1)
  },
  notificationsBadge: {
    backgroundColor: colors.orange[600]
  },
  logoutButton: {
    marginLeft: theme.spacing(1)
  },
  logoutIcon: {
    marginRight: theme.spacing(1)
  }
}));

const TopBar = props => {
  const { onOpenNavBarMobile, className, ...rest } = props;

  const classes = useStyles();
  const { history } = useRouter();
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const notificationsRef = useRef(null);
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const [openSearchPopover, setOpenSearchPopover] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [open, setOpen] = useState(false);
  const [newNotifications, setNewNotifications] = useState('');
  const [state, setState] = React.useState({ checkedA: false, checkedB: true });
  const session = useSelector(state => state.session);

  useEffect(() => {
    let mounted = true;

    let doc = firebase.firestore().collection('users');
    const observer = doc.onSnapshot(docSnapshot => {
      // console.log(`Received doc snapshot: ${docSnapshot}`);
      // console.log(docSnapshot);
      let data = [];
      docSnapshot.docChanges().forEach(function (change) {
        if (change.type === "added") {
          //   console.log("New city: ", change.doc.data());
          data = [{
            id: "uuid()",
            title: 'New user ' + change.doc.data().email + ' is registered',
            type: 'user',
            created_at: moment().subtract(1, 'day')
          }];
        }
        if (change.type === "modified") {
          //     console.log("Modified city: ", change.doc.data());
          data = [{
            id: "uuid()",
            title: 'New user ' + change.doc.data().email + ' is modified',
            type: 'user',
            created_at: moment().subtract(1, 'day')
          }];
        }
        if (change.type === "removed") {
          //   console.log("Removed city: ", change.doc.data());
          data = [{
            id: "uuid()",
            title: 'New user ' + change.doc.data().email + ' is removed',
            type: 'user',
            created_at: moment().subtract(1, 'day')
          }];
        }
      });
      /* notifications: [
         {
           id: uuid(),
           title: 'New order has been received',
           type: 'order',
           created_at: moment().subtract(2, 'hours')
         },
         {
           id: uuid(),
           title: 'New user is registered',
           type: 'user',
           created_at: moment().subtract(1, 'day')
         },
         {
           id: uuid(),
           title: 'Project has been approved',
           type: 'project',
           created_at: moment().subtract(3, 'days')
         },
         {
           id: uuid(),
           title: 'New feature has been added',
           type: 'feature',
           created_at: moment().subtract(7, 'days')
         }
       ]*/
      setNotifications(data);
      setNewNotifications(1);
      // ...
    }, err => {
      console.log(`Encountered error: ${err}`);
    });


    const fetchNotifications = () => {
      axios.get('/api/account/notifications').then(response => {
        if (mounted) {
          setNotifications(response.data.notifications);
        }
      });
    };

    fetchNotifications();

    return () => {
      mounted = false;
    };
  }, []);

  const handleChange = async (event) => {
    let estado = !event.target.checked;
    setState({ ...state, [event.target.name]: !event.target.checked });
    // let ref = await firebase.firestore().collection('restaurants').where('starredBy','==',session.user.id).get();
    // let result = await ref.docs.map(item => {return item.data()});
    // await firebase.firestore().collection('restaurants').doc(result[0].id).set({offline : estado},{merge: true});
    console.log(estado ? "Modo offline" : "Modo Online");
  };

  const handleOpen = event => {
    setOpen(true);
  };

  const handleLogout = () => {
    history.push('/auth/login');
    dispatch(logout());
  };

  const handlePricingOpen = () => {
    setPricingModalOpen(true);
  };

  const handlePricingClose = () => {
    setPricingModalOpen(false);
  };

  const handleNotificationsOpen = () => {
    setOpenNotifications(true);
    setNewNotifications('');
  };

  const handleNotificationsClose = () => {
    setOpenNotifications(false);
  };

  const handleSearchChange = event => {
    setSearchValue(event.target.value);

    if (event.target.value) {
      if (!openSearchPopover) {
        setOpenSearchPopover(true);
      }
    } else {
      setOpenSearchPopover(false);
    }
  };

  const handleSearchPopverClose = () => {
    setOpenSearchPopover(false);
  };

  const popularSearches = [
    'Devias React Dashboard',
    'Devias',
    'Admin Pannel',
    'Project',
    'Pages'
  ];

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
  console.log(props.location.pathname);
  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="#ffffff"
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="Logo"
            src="/images/logos/logo.png"
            height="70px"
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden smDown>
          {/*<div
            className={classes.search}
            ref={searchRef}
          >
           
            <SearchIcon className={classes.searchIcon} />
            <Input
              className={classes.searchInput}
              disableUnderline
              onChange={handleSearchChange}
              placeholder="Search people &amp; places"
              value={searchValue}
            />
          
          </div>*/}
          <Help open={open} setOpen={setOpen} />
          <Popper
            anchorEl={searchRef.current}
            className={classes.searchPopper}
            open={openSearchPopover}
            transition
          >
            <ClickAwayListener onClickAway={handleSearchPopverClose}>
              <Paper
                className={classes.searchPopperContent}
                elevation={3}
              >
                <List>
                  {popularSearches.map(search => (
                    <ListItem
                      button
                      key={search}
                      onClick={handleSearchPopverClose}
                    >
                      <ListItemIcon>
                        <SearchIcon />
                      </ListItemIcon>
                      <ListItemText primary={search} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </ClickAwayListener>
          </Popper>
          {/*<Button
            className={classes.trialButton}
            onClick={handlePricingOpen}
            variant="contained"
          >
            <LockIcon className={classes.trialIcon} />
            Trial expired
          </Button>*/}
        </Hidden>
        {/* <Hidden mdDown> */}
          {(session.user.role !== "ADMIN" && props.location.pathname == "/dashboards/nuevos"
          || props.location.pathname !== "/dashboards/programados"
          || props.location.pathname !== "/dashboards/encocina"
          || props.location.pathname !== "/dashboards/historial"
          || props.location.pathname !== "/dashboards/entrega"
          || props.location.pathname !== "/dashboards/productos") && (
            <React.Fragment>
              <FormGroup row>
                <Typography
                  style={{ fontSize: "24px", paddingRight: "20px", paddingTop: "15px" }}
                  component="h1"
                  gutterBottom
                  variant="overline"
                >
                  Recibiendo Pedidos
            </Typography>
                <FormControlLabel
                  control={<IOSSwitch checked={!state.checkedA} onChange={handleChange} name="checkedA" />}
                  label=""
                />
              </FormGroup>
              <IconButton
                className={classes.notificationsButton}
                color="inherit"
                onClick={handleOpen}
                ref={notificationsRef}
              >
                <PhoneIcon style={{ color: green[500], fontSize: "36px" }} />

              </IconButton>
            </React.Fragment>
          )}
          
          {(props.location.pathname !== "/dashboards/nuevos"
          && props.location.pathname !== "/dashboards/programados"
          && props.location.pathname !== "/dashboards/encocina"
          && props.location.pathname !== "/dashboards/historial"
          && props.location.pathname !== "/dashboards/entrega"
          && props.location.pathname !== "/dashboards/productos") && (
          <IconButton
            className={classes.notificationsButton}
            color="inherit"
            onClick={handleNotificationsOpen}
            ref={notificationsRef}
          >
            <Badge
              badgeContent={newNotifications.length}
              classes={{ badge: classes.notificationsBadge }}
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          )}
          <Button
            className={classes.logoutButton}
            color="inherit"
            onClick={handleLogout}
          >
            <InputIcon className={classes.logoutIcon} />
            {t("Sign out")}
          </Button>
        {/* </Hidden> */}
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onOpenNavBarMobile}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <PricingModal
        onClose={handlePricingClose}
        open={pricingModalOpen}
      />
      <NotificationsPopover
        anchorEl={notificationsRef.current}
        notifications={notifications}
        onClose={handleNotificationsClose}
        open={openNotifications}
      />
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func
};

export default withRouter(TopBar);