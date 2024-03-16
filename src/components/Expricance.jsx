import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Artboard25 from "../assets/Descargas/Artboard 25.png";
import Artboard26 from "../assets/Descargas/Artboard 26.png";
import Artboard27 from "../assets/Descargas/Artboard 27.png";
import Artboard28 from "../assets/Descargas/Artboard 28.png";
import Artboard29 from "../assets/Descargas/Artboard 29.png";
import Artboard30 from "../assets/Descargas/Artboard 30.png";
import Artboard31 from "../assets/Descargas/Artboard 31.png";

const Expricance = () => {
  const images = [
    {
      img: Artboard25,
      text: "sometext",
    },
    {
      img: Artboard26,
      text: "sometext",
    },
    {
      img: Artboard27,
      text: "sometext",
    },
    {
      img: Artboard28,
      text: "sometext",
    },
    {
      img: Artboard29,
      text: "sometext",
    },
    {
      img: Artboard30,
      text: "sometext",
    },
    {
      img: Artboard31,
      text: "sometext",
    },
  ];
  return (
    <div>
      <div className="bg-[#ccccca] flex justify-center p-2">
        <h1 className="text-4xl md:text-6xl">
          <span className="text-white uppercase">EX</span>Pe
          <span className="text-white uppercase">Rien</span>CI
          <span className="text-white uppercase">AS</span>
        </h1>
      </div>
      <div className="bg-[#f9f9f6] gap-5 md:gap-10 text-gray-400 text-lg md:text-xl flex flex-col justify-center items-center p-5 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
          {images.map((image, index) => (
            <div key={index}>
              {index % 2 !== 0 ? (
                <div className="flex">
                  <div className="bg-black w-[400px] flex justify-center items-center">
                    <p className="">{image.text}</p>
                  </div>
                  <img
                    src={image.img}
                    alt={`Illustration ${index + 1}`}
                    className="w-[400px]"
                  />
                </div>
              ) : (
                <div className="flex">
                  <img
                    src={image.img}
                    alt={`Illustration ${index + 1}`}
                    className="w-[400px]"
                  />
                  <div className="bg-black w-[400px] flex justify-center items-center">
                    <p className="">{image.text}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div>
          <div className="bg-[#ccccca]  flex justify-center p-7">
            <h1 className="text-4xl md:text-6xl">
              <span className="text-white uppercase">Re</span>CONO
              <span className="text-white uppercase">Clmient</span>OS
            </h1>
          </div>
          <div className="flex flex-col p-20 text-lg text-gray-400 gap-5 items-center justify-center">
            <p>CEPAS Y POTENCIA LOGRADA</p>
            <p>PRIMER LUGAR EN EXPO WEED 2023</p>
            <p>ARTÍCULO EN CAÑAMO 2024</p>
          </div>
        </div>
        <p className="bg-black flex items-center justify-center gap-2 md:gap-5 text-lg md:text-xl p-2 w-full text-white text-center">
          CONTACTE +52 55 2799 ABRIR WHATSAPP
          <FaWhatsapp size={30} />
        </p>
      </div>
    </div>
  );
};

export default Expricance;
