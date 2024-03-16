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
    <div className="w-full h-[100px] flex justify-between md:justify-center  md:mx-auto">
      <div className="md:w-[50%] w-full h-[auto] flex justify-start items-center ps-12   bg-[#ccccca] ">
        <img src={logo} className="w-[200px]  h-auto" alt="logo" />
      </div>
      <div className="hidden md:flex justify-between items-center gap-1 bg-[#333] w-[50%] h-auto px-12 text-white">
        <Link to="/home" className="">
          Home
        </Link>
        <Link to="/gallery" className="">
          Gallery
        </Link>
        <Link className="">Acerca de</Link>
        <Link className="">Ventajas</Link>
        <Link className="">Productos</Link>
        <Link className="">Distribuidores</Link>
        <Link className="">Dudas y Descargas</Link>
        <Link className="">
          <FaShoppingCart />
        </Link>
      </div>
      <div className="md:hidden bg-[#ccccca]  p-3 flex justify-center items-center">
        {isMenuOpen && (
          <div className="md:hidden absolute z-30 top-[60px]  left-0 right-0 bg-[#333] py-4 px-2">
            <div className="flex flex-col space-y-2">
              <Link to={"gallery"} className="text-white">
                Gallery
              </Link>
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
