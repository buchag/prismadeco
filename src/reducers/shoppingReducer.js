import { TYPES } from "@/actions/shoppingActions";

//estado inicial del carrito
export const shoppingInitialState = {
    cart:[]
}

export function shoppingReducer(state, action){
    switch (action.type) {
        case TYPES.ADD_TO_CART:{

        }
        case TYPES.REMOVE_ONE_FROM_CART: {

        }
        case TYPES.REMOVE_ALL_FROM_CART: {

        }
        case TYPES.CLEAR_CART: {
            return shoppingInitialState;
        }
        default:
            return state;
    }
}