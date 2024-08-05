import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/config";

const ContextProducts = createContext();

function ProductProvider({ children }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		api.get("/products").then((res) => setProducts(res));
	}, []);

	console.log(products);

	return (
		<ContextProducts.Provider value={products}>
			{children}
		</ContextProducts.Provider>
	);
}

const useProducts = () => {
	const product = useContext(ContextProducts);
	return product;
};

export default ProductProvider;
export { useProducts };
