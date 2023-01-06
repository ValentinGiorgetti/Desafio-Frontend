import React from "react";

import "./Card.css";

const Card = ({ title, description, options }) => {
	if (options) {
		options = options.map((option) => <p className="CardOption" key={option}> {option} </p>)
	}	

	return (
		<div className="CardContainer">
			<h2 className="CardTitle" key="CardTitle">{title} </h2>
			<p className="CardDescription" key={"CardDescription"}>{description}</p>
			{options}
		</div>
	);
}

export default Card;