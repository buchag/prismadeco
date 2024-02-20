import Image from "next/image";
import Link from "next/link";
import carritovacio from "../../images/emptycart.svg"

const Nav = (props) => {
  const { visivel } = props;
  return (

    /* La info del carrito se muestra de acuerdo a "visivel". Este div se muestra cuando el carrito esta vacio*/
    /* Falta un condicional cuando el carrito tiene uno o mas productos */

    
    <div className="flex relative">
      <div
        className={`${visivel ? "w-full sm:w-1/3" : "w-0"} font-mono transition-width duration-500 flex flex-col font-bold h-screen fixed pt-0 top-0 right-0 bg-slate-50 items-center`}
      >
        <div className={`${visivel ? "flex" : "hidden"} text-black w-full sm:w-90 m-0 p-3 bg-[#727D71] text-xl`}>CARRITO DE COMPRAS</div>

        <p className={`${visivel ? "flex" : "hidden"} text-black w-full sm:w-90 pt-20 pb-10 text-xl text-center justify-center items-center`}>¡Tu carrito está vacio!</p>

        <div className={`${visivel ? "flex" : "hidden"} pb-10`}>
          <Image src={carritovacio} alt="cerrar" width={150} height={150} />
        </div>

        <div className={`${visivel ? "flex" : "hidden"} text-black text-xl w-full sm:w-80 text-center justify-center items-center hover:text-[#727D71]`}>
          <Link href="#productos">Ver productos</Link>
        </div>

      </div>
    </div>
  );
}

export default Nav;


