import { useState,useEffect } from 'react'

import { Link } from 'react-router-dom';

function Header() {
    useEffect(()=>{
         fetch('http://localhost:1208/profile', {
            method:'GET',
            headers: {
                credentials:"include", 
            }
           
        })
    },[])
    return (  
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a href="/" className="navbar-brand"><i className="fas fa-code me-2"></i>YoyoBlog</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#my-nav" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="my-nav" className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="sign" className="nav-link"><i class="fas fa-user-plus me-1"></i>S'incrire</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="login" className="nav-link"><i class="fas fa-sign-in-alt me-1"></i>Se connecter</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Header;