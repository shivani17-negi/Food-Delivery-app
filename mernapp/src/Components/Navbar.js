import React from 'react'
//import {Link, useNavigate } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate();

const handleLogout=()=>{
  localStorage.removeItem("authToken");
  navigate("/login");
}



  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-Itallic" to="/">
            Go Food
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
              {(localStorage.getItem("authToken"))?  <Link className="nav-link " aria-current="page" to="/">
                my orders
              </Link>
              :" "
              }

              {(!localStorage.getItem("authToken"))?
              <div className="d-flex">
                <Link className="btn bg-white text-success mx-1" to="/Login">
                  Login
                </Link>
                <Link
                  className="btn bg-white text-success mx-1"
                  to="/createuser"
                >
                  SignUp
                </Link>
              </div>
              :
              <div>
                <div className='btn bg-white text-success mx-2'> mycart </div>
               
              <div className='btn bg-white text-danger mx-2'onClick={handleLogout}>logout </div>
              </div>
              }
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
