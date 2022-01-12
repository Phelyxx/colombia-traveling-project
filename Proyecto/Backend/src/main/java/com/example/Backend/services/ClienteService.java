package com.example.Backend.services;

import java.util.ArrayList;
import java.util.Optional;

import com.example.Backend.models.ClienteModel;
import com.example.Backend.repositories.ClienteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

    @Autowired
    ClienteRepository clienteRepository;
    
    // NOTA:
    // Todo quedo para que se lean datos en minusculas y no hallan errores en busquedas
    // o guardado de datos.

    //Obtener todos los datos
    public ArrayList<ClienteModel> obtenerDatos() {
        return (ArrayList<ClienteModel>) clienteRepository.findAll(); 
    }

    //Guardar datos 
    public ClienteModel guardarDatos(ClienteModel cliente) {
        cliente.setDestino(cliente.getDestino().toLowerCase());
        cliente.setHospedaje(cliente.getHospedaje().toLowerCase());
        return clienteRepository.save(cliente);
    }

    //Eliminar datos
    public boolean eliminarDatos( String id) {
        
        if (clienteRepository.existsById(id)) {
            clienteRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
        
    }

    //Obtener datos por id
    public Optional<ClienteModel> obtenerDatosPorId(String id) {
        return clienteRepository.findById(id);        
    }

    //Obtener datos por destino
    public ArrayList<ClienteModel> obtenerDatosPorDestino(String destino) {
        return clienteRepository.findByDestino(destino.toLowerCase());
    }

    //Obtener datos por precio
    public ArrayList<ClienteModel> obtenerDatosPorPrecio(Long precio) {
        return clienteRepository.findByPrecioLessThanEqual(precio);
    }

    //Obtener datos por hospedaje
    public ArrayList<ClienteModel> obtenerDatosPorHospedaje(String hospedaje) {
        return clienteRepository.findByHospedaje(hospedaje);
    }
}