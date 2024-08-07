/** @format */

import React from "react";
import { RotatingLines } from "react-loader-spinner";
import styles from "./Loader.module.css";
function Loader() {
	return (
		<div className={styles.loader}>
			<RotatingLines strokeColor="blueviolet" strokeWidth="3" />
		</div>
	);
}

export default Loader;
