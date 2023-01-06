import React from "react";

import "./TopLogo.css";

const TopLogo = () => {

	return (
		<div className="TopLogo">
			<div className="Logo">
				<img src="./logo.png" alt="RAFAM logo" width={'40'} />
			</div>
			<div className="TextLogo">
				<img src="./logoTexto.png" alt="RAFAM text logo" width={'120'} />
			</div>
			<div style={{clear: 'both'}}></div>
		</div>
	);
}

export default TopLogo;