/** @format */
import { FaCartPlus } from "react-icons/fa6";
import { FaGrinHearts } from "react-icons/fa";

import { useCart } from "../contexts/CardProvider";
import styles from "./Layout.module.css";
import { Link } from "react-router-dom";
function Layout({ children }) {
	const [state] = useCart();
	const { itemCounter } = state;
	return (
		<div className={styles.container}>
			<header>
				<Link to={"/products"}>TaskMan Store</Link>
				<button>
					<Link to={"/checkout"} className={styles.basketLink}>
						<FaCartPlus />
						{!!itemCounter && <span>{itemCounter}</span>}
					</Link>
				</button>
			</header>
			{children}
			<footer>
				Developed By Reza with
				<span>
					<FaGrinHearts />
				</span>
			</footer>
		</div>
	);
}

export default Layout;
