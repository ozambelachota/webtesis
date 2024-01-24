import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { Button } from "react-bootstrap";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";
const Login = () => {
  const handleLogin = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
  };
  const setUer = useUserStore((state) => state.setUser);

  const navigate = useNavigate();

  const signInWithGoogle = async (googleProvider) => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
    if(res){
      setUer({
        name: res.user.displayName,
        email: res.user.email,
        photo: res.user.photoURL,
      });
      navigate("/admin");
    }
    
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-50 my-5 mx-auto">
      <div className="card  bg-info opacity-75 flex justify-content-center align-items-center">
        <div className="card-title">Bienvenido </div>
        <div className="card-body">
          <form>
            <label htmlFor="username">Username</label>
            <input className="form-control" type="text" id="username" />
            <label htmlFor="password">Password</label>
            <input className="form-control" type="password" id="password" />
            <button type="submit" className="btn btn-success hover my-2">
              Login
            </button>
          </form>
        </div>
        <div className="card-footer">
          <Button variant="primary" onClick={handleLogin}>
            Login con Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
