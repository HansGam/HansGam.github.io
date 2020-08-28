import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import NavBar from "./NavBar/NavBar";
import About from "./About/About";

function App() {
    return (
        <Router>
            <Switch>
                <div className="App">
                    <NavBar/>
                    <Route exact path="/">
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/about" />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route path='/linkedin' component={() => {
                        window.location.href = 'https://www.linkedin.com/in/hans-gamboa-073808155/';
                        return null;
                    }}/>
                    <Route path='/projects' component={() => {
                        window.location.href = 'https://github.com/HansGam';
                        return null;
                    }}/>
                    <Route path='/contact' component={() => {
                        window.location.href = 'mailto:hdgamboa@gmail.com';
                        return null;
                    }}/>
                </div>
            </Switch>
        </Router>
    );
}

export default App;
