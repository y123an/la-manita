import Navbar from "./Navbar";
import macro from "../assets/hero-section/macro-product.svg";
import micro from "../assets/hero-section/micro-product.webp";
import rightHorse from "../assets/hero-section/right-horse.jpg";
import leftHorse from "../assets/hero-section/left-horse.png";

const HeroSection = () => {
  return (
    <div className="w-full h-[100vh]">
      <Navbar />
      <div className="w-full h-full flex">
        <div className="w-[55%] h-full flex flex-col justify-center items-center bg-[#ccccca] bg-[url('../assets/hero-section/left-horse.jpg')] bg-cover bg-center bg-no-repeat">
          <img src={leftHorse} alt="" className="absolute w-[550px]" />

          <h2 className="uppercase text-white text-[3rem] z-10 bg-red-100 py-0">
            Ma<span className="text-black">cro</span>
          </h2>
          <img
            src={macro}
            className="w-[80%] mt-8 z-10"
            alt="left product image"
          />
        </div>
        <div className="w-[45%] h-full flex flex-col justify-center items-center gap-16 bg-[#323232] bg-cover bg-center">
          <img src={micro} className="w-[80%]" alt="right product image" />
          <h2 className="uppercase text-white text-[3rem] bg-red-100 py-0">
            Mi<span className="text-gray-300">cro</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
