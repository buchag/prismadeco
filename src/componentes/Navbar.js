import prisma from "../images/prisma_logo.png";
import Image from "next/image";

import { montserrat } from "../styles/fonts";
import { saira } from "../styles/fonts";

import Link from "next/link";
import carrito from "../images/shopping_cart.png";
import logocerrar from "../../public/images/cerrar.svg";
import logomenu from "../../public/images/icono.svg";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link href="/" className="logo">
        <Image src={prisma} width={45} />
        <h2 className={saira.className}>PRISMA DECO</h2>
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
          <li style={{display: "flex"}}>
            <Image src={carrito} alt="Logo carrito" width={27} height={27} />
            <h5><span className="cont-cart">0</span></h5>
          </li>

          <label htmlFor="check" className="close-menu">
            <Image src={logocerrar} width={25} />
          </label>
        </ul>

        <label htmlFor="check" className="open-menu">
          <Image src={logomenu} width={25} />
        </label>
      </nav>
    </div>
  );
};

export default Navbar;
