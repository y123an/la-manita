import women from "../assets/Ventajas/women.svg";
import rock from "../assets/Ventajas/rock.svg";
import product1 from "../assets/hero-section/micro-product.webp";
import coca from "../assets/products/coca.png";
import zpurple from "../assets/products/zpurple.png";
import zblack from "../assets/products/zblack.png";
import zgold from "../assets/products/zgold.png";
import zwine from "../assets/products/zwine.png";
import zyellowblack from "../assets/products/zyellowblack.png";
import ProductCard from "./ProductCard";

const Distrib = () => {
  const products = [
    {
      id: 1,
      img: product1,
      title: "CHAI VAINIL-",
      detail: "Caja de 30 sobres con 0.33g (10g)",
      btnText: "AÑADIDO. ACTUALIZAR CANTIDAD DESDE EL CARRITO",
      price: "1,250",
    },

    {
      id: 2,
      img: coca,
      title: "CACAO DORADO",
      detail: "Caja de 30 sobres con 0.33g (10g) por sobre",
      btnText: "AÑADIR",
      price: "1,250",
    },

    {
      id: 3,
      img: zpurple,
      title: "ROL DE CANELA",
      detail:
        "1.25g de Psilocibe Cubensis por sobre (1 sobre Macro = 4-6 horas con visuales)",
      btnText: "AÑADIR",
      price: "200",
    },

    {
      id: 4,
      img: zblack,
      title: "CHOCOLATE BLANCO",
      detail:
        "1.25g de Psilocibe Cubensis por sobre (2 sobres Macro = 6-8 horas del mejor viaje de tu vida. ¡Prepárate!)",
      btnText: "AÑADIR",
      price: "200",
    },

    {
      id: 5,
      img: zwine,
      title: "CARAMELO",
      detail:
        "1.25g de Psilocibe Cubensis por sobre (Vacía el polvo en un café o te tibio y tómalo de un trago)",
      btnText: "AÑADIR",
      price: "200",
    },

    {
      id: 6,
      img: zgold,
      title: "PAY DE LIMÓN",
      detail:
        "1.25g de Psilocibe Cubensis por sobre (Texas Yellow Cap, Z-Strain y Storm Troopers en cada formulación)",
      btnText: "AÑADIR",
      price: "200",
    },
    {
      id: 7,
      img: zyellowblack,
      title: "CACAO DORADO (KETO VEGANO)",
      detail:
        "1.25g de Psilocibe Cubensis por sobre (Sin calorias. ¡Viaja sin afectar la dieta!)",
      btnText: "AÑADIR",
      price: "200",
    },
  ];

  return (
    <div className="flex flex-col gap-10 py-6">
      <div className="hidden md:flex  justify-between overflow-hidden">
        <img src={rock} alt="" className="w-full md:w-1/4 lg:w-1/5 xl:w-1/6" />
        <img src={women} alt="" className="w-full md:w-1/2 lg:w-2/3" />
        <img
          src={rock}
          alt=""
          className="w-full md:w-1/4 lg:w-1/5 xl:w-1/6 rotate-180 -mr-[100px]"
        />
      </div>
      <div className="flex justify-center flex-col items-center gap-10">
        <h1 className="text-4xl md:text-5xl">
          <span className="text-gray-300">MI</span>CRO
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {products.slice(0, 1).map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              img={product.img}
              title={product.title}
              detail={product.detail}
              btnText={product.btnText}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 justify-center">
        {products.slice(2, products.length - 1).map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            img={product.img}
            title={product.title}
            detail={product.detail}
            btnText={product.btnText}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Distrib;
