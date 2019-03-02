import React from 'react';
import { NavLink } from 'react-router-dom';
import '../temp-styles.css';

function AppHeader(props) {
    return (
        <header>
            <span>PTDV-ChatApp</span>
            <nav className="chatHeader-nav">
                <NavLink exact to="/" activeClassName="chatHeader-nav-selected">Home</NavLink> |  
                <NavLink to="/chats" activeClassName="chatHeader-nav-selected">Chats</NavLink> | 
                <NavLink to="/settings" activeClassName="chatHeader-nav-selected">Settings (soon)</NavLink>
            </nav>
            <hr />
        </header>  
    )
}

export { AppHeader }
