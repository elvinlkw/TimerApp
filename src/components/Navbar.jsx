import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './../style/Navbar.css';

class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-expand-lg bg-dark">
                <span className="navbar-brand">ReactTimer</span>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="./" className="nav-link" >Timer</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="./countdown" className="nav-link">Countdown</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="project">Project implemented by <a rel="noopener noreferrer" href="https://www.github.com/elvinlkw/" target="_blank"><i>Elvin Li Kam Wa</i></a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;