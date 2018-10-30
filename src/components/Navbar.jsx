import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './../style/Navbar.css';

class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-expand bg-dark">
                <span className="navbar-brand">ReactTimer</span>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <i className="arrow"></i>
                        <NavLink exact activeClassName="active" to="/" className="nav-link">Timer</NavLink>
                    </li>
                    <li className="nav-item">
                        <i className="arrow"></i>
                        <NavLink exact activeClassName="active" to="/countdown" className="nav-link">Countdown</NavLink>
                    </li>
                </ul>               
            </nav>
        );
    }
}

export default Navbar;