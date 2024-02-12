import { TYPES } from "@/actions/shoppingActions";

//estado inicial del carrito
export const shoppingInitialState = {
    cart:[]
}

export function shoppingReducer(state, action){
    switch (action.type) {

        case TYPES.READ_STATE: {
            return {
                ...state,
                cart: action.payload
            };
        }

        case TYPES.ADD_TO_CART:{
           
            let itemInCart = state.cart.find(item => item.id === action.payload)
           
            let newItem  = action.payload;  //creamos una nueva instancia de el producto para que no se modifique en el estado original
            return itemInCart ? {
               ...state, 
               cart: state.cart.map(item => 
                    item.id === newItem.id ? 
                    {
                        ...item, 
                        quantity: itemInCart.quantity + newItem.quantity
                    }
                    :item
                )
            } : {
                ...state,
                cart: [...state.cart, {newItem, quantity: newItem.quantity}]
            }
        }

        case TYPES.REMOVE_ONE_PRODUCT: {
            let itemToDelete = state.cart.find(item => item.id = action.payload)
            console.log(itemToDelete);
            return itemToDelete.quantity > 1
                ? {
                    ...state, 
                    cart: state.cart.map(item => 
                    item.id === itemToDelete.id ? 
                    {
                        ...item, 
                        quantity: itemInCart.quantity -1
                    }
                    :item
                )
                } : {
                    ...state,
                    cart: state.cart.filter(item => item.id !== itemToDelete.id)
                }

        }

        case TYPES.REMOVE_ALL_PRODUCTS: {
            return {
                ...state,
            cart: state.cart.filter(item => item.id !== action.payload) 
            }
        }

        case TYPES.CLEAR_CART: {
            return shoppingInitialState;
        }
        
        return state;
    }
}