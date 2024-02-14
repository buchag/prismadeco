import React, { useState, useContext } from "react";
//import { shoppingCart } from "../cart/shoppingCart"; // Importamos el hook shoppingCart
import {CartContext} from '@/context/CartContext'

const Modal = ({product}) => { 
  const [cart, setCart] = useContext(CartContext);
  const {id, price, title, image} = product
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [priceXqty, updatedPrice] = useState(price);

  const handleSelectChange = (event) => {
    setSelectedNumber(event.target.value);
    updatedPrice(Number(price) * event.target.value);
    setQuantity(event.target.value);
  };

  const [abrir, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(product)
    console.log("Cantidad: "+quantity)
    
    setCart((currItems) => {
      const itemExist = currItems.find((item) => item.id === id)
    });

    if (itemExist) {
      return currItems.map((item) => {
        if (item.id === id) {
          return {...item, quantity: item.quantity + quantity};
        }else {
          return item;
        }
      })
    }
    else{
      return [...currItems, {...product, quantity}]
    }
    setShowModal(false); // Cerramos el modal después de agregar al carrito
  }


  return (
    <>
    <button className= "btnComprar bg-zinc-500 text-white text-sm my-3 mx-auto py-1 px-5 hover:bg-zinc-600 hover:scale-105 hover:shadow-lg rounded-lg cursor-pointer whitespace-nowrap"
        type="button" onClick={() => setShowModal(true)}>
        Comprar
      </button>
      {/*muestro la ventana modal*/}
      {abrir ? (
        <>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none " >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                <div className="flex items-start justify-between p-2 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-lg font=bold">{title}</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}>
                      <span className="text-black opacity-7 h-8 w-8 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Detalle
                    </label>
                    <textarea readOnly className="shadow appearance-none border rounded w-full py-2 px-1 text-black" value = "Fabricado con materias primas de primera calidad, marco de hierro pintado con pintura termo contraíble de curado a horno. Es espejo 100% cristal → no deforma y su espesor es el ideal para que el producto sea duradero."/>
                    {/*Combo box para seleccionar la cantidad y disparar acción al modificar el valor del input*/}
                    <label htmlFor="selectQty"  className="block text-black text-sm font-bold mt-1 mb-1">Cantidad:</label>
                    <select id="selectQty" value={selectedNumber} onChange={handleSelectChange}>
                      {[...Array(10).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </select>
                    {/*Muestro el precio calculado según la cantidad seleccionada*/}
                    <label className="block text-black text-sm font-bold mt-3 mb-1">
                      Precio
                    </label>
                    <input readOnly className="shadow appearance-none border rounded w-full py-2 px-1 text-black" value ={priceXqty}/>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button" onClick={() => setShowModal(false)}>
                    Cancelar
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button" onClick={handleAddToCart}>
                    Agregar al carro
                  </button>
                </div>
              </div>
            </div>
          </div>
          </>
      ) : null}
      
      <style jsx>{`
        .btnComprar {
          box-shadow: 2px 2px 2px black;
        }
        @media sreen and (min-width: 1024px) {
          .btnComprar {
            font-size: 1.6rem; 
          }
        }
        @media screen and (min-width: 640px) {
          .btnComprar {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};
export default Modal;