import "bootstrap/dist/css/bootstrap.min.css";
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { create } from "zustand";
import { db } from "../firebase/firebase";

export const tesistaStore = create((set) => ({
  tesista: {},
  setTesista: (tesista) => set({ tesista }),
}));

const FormTesista = () => {
  const setTesista = tesistaStore((state) => state.setTesista);
  const tesista = tesistaStore((state) => state.tesista);
  const [btnActive, setBtnActive] = useState(true);

  const handleSaveTesista = async (event) => {
    event.preventDefault();
    const formData = {
      nombre: event.target.nombre.value,
      apellido: event.target.apellido.value,
      dni: event.target.dni.value,
      celular: event.target.celular.value,
      email: event.target.email.value,
      nombre2: event.target.nombre2.value,
      apellido2: event.target.apellido2.value,
      dni2: event.target.dni2.value,
      celular2: event.target.celular2.value,
      email2: event.target.email2.value,
      anio: event.target.anio.value,
      titulo_tesis: event.target.titulo_tesis.value,
      nombre_asesor: event.target.nombre_asesor.value,
      dni_asesor: event.target.dni_asesor.value,
      orcid: event.target.orcid.value,
      nombre_jurado1: event.target.nombre_jurado1.value,
      nombre_jurado2: event.target.nombre_jurado2.value,
      nombre_jurado3: event.target.nombre_jurado3.value,
      resumen_tesis: event.target.resumen_tesis.value,
      palabra_clave: event.target.palabra_clave.value,
      campo_investigacion: event.target.campo_investigacion.value,
      facultad: event.target.facultad.value,
      modalidad: event.target.modalidad.value,
      tesis_digital: event.target.tesis_digital.value,
      declaracion_jurada: event.target.declaracion_jurada.value,
      autorizacion_publicaacion: event.target.autorizacion_publicacion.value,
    };
    setTesista(formData);
    console.log(formData);
    try {
      const docRef = addDoc(collection(db, "solicitud"), formData);
      console.log((await docRef).id);
    } catch (error) {
      console.error(error);
    }
    setBtnActive(true);
  };
  useEffect(() => {}, [btnActive]);

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
                type="text"
                placeholder="nombre"
                name="nombre"
                className="form-control"
              />
              <label htmlFor="apellido" className="form-label">
                Apellido(s)
              </label>
              <input type="text" name="apellido" className="form-control" />
              <label htmlFor="dni" className="form-label">
                DNI
              </label>
              <input type="text" name="dni" className="form-control" />
              <label htmlFor="celular" className="form-label">
                Celular
              </label>
              <input type="text" name="celular" className="form-control" />
              <label htmlFor="email" className="form-label">
                Correo Electronico
              </label>
              <input type="email" name="email" className="form-control" />
              <div>
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    setBtnActive(!btnActive);
                  }}
                >
                  {btnActive ? "habilitar" : "deshabilitar" }
                </button>
              </div>
              <label htmlFor="nombre" className="form-label">
                Nombre(s)
              </label>
              <input
                disabled={btnActive}
                type="text"
                placeholder="nombre"
                name="nombre2"
                className="form-control"
              />
              <label htmlFor="apellido" className="form-label">
                Apellido(s)
              </label>
              <input
                disabled={btnActive}
                type="text"
                name="apellido2"
                className="form-control"
              />
              <label htmlFor="dni" className="form-label">
                DNI 2
              </label>
              <input
                disabled={btnActive}
                type="text"
                name="dni2"
                className="form-control"
              />
              <label htmlFor="celular" className="form-label">
                Celular
              </label>
              <input
                disabled={btnActive}
                type="text"
                name="celular2"
                className="form-control"
              />
              <label htmlFor="email2" className="form-label">
                Correo Electronico
              </label>
              <input
                disabled={btnActive}
                type="email"
                name="email2"
                className="form-control"
              />

              <label htmlFor="anio" className="form-label">
                Año
              </label>
              <input type="text" name="anio" className="form-control" />
              <label htmlFor="titulo_tesis">titulo de tesis</label>
              <input type="text" name="titulo_tesis" className="form-control" />
              <label htmlFor="nombre_asesor">nombre del asesor</label>
              <input
                type="text"
                name="nombre_asesor"
                className="form-control"
              />
              <label htmlFor="dni_asesor">dni del asesor</label>
              <input type="text" name="dni_asesor" className="form-control" />
              <label htmlFor="orcid"> orcid del asesor </label>
              <input type="text" name="orcid" className="form-control" />
              <label htmlFor="nombre_jurado1">Jurado 1</label>
              <input
                type="text"
                name="nombre_jurado1"
                className="form-control"
              />
              <label htmlFor="nombre_jurado2">Jurado 2</label>
              <input
                type="text"
                name="nombre_jurado2"
                className="form-control"
              />
              <label htmlFor="nombre_jurado3">Jurado 3</label>
              <input
                type="text"
                name="nombre_jurado3"
                className="form-control"
              />
              <label htmlFor="resumen_tesis">Resumen de la tesis </label>
              <input
                type="text"
                name="resumen_tesis"
                className="form-control"
              />
              <label htmlFor="palabra_clave">Palabra clave </label>
              <input
                type="text"
                name="palabra_clave"
                className="form-control"
              />
              <label htmlFor="campo_investigacion">
                Campo de investigacion
              </label>
              <input
                type="text"
                name="campo_investigacion"
                className="form-control"
              />
              <label htmlFor="facultad">Facultad</label>
              <input type="text" name="facultad" className="form-control" />
              <label htmlFor="modalidad">Modalidad </label>
              <input type="text" name="modalidad" className="form-control" />
              <label htmlFor="tesis_digital">Tesis digital</label>
              <input
                type="file"
                name="tesis_digital"
                className="form-control"
              />
              <label htmlFor="declaracion_jurada">Declaracion jurada</label>
              <input
                type="file"
                name="declaracion_jurada"
                className="form-control"
              />
              <label htmlFor="autorizacion_publicacion">
                autorizacion y publicacion{" "}
              </label>
              <input
                type="file"
                name="autorizacion_publicacion"
                className="form-control"
              />

              <div className="btn-group mt-3">
                <button
                  disabled={btnActive}
                  type="submit"
                  className="btn btn-success"
                >
                  Enviar
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
