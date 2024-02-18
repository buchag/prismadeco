import { montserrat } from "../../styles/fonts";
import { useContext } from "react";
import { DataContext } from "@/context/DataContextProvider";
import CartItembar from "./CartItembar";

const Pushbar = () => {

    const database = useContext(DataContext);

    const [products, cart] = database;

    const [{ image, title, price }] = cart;
    console.log(cart)

    return (
        <>
            <div className="sidebar">
                <div>
                    <h2 className='' style={montserrat.style}><b>Items en carrito:</b></h2>
                </div>
                <hr className="border-stone-300"></hr>
                <div className="text gap-x-4">
                {cart.map((cartItem, id) => <CartItembar key={id} cartItem={cartItem} />)}

                </div>
                {
                    cart.length > 0 ? (
                        <div className="total">
                            <h2>$ {price}</h2>
                        </div>
                    ) : (
                        <div className="empty">
                            <h2 style={montserrat.style}><b>Carrito vacío</b></h2>
                        </div>
                    )
                }
                
            </div>
        </>
    )
}

export default Pushbar