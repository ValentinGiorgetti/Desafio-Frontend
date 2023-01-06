import React from "react";

import "./StatusBar.css";

const StatusBar = ({ dropDownButton, dropDownOption }) => {
	return (
		<div className="StatusBar">
			<div className="SelectedOptionContainer">
				{dropDownButton} &nbsp; 
				<span className="SelectedOption" >&gt; &nbsp; </span> 
				<span className="SelectedOption"> {dropDownOption}</span>
			</div>
			<div className="EjercicioContainer">
				<span className="Ejercicio">Ejercicio</span>
				<select className="YearSelector">
					<option>2020</option>
				</select>
				<button className="ExecutionStatus">En ejecución</button>
			</div>
		</div>
	);
}

export default StatusBar;