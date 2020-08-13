import React, { useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Link as RouterLink } from 'react-router-dom';
import {
    Modal,
    Card,
    CardContent,
    CardActions,
    Grid,
    Typography,
    TextField,
    Link,
    Switch,
    Button,
    colors
} from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import RestoreIcon from '@material-ui/icons/Restore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import firebase from 'utils/firebase';
import EventOutlined from '@material-ui/icons/EventOutlined';
import { withRouter } from 'react-router-dom';

function TabPanel(props) {
    const { children, value, index, icono, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#ffffff",
        color: "#ffffff",
        //   position: 'absolute',
        //   top: '50%',
        //   left: '50%',
        //  transform: 'translate(-50%, -50%)',
        outline: 'none',
       // boxShadow: theme.shadows[3],
        marginLeft: "10px",
        width: 180,
        height: 140,
        maxHeight: '100%',
        //overflowY: 'auto',
        maxWidth: '100%',
        marginBottom: '20px'
    },
    badge: {
        badge: {
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            color: "#ffffff",
            backgroundColor: "#e53935"
        },
    },
    container: {
        marginTop: theme.spacing(3)
    },
    actions: {
        justifyContent: 'flex-end'
    },
    saveButton: {
        color: theme.palette.white,
        backgroundColor: "#8937E9",
        // colors.green[600],
        '&:hover': {
            backgroundColor: "#8937E9",
            // colors.green[900]
        },
        width: "100%",
        fontSize: "bold"
    },
    rechazarButton: {
        color: theme.palette.white,
        backgroundColor: "#64D3DE",
        // colors.green[600],
        '&:hover': {
            backgroundColor: "#64D3DE",
            // colors.green[900]
        },
        width: "100%",
        fontSize: "bold"
    }
}));

const NavBarVertical = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [pedidos, setPedidos] = React.useState([]);
    const { open, onClose, category, titulo, link, icono, countdown, handleStatus, actualizar, setLoading, className, marcado, ...rest } = props;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    let color = marcado ? "#8937E9" : "#ffffff";
    let texto = !marcado ? "#8937E9" : "#ffffff";

    useEffect(() => {
        let mounted = true;
        
        let doc = firebase.firestore().collection('orders').where('status', '==', 2);
        const observer = doc.onSnapshot(docSnapshot => {
            let data = [];
            docSnapshot.docChanges().forEach(function (change) {

                if (change.type === "added") {
                 //   console.log("New order: ", change.doc.data());
                    data.push(change.doc.data().id);
                }

            });

            setPedidos(pedidos => [...pedidos].concat(data));

        }, err => {
            console.log(`Encountered error: ${err}`);
        });

        return () => {
            mounted = false;
        };
    }, []);

    const Icon = (props) => {
        //     return <FastfoodIcon style={{ color: '#ffffff', fontSize: 80 }} />
        // }
        switch (props.icono) {
            case 1:
                // code block
                return (
                    <Badge badgeContent={props.pedidos} color="error" style={{ fontSize: "28px" }}>
                        {(props.pathname == "/dashboards/nuevos") ?
                            <FastfoodIcon style={{ color: '#ffffff', fontSize: 60 }} />
                            :
                            <FastfoodIcon style={{ color: '#8937E9', fontSize: 60 }} />
                        }
                    </Badge>
                )
                break;
            case 2:
                // code block
                return(
                (props.pathname == "/dashboards/encocina") ?
                            <WhatshotIcon style={{ color: '#ffffff', fontSize: 60 }} />
                            :
                            <WhatshotIcon style={{ color: '#8937E9', fontSize: 60 }} />
                )
                // return <WhatshotIcon style={{ color: '#8937E9', fontSize: 60 }} />
                break;
            case 3:
                // code block
                return(
                    (props.pathname == "/dashboards/entrega") ?
                                <LocalMallIcon style={{ color: '#ffffff', fontSize: 60 }} />
                                :
                                <LocalMallIcon style={{ color: '#8937E9', fontSize: 60 }} />
                    )
                    // return <LocalMallIcon style={{ color: '#8937E9', fontSize: 60 }} />
                break;
            case 4:
                // code block
                return(
                    (props.pathname == "/dashboards/historial") ?
                                <RestoreIcon style={{ color: '#ffffff', fontSize: 60 }} />
                                :
                                <RestoreIcon style={{ color: '#8937E9', fontSize: 60 }} />
                    )
                    // return <RestoreIcon style={{ color: '#8937E9', fontSize: 60 }} />
                break;
            case 5:
                // code block
                return(
                    (props.pathname == "/dashboards/productos") ?
                                <ShoppingCartIcon style={{ color: '#ffffff', fontSize: 60 }} />
                                :
                                <ShoppingCartIcon style={{ color: '#8937E9', fontSize: 60 }} />
                    )
                    // return <ShoppingCartIcon style={{ color: '#8937E9', fontSize: 60 }} />
                break;
            case 6:
                // code block
                return(
                    (props.pathname == "/dashboards/programados") ?
                                <EventOutlined style={{ color: '#ffffff', fontSize: 60 }} />
                                :
                                <EventOutlined style={{ color: '#8937E9', fontSize: 60 }} />
                    )
                    // return <EventOutlined style={{ color: '#8937E9', fontSize: 60 }} />
                break;
            default:
                // code block
                return <ShoppingCartIcon style={{ color: '#8937E9', fontSize: 60 }} />
        }
    }



    return (
        <Link
            color="inherit"
            component={RouterLink}
            to={link}
            //to="/management/centers/1"
            variant="h6"
        >
            <div className={classes.root}>
                <Card {...rest} className={clsx(classes.root, className)} style={{backgroundColor: color}}>
                    <form>
                        <CardContent>
                            <Typography align="center" gutterBottom variant="h1">
                                <Icon pathname={props.location.pathname} icono={icono} pedidos={pedidos.length} />
                            </Typography>
                            <Typography align="center" gutterBottom variant="h4" style={{fontSize:"16px", color: texto}}>
                                {titulo}
                            </Typography>
                        </CardContent>
                    </form>
                </Card>
            </div>
        </Link>
    );
}


export default withRouter(NavBarVertical);