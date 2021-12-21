import React from 'react';
import logo from '../Images/Logo.png'
import logoName from '../Images/Logoname.png'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <NavLink to='./home' className="navbar-brand">
                        <img src={logo} className="w-75" />
                    </NavLink>
                    <NavLink to='./home' className="navbar-brand mt-auto">
                        <img src={logoName} className="w-75" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="ms-auto mt-2">
                            <ul className="navbar-nav">
                                <li className="nav-item my-auto">
                                    <a activeClassName='menu_active' href='#WhatIsCopyTrading' exact className={`nav-link ${classes.textColor}`}>What is Copy Trading</a>
                                </li>
                                <li className="nav-item my-auto">
                                    <a activeClassName='menu_active' href='#WhyCopyTrading' exact className={`nav-link ${classes.textColor}`}>Why Copy Trading</a>
                                </li>
                                <li className="nav-item my-auto">
                                    <a activeClassName='menu_active' href='#Pros' exact className={`nav-link ${classes.textColor}`}>Pros</a>
                                </li>
                                <li className="nav-item my-auto">
                                    <a activeClassName='menu_active' href='#HowItWorks' exact className={`nav-link ${classes.textColor}`}>How it works</a>
                                </li>
                                <li className="nav-item my-auto">
                                    <a activeClassName='menu_active' href='#FAQ' exact className={`nav-link ${classes.textColor}`}>FAQ</a>
                                </li>
                                <li className="nav-item my-auto">
                                    <button activeClassName='menu_active' exact className={`nav-link mx-1 ${classes.navButton}`}>REGISTER</button>
                                </li>
                                <li className="nav-item my-auto">
                                    <button activeClassName='menu_active' exact className={`nav-link mx-1 ${classes.navButton}`}>LOG IN</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};
export default Navbar;
