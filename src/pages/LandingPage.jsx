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
    <div className="flex  flex-col bg-transparent">
      <div className="flex flex-col justify-center items-center h-[100vh] bg-[#999] px-12">
        <img src={logo} className="w-[50%] h-auto" alt="logo" />
        <h1 className="text-[3rem] tracking-widest uppercase text-white">
          Seleccione un pais
        </h1>
        <div className="flex justify-center items-center my-8 mx-0 px-0 w-[70%]">
          <div className="flex flex-col justify-center items-center">
            <Link
              to="/home"
              className="flex flex-col justify-center items-center"
            >
              <img
                className="cursor-pointer w-[40%] h-auto"
                src={mexicoFlag}
                alt="mexico flag"
              />
              <p className="uppercase bg-red-100 mt-4">colombia</p>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link
              to="/home"
              className="flex flex-col justify-center items-center"
            >
              <img
                className="cursor-pointer w-[40%] h-auto"
                src={colombiaFlag}
                alt="colombia flag"
              />
              <p className="uppercase bg-red-100 mt-4">colombia</p>
            </Link>
          </div>
          <div>
            <Link
              to="/home"
              className="flex flex-col justify-center items-center"
            >
              <img
                className="cursor-pointer w-[40%] h-auto"
                src={costaricaFlag}
                alt="costa rica flag"
              />
              <p className="uppercase bg-red-100 mt-4">costa rica</p>
            </Link>
          </div>
          <div>
            <Link
              to="/home"
              className="flex flex-col justify-center items-center"
            >
              <img
                className="cursor-pointer w-[40%] h-auto"
                src={venezuelaFlag}
                alt="venezuela flag"
              />
              <p className="uppercase bg-red-100 mt-4">venezuela</p>
            </Link>
          </div>
          <div>
            <Link
              to="/home"
              className="flex flex-col justify-center items-center"
            >
              <img
                className="cursor-pointer w-[40%] h-auto"
                src={argentinaFlag}
                alt="argentina flag"
              />
              <p className="uppercase bg-red-100 mt-4">argentina</p>
            </Link>
          </div>
          <div>
            <Link
              to="/home"
              className="flex flex-col justify-center items-center"
            >
              <img
                className="cursor-pointer w-[40%] h-auto"
                src={panamaFlag}
                alt="panama flag"
              />
              <p className="uppercase bg-red-100 mt-4">panama</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
