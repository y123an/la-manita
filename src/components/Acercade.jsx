import React from "react";
import { FaDownload } from "react-icons/fa";
import MicBox from "../assets/Acercade/mic_box.png";

const Acercade = () => {
  return (
    <div className="flex flex-col w-full p-8 md:p-36 gap-8 md:gap-20">
      <div className="w-full flex">
        <h1 className="text-4xl">
          <span className="uppercase">
            Acer<span className="text-gray-200">ca</span>
          </span>{" "}
          de
        </h1>
      </div>
      <div className="flex flex-col gap-5 md:gap-10">
        <p className="w-full md:w-[50%] text-lg font-semibold">
          Históricamente se ha comprobado que los hongos mágicos (Psilocibe) son
          responsables por varios avances mentales de nuestra especie. Aho
          científicamente se está comprobando la efectividad de esta molécula en
          curar a pacientes con drogadicción, depresión, ansiedad y
          anti-sociabilidad, entre otras. ¡Perciba cambios positivos desde la
          primer toma!
        </p>
        <div className="flex flex-col gap-5 font-semibold">
          <DownloadItem title="PREGUNTAS FRECUENTES Y RESPUESTAS CON CITAS (PDF)" />
          <DownloadItem title="PROTOCOLO DE MICRODÓSIS DE PAUL STAMETS (PDF)" />
          <DownloadItem title="IMÁGENES ILUSTRATIVAS PARA INSTAGRAM (JPG)" />
          <DownloadItem title="VIDEO DEMOSTRANDO EL PRODUCTO Y SUS USOS (MP4)" />
        </div>
        <img
          src={MicBox}
          alt=""
          className="hidden md:block absolute top-[900px] left-[900px] -z-10"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-20">
        <div className="flex">
          <p className="bg-black py-2 px-5 text-white">
            REPRODUZCA EL VIDEO E INFORMESE
          </p>
        </div>
        <p className="w-full md:w-[50%]">
          <span className="text-yellow-400">Dato curioso:</span> Fué vuelta
          ilegal en 1973 precisamente porque libera la mente de sistemas de
          pensar que atan.
        </p>
      </div>
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
