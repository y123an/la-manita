import { useSiteStore } from "../context/siteStore";

const ProductCard = ({ id, img, title, detail, price, btnText }) => {
  const addToCart = useSiteStore((store) => store.addToCart);
  const cart = useSiteStore((store) => store.cart);

  console.log(cart);
  return (
    <div className="flex justify-center flex-col items-center gap-10">
      <h1 className="text-4xl md:text-5xl">
        <span className="text-gray-300">MI</span>CRO
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        <div className="w-full md:w-1/2 ">
          <div className="flex gap-5 flex-col p-10 justify-center items-center bg-[#CCCCCA]">
            <div className="h-[200px] overflow-hidden">
              <img src={img} alt="" />
            </div>
            <p className="text-4xl">{title}</p>
            <p className="text-xl">{detail}</p>
            <p className="">por sobre</p>
          </div>
          <div
            onClick={() => addToCart(id)}
            className="bg-[#323232] text-white flex justify-center flex-col items-center gap-5 p-4 cursor-pointer"
          >
            <p>{price}</p>
            <p>{btnText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
