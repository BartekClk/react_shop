import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar text-white bg-dark">
      <div className="title ms-5">
        <h2>Przykład sklepu</h2>
      </div>
      <div className="links me-5">
        <Link className="me-4 text-white" to="/">Sklep</Link>
        <Link className="text-white" to="/cart">Koszyk</Link>
      </div>
    </div>
  );
};