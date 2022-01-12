import React from "react";
import { 
  BrowserRouter,
  Switch,
  Route,
 } from "react-router-dom";

 import Inicio from "../pages/Inicio";
import Layout from "../pages/Layout";
 import PlanesViaje from "../pages/PlanesViaje";
import Registro from "../pages/Registro";
import Reservas from "../pages/Reservas";
import Usuario from "../pages/Usuario";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Switch>
        <Route exact path="/" component={Inicio}/>
        <Route exact path="/planesviaje" component={PlanesViaje}/>
        <Route exact path="/registro" component={Registro}/>
        <Route exact path="/reservas" component={Reservas}/>
        <Route exact path="/usuario" component={Usuario}/>
        <Route path="*" component={NotFound}/>
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
