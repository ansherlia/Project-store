import { useProducts } from "../contexts/ProductProvider";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import styles from "./ProductsPage.module.css";
import SearchBox from "../components/SearchBox";
import { filterProducts, searchProducts } from "../helper/helper";
import SideBar from "../components/SideBar";
function ProductsPage() {
	const products = useProducts();
	const [displayed, setDisplayed] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState({});

	console.log(query);
	useEffect(() => {
		setDisplayed(products);
	}, [products]);
	useEffect(() => {
		let finalProducts = searchProducts(products, query.search);
		finalProducts = filterProducts(finalProducts, query.category);
		setDisplayed(finalProducts);
	}, [query]);
	console.log(query)
	return (
		<>
			<SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
			<div className={styles.container}>
				<div className={styles.cards}>
					{displayed.map((pr) => (
						<Card data={pr} key={pr.id} />
					))}
				</div>
				<SideBar setQuery={setQuery} query={query} />
			</div>
		</>
	);
}

export default ProductsPage;
