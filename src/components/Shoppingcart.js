
import Image from "next/image";
import carrito from "../images/shopping_cart.png";
import { montserrat } from "../styles/fonts";

const Shoppingcart = () => {
  return (
    <div className="itemcart">
      <Image src={carrito} alt="Logo carrito" width={27} height={27} />
      <h5>
        <span className="contcart" style={montserrat.style}>
          0
        </span>
      </h5>
    </div>
  );
};

export default Shoppingcart;
