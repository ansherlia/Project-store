/** @format */

import BasketBuy from "../components/BasketBuy";
import { useCart } from "../contexts/CardProvider";
import styles from "./Checkout.module.css";
function Checkout() {
	const [state, dispatch] = useCart();
	const clickHandler = (type, payload) => {
		dispatch({ type, payload });
	};
	return (
		<>
			<div className={styles.container}>
				{state.selectedItems.map((p) => (
					<BasketBuy data={p} key={p.id} clickHandler={clickHandler} />
				))}
			</div>
		</>
	);
}

export default Checkout;
