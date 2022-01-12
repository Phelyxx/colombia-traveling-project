import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from "../components/NavBar";
import Amazonas from "../Images/Amazonas.jpg";
import Barranquilla from "../Images/Barranquilla.jpg";
import Cartagena from "../Images/Cartagena.jpg";
import Medellin from "../Images/Medellin.jpg";
import SanAndres from "../Images/SanAndres.jpg";
import SantaMarta from "../Images/SantaMarta.jpg";


const PlanesViaje = () => {
    return (
        <div>
            <NavBar/>
            <div class="container text-center">
                <div class="row">
                    <div className="col-12 p-3">
                        <h1>Planes de Viaje</h1>
                    </div>
                    <div>
                        <Link to="/reservas" className="btn btn-primary m-1">Consultar Viajes</Link>
                        <Link to="/registro" className="btn btn-primary m-1">Registrar Nuevo Viaje</Link> 
                    </div>
                    <div className="row pb-4 pt-2">
                        <div className="col-lg-6">
                            <h2>Amazonas</h2>
                            <img src={Amazonas} nameClass="img-fluid mx-100" alt=""/>
                        </div>
                        <div className="col-lg-6">
                            <h2>Barranquilla</h2>
                            <img src={Barranquilla} nameClass="img-fluid mx-100" alt=""/>
                        </div>
                        <div className="col-lg-6">
                            <h2>Cartagena</h2>
                            <img src={Cartagena} nameClass="img-fluid mx-100" alt=""/>
                        </div>
                        <div className="col-lg-6">
                            <h2>Medellin</h2>
                            <img src={Medellin} nameClass="img-fluid mx-100" alt=""/>
                        </div>
                        <div className="col-lg-6">
                            <h2>San Andres</h2>
                            <img src={SanAndres} nameClass="img-fluid mx-100" alt=""/>
                        </div>
                        <div className="col-lg-6">
                            <h2>Santa Marta</h2>
                            <img src={SantaMarta} nameClass="img-fluid mx-100" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanesViaje
