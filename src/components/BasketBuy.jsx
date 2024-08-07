/** @format */

import React from "react";
import { MdDelete } from "react-icons/md";
import styles from "./BasketBuy.module.css";
import { shortenText } from "../helper/helper";
function BasketBuy({ data, clickHandler }) {
	console.log(data);
	const { image, title, quantity } = data;
	return (
		<div className={styles.container}>
			<img src={image} alt={title} />
			<h2>{shortenText(title)}</h2>
			<div>
				{quantity === 1 ? (
					<button onClick={() => clickHandler("REMOVE_ITEM", data)}>
						<MdDelete />
					</button>
				) : (
					<button onClick={() => clickHandler("DECREASE", data)}>-</button>
				)}
				{!!data && <p>{quantity}</p>}
				<button onClick={() => clickHandler("INCREASE", data)}>+</button>
			</div>
		</div>
	);
}

export default BasketBuy;
