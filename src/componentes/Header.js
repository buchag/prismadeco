

import Image from "next/image";
import prisma from "../images/prisma_logo.png"
import carrito from "../images/shopping_cart.png"
import Link from "next/link";
import Banner from "./Banner";

const Header = () => {
  return (
    <>

    <Banner />

    <div class="nav-container">
      <Link href="/" class="logo">
        <Image src={prisma} alt="Logo prisma" width={40} height={40}/>
        <h2>PRISMA Deco</h2>
      </Link>

      <nav>
        <ul className="menu">
          <li>
            <Link className="enlaces" href="/">Home</Link>
          </li>
          <li>
            <Link className="enlaces" href="#">Nosotros</Link>
          </li>
          <li>
            <Link className="enlaces" href="#">Productos</Link>
          </li>
          <li>
            <Link className="enlaces" href="#">Sucursales</Link>
          </li>
          <li>
            <Link href="#">
            <Image src={carrito} alt="Logo carrito" width={30} height={30}/>


           
            </Link>
          </li>

        </ul>
      </nav>
    </div>
    </>
  );
};

export default Header;