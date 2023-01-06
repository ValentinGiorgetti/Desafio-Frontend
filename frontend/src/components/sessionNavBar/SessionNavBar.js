import React from "react";

import "./SessionNavBar.css";
import WeatherInformation from "./WeatherInformation";
import { useNavigate } from "react-router-dom";


const SessionNavBar = ({ location }) => {

	let joined_location = []

	for (let i = 0; i < location.length - 1; i++) {
		joined_location.push(<span className="Location" key={location[i]}> {location[i]} </span>)
		joined_location.push(<span className="Location"  key={i} style={{ "fontWeight": "bold" }}> &gt; </span>)
	}

	joined_location.push(<span className="Location" key={[location.length - 1]}> {location[location.length - 1]} </span>)

	const navigate = useNavigate();

	function logout() {
		sessionStorage.setItem('isLoggedIn', 'false');
      	navigate("/login");
	}

	return (
		<div className="SessionNavBarConteiner">
			{joined_location}
			<div className="SessionButtonContainer">
				<div className="SessionImage">
					<span className="Weather" title="Temperatura máxima y mínima de hoy en la ciudad de La Plata"> <WeatherInformation/> </span>
					<button className="SessionButton" onClick={logout} title="Cerrar sesión"><img alt="logout" src="./icons/logoutIcon.png" /></button>
					<button className="SessionButton"><img alt="search" src="./icons/searchIcon.png" /></button>
					<button className="SessionButton"><img alt="notification" src="./icons/notificationIcon.png" /></button>
					<button className="SessionButton"><img alt="help" src="./icons/helpIcon.png" /></button>
				</div>
				<img className="ProfileImage" alt="profile" src="profileImage.png" />
			</div>
		</div>
	);
}

export default SessionNavBar;