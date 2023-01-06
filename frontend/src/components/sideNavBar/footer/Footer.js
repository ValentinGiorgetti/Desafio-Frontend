import React from "react";

import "./footer.css";

const Footer = () => {

	return (
		<div className="Footer">
			<img className="FooterLogo" src="./logo.png" alt="RAFAM logo" width="30" />
			
			<div className="footerTextContainer">
				<p className="SideNavBarDescription" style={{marginBottom: '100px'}}>
					(0221) 429- 4484/4509
				<br/>&nbsp;<br/>
					pa@es.gov.ar
				</p>
			</div>
		</div>
	);
}

export default Footer;