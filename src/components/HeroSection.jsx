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
        <div
          style={{
            backgroundImage: `url(${leftHorse})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          className="w-full md:w-[50%] bg-[#ccccca] bg-cover bg-center bg-no-repeat relative"
        >
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
        <div
          style={{
            backgroundImage: `url(${rightHorse})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPositionY: "bottom",
          }}
          className="w-full md:w-[50%] bg-[#323232] bg-cover bg-center relative"
        >
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
