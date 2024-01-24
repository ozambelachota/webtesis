import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import  Ruta  from "./route/router";

function App() {
  useEffect(() => {}, []);
  return (
    <BrowserRouter>
      <Ruta />
    </BrowserRouter>
  );
}

export default App;
