import React from "react";
import "../assets/css/loader.css";

const Loader = () => {
	return (
		<div className="parent">
			<h1 className="loader-head">
				Loading pediatric appointments...
			</h1>
			<div className="loader"></div>
		</div>
	);
};

export default Loader;
