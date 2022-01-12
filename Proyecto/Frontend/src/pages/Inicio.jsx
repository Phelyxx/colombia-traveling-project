import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Turismo from "../Images/Turismo.jpg";

const inicio = () => {
    return(
        <div>
            <NavBar/>
            <div class="container text-center">
                <div className="col-12 p-3">
                    <h1>¡¡Bienvenido!! a "Viajemos por Colombia"</h1>
                </div>
                <div className="d-grid gap-2 d-md-block">
                    <Link to="/planesviaje" className="btn btn-primary m-1">Planes De Viaje</Link>
                    <Link to="/reservas" className="btn btn-primary m-1">Consultar Viajes</Link>
                </div>
                <div className="p-4">
                    <img src={Turismo} className="img-fluid" alt="..."/>
                </div>
            </div>
        </div>
    )
}

export default inicio