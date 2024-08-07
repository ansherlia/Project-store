/** @format */

import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helper/helper";

const CardContexts = createContext();

const initialState = {
	selectedItems: [],
	itemCounter: 0,
	totalPrice: 0,
	checkout: false,
};

const reducer = (state, action) => {
	console.log(state);
	switch (action.type) {
		case "ADD_ITEM":
			if (!state.selectedItems.find((p) => p.id === action.payload.id)) {
				state.selectedItems.push({ ...action.payload, quantity: 1 });
			}
			return {
				...state,
				...sumProducts(state.selectedItems),
				checkout: false,
			};
		case "REMOVE_ITEM":
			const newSelectedItem = state.selectedItems.filter(
				(item) => item.id !== action.payload.id,
			);
			return {
				selectedItems: [...newSelectedItem],
				...sumProducts(state.selectedItems),
				checkout: false,
			};
		case "INCREASE":
			const increaseIndex = state.selectedItems.findIndex(
				(index) => index.id === action.payload.id,
			);
			state.selectedItems[increaseIndex].quantity++;
			return {
				...state,
				...sumProducts(state.selectedItems),
				checkout: false,
			};
		case "DECREASE":
			const decreaseIndex = state.selectedItems.findIndex(
				(index) => index.id === action.payload.id,
			);
			state.selectedItems[decreaseIndex].quantity--;
			return {
				...state,
				...sumProducts(state.selectedItems),
				checkout: false,
			};
		default:
			throw new Error("Invalid Action!");
	}
};

function CardProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<CardContexts.Provider value={{ state, dispatch }}>
			{children}
		</CardContexts.Provider>
	);
}

const useCart = () => {
	const { state, dispatch } = useContext(CardContexts);
	return [state, dispatch];
};

export default CardProvider;
export { useCart };
