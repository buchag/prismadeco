import prisma from "../../images/logo_nav.png";
import Image from "next/image";
import { montserrat } from "../../styles/fonts";
import Link from "next/link";
import logocerrar from "../../images/cerrar.svg";
import logomenu from "../../../public/images/icono.svg";
import iconofacebook from "../../../public/images/facebook.svg";
import iconoinstagram from "../../../public/images/instagram.svg";
import iconotwitter from "../../../public/images/twitter.svg";
import iconotiktok from "../../../public/images/tiktok.svg";
import Menu from "../info-cart/Menu";
import {CartContext} from '@/context/CartContext'
import { useContext } from "react";


const Navbar = () => {
  
  const {totalRegistros} = useContext(CartContext);

  return (
    <>
      <div className="navegacion">
        <Link href="/" className="logo">
          <Image src={prisma} width={55} />
        </Link>

        {/* Barra de navegacion */}
        <nav>
          <input type="checkbox" id="check" />
          <ul className="menu" style={montserrat.style}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#servicios">Servicios</Link>
            </li>
            <li>
              <Link href="#nosotros">Nosotros</Link>
            </li>
            <li>
              <Link href="#productos">Productos</Link>
            </li>

            <label htmlFor="check" className="closemenu">
              <Image src={logocerrar} width={23} />
            </label>

            {/* Barra de navegacion, redes sociales */}
            <div className="redes">
              <li>
                <a target="_blank" href="https://facebook.com">
                  <Image
                    src={iconofacebook}
                    alt="Logo facebook"
                    width={27}
                    height={27}
                  />
                </a>
              </li>

              <li>
                <a target="_blank" href="https://instagram.com">
                  <Image
                    src={iconoinstagram}
                    alt="Logo instagram"
                    width={27}
                    height={27}
                  />
                </a>
              </li>

              <li>
                <a target="_blank" href="https://twitter.com">
                  <Image
                    src={iconotwitter}
                    alt="Logo twitter"
                    width={27}
                    height={27}
                  />
                </a>
              </li>

              <li>
                <a target="_blank" href="https://tiktok.com">
                  <Image
                    src={iconotiktok}
                    alt="Logo tiktok"
                    width={27}
                    height={27}
                  />
                </a>
              </li>
            </div>
          </ul>

          <div className={`relative`}>
            <Menu />
          </div>

          

          {/* Link carrito de compras 
          <Link href="/#carrito">
            <div className="itemcart">
              <Image src={carrito} alt="Logo carrito" width={25} height={25} />
              <h6 className={montserrat.className}>
                <span className="contcart">{totalRegistros}</span>
              </h6>
            </div>
          </Link>
          */}
        

          {/* Menu hamburguesa */}
          <label htmlFor="check" className="openmenu">
            <Image src={logomenu} width={23} />
          </label>
        </nav>
      </div>
      <style jsx>{`
      div p {
        color: #646c64;
      };
      `}</style>
    </>
  );
};

export default Navbar;
