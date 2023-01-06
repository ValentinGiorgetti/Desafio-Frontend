import React from "react";
import TopLogo from "./topLogo/TopLogo"
import Footer from "./footer/Footer"
import DropDownButton from "./dropDownButton/DropDownButton";
import DropDownOption from "./dropDownOption/DropDownOption";

import "./SideNavBar.css";

const SideNavBar = () => {

	const dropDownButtons = ["Presupuesto", "CAS", "Planificación", "Contrataciones", "Portal", "Contabilidad", "Tesorería",
							 "Bienes Físicos", "Inversión Pública", "Crédito Público", "Ingresos Públicos", "Recursos Humanos"];

	const selectedDropDownButton = "Presupuesto"

	const dropDownOptions = ["Configuración", "Formulación presupuestaria", "Modificación Presupuestaria", "Programación Física", "Reportes"]

	const selectedOption = "Configuración"

	var buttons = []

	for (let button of dropDownButtons) {
		if (button !== selectedDropDownButton) {
			buttons.push(<DropDownButton text={button} key={button} expandible />);
		} else {
			buttons.push(<DropDownButton text={button} key={button} selected />);
			for (let option of dropDownOptions) {
				buttons.push(<DropDownOption text={option} key={option} selected={option === selectedOption} />);
			}
		}
	}

	return (
		<div className="SideNavBar">
			<p className="SideNavBarDescription"> Desarrollado por RAFAM 2021 </p>
			<p className="SideNavBarDescription"> v4.12.3 </p>

			<hr />

			<TopLogo />

			<div className="buttonsContainer">

				<DropDownButton text="Inicio"/>

				{buttons}

			</div>

			<hr />

			<Footer />
		</div>
	);
}

export default SideNavBar;