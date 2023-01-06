import React from "react";

import "./DropDownButton.css";

const DropDownButton = ({ text, expandible, selected }) => {

	return (
		<button className="SideNavBarButton"> {expandible && <i className="arrow right"></i> }
										   {selected && <i className="arrow down"></i> }
			<span>&nbsp; &nbsp;</span>
			{text}
		</button>
	);
}

export default DropDownButton;