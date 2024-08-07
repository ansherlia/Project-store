/** @format */

import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { productQuantity, shortenText } from "../helper/helper";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { MdDelete } from "react-icons/md";

import { useCart } from "../contexts/CardProvider";
function Card({ data }) {
	const { image, title, category, price, id } = data;
	const [state, dispatch] = useCart();
	const clickHandler = (type) => {
		dispatch({ type: type, payload: data });
	};
	//"ADD_ITEM" , REMOVE_ITEM, INCREASE DECREASE
	const quantityr = productQuantity(state, id);
	return (
		<div className={styles.card}>
			<img src={image} alt={title} />
			<h3>{shortenText(title)}</h3>
			<p>{price} $</p>
			<div>
				<Link to={`/products/${id}`}>
					<TbListDetails />
				</Link>
				<div className={styles.buttons}>
					{quantityr === 1 && (
						<button onClick={() => clickHandler("REMOVE_ITEM")}>
							<MdDelete />
						</button>
					)}
					{quantityr > 1 && (
						<button onClick={() => clickHandler("DECREASE")}>-</button>
					)}
					{!!quantityr && <span>{quantityr}</span>}
					{quantityr === 0 ? (
						<button onClick={() => clickHandler("ADD_ITEM")}>
							<TbShoppingBagCheck />
						</button>
					) : (
						<button onClick={() => clickHandler("INCREASE")}>+</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default Card;
