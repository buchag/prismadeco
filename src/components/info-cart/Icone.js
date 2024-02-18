

import Image from "next/image";
import cerrar from "../../images/cerrar.svg"
import carrito from "../../images/shopping_cart.png"

const Icone = (props) => {
  const { setVisivel, visivel } = props;

  return (
    <>
      <div
        className={`flex flex-col fixed top-11 right-8 z-40 p-5 cursor-pointer`}
        onClick={() => setVisivel(!visivel)}
      >
        <div className={`${visivel ? "hidden" : "flex"}`}>
          <Image src={carrito} alt="Logo carrito" width={30} height={30} />
        </div>
        <p className={`${visivel ? "hidden" : "numero"}`}>0</p>

        <div className={`${visivel ? "flex" : "hidden"}`}>
          <Image src={cerrar} alt="cerrar" width={23} height={23} />
        </div>

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
