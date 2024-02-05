import prisma from "../images/logo_nav.png";
import Image from "next/image";
import { montserrat } from "../styles/fonts";
import Link from "next/link";
import carrito from "../images/shopping_cart.png";
import logocerrar from "../../public/images/cerrar.svg";
import logomenu from "../../public/images/icono.svg";
import iconofacebook from "../../public/images/facebook.svg";
import iconoinstagram from "../../public/images/instagram.svg";
import iconotwitter from "../../public/images/twitter.svg";
import iconotiktok from "../../public/images/tiktok.svg";

const Navbar = () => {
  return (
    <>
      <div className="navegacion">
        <Link href="/" className="logo">
          <Image src={prisma} width={55} />
          <h2 className={montserrat.className}>PRISMA DECO</h2>
        </Link>

        {/* Barra de navegacion */}
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

          {/* Link carrito de compras */}
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

          {/* Menu hamburguesa */ }
          <label htmlFor="check" className="openmenu">
            <Image src={logomenu} width={25} />
          </label>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
