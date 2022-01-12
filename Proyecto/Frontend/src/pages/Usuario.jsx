import React from "react";
import NavBar from "../components/NavBar";

const Usuario = () => {
    return(
        <div>
            <NavBar/>
            
            <div className="modal-dialog text-center">
                <div className="col-sm-8 main-section">
                    <div className="modal-content">
                        {/* <div className="col-12 user-img">
                            <img src="../Imagenes/avatar.jpg" th:src="@{/img/user.png}"/>
                        </div> */}
                        <form className="col-12" method="get">
                            <div className="form-group" id="user-group">
                                <input type="text" className="form-control" placeholder="Nombre de usuario" name="username"/>
                            </div>
                            <div className="form-group" id="contrasena-group">
                                <input type="password" className="form-control" placeholder="Contrasena" name="password"/>
                            </div>
                            <button type="submit" className="btn btn-primary"><i className="fas fa-sign-in-alt"></i>  Ingresar </button>
                        </form>
                        {/* <div th:if="${param.error}" className="alert alert-danger" role="alert">
                            Invalid username and password.
                        </div>
                        <div th:if="${param.logout}" className="alert alert-success" role="alert">
                            You have been logged out.
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Usuario