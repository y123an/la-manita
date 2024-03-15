import Navbar from "./Navbar";
import macro from "../assets/hero-section/macro-product.svg";
import micro from "../assets/hero-section/micro-product.webp";
import rightHorse from "../assets/hero-section/right-horse.png";
import leftHorse from "../assets/hero-section/left-horse.png";

const HeroSection = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex flex-col h-[100vh] md:flex-row">
        <div className="w-full md:w-[55%] bg-[#ccccca] bg-cover bg-center bg-no-repeat relative">
          <img
            src={leftHorse}
            alt=""
            className="absolute w-7/12 top-1/2 transform -translate-y-1/2 left-0 md:left-[200px]"
          />
          <div className="flex flex-col md:pt-[200px] items-center p-8 md:p-16">
            <h2 className="uppercase text-white text-3xl md:text-5xl z-10 bg-[#f4cec9] py-2 px-4">
              Ma<span className="text-black">cro</span>
            </h2>
            <img
              src={macro}
              className="w-full md:max-w-lg mt-8"
              alt="left product image"
            />
          </div>
        </div>
        <div className="w-full md:w-[45%] bg-[#323232] bg-cover bg-center relative">
          <img
            src={rightHorse}
            alt=""
            className="absolute top-[330px] md:w-7/12 transform -translate-y-1/2 w-7/12 right-0 md:top-[580px] "
          />
          <div className="flex flex-col justify-center  items-center p-8 md:p-16">
            <img
              src={micro}
              className="w-full md:max-w-lg mt-8"
              alt="right product image"
            />
            <h2 className="uppercase text-white text-3xl z-10 md:text-5xl bg-red-100 py-2 px-4 mt-8">
              Mi<span className="text-gray-300">cro</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
