import React from "react";

const Distrib = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="text-[70px] flex justify-center items-center">
        <p>Image</p>
      </div>
      <div className="flex justify-center flex-col  items-center gap-10">
        <h1 className="text-4xl">
          <span className="text-gray-300">MI</span>CRO
        </h1>
        <div className="flex justify-center gap-10">
          <div className="">
            <div className="flex gap-1 flex-col p-10 justify-center items-center bg-[#CCCCCA]">
              <p className="text-5xl">Image</p>
              <p className="text-2xl">CHAI VAINIL-</p>
              <p className="font-bold">Caja de 30 sobres con 0.33g</p>
              <p className="font-bold">(10g)</p>
            </div>
            <div className="bg-[#323232] text-white flex justify-center p-4">
              <p>por sobre $1,250</p>
            </div>
          </div>
          <div>
            <div className="flex gap-1 p-10 flex-col justify-center items-center bg-[#CCCCCA]">
              <p className="text-5xl">Image</p>
              <p className="text-2xl">CHAI VAINIL-</p>
              <p className="font-bold">Caja de 30 sobres con 0.33g</p>
              <p className="font-bold">(10g)</p>
            </div>
            <div className="bg-[#323232] text-white flex justify-center p-4">
              <p>por sobre $1,250</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distrib;
