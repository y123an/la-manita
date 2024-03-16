import React from "react";
import { FaDownload } from "react-icons/fa";
import LaManita from "../assets/pdfs/La Manita Preguntas Frecuentes .pdf";
import cited from "../assets/pdfs/CITED FAQ ABOUT PSILOCYBIN.pdf";
import protocol from "../assets/pdfs/PROTOCOLO DE MICRODOSIS DE PAUL STAMETS.pdf";

const Descargas = () => {
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
    <div className="grid gap-10 text-white p-10 md:p-20 bg-[#333]">
      <div className="flex justify-center">
        <h1 className="text-4xl md:text-6xl p-1">
          <span className="">
            Des<span className="text-gray-400">CA</span>
          </span>
          RGAS
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-7 font-semibold">
        <div className="grid gap-8">
          {files.map((file, index) => (
            <DownloadItem title={file.name} file={file.file} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Descargas;

const DownloadItem = ({ title, file }) => (
  <a
    href={file}
    className="flex text-gray-300 gap-10 items-center"
    download // Add download attribute to make the link downloadable
  >
    <span className="">
      <FaDownload />
    </span>
    {title}
  </a>
);
