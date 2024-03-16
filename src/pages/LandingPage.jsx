import { Link } from "react-router-dom";
import logo from "../assets/lamanita.svg";
import mexicoFlag from "../assets/landing-page/mexico.svg";
import colombiaFlag from "../assets/landing-page/colombia.svg";
import costaricaFlag from "../assets/landing-page/costarica.svg";
import venezuelaFlag from "../assets/landing-page/venezuela.svg";
import argentinaFlag from "../assets/landing-page/argentina.svg";
import panamaFlag from "../assets/landing-page/panama.svg";

export default function LandingPage() {
  return (
    <div className="flex flex-col bg-transparent">
      <div className="flex flex-col justify-center items-center h-screen bg-[#999] px-6 md:px-12">
        <img src={logo} className="w-3/4 md:w-1/2 h-auto" alt="logo" />
        <h1 className="text-3xl md:text-5xl tracking-widest uppercase text-white mt-4 md:mt-8">
          Seleccione un país
        </h1>
        <div className="flex flex-wrap justify-center items-center my-8 w-full">
          <CountryLink flag={mexicoFlag} name="México" />
          <CountryLink flag={colombiaFlag} name="Colombia" />
          <CountryLink flag={costaricaFlag} name="Costa Rica" />
          <CountryLink flag={venezuelaFlag} name="Venezuela" />
          <CountryLink flag={argentinaFlag} name="Argentina" />
          <CountryLink flag={panamaFlag} name="Panamá" />
        </div>
      </div>
    </div>
  );
}

const CountryLink = ({ flag, name }) => (
  <div className="flex flex-col justify-center items-center w-1/2 sm:w-1/3 md:w-1/6 p-4">
    <Link to="/home" className="flex flex-col justify-center items-center">
      <img
        className="cursor-pointer w-2/3 h-auto"
        src={flag}
        alt={`${name} flag`}
      />
      <p className="uppercase bg-red-500 mt-4 py-1 px-2 text-white text-sm">
        {name}
      </p>
    </Link>
  </div>
);
