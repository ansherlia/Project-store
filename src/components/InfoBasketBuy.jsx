/** @format */
import { FaHashtag } from "react-icons/fa";
import { AiFillMeh } from "react-icons/ai";

import { FaClipboardList } from "react-icons/fa";
import { useCart } from "../contexts/CardProvider";
import { AiFillCheckCircle } from "react-icons/ai";
import styles from "./InfoBasketBuy.module.css";
import { toFix } from "../helper/helper";
function InfoBasketBuy() {
	const [state] = useCart();
	console.log(state);
	return (
		<>
			{!!state.selectedItems.length ? (
				<div className={styles.container}>
					<div>
						<FaClipboardList />
						<p>Total Price: </p>
						{!!state.totalPrice && <span>{toFix(state.totalPrice)}</span>}
					</div>
					<div>
						<FaHashtag />
						<p>Quantity:</p>
						<span>{state.itemCounter}</span>
					</div>
					<div>
						<AiFillCheckCircle />
						<p>Status:</p>
						{state.checkout ? "Success" : "Pending"}
					</div>
				</div>
			) : (
				<h1 className={styles.empty}>
					The Basket Buy is Empty! <AiFillMeh />
				</h1>
			)}
		</>
	);
}

export default InfoBasketBuy;
