import { shoppingInitialState, shoppingReducer } from '@/reducers/shoppingReducer';
import {useReducer} from 'react'
//import Modal from '../cards/Modal';


const shoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const [products, cart] = state;

    const addToCart =(id) =>{
        console.log(id);
    }

    const delFromCart = () => {

    }

    const clearCart = () => {

    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            <h3>Productos</h3>

            <article className="box">
              {/*  {products.map((product) => <Modal key={product.id} product={product} addToCart={addToCart}/> )}*/}
            </article>
            <article className="box"></article> 
        </div>
        
  )
}

export default shoppingCart