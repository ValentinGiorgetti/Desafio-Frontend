import React from "react";

import "./DropDownOption.css";

function DropDownOption ({ text, selected }) {
	return (
		<button className={selected ? ("DropDownOption SelectedDropDownOption") : ("DropDownOption")}>{text}</button>
	);
}

export default DropDownOption;