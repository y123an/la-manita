import React from "react";
import { FaDownload } from "react-icons/fa";

const Descargas = () => {
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
          <DownloadItem title="PREGUNTAS FRECUENTES Y RESPUESTAS CON CITAS (PDF)" />
          <DownloadItem title="PROTOCOLO DE MICRODÓSIS DE PAUL STAMETS (PDF)" />
          <DownloadItem title="IMÁGENES ILUSTRATIVAS PARA INSTAGRAM (JPG)" />
          <DownloadItem title="VIDEO DEMOSTRANDO EL PRODUCTO Y SUS USOS (MP4)" />
        </div>
      </div>
    </div>
  );
};

export default Descargas;

const DownloadItem = ({ title }) => (
  <p className="flex text-gray-300 gap-10 items-center">
    <span className="">
      <FaDownload />
    </span>
    {title}
  </p>
);
