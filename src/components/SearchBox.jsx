/** @format */

import { FaSearch } from "react-icons/fa";
import styles from "./SearchBox.module.css";
function SearchBox({ search, setSearch, setQuery }) {
	const searchHandler = () => {
		setQuery((query) => ({ ...query, search: search }));
	};
	return (
		<div className={styles.container}>
			<input
				type="text"
				placeholder="Search Product"
				value={search}
				onChange={(e) => setSearch(e.target.value.toLowerCase())}
			/>
			<button onClick={searchHandler}>
				<FaSearch />
			</button>
		</div>
	);
}

export default SearchBox;
