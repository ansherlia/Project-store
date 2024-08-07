/** @format */

import { useProducts } from "../contexts/ProductProvider";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import styles from "./ProductsPage.module.css";
import SearchBox from "../components/SearchBox";
import {
	filterProducts,
	getInitialQuery,
	searchProducts,
} from "../helper/helper";
import SideBar from "../components/SideBar";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/Loader";
function ProductsPage() {
	const products = useProducts();
	const [displayed, setDisplayed] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState({});
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		setQuery(getInitialQuery(searchParams));
		setDisplayed(products);
	}, [products]);
	useEffect(() => {
		setSearchParams(query);
		setSearch(query.search || "");
		let finalProducts = searchProducts(products, query.search);
		finalProducts = filterProducts(finalProducts, query.category);
		setDisplayed(finalProducts);
	}, [query]);
	return (
		<>
			<SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
			{!displayed.length && <Loader />}
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
