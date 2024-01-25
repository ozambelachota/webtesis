import "bootstrap/dist/css/bootstrap.min.css";
import { collection } from "firebase/firestore";
import { useEffect } from "react";
import { create } from "zustand";
import { db } from "../firebase/firebase";


export const btnStore = create((set) => ({
  type: false,
  setType: (type) => set({ type }),
}));

const FormTesista = () => {
  const btnDisable = btnStore((state) => state.type);
  const btnSet = btnStore((state) => state.setType);
  let type = "inactive";


  
  useEffect(() => {
    btnSet(type);
  }, [type]);



  return (
    <div className="mt-4">
      <div className="">
        <div className="card">
          <div className="card-header">
            <h1>Form Tesista</h1>
          </div>
          <div className="card-body">
            <form>
              <label htmlFor="nombre" className="form-label">
                Nombre(s)
              </label>
              <input
                disabled={btnDisable === "inactive"}
                type="text"
                placeholder="nombre"
                name="nombre"
                className="form-control"
              />
              <label htmlFor="apellido" className="form-label">
                Apellido(s)
              </label>
              <input
                disabled={btnDisable === "inactive"}
                type="text"
                name="apellido"
                className="form-control"
              />
              <label htmlFor="dni" className="form-label">
                DNI
              </label>
              <input
                disabled={btnDisable === "inactive"}
                type="text"
                name="dni"
                className="form-control"
              />
              <label htmlFor="celular" className="form-label">
                Celular
              </label>
              <input
                disabled={btnDisable === "inactive"}
                type="text"
                name="celular"
                className="form-control"
              />
              <label htmlFor="email" className="form-label">
                Correo Electronico
              </label>
              <input
                disabled={btnDisable === "inactive"}
                type="email"
                name="email"
                className="form-control"
              />
              <div className="btn-group mt-3">
                <button
                  disabled={type === "active"}
                  type="submit"
                  className="btn btn-success"
                >
                  Enviar
                </button>
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    btnSet("disable");
                  }}
                >
                  habilitar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTesista;
