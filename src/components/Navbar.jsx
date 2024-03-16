import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

import logo from "../assets/navbar/logo.svg";
import { useSiteStore } from "../context/siteStore";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useSiteStore((store) => store.cart);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.map((item) => {
      total += item.quntity;
    });
    setTotalQuantity(total);
  }, [cart]);

  return (
    <div className="w-full sticky z-50 top-0 h-[100px] flex justify-between md:justify-center  md:mx-auto">
      <div className="md:w-[50%] w-full h-[auto] flex justify-start items-center ps-12   bg-[#ccccca] ">
        <Link to={"/"}>
          <img src={logo} className="w-[200px]  h-auto" alt="logo" />
        </Link>
      </div>
      <div className="hidden md:flex justify-between items-center gap-1 bg-[#333] w-[50%] h-auto px-12 text-white">
        <Link className="">Acerca de</Link>
        <Link className="">Ventajas</Link>
        <Link className="">Productos</Link>
        <Link className="">Distribuidores</Link>
        <Link className="">Dudas y Descargas</Link>
        <Link className="text-white flex items-center">
          <FaShoppingCart />
          <div className="bg-red-500 px-2 rounded-full">{totalQuantity}</div>
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
              <Link className="text-white flex">
                <div className="bg-red-500 w-3 h-5 ">{cart.length}</div>
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
