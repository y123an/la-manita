import Artboard32 from "../assets/Ventajas/Artboard_32.svg";
import Artboard33 from "../assets/Ventajas/Artboard_33.svg";
import Artboard34 from "../assets/Ventajas/Artboard_34.svg";
import Artboard35 from "../assets/Ventajas/Artboard_35.svg";
import Artboard36 from "../assets/Ventajas/Artboard_36.svg";
import Artboard37 from "../assets/Ventajas/Artboard_37.svg";

const Ventajas = () => {
  return (
    <div className="flex gap-10 items-center justify-center">
      <div className="flex gap-10 flex-col bg-slate-300 p-20">
        <div>
          <div className="flex justify-center">
            <h1 className="text-4xl">VEnTAJas</h1>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-10 ">
            <div className="flex gap-4">
              <img src={Artboard32} alt="" className="w-[120px]" />
              <div className="w-[200px] flex flex-col gap-3">
                <p className="text-3xl font-semibold">COMPACTO</p>
                <p>
                  Caben 2 sobres Micro en el 50 bolsillo del jean. Caben 20
                  Macro en una bolsa de noche. Caben 200 Macro y
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <img src={Artboard33} alt="" className="w-[120px]" />
              <div className="w-[200px] flex flex-col gap-3">
                <p className="text-3xl font-semibold">DISCRETO</p>
                <p>
                  Diseñado para ser confudido con un saborizante de café, viaja
                  y envía tranquilamente.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <img src={Artboard34} alt="" className="w-[120px]" />
              <div className="w-[200px]">
                <p className="text-3xl font-semibold">SABROSO</p>
                <p>
                  El polvo sólo sabe agradable. Mezclado con café o te, sólo se
                  percibe el endulzante nat- ural. ¡Adiós a sabores fuertes!
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <img src={Artboard35} alt="" className="w-[120px]" />
              <div className="w-[200px]">
                <p className="text-3xl font-semibold"> ESTÉRIL</p>
                <p>
                  Métodos de cultivo avanza- dos, laboratorios abastecidos y
                  maquinaria de última gen- eración nos ha ganado la
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <img src={Artboard36} alt="" className="w-[120px]" />
              <div className="w-[200px] flex flex-col">
                <p className="text-3xl font-semibold">DURADERO</p>
                <p>
                  El sobre proteje de rayos UV y oxígeno, que degradan la
                  molécula. Consume con con- fianza 2 años despues de la
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <img src={Artboard37} alt="" className="w-[120px]" />
              <div className="w-[200px] flex flex-col gap-3">
                <p className="text-3xl font-semibold">POTENTE</p>
                <p>
                  Cada sobre contiene la mezcla de 3 cepas mágicas, permitiendo
                  el rango máximo de experiencia:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ventajas;
