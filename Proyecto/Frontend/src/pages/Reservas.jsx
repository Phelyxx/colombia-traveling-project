import React from "react";
import NavBar from "../components/NavBar";
import TableViajes from "../components/TableViajes";

const Reservas = () => {
    return(
        <div>
            <NavBar/>
            <h1 className="text-center">Viajes</h1>
            <TableViajes/>
        </div>
    )
}

export default Reservas