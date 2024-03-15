import Navbar from "./Navbar";
import macro from "../assets/hero-section/macro-product.svg";
import micro from "../assets/hero-section/micro-product.webp";
import rightHorse from "../assets/hero-section/right-horse.png";
import leftHorse from "../assets/hero-section/left-horse.png";

const HeroSection = () => {
  return (
    <div className="w-full h-[100vh]">
      <Navbar />
      <div className="w-full h-full flex">
        <div className="w-[55%] h-full flex flex-col gap-10 justify-center items-center bg-[#ccccca]  bg-cover bg-center bg-no-repeat">
          <img src={leftHorse} alt="" className="absolute w-4/12" />
          <h2 className="uppercase text-white mt-16 text-[3rem] z-10 bg-[#f4cec9] py-0">
            Ma<span className="text-black">cro</span>
          </h2>
          <img src={macro} className="w-[70%] z-10" alt="left product image" />
        </div>
        <div className="w-[45%] flex flex-col  items-center gap-16 bg-[#323232] bg-cover bg-center">
          <img
            src={micro}
            className="w-[80%] mt-14 z-10"
            alt="right product image"
          />
          <h2 className="uppercase text-white z-10 text-[3rem] bg-red-100 py-0">
            Mi<span className="text-gray-300">cro</span>
          </h2>
          <img
            src={rightHorse}
            alt=""
            className="absolute top-[470px] w-4/12"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
