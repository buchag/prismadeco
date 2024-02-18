import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { initialDb } from "@/reducer/initialDb";
import { TYPES } from "@/actions/shoppingActions";
import { shoppingReducer } from "@/reducer/shoppingReducer";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {

    const [db, dispatch] = useReducer(shoppingReducer, initialDb);

    const { products, cart } = db;

    const readData = async () => {
        const ENDPOINTS = {
            products: "http://localhost:7000/products",
            cart: "http://localhost:7000/cart"
        }
        const responseProducts = await axios.get(ENDPOINTS.products);
        const responseCart = await axios.get(ENDPOINTS.cart);
        const productsDb = await responseProducts.data;
        const cartDb = await responseCart.data;
        
        dispatch({ type: TYPES.READ_DATA, payload: { products: productsDb, cart: cartDb } });
        
    }
    useEffect(() => {
        readData()
    }, [])
    
    // const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    
    // const deleteFromCart = (id, all) => { // all = true o all = false
    //     if (all) {
        //         dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id })
        //     } else {
    //         dispatch({ type: TYPES.REMOVE_ONE_PRODUCTS, payload: id })
    //     }
    // };
    
    // const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });   , addToCart, deleteFromCart, clearCart
    
    const database = [products, cart]
        
    
    return (
        <DataContext.Provider value={database}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider