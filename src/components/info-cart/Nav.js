import Image from "next/image";
import Link from "next/link";
import carritovacio from "../../images/emptycart.svg"

const Nav = (props) => {
  const { visivel } = props;
  return (
    <div className="flex relative ">
      <ul
        className={`${visivel ? "w-full sm:w-1/3" : "w-0"} font-mono transition-width duration-500 flex flex-col font-bold h-screen fixed pt-0 top-0 right-0 bg-slate-50 text-lg`}
      >
        {/* text- white (color del texto) sm:w-64 (ancho del elemento) m-1 (margen) */}
        <li className={`${visivel ? "flex" : "hidden"} text-white w-full sm:w-90 m-2 p-3 bg-black`}>CARRITO DE COMPRAS</li>
        <li className={`${visivel ? "flex" : "hidden"} text-black w-full sm:w-80 pt-20 pb-10`}>¡Tu carrito está vacio!</li>

        <div className={`${visivel ? "flex" : "hidden"} pb-10`}>
          <Image src={carritovacio} alt="cerrar" width={100} height={100} />
        </div>

        <li className={`${visivel ? "flex" : "hidden"} text-black w-full sm:w-80`}>
          <Link href="#productos">Ver productos</Link>
        </li>
        

      </ul>
    </div>
  );
};

export default Nav;

