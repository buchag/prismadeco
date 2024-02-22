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
import Sidebar from "../info-cart/Sidebar";
import {CartContext} from '@/context/CartContext'
import { useContext } from "react";


const Navbar = () => {
  
  const {totalRegistros} = useContext(CartContext);

  return (
    <>
      <div className="navegacion">
        <Link href="/" className="logo">
          <Image src={prisma} width={55} alt="Logo prisma deco"/>
        </Link>

        {/* Barra de navegacion */}
        <nav>
          <input type="checkbox" id="check" />
          <ul className="menu" style={montserrat.style}>
            <li>
              <Link href="/" onClick={()=>document.getElementById("check").checked=false}>Home</Link>
            </li>
            <li>
              <Link href="#servicios" onClick={()=>document.getElementById("check").checked=false}>Servicios</Link>
            </li>
            <li>
              <Link href="#nosotros" onClick={()=>document.getElementById("check").checked=false}>Nosotros</Link>
            </li>
            <li>
              <Link href="#productos" onClick={()=>document.getElementById("check").checked=false}>Productos</Link>
            </li>

            <label htmlFor="check" className="closemenu">
              <Image src={logocerrar} width={23} alt="Cerrar menú lateral"/>
            </label>

            {/* Barra de navegacion, redes sociales */}
            <div className="redes">
              <li>
                <a target="_blank" href="https://facebook.com" onClick={()=>document.getElementById("check").checked=false}>
                  <Image
                    src={iconofacebook}
                    alt="Logo facebook"
                    width={27}
                    height={27}
                  />
                </a>
              </li>

              <li>
                <a target="_blank" href="https://instagram.com" onClick={()=>document.getElementById("check").checked=false}>
                  <Image
                    src={iconoinstagram}
                    alt="Logo instagram"
                    width={27}
                    height={27}
                  />
                </a>
              </li>

              <li>
                <a target="_blank" href="https://twitter.com" onClick={()=>document.getElementById("check").checked=false}>
                  <Image
                    src={iconotwitter}
                    alt="Logo twitter"
                    width={27}
                    height={27}
                  />
                </a>
              </li>

              <li>
                <a target="_blank" href="https://tiktok.com" onClick={()=>document.getElementById("check").checked=false}>
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

          {/* Componente nuevo menu lateral. Muestra informacion del carrito de compras */}
          <div className={`relative`}>
            <Sidebar />
          </div>        
                  
          {/* Menu hamburguesa */}
          <label htmlFor="check" className="openmenu">
            <Image src={logomenu} width={23} alt="Logo hamburguesa"/>
          </label>
        </nav>
      </div>
  
    </>
  );
};

export default Navbar;
