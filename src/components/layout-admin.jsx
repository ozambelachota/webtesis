import { Outlet } from "react-router-dom";
import "./layout.component.css";
import Navbar from "./navbar";

export const LayoutAdmin = () => { 
  return (
    <div style={{width: "100%", height: "100vh"}} className="container bg-gradient">
      <Navbar />
      <main className="content mx-5 text-black">
        <Outlet />
      </main>
    </div>
  );
};
