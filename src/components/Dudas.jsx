import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const quotes = [
  "Entendí porque sufrí el accidente, supe que iba estar bién, solté la frus-tración y entré en paz",
  "Entendí porque sufrí el accidente, supe que iba estar bién, solté la frus-tración y entré en paz",
  "Entendí porque sufrí el accidente, supe que iba estar bién, solté la frus-tración y entré en paz",
];
const quotes2 = [
  "Solté el vicio del Crack después de 8 semanas de microdosis y regresé con no...ilia'",
  "Solté el vicio del Crack después de 8 semanas de microdosis y regresé con no...ilia'",
  "Solté el vicio del Crack después de 8 semanas de microdosis y regresé con no...ilia'",
];

const Dudas = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change quote every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4  md:pt-20">
      <div>
        <h1 className="text-4xl text-center">
          LAS EXPERIENCIAS QUE SE PRODUCEN
        </h1>
      </div>
      <div className="flex flex-col md:flex-row ">
        <div className="relative  flex-col gap-4 md:gap-10 w-full  h-[300px] bg-[#CCCCCA] flex justify-center items-center">
          <p className="text-center text-4xl">MACRO</p>
          <div className="text-center">
            <h2 className="text-3xl">"{quotes[currentQuoteIndex]}"</h2>
          </div>
          <div className="absolute bottom-5 left-0 right-0 flex justify-center">
            {quotes.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 mx-2 rounded-full ${
                  index === currentQuoteIndex ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
        <div className="relative flex-col gap-4 md:gap-10 w-full h-[300px] bg-[#323232] text-white flex justify-center items-center">
          <p className="text-center text-4xl">MICRO</p>
          <div className="text-center">
            <h2 className="text-3xl">"{quotes2[currentQuoteIndex]}"</h2>
          </div>
          <div className="absolute bottom-5 left-0 right-0 flex justify-center">
            {quotes.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 mx-2 rounded-full ${
                  index === currentQuoteIndex ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center items-center gap-4">
        <h2 className="text-[50px] text-center">
          DU<span className="text-gray-300">D</span>AS?
        </h2>
        <p className=" p-2  text-xl text-center">INFÓRMESE</p>
        <p className="bg-black p-2 text-lg text-white text-center w-full">
          ENVÍO GRATIS - ORDEN MÍNIMA DE $2,000 - OFRECEMOS TODOS LOS MÉTODOS DE
        </p>
        <h2 className="text-4xl text-center text-[50px]">
          DIS<span className="text-gray-300">TRI</span>BUI
          <span className="text-gray-300">DOR</span>?
        </h2>
        <p className="p-2 text-xl text-center max-w-[100px]">ÚNASE</p>
        <p className="bg-black flex items-center justify-center gap-5 text-lg p-2 w-full text-white text-center">
          CONTACTE +52 55 2799 ABRIR WHATSAPP
          <FaWhatsapp size={30} />
        </p>
      </div>
    </div>
  );
};

export default Dudas;
