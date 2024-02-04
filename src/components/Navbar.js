import prisma from "../images/logo_nav.png";
import Image from "next/image";
import { montserrat } from "../styles/fonts";
import Link from "next/link";
import carrito from "../images/shopping_cart.png"
import logocerrar from "../../public/images/cerrar.svg";
import logomenu from "../../public/images/icono.svg";

const Navbar = () => {
  return (
    <>
      <div className="navegacion">
        <Link href="/" className="logo">
          <Image src={prisma} width={55} />
          <h2 className={montserrat.className}>PRISMA DECO</h2>
        </Link>

        <nav>
          <input type="checkbox" id="check" />
          <ul className="menu" style={montserrat.style}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#nosotros">Nosotros</Link>
            </li>
            <li>
              <Link href="#productos">Productos</Link>
            </li>
            <li>
              <Link href="#servicios">Servicios</Link>
            </li>

            <label htmlFor="check" className="closemenu">
              <Image src={logocerrar} width={25} />
            </label>
          </ul>

          <Link href="#Info-carrito">
            <div className="itemcart">
              <Image src={carrito} alt="Logo carrito" width={27} height={27} />
              <h5>
                <span className="contcart" style={montserrat.style}>
                  0
                </span>
              </h5>
            </div>
          </Link>

          <label htmlFor="check" className="openmenu">
            <Image src={logomenu} width={25} />
          </label>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
