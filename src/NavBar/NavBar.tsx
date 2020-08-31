import {
    AppBar,
    Button,
    Drawer,
    Grid,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Slide
} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import './NavBar.scss';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import PortraitOutlinedIcon from '@material-ui/icons/PortraitOutlined';
import {Link as MaterialLink} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        background: '#4EB1BA',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function NavBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [isMobile, setMobile] = useState(false);

    const handleDrawerToggle = () => {
        setMobile(!isMobile);
    }
    const renderIcon = (label: String) => {
        switch (label) {
            case 'LinkedIn':
                return <LinkedInIcon fontSize='large' color='primary' />;
            case 'Projects':
                return <GitHubIcon fontSize='large' color='action' />;
            case 'Contact':
                return <MailOutlineIcon fontSize='large' color='disabled' />;
            case 'Resume':
                return <PortraitOutlinedIcon fontSize='large' color='error' />;
        }
    }
    const drawer = (
        <div className="drawer">
                <IconButton
                    onClick={handleDrawerToggle}
                    color="inherit"
                >
                    <ChevronRightIcon />
                </IconButton>
            <Divider/>
            <List>
                {['LinkedIn', 'Projects', 'Contact', 'Resume'].map((text, index) => (
                    <ListItem component={Link} to={'/' + text.toLowerCase()}>
                        <Grid container direction="row" alignItems="center" spacing={3}>
                            <Grid item xs={3}>
                                {renderIcon(text)}
                            </Grid>
                            <Grid item xs={3}>
                                <ListItemText primary={text} style={{color: '#E9E9E9', fontWeight: 'bold'}}/>
                            </Grid>
                        </Grid>
                    </ListItem>
                ))}
            </List>
        </div>
    )


    return (
        <AppBar style={{background: '#4EB1BA'}}>
            <Toolbar>
                <Grid container direction="row" justify="space-between" alignItems="center" spacing={1}>
                    <Grid item>
                        <Slide direction="down" timeout={1000} in={true}>
                            <h2 className="h2-blinker">
                                <MaterialLink color="inherit" href="https://HansGam.github.io/" className="appbar-homelink">
                                    Hans
                                </MaterialLink>
                                &nbsp;>
                                <span className="span-blinker">_</span>
                            </h2>
                        </Slide>
                    </Grid>
                    <Hidden lgUp>
                        <Grid item>
                            <IconButton
                                onClick={handleDrawerToggle}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                        </Grid>
                        <Drawer
                            variant="temporary"
                            anchor='right'
                            open={isMobile}
                            onClose={handleDrawerToggle}
                            color="inherit"
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            elevation={2}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden mdDown>
                        <Slide direction="down" timeout={1200} in={true}>
                            <Grid item xs={1} >
                                <Button className='navbar-button' component='a' href="https://www.linkedin.com/in/hans-gamboa-073808155/" color="inherit"
                                        style={{color: '#E9E9E9', fontWeight: 'bold'}}> LinkedIn </Button>
                            </Grid>
                        </Slide>
                        <Slide direction="down" timeout={1350} in={true}>
                            <Grid item xs={1} >
                                <Button className='navbar-button' component='a' href="https://HansGam.github.io/" color="inherit"
                                        style={{color: '#E9E9E9', fontWeight: 'bold'}}> Projects </Button>
                            </Grid>
                        </Slide>
                        <Slide direction="down" timeout={1500} in={true}>
                            <Grid item xs={1} >
                                <Button className='navbar-button' component='a' href="mailto:hdgamboa@gmail.com"
                                        color="inherit"
                                        style={{color: '#E9E9E9', fontWeight: 'bold'}}> Contact </Button>
                            </Grid>
                        </Slide>
                        <Grid item xs={4}/>
                        <Slide direction="down" timeout={1650} in={true}>
                                <Grid item xs={1} alignItems="flex-end" alignContent="flex-end">
                                    <Button className='navbar-button' component={Link} to="/resume" color="inherit"
                                            style={{color: '#E9E9E9', fontWeight: 'bold'}} variant="outlined"> Résumé </Button>
                                </Grid>
                        </Slide>
                    </Hidden>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}