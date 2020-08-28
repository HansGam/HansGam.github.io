import {AppBar, Box, Button, Slide} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import {Link} from "react-router-dom";
import './NavBar.scss';

export default function NavBar() {
    return (
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
                <Slide direction="down" timeout={1200} in={true} >
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
            </Toolbar>
        </AppBar>
    );
}