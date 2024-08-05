import { FaList } from "react-icons/fa6";
import { useProducts } from "../contexts/ProductProvider";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import styles from "./ProductsPage.module.css";
function ProductsPage() {
	const products = useProducts();
	const [displayed, setDisplayed] = useState([]);
	const [search, setSearch] = useState("");
	useEffect(() => {
		setDisplayed(products);
	}, [products]);
	return (
		<>
			<div className={styles.container}>
				<div className={styles.cards}>
					{displayed.map((pr) => (
						<Card data={pr} key={pr.id} />
					))}
				</div>
				<div>
					<div>
						<h3>Categories</h3>
						<FaList />
						<ul>
							<li>All</li>
							<li>Electronics</li>
							<li>Jewelery</li>
							<li>Men's clothing</li>
							<li>Women's clothing</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductsPage;
