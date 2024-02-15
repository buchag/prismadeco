import { montserrat } from "../../styles/fonts";
import { useState } from "react";

import { Image } from "next/image";

const cart = 
        {
            id: 1000012,
            image: "/images/esp-circle-60.jpg",
            title: "Espejo Circular 60cm",
            price: 38700,
            featured: true
        }


const Pushbar = () => {
    return (
        <>
            <div className="sidebar">
                <div>
                    <h2 className='' style={montserrat.style}><b>Items en carrito:</b></h2>
                </div>
                    <hr className="border-stone-300"></hr>
                <figure className='w-auto h-auto flex flex-row my-3'>
                    <img src={cart.image} alt={cart.title} width={70} height={80} />
                    <div>
                        <h2 className='text-left text-sm my-3 mx-4'>{cart.title}</h2>
                        <h2 className='text-left text-xl my-3'>${cart.price}</h2>
                    </div>
                </figure>
                <hr className="border-stone-300"></hr>

                <div className="empty">
                    <h2 style={montserrat.style}><b>Total: ${cart.price}</b></h2>
                    <h2 style={montserrat.style}><b>Carrito vacío</b></h2>
                </div>


            </div>
        </>
    )
}

export default Pushbar