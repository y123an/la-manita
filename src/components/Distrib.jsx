import React from "react";
import women from "../assets/Ventajas/women.svg";
import rock from "../assets/Ventajas/rock.svg";
import product1 from "../assets/hero-section/micro-product.webp";
import coca from "../assets/products/coca.png";
import zpurple from "../assets/products/zpurple.png";
import zblack from "../assets/products/zblack.png";
import zgold from "../assets/products/zgold.png";
import zwine from "../assets/products/zwine.png";
import zyellowblack from "../assets/products/zyellowblack.png";

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
          <div className="w-full md:w-1/2 ">
            <div className="flex gap-5 flex-col p-10 justify-center items-center bg-[#CCCCCA]">
              <div className="h-[200px] overflow-hidden">
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
              <div className="h-[200px] overflow-hidden">
                <img src={coca} alt="" className="w-[500px]" />
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
      <div className="flex flex-col items-center gap-10 justify-center">
        <div className="w-full md:w-1/2 ">
          <div className="flex gap-5 flex-col p-10 justify-center items-center bg-[#CCCCCA]">
            <div className="h-[200px] overflow-hidden">
              <img src={zpurple} alt="" className="w-[700px]" />
            </div>
            <p className="text-4xl">ROL DE CANELA</p>
            <p className="text-xl">
              1.25g de Psilocibe Cubensis por sobre
              <br />
              (1 sobre Macro = 4-6 horas con visuales)
            </p>
            <p className="">por sobre</p>
          </div>
          <div className="bg-[#323232] text-white flex justify-center flex-col items-center gap-5 p-4">
            <p>$200</p>
            <p>AÑADIR</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="flex gap-5 flex-col p-10 justify-center items-center bg-[#CCCCCA]">
            <div className="h-[200px] overflow-hidden">
              <img src={zblack} alt="" className="w-[700px]" />
            </div>
            <p className="text-4xl">CHOCOLATE BLANCO</p>
            <p className="text-xl">
              1.25g de Psilocibe Cubensis por sobre
              <br />
              (2 sobres Macro = 6-8 horas del mejor viaje de tu vida.
              ¡Prepárate!)
            </p>
            <p className="">por sobre</p>
          </div>
          <div className="bg-[#323232] text-white flex justify-center flex-col items-center gap-5 p-4">
            <p>$200</p>
            <p>AÑADIR</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="flex gap-5 flex-col p-10 justify-center items-center bg-[#CCCCCA]">
            <div className="h-[200px] overflow-hidden">
              <img src={zwine} alt="" className="w-[700px]" />
            </div>
            <p className="text-4xl">CARAMELO</p>
            <p className="text-xl">
              1.25g de Psilocibe Cubensis por sobre
              <br /> (Vacía el polvo en un café o te tibio y tómalo de un trago)
            </p>
            <p className="">por sobre</p>
          </div>
          <div className="bg-[#323232] text-white flex justify-center flex-col items-center gap-5 p-4">
            <p>$200</p>
            <p>AÑADIR</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="flex gap-5 flex-col p-10 justify-center items-center bg-[#CCCCCA]">
            <div className="h-[200px] overflow-hidden">
              <img src={zgold} alt="" className="w-[700px]" />
            </div>
            <p className="text-4xl">PAY DE LIMÓN</p>
            <p className="text-xl">
              1.25g de Psilocibe Cubensis por sobre
              <br />
              (Texas Yellow Cap, Z-Strain y Storm Troopers en cada formulación)
            </p>
            <p className="">por sobre</p>
          </div>
          <div className="bg-[#323232] text-white flex justify-center flex-col items-center gap-5 p-4">
            <p>$200</p>
            <p>AÑADIR</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="flex gap-5 flex-col p-10 justify-center items-center bg-[#CCCCCA]">
            <div className="h-[200px] overflow-hidden">
              <img src={zyellowblack} alt="" className="w-[700px]" />
            </div>
            <p className="text-4xl">CACAO DORADO (KETO VEGANO)</p>
            <p className="text-xl">
              1.25g de Psilocibe Cubensis por sobre
              <br />
              (Sin calorias. ¡Viaja sin afectar la dieta!)
            </p>
            <p className="">por sobre</p>
          </div>
          <div className="bg-[#323232] text-white flex justify-center flex-col items-center gap-5 p-4">
            <p>$200</p>
            <p>AÑADIR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distrib;
