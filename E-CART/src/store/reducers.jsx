import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../store/type';

const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingIndex].quantity += 1;
        updatedCart[existingIndex].price *= 2;
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        )
      };
    default:
      return state;
  }
};

export default cartReducer;
