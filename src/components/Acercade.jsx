import React from "react";
import { FaDownload } from "react-icons/fa";
import MicBox from "../assets/Acercade/mic_box.png";

const Acercade = () => {
  return (
    <div className="flex justify-center gap-20 p-10">
      <div className="flex justify-center  flex-col w-[600px] gap-10 md:gap-10">
        <div className="flex justify-center">
          <h1 className="text-[50px] border-2 border-black p-1">
            <span className="uppercase">
              Acer<span className="text-gray-200">ca</span>
            </span>{" "}
            de
          </h1>
        </div>
        <p className="text-lg font-semibold">
          Históricamente se ha comprobado que los hongos mágicos (Psilocibe
          Cubensis) son responsables por varios avances mentales de nuestra
          especie. Ahora, científicamente se está comprobando la efectividad de
          esta molécula en curar a pacientes con drogadicción, depresión,
          ansiedad y anti-sociabilidad, entre otras. ¡Sane el pasado y retome su
          esencia!
        </p>
        <div className="gap-5 grid">
          <div className="flex flex-col gap-5 font-semibold">
            <DownloadItem title="PREGUNTAS FRECUENTES Y RESPUESTAS CON CITAS (PDF)" />
            <DownloadItem title="PROTOCOLO DE MICRODÓSIS DE PAUL STAMETS (PDF)" />
            <DownloadItem title="IMÁGENES ILUSTRATIVAS PARA INSTAGRAM (JPG)" />
            <DownloadItem title="VIDEO DEMOSTRANDO EL PRODUCTO Y SUS USOS (MP4)" />
          </div>
          <div className="">
            <div className=" text-center">
              <p className="bg-black py-2 px-5 text-white">
                REPRODUCE EL VIDEO E INFÓRMATE
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src={MicBox} alt="" className="hidden md:block w-[300px]" />
    </div>
  );
};

const DownloadItem = ({ title }) => (
  <p className="flex gap-2 items-center">
    <span className="text-gray-400">
      <FaDownload />
    </span>
    {title}
  </p>
);

export default Acercade;
