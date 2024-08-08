/** @format */
import { ImExit } from "react-icons/im";

import { useParams, Link } from "react-router-dom";
import { productDetails } from "../contexts/ProductProvider";
import styles from "./ProductDetails.module.css";
function ProductDetailsPage() {
	const { id } = useParams();
	const item = productDetails(+id);
	console.log(item);
	const { image, description, title, price, category } = item;
	console.log(item);
	return (
		<div className={styles.container}>
			<img src={image} alt={title} />
			<div>
				<h1>{title}</h1>
				<p>{description}</p>
				<h2>{category}</h2>
				<div className={styles.price}>
					<h3>{price} $</h3>
					<Link to={"/products"}>
						Back To Shop <ImExit />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProductDetailsPage;
