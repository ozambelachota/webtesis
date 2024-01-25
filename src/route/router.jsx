import React from "react";
import { Route, Routes } from "react-router-dom";
import { LayoutUsuario } from "../components/layout-usuario";
import Usuario from "../page/Usuario";
import Login from "../page/login";
import Notificacion from "../page/notificacion";
import SolicitudPage from "../page/solicitud";

const Ruta = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<LayoutUsuario />}>
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/solicitud" element={<SolicitudPage />} />
        <Route path="/seguimiento" element={<Notificacion />} />
      </Route>
    </Routes>
  );
};

export default Ruta;
