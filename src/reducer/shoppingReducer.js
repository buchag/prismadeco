import { TYPES } from "@/actions/shoppingActions";
import { initialDb } from "./initialDb";


export function shoppingReducer(db, action){
    switch (action.type) {
        case TYPES.READ_DATA: {
            return {
                ...db,
                products: action.payload.products,
                cart: action.payload.cart
            };
        }
        case TYPES.ADD_TO_CART:{
            let itemInCart = db.cart.find(item => item.id === newItem.id)

            return itemInCart
                ? {
                    ...db,
                    cart: db.cart.map(item =>
                        item.id === newItem.id
                            ? {
                                ...item,
                                quantity: item.quantity + 1
                            }
                            : item)
                }
                : {
                    ...db,
                    cart: [...db.cart, { ...newItem, quantity: 1 }] 
                }
        }

        
        case TYPES.REMOVE_ONE_FROM_CART: {
            
            let itemToDelete = db.cart.find(item => item.id === action.payload)

            return itemToDelete.quantity > 1
                ? {
                    ...db,
                    cart: db.cart.map(item =>
                        item.id === itemToDelete.id
                            ? {
                                ...item,
                                quantity: item.quantity - 1
                            }
                            : item)
                }
                : {
                    ...db,
                    cart: db.cart.filter(item => item.id !== itemToDelete.id)
                }
            
        }

        
        case TYPES.REMOVE_ALL_FROM_CART: {
            return {
                ...db,
                cart: db.cart.filter(item => item.id !== action.payload)
            }

        }
        case TYPES.CLEAR_CART: {
            return initialDb;
        }
        default:
            return db;
    }
}