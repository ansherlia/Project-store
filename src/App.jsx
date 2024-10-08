/** @format */

import { Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import Checkout from "./Pages/Checkout";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import PageNotFound from "./Pages/404";
import ProductProvider from "./contexts/ProductProvider";
import CardProvider from "./contexts/CardProvider";
import Layout from "./Layouts/Layout";
function App() {
	return (
		<ProductProvider>
			<CardProvider>
				<Layout>
					<Routes>
						<Route index element={<Navigate to="/products" replace />} />
						<Route path="/products" element={<ProductsPage />} />
						<Route path="/products/:id" element={<ProductDetailsPage />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</Layout>
			</CardProvider>
		</ProductProvider>
	);
}

export default App;
