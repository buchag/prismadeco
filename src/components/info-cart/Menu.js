
import { useState } from "react";
import Icone from "./Icone";
import Nav from "./Nav";

const Menu = () => {
  const [visivel, setVisivel] = useState(false);
  return (
    <>
    {/* absolute (posicion), z-20 (z-index), w-full (ancho del 100%) */}
    <nav className="absolute z-20 w-full">
      <Icone visivel={visivel} setVisivel={setVisivel} />
      <Nav visivel={visivel} />
    </nav>
  
     </>
  );
};

export default Menu;
