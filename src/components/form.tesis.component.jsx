import "bootstrap/dist/css/bootstrap.min.css";
import { addDoc, collection } from "firebase/firestore";
import { useEffect } from "react";
import { create } from "zustand";
import { db } from "../firebase/firebase";

export const tesistaStore = create((set) => ({
  type: false,
  tesista: {
    nombre: "",
    apellido: "",
    dni: "",
    celular: "",
    email: "",
  },
  setType: (type) => set({ type }),
  setTesista: (tesista) => set({ tesista }),
}));

const FormTesista = () => {
  const btnDisable = tesistaStore((state) => state.type);
  const btnSet = tesistaStore((state) => state.setType);
  let type = "inactive";
  const setTesista = tesistaStore((state) => state.setTesista);
  const tesista = tesistaStore((state) => state.tesista);
  const handleSaveTesista = async (event) => {
    event.preventDefault();
    const formData = {
      nombre: event.target.nombre.value,
      apellido: event.target.apellido.value,
      dni: event.target.dni.value,
      celular: event.target.celular.value,
      email: event.target.email.value,
    };
    setTesista(formData);
    console.log(formData);
    try {
      const docRef = addDoc(collection(db, "tesistas"), formData);
      console.log((await docRef).id);
    } catch (error) {
      console.error(error);
    }
    type = "inactive";
  };
  useEffect(() => {
    btnSet(type);
  }, [type, tesista]);

  return (
    <div className="mt-4">
      <div className="">
        <div className="card">
          <div className="card-header">
            <h1>Form Tesista</h1>
          </div>
          <div className="card-body">
            <form onSubmit={(event) => handleSaveTesista(event)}>
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
