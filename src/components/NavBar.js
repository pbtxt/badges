import React from 'react'
import './styles/NavBar.css'
import logo from '../images/logo.svg'

class NavBar extends React.Component {
    render() {
        return <div className="Navbar">
            <a href="/" className="Navbar__brand">
                <img className="Navbar__logo-logo" src={logo} alt="logo"/>
                <span>Platzi</span>
                <span>Conf</span>
            </a>
        </div>
    }
}

export default NavBar;