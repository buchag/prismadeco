import Image from "next/image";
import Link from "next/link";
import carritovacio from "../../images/emptycart.svg"
import { montserrat } from "@/styles/fonts";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import CartItembar from "./CartItembar";

const Nav = (props) => {

  const { visivel, setVisivel } = props;
  const { db } = useContext(CartContext);
  const totalCompra = db.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  return (

    <div className="flex relative">
      <div
        className={`${visivel ? "w-full sm:w-auto" : "w-0"} font-mono transition-width duration-500 flex flex-col font-bold h-screen fixed pt-0 top-0 right-0 bg-slate-50 items-center`}
      >
        <div className={`${visivel ? "flex" : "hidden"} text-black w-full sm:w-90 m-0 p-3 bg-[#727D71] text-xl`}>CARRITO DE COMPRAS</div>
        <div className={`${visivel ? "flex " : "hidden"} flex flex-col items`}>
          {
            db.length > 0 ? (
              <>
                <div>
                  <h2 className='mx-4 my-3 text-xl' style={montserrat.style}>Tus artículos:</h2>
                </div>
                <hr className="border-stone-300"></hr>
                <div className="text gap-x-4">
                  {db.map((cartItem, id) => <CartItembar key={id} cartItem={cartItem} />)}
                </div>
                <div className="total mx-4 my-3 text-xl" style={montserrat.style}>
                  <h2>Total a pagar = ${totalCompra}</h2>
                </div>
                <div className={`${visivel ? "flex" : "hidden"} my-5`}>
                  <div className="btn flex flex-row justify-between">
                    <a href="#productos" onClick={() => setVisivel(!visivel)} className="w-auto mx-8 text-nowrap rounded-lg text-grey text-center bg-slate-100 cursor-pointer font-bold uppercase text-sm py-2 shadow hover:shadow-lg mb-3 px-2" style={montserrat.style}>
                      <b>Seguir comprando</b>
                    </a>
                    <button className="rounded-lg mx-8 w-auto text-nowrap text-white bg-yellow-500 active:bg-yellow-700 cursor-pointer font-bold uppercase text-sm py-2 shadow hover:shadow-lg mb-3 px-2" style={montserrat.style}>
                      <b>Ver medios de pago</b>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className={`${visivel ? "flex" : "hidden"} text-black w-full sm:w-90 pt-20 pb-10 text-xl text-center justify-center items-center`}>¡Tu carrito está vacio!</p>

                <div className={`${visivel ? "flex" : "hidden"} pb-10 justify-center`}>
                  <Image src={carritovacio} alt="cerrar" width={150} height={150} />
                </div>
                <div className={`${visivel ? "flex" : "hidden"} text-black text-xl w-full sm:w-80 text-center justify-center items-center hover:text-[#727D71]`}>
                  <Link href="#productos" onClick={() => setVisivel(!visivel)}>Ver productos</Link>
                </div>
              </>
            )
          }
        </div>
      </div>
      <style jsx>{`
      @media screen and (max-width: 576px){
          .btn {
            flex-direction: column;
            margin-left: 4rem
          }
          h2 {
            
          }
      `}</style>
    </div>
  );
}

export default Nav;


