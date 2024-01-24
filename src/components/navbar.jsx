import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";
function Navbar() {
  const user = useUserStore((state) => state.u);
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3">
      <a
        href="/"
        className="d-flex align-items-center my-4  me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Tesis</span>
      </a>

      <ul className="nav nav-pills flex-column mb-auto gap-2">
        <li className="nav-item">
          <Link to="/revisar" className="nav-link active" aria-current="page">
            REVISAR
          </Link>
        </li>
        <li>
          <Link to="/notificacion" className="nav-link text-white">
            NOTIFICACIONES
          </Link>
        </li>
        <li>
          <Link to="/reporte" className="nav-link text-white">
            REPORTESGT
          </Link>
        </li>
        <li>
          <Link to="/manual" className="nav-link text-white">
            MANUAL
          </Link>
        </li>
      </ul>

      <div className="">
        <Link to="#" className="d-flex align-items-center text-white ">
          <img
            src={user.photo}
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>sign out</strong>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
