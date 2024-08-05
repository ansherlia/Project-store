import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helper/helper";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
function Card({ data }) {
	const { image, title, category, price, id } = data;
	return (
		<div className={styles.card}>
			<img src={image} alt={title} />
			<h3>{shortenText(title)}</h3>
			<p>{price} $</p>
			<div>
				<Link to={`/products/${id}`}>
					<TbListDetails />
				</Link>
				<button>
					<TbShoppingBagCheck />
				</button>
			</div>
		</div>
	);
}

export default Card;
