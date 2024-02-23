import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Creamos un contexto para el carrito de compras
export const CartContext = createContext();
const initialDb = [];

// Un componente que proporciona el contexto del carrito
export const CartContextProvider = ({ children }) => {
 
    const [totalRegistros, setTotalRegistros] = useState(0)
    const [db, setDb] = useState(initialDb)
    const [dataToEdit, setDataToEdit] = useState(null) //capturar la info a editar, por ahora sin uso

    //funcion de mensajes personalizados
    const [alertText, setAlertText] = useState(''); //mensaje a recibir
    const [alertMsgType, setAlertMsgType] = useState(''); //nombre de la clase css a aplicar
    const [showAlert, setShowAlert] = useState(false);
    
    const showAlertMessage = (text, msgType) => {
        setAlertText(text);
        setAlertMsgType(msgType);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2500);
    };


    const readData = async () => {
        //obtenemos los datos de la base
        const ENDPOINT = "http://localhost:7000/cart";
        const response = await axios.get(ENDPOINT); 
        const db = await response.data;
        setDb(db);

        //calculamos la cantidad de unidades en el carrito
        let total = 0;
        db.map(item => {total += item.quantity})
        setTotalRegistros(total);
    }

    useEffect(() => {
        readData()
    }, [])


    const addToCart = async (data) => { // la info de (data) viene del form, pero no estoy recibiendo un formulario, estoy recibiendo su data, lo ponemos asi porque queda mejor.

            //verificamos si el producto ya existe en el carrito
        const itemExist = db.find((item) => item.id === data.id)
        if (itemExist) {
        return showAlertMessage(`${data.title} ya se encuentra en el carrito!`, "mensajeInfo");
        }else {

            const ENDPOINT = "http://localhost:7000/cart";
            const OPTIONS = { 
                method: "POST", 
                headers: { "Content-type": "application/json" }, // indica en que tipo de notacion vamos a estar interactuando. Lo convierte para que el servidor la interprete.
                data: JSON.stringify(data) // stringify trasforma la data que esta en json a texto plano, que es como lo recibe el servidor.
            }
            await axios(ENDPOINT, OPTIONS); // Y ejecuto un post. El objeto options puede aparecer tambien como REQUEST, es un {} que creamos nosostros.
            showAlertMessage(`${data.title}, cantidad ${data.quantity} ¡Agregado al carrito!`, "mensajeOk");//mostrar mensaje de alerta con el titulo del producto y su cantidad
            readData(); // le decimos que vuelva a leer la data. De lo contrario no me apareceria a menos que recargue la pag.
        }
    }

    const updateData = async (data) => {
        
        const {id} = data; // destructuring, extraigo el id del objeto data.
        const ENDPOINT = `http://localhost:7000/cart/${id}`; // es otro endpoint, le especifico que item queremos editar.

        const OPTIONS = {
            method: "PUT",
            headers: {"Content-type": "application/json"},
            data: JSON.stringify(data)
        }

        await axios(ENDPOINT, OPTIONS);

        readData(); // le decimos que vuelva a leer la data.
    }

    const deleteFromCart = async (data) => {
        const {id, title} = data;
        const confirmar = confirm(`¿Seguro que quieres eliminar ${title} del carrito?`);

        if (confirmar) {
            const ENDPOINT = `http://localhost:7000/cart/${id}`;
            const OPTIONS = {
                method: "DELETE",
                headers: { "Content-type": "application/json" },
            }
            await axios(ENDPOINT, OPTIONS);

            readData();
        } else {
            return
        }
    }

    const clearCart = () => {
        
        const confirmar = confirm(`¿Seguro que quieres limpiar el carrito?`);

        if (confirmar) {
            try {
                db.map(item => {deleteAllFromCart(item)})
            } catch (error) {
                return showAlertMessage("Ocurrió un error al limpiar el carrito!", "mensajeInfo");
            }
            readData();
           
        } else {
            return
        }
    }

    const deleteAllFromCart = async (data) => {
        const {id} = data;

        const ENDPOINT = `http://localhost:7000/cart/${id}`;
        const OPTIONS = {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        }
        await axios(ENDPOINT, OPTIONS);
        readData();
    }


    return (
        <CartContext.Provider value={{ db, addToCart, deleteFromCart,clearCart, updateData, totalRegistros, showAlertMessage }}>
            {showAlert && (
                <div className="flex justify-top items-top overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
                    <div className=" relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="border-10 rounded-lg shadow-lg flex bg-white flex-col w-full ">
                            <div className = {`${alertMsgType} flex items-start justify-between p-2 border-gray-300 rounded-t bg-info-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-info-800`}>                      
                                {alertText}                     
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider