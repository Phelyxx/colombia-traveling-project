import NavBar from "../components/NavBar";
import axios from 'axios'
import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useHistory } from 'react-router'
import Swal from 'sweetalert2'

const Registro = () => {

    const history = useHistory();

    const [data, setData] = useState({destino:"",precio:"",hospedaje:"",contacto:""})

    const handleChange =  ({target}) => {
        setData({
            ...data,
            [target.name]:target.value
        })
    }

    const URL="http://localhost:8080/viajes";
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await axios.post(URL,data);

        if(response.status===200){
            Swal.fire(
                "Guardado!",
                `El viaje con id: ${response.data.id} ha sido guardado correctamete!`,
                "success"
            )
            history.push("/reservas")
        }else{
            console.log(response.status,response)
            Swal.fire(
                "Error",
                "Problemas al crear el viaje",
                "error"
            )
        }
    }

    return (
        <div>
            <Container>
                <NavBar/>
                <h1 className="text-center p-2">Nuevo Viaje</h1>
                <Container className="col-md-5 mx-auto">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <select className="form-select" id="destino" name="destino" required value={data.destino} onChange={handleChange}>
                                        <option selected="Elegir">Elegir Destino: </option>
                                        <option value="San Andres">San Andres</option>
                                        <option value="Amazonas">Amazonas</option>
                                        <option value="Barranquilla">Barranquilla</option>
                                        <option value="Medellin">Medellin</option>
                                        <option value="Cartagena">Cartagena</option>
                                        <option value="Santa Marta">Santa Marta</option>
                            </select>
                        </Form.Group >
                        <Form.Group className="mb-3">
                            <Form.Control type="number" name="precio" placeholder="Precio" required value={data.precio} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" name="hospedaje" placeholder="Hospedaje" required value={data.hospedaje}  onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" name="contacto" placeholder="Contacto" required value={data.contacto} onChange={handleChange}/>
                        </Form.Group>
                        <button className="btn btn-success">Guardar</button>
                    </Form>
                </Container>
            </Container>
        </div>
    )
}

export default Registro