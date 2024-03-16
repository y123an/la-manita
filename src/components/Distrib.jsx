import React from "react";
import women from "../assets/Ventajas/women.svg";
import rock from "../assets/Ventajas/rock.svg";
import product1 from "../assets/hero-section/micro-product.webp";

const Distrib = () => {
  return (
    <div className="flex flex-col gap-10 py-6">
      <div className="hidden md:flex  justify-between overflow-hidden">
        <img src={rock} alt="" className="w-full md:w-1/4 lg:w-1/5 xl:w-1/6" />
        <img src={women} alt="" className="w-full md:w-1/2 lg:w-2/3" />
        <img
          src={rock}
          alt=""
          className="w-full md:w-1/4 lg:w-1/5 xl:w-1/6 rotate-180 -mr-[100px]"
        />
      </div>
      <div className="flex justify-center flex-col items-center gap-10">
        <h1 className="text-4xl md:text-5xl">
          <span className="text-gray-300">MI</span>CRO
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div className="w-full md:w-1/2">
            <div className="flex gap-5 flex-col p-10 justify-center items-center bg-[#CCCCCA]">
              <div className="h-[180px] overflow-hidden">
                <img src={product1} alt="" />
              </div>
              <p className="text-4xl">CHAI VAINIL-</p>
              <p className="text-xl">Caja de 30 sobres con 0.33g (10g)</p>
              <p className="">por sobre</p>
            </div>
            <div className="bg-[#323232] text-white flex justify-center flex-col items-center gap-5 p-4">
              <p> $1,250</p>
              <p>AÑADIDO. ACTUALIZAR CANTIDAD DESDE EL CARRITO</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex gap-5 flex-col p-10 justify-center items-center bg-[#CCCCCA]">
              <div className="h-[180px] overflow-hidden">
                <img src={product1} alt="" />
              </div>
              <p className="text-4xl">
                CACAO DORADO
                <br /> (KETO VEGANO)
              </p>
              <p className="text-xl">
                Caja de 30 sobres con 0.33g (10g) por sobre
              </p>
            </div>
            <div className="bg-[#323232] text-white flex justify-center flex-col items-center gap-5 p-4">
              <p> $1,250</p>
              <p>AÑADIR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distrib;
