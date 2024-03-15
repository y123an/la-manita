import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import logo from "../assets/navbar/logo.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[70px] flex justify-between md:justify-center  md:mx-auto">
      <div className="md:w-[55%] w-full h-[auto] flex justify-start items-center bg-[#ccccca] ps-12">
        <img src={logo} className="w-[150px] h-auto" alt="logo" />
      </div>
      <div className="hidden md:flex justify-between items-center gap-1 bg-[#333] w-[45%] h-auto px-12 text-white">
        <Link to="/acerca" className="">
          Acerca de
        </Link>
        <Link to="/ventajas" className="">
          Ventajas
        </Link>
        <Link to="/product" className="">
          Productos
        </Link>
        <Link to="/distribuidores" className="">
          Distribuidores
        </Link>
        <Link to="/dudas" className="">
          Dudas y Descargas
        </Link>
        <Link to="/shop" className="">
          <FaShoppingCart />
        </Link>
      </div>
      <div className="md:hidden bg-[#ccccca]  p-3 flex justify-center items-center">
        {isMenuOpen && (
          <div className="md:hidden absolute z-30 top-[60px]  left-0 right-0 bg-[#333] py-4 px-2">
            <div className="flex flex-col space-y-2">
              <Link className="text-white">Acerca de</Link>
              <Link className="text-white">Ventajas</Link>
              <Link className="text-white">Productos</Link>
              <Link className="text-white">Distribuidores</Link>
              <Link className="text-white">Dudas y Descargas</Link>
              <Link className="text-white">
                <FaShoppingCart />
              </Link>
            </div>
          </div>
        )}
        {isMenuOpen ? (
          <FaTimes className="text-xl" onClick={toggleMenu} />
        ) : (
          <FaBars className="text-xl" onClick={toggleMenu} />
        )}
      </div>
    </div>
  );
}
