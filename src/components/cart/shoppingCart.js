import {useReducer, useEffect} from 'react' //utilizamos useEffect para cargar los datos del carrito
import { TYPES } from '@/actions/shoppingActions';
import { shoppingInitialState } from '@/reducers/shoppingInitialState';
import { shoppingReducer } from '@/reducers/shoppingReducer';
import cartItem from './cartItem';
import axios from 'axios';

const shoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    
    const {cart} = state;

    const updateState = async () => {
      const ENDPOINT = {
         cart: "http://localhost:7000/cart" 
      }
      const responseCart = await axios.get(ENDPOINT.cart);
      const cartItems = await responseCart.data; //arreglo de items de carrito

      dispatch ({type: TYPES.READ_STATE, payload: cartItems});
    } //Despacha el caso read_state para leer el carrito

    useEffect(() => {
      updateState();
    })
    
    const addToCart =(id) => dispatch({type:TYPES.ADD_TO_CART, payload: id}); 
    
    const deleteFromCart = (id, all) => {
      if(all) {
        dispatch({type:TYPES.REMOVE_ALL_PRODUCTS, payload: id})
      }
      else {
        dispatch({type:TYPES.REMOVE_ONE_PRODUCT, payload: id})
      }
    }
    
    const clearCart = () => dispatch({types:TYPES.CLEAR_CART})

    return (
        <div>
            <h2>Shopping Cart</h2>
            <h3>Productos</h3>
            {
              cart.map((item,index) => <cartItem key={index} item ={item} deleteFromCart={deleteFromCart}/>) 
            }
              
            <article className="box">
            </article>
            <article className="box"></article> 
            <button  onClick={clearCart}>Vaciar Carrito</button>
        </div>
        
  )
}

export default shoppingCart