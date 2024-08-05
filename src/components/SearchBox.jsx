import { FaSearch } from "react-icons/fa";

function SearchBox({ search, setSearch, setQuery }) {
	const searchHandler = () => {
		setQuery((query) => ({ ...query, search: search }));
	};
	return (
		<div>
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
