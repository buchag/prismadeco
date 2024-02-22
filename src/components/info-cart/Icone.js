import Image from "next/image";
import cerrar from "../../images/cerrar.svg"
import carrito from "../../images/shopping_cart.png"
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

const Icone = (props) => {

  const { setVisivel, visivel } = props;

  const { totalRegistros } = useContext(CartContext);
  
  return (
    <>
      <div
        className={`flex flex-col fixed top-14 right-14 z-40 p-5 cursor-pointer md:top-11 md:right-8`}
        onClick={() => setVisivel(!visivel)}
      >
        <div className={`${visivel ? "hidden" : "flex"}`}>
          <Image src={carrito} alt="Logo carrito" width={30} height={30} /> 
          <p className={`${visivel ? "hidden" : "numero"}`}>{totalRegistros}</p>
        </div>

        <div className={`${visivel ? "flex" : "hidden"} fixed -top-2 right-2 z-40 p-5 cursor-pointer`}>
          <Image src={cerrar} alt="cerrar" width={23} height={23} />
        </div>

        {/* Estilos del numero, que muestra la cantidad de articulos del carrito */}
        <style jsx>{`
        .numero {
          position: absolute;
          background-color: #727D71;
          width: 1.4rem;
          height: 1.4rem;
          border-radius: 50%;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.8rem;
          top: 10px;
          right: 8px;
          padding: 0.7rem; 
          font-family: 'Roboto', sans-serif;     
        }
      `}</style>
      </div>
    </>
  );
};

export default Icone;
