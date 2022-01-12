import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
    <nav className="my-2 navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" aria-current="page" className="nav-link">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/planesviaje" className="nav-link">Planes De Viaje</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/registro" className="nav-link">Registrar Viaje</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/reservas" className="nav-link">Consultar Viajes</Link>
                    </li>
                </ul>
            </div>
        <span className="navbar-brand">Viajemos por Colombia</span>
        </div>
    </nav>
    )
}

export default NavBar