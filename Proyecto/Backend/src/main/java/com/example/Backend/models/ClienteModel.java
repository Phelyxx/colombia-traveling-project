package com.example.Backend.models;
import org.springframework.data.annotation.Id;

public class ClienteModel {
    @Id
    private String id;

    private String destino;
    private Long precio;
    private String hospedaje;
    private String contacto;
    
    public ClienteModel() {
    }

    public ClienteModel(String id, String destino, Long precio, String hospedaje, String contacto) {
        this.id = id;
        this.destino = destino;
        this.precio = precio;
        this.hospedaje = hospedaje;
        this.contacto = contacto;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public Long getPrecio() {
        return precio;
    }

    public void setPrecio(Long precio) {
        this.precio = precio;
    }

    public String getHospedaje() {
        return hospedaje;
    }

    public void setHospedaje(String hospedaje) {
        this.hospedaje = hospedaje;
    }

    public String getContacto() {
        return contacto;
    }

    public void setContacto(String contacto) {
        this.contacto = contacto;
    }
}