import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    Drawer,
    Hidden,
    IconButton,
    List,
    ListItemText,
    Slide
} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import './NavBar.scss';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import {CloseSharp} from "@material-ui/icons";

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
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
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
    const drawer = (
            <div>
                <Box ml="77%" mt="2%">
                <IconButton
                    onClick={handleDrawerToggle}
                    color="inherit"
                >
                    <CloseSharp/>
                </IconButton>
                <div className={classes.toolbar}/>
                <Divider/>
                </Box>
                <List>
                    {['About Me', 'LinkedIn', 'Projects', 'Contact', 'Resume'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </div>
    )


    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="static">
                <Toolbar>
                    <Box height="auto">
                        <Slide direction="down" timeout={1000} in={true}>
                            <h2 className="h2-blinker">
                                \Hans>
                                <span className="span-blinker">_</span>
                            </h2>
                        </Slide>
                    </Box>
                    <Hidden initialWidth='xs' smUp>
                        <Box pl="65%">
                            <IconButton
                                onClick={handleDrawerToggle}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                        </Box>
                        <Drawer
                            variant="temporary"
                            anchor='right'
                            open={isMobile}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            elevation={2}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown>
                        <Slide direction="down" timeout={1200} in={true}>
                            <Box pl="5%" pr="2%">
                                <Button component={Link} to="/about" color="inherit"> About Me </Button>
                            </Box>
                        </Slide>
                        <Slide direction="down" timeout={1350} in={true}>
                            <Box pr="2%">
                                <Button component={Link} to="/linkedin" color="inherit"> LinkedIn </Button>
                            </Box>
                        </Slide>
                        <Slide direction="down" timeout={1500} in={true}>
                            <Box pr="2%">
                                <Button component={Link} to="/projects" color="inherit"> Projects </Button>
                            </Box>
                        </Slide>
                        <Slide direction="down" timeout={1650} in={true}>
                            <Box pr="2%">
                                <Button component={Link} to="/contact" color="inherit"> Contact </Button>
                            </Box>
                        </Slide>
                        <Slide direction="down" timeout={1800} in={true}>
                            <Box pr="2%">
                                <Button component={Link} to="/resume" color="inherit"> Résumé </Button>
                            </Box>
                        </Slide>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </div>
    );
}