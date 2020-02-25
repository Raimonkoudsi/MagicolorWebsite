import React from 'react';
import {NavLink} from "react-router-dom";

import logo from './titulo.png';

class Menu extends React.Component {
 
    render() {
   
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary center">
		    <a className="navbar-brand"><NavLink to="/" className="nav-link"><img className="img-fluid"  src={logo} width="200"/></NavLink></a>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav ml-auto">
			        <li className="nav-item">
			        	<NavLink to="/nosotros" className="nav-link font-weight-bold">Nosotros </NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/productos" className="nav-link font-weight-bold">Productos </NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/contacto" className="nav-link font-weight-bold">Contacto </NavLink>
			        </li>
			    </ul>
		    </div>
		</nav>   
        )
      
    }
   
  }

  export default Menu;