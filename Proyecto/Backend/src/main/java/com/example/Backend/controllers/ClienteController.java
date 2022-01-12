package com.example.Backend.controllers;
import java.util.*;
import com.example.Backend.models.ClienteModel;
import com.example.Backend.services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/viajes")
public class ClienteController {
    @Autowired
    ClienteService clienteService;

    @GetMapping()
    public ArrayList<ClienteModel> obtenerDatos(){
        return  clienteService.obtenerDatos();
    }

    @PostMapping()
    public ClienteModel guardarDatos(@RequestBody ClienteModel cliente){
        
        return clienteService.guardarDatos(cliente);
    }
    
    @DeleteMapping(path = "/{id}")
    public String eliminarDatosPorId(@PathVariable("id") String id){
        boolean resultadoEliminar=this.clienteService.eliminarDatos(id);
        if (resultadoEliminar){
            return "Se eliminó el usuario con id: "+id;
        }else{
            return "No se pudo eliminar el usuario con el id: "+id;
        }
    }
    
    @GetMapping(path = "/{id}")
    public Optional<ClienteModel> obtenerDatosPorId(@PathVariable("id") String id){
        return clienteService.obtenerDatosPorId(id);
    }

    @GetMapping(path = "/destino/{destino}")
    public ArrayList<ClienteModel> clientePorDestino(@PathVariable("destino") String destino){
        return clienteService.obtenerDatosPorDestino(destino);
    }

    @GetMapping(path = "/precio/{precio}")
    public ArrayList<ClienteModel> clientePorPrecio(@PathVariable("precio") Long precio){
        return clienteService.obtenerDatosPorPrecio(precio);
    }

    @GetMapping(path = "/hospedaje/{hospedaje}")
    public ArrayList<ClienteModel> clientePorHospedaje(@PathVariable("hospedaje") String hospedaje){
        return clienteService.obtenerDatosPorHospedaje(hospedaje);
    }
}