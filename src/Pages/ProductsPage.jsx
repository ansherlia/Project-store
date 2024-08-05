import { FaList } from "react-icons/fa6";
import { useProducts } from "../contexts/ProductProvider";
import Card from "../components/Card";
import { useEffect, useState } from "react";

function ProductsPage() {
	const products = useProducts();
	const [displayed, setDisplayed] = useState([]);
	useEffect(() => {
		setDisplayed(products);
	}, [products]);
	return (
		<div>
			<div>
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
	);
}

export default ProductsPage;
