import { useState } from "react";
import Icone from "./Icone";
import Nav from "./Nav";

const Sidebar = () => {
  const [visivel, setVisivel] = useState(false);
  return (
    <>
    <nav className="absolute z-20 w-full">
      {/* Icone => Imagen del carrito con la cantidad */}
      <Icone visivel={visivel} setVisivel={setVisivel} />

      {/* Nav => Menu lateral, que se desplaza, mostrando la info del carrito */}
      <Nav visivel={visivel} setVisivel={setVisivel} />
    </nav>
     </>
  );
};

export default Sidebar;
