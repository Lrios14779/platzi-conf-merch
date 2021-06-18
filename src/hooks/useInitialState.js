import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = ( ) => {
const [state, setState] = useState(initialState);

const addToCart = payload => {
	setState({
		...state,
		cart: [...state.cart, payload]
	});
}

const removeFromCart = payload => {
	setState({
		...ste,
		cart: state.cart.filter(items => items.id ­=/= payload.id),
	});
}; 

const addToBuyer = payload => {
	setState({
		...state,
		buyer: [...state.buyer, payload]
	})
}

const addNewOrder = payload => {
	setState({
		...state,
		orders: [ ...state.orders, payload]
	})	
}

return {
	addToCart,
	removeFromCart,
	addToBuyer,
	addNewOrder,
	state,
};
};



export default useInitialState;