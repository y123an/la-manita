import React from "react";
import { FaDownload } from "react-icons/fa";
import MicBox from "../assets/Acercade/mic_box.png";
import LaManita from "../assets/pdfs/La Manita Preguntas Frecuentes .pdf";
import cited from "../assets/pdfs/CITED FAQ ABOUT PSILOCYBIN.pdf";
import protocol from "../assets/pdfs/PROTOCOLO DE MICRODOSIS DE PAUL STAMETS.pdf";

const Acercade = () => {
  const files = [
    {
      name: "PREGUNTAS FRECUENTES Y RESPUESTAS CON CITAS (PDF)",
      file: LaManita,
    },
    {
      name: "PROTOCOLO DE MICRODÓSIS DE PAUL STAMETS (PDF)",
      file: protocol,
    },
    {
      name: "IMÁGENES ILUSTRATIVAS PARA INSTAGRAM (JPG)",
      file: null,
    },
    {
      name: "VIDEO DEMOSTRANDO EL PRODUCTO Y SUS USOS (MP4)",
      file: null,
    },
  ];
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
            {files.map((file, index) => (
              <DownloadItem title={file.name} file={file.file} key={index} />
            ))}
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

const DownloadItem = ({ title, file }) => (
  <a
    href={file}
    className="flex text-gray-400 gap-10 items-center"
    download // Add download attribute to make the link downloadable
  >
    <span className="">
      <FaDownload />
    </span>
    {title}
  </a>
);

export default Acercade;
