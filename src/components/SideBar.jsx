/** @format */

import React from "react";
import { FaList } from "react-icons/fa6";
import styles from "./SideBar.module.css";
import { list } from "../constants/list";
import { creatObjectQuery } from "../helper/helper";
// import { createObjectQuery } from "../helper/helper";
function SideBar({ setQuery, query }) {
	const categoryHandler = (event) => {
		const category = event.target.innerText.toLowerCase();
		const tagName = event.target.tagName;
		if (tagName === "LI") {
			setQuery((query) => creatObjectQuery(query, { category }));
		}
	};
	return (
		<div className={styles.category} onClick={categoryHandler}>
			<div>
				<FaList />
				<h3>Categories</h3>
			</div>
			<ul>
				{list.map((li) => (
					<li
						key={li.id}
						className={
							query.category === li.type.toLowerCase() ? styles.selected : null
						}>
						{li.type}
					</li>
				))}
			</ul>
		</div>
	);
}

export default SideBar;
