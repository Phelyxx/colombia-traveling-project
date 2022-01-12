import React, {useEffect , useState} from 'react'
import axios from 'axios'
import { Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap'
import Swal from 'sweetalert2'
import * as ReactBootStrap from "react-bootstrap";

const TableViajes = () => {

    const baseURL="http://localhost:8080/viajes/"
    const [data , setData] = useState([])

    const peticionGet = async () => {
            await axios(baseURL)
            .then(response=>{
              setData(response.data);
            }).catch(error=>{
              console.log(error)
            })}
           useEffect(() =>{
        peticionGet();
        },[setData]);

    const peticionPost = async () =>{
      await axios.post(baseURL,viajeSeleccionado)
      .catch(error=>{
        console.log(error);
      })
      peticionGet();
      setModalEditar(false);
    }

    const peticionDelete=async()=>{
      await axios.delete(baseURL+viajeSeleccionado.id)
      .then(response =>{
        setData(data.filter(viaje=>viaje.id!==viajeSeleccionado.id));
        setModalEliminar(false);
        Swal.fire(
          "confirmado",
          response.data,
          "warning"
        )
      }).catch(error =>{
        console.log(error);
      })
    }

    const[modalEditar, setModalEditar]=useState(false);
    const[modalEliminar , setModalEliminar]=useState(false);
    const[viajeSeleccionado, setViajeSeleccionado]=useState({
      destino:"",
      precio:"",
      hospedaje:"",
      contacto:"",
    })

    const seleccionarViaje=(elemento)=>{
      setViajeSeleccionado(elemento);
      setModalEditar(true);
    }

    const seleccionarViajeDelete=(elemento)=>{
      setViajeSeleccionado(elemento);
      setModalEliminar(true);
    }

    const handleChange=e=>{
      const{name,value}=e.target;
      setViajeSeleccionado((prevState)=>({
        ...prevState,
        [name]:value
      }));
    }

    const [datosBusqueda, setDatosBusqueda] = useState({
        caja:"",
        filtro:"1"
      })

    const handleInputChange=e=>{
        const{name,value}=e.target;
        setDatosBusqueda((prevState)=>({
            ...prevState,
            [name]:value
        }));
    }

    const buscarViajes= async ()=>{

      switch (datosBusqueda.filtro) {
        case "1":
          await axios.get(baseURL+datosBusqueda.caja)
          .then(response=>{
            if(response.data !== null && !Array.isArray(response.data)){
              setData([response.data]);
            }else{
              Swal.fire(
                "No existe un viaje con el Destino ingresado!",
                "",
                "info")}
          }).catch(error=>{
            console.log(error);
          });
          break;

          case "2":
              if(!isNaN(datosBusqueda.caja) && datosBusqueda.caja !== ""){
                await axios.get(baseURL+"precio/"+datosBusqueda.caja)
                .then(response=>{
                  if(response.data.length !== 0){
                    setData(response.data);
                  }else{
                    Swal.fire(
                      "No existe un viaje con un precio menor o igual al ingresado!",
                      "",
                      "info")}
                }).catch(error=>{
                  console.log(error);
                });
              }else{
                Swal.fire(
                  "No es un dato numerico!",
                  "",
                  "info")
              }
              break;
      
            case "3":
                await axios.get(baseURL+"destino/"+datosBusqueda.caja)
                .then(response=>{
                    if(response.data !== null){
                        if(response.data.length !== 0){
                            setData(response.data);
                        }else{
                            Swal.fire(
                                "No existe un viaje con un hospedaje ingresado!",
                                "",
                                "info")
                        }
                        }else{
                            Swal.fire(
                                "No existe un viaje con un hospedaje ingresado!",
                                "",
                                "info")
                            }
                            })
                            break;
            default:
                break;
      }
    }


    return (

        <div>
          <ReactBootStrap.Form>
                <ReactBootStrap.Row>

                    <ReactBootStrap.Col xs="auto" className="my-1">
                        <ReactBootStrap.Form.Control name="caja" onChange={handleInputChange} placeholder="Ingresa Busqueda"/>
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col xs="auto" className="my-1">
                        <ReactBootStrap.Form.Select name="filtro" onChange={handleInputChange}>
                            <option value="1">Id</option>
                            <option value="2">Precio</option>
                            <option value="3">Destino</option>
                        </ReactBootStrap.Form.Select>
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col xs="auto" className="my-1">
                        <ReactBootStrap.Button name="buscar" onClick={()=>buscarViajes()}>Buscar</ReactBootStrap.Button>
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col className="my-1 d-md-flex justify-content-md-end">
                        <ReactBootStrap.Button className="btn-success" href="/registro">Nuevo Viaje</ReactBootStrap.Button>
                    </ReactBootStrap.Col>

                </ReactBootStrap.Row>
          </ReactBootStrap.Form>
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Destino</th>
          <th scope="col">Precio</th>
          <th scope="col">Hospedaje</th>
          <th scope="col">Contacto</th>
        </tr>
      </thead>
      <tbody>
          {
          data.map((item) =>(
          <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.destino}</td>
              <td>{item.precio}</td>
              <td>{item.hospedaje}</td>
              <td>{item.contacto}</td>
              <td><button className="btn btn-primary" onClick={()=>seleccionarViaje(item)} >Editar</button> {"   "} 
              <button className="btn btn-danger"onClick={()=>seleccionarViajeDelete(item)}>Eliminar</button></td>       
          </tr>
          ))
          }    
      </tbody>
    </table>
            <Modal show={modalEditar}>
              <ModalTitle>
                <h2>Editar Viaje</h2>
              </ModalTitle>
              <ModalBody>
                <div className="form-group">
                  <label>Id</label>
                  <input className="form-control"
                  readOnly
                  type="text"
                  value={viajeSeleccionado.id}
                  />
                  <br/>
                  <label>Destino</label>
                  <input className="form-control"
                  type="text"
                  name="destino"
                  value={viajeSeleccionado.destino}
                  onChange={handleChange}
                  />
                  <br/>
                  <label>Precio</label>
                  <input className="form-control"
                  type="text"
                  name="precio"
                  value={viajeSeleccionado.precio}
                  onChange={handleChange}
                  />
                  <br/>
                  <label>Hospedaje</label>
                  <input className="form-control"
                  type="text"
                  name="hospedaje"
                  value={viajeSeleccionado.hospedaje}
                  onChange={handleChange}
                  /><br/>
                  <label>Contacto</label>
                  <input className="form-control"
                  type="text"
                  name="contacto"
                  value={viajeSeleccionado.contacto}
                  onChange={handleChange}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-primary" onClick={()=>peticionPost()}>Actualizar</button>
                <button className="btn btn-danger" onClick={()=>setModalEditar(false)}>Cancelar</button>
              </ModalFooter>
            </Modal>

            <Modal show={modalEliminar}>
              <ModalBody>
                ¿Esta seguro que desea eliminar el viaje {viajeSeleccionado.destino}?
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-danger" onClick={()=>peticionDelete()}>Si</button>
                <button className="btn btn-secundary" onClick={()=>setModalEliminar(false)}>No</button>
              </ModalFooter>

            </Modal>

        </div>
    )
}

export default TableViajes
