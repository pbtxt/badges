import React from 'react'
import './styles/NavBar.css'
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return <div className="Navbar">
            <Link to="/" className="Navbar__brand">
                <img className="Navbar__logo-logo" src={logo} alt="logo"/>
                <span>Platzi</span>
                <span>Conf</span>
            </Link>
        </div>
    }
}

export default NavBar;