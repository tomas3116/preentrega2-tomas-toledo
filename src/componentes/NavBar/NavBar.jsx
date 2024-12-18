
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'; 
import logo from '../logo.jpg'; 
import './_NavBar.scss';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo Kheira Tech" style={{ height: '95px' }} />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/celulares">Celulares</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/tablets">Tablets</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/ipad">iPad</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/smart-tv">Smart TV</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;