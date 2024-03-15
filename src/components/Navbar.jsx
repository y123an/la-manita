import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import logo from "../assets/navbar/logo.svg";

export default function Navbar() {
  return (
    <div className=" w-full h-[70px] flex justify-center mx-auto">
      <div className="w-[55%] h-[auto] flex justify-start items-center bg-[#ccccca] ps-12">
        <img src={logo} className="w-[150px] h-auto" alt="logo" />
      </div>
      <div className="flex justify-between items-center gap-1 bg-[#333] w-[45%] h-auto px-12 text-white">
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
    </div>
  );
}
