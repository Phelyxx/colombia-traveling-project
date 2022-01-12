package com.example.Backend.repositories;
import java.util.ArrayList;
import com.example.Backend.models.ClienteModel;
import org.springframework.data.mongodb.repository.*;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends MongoRepository <ClienteModel, String>{

    ArrayList<ClienteModel> findByDestino(String destino);

    ArrayList<ClienteModel>findByPrecioLessThanEqual(Long precio);

    ArrayList<ClienteModel> findByHospedaje(String hospedaje);
}