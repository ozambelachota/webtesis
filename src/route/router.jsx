import React from "react";
import { Route, Routes } from "react-router-dom";
import { LayoutAdmin } from "../components/layout-admin";
import Login from "../page/login";
import Notificacion from "../page/notificacion";
import Reporte from "../page/reporte";
import Revisar from "../page/revisar";
import Manual from "../page/manual";
import Admin from "../page/admin";

const Ruta = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<LayoutAdmin />}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/revisar" element={<Revisar />} />
        <Route path="/notificacion" element={<Notificacion />} />
        <Route path="/reporte" element={<Reporte />} />
        <Route path="/manual" element={<Manual />} />
      </Route>
    </Routes>
  );
};

export default Ruta;
