import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';

import Card from "../../components/card/Card";
import SideNavBar from "../../components/sideNavBar/SideNavBar";

import "./Home.css";
import SessionNavBar from "../../components/sessionNavBar/SessionNavBar";
import StatusBar from "../../components/statusBar/StatusBar";

import { useNavigate } from "react-router-dom";
import { isLoggedIn } from '../login/Login';

function Home() {

	const navigate = useNavigate();
	
	useEffect(() => {
		if (!isLoggedIn()) navigate("/login");
	}, [navigate]);

	return (
		<>	
			<SideNavBar/>

			<div className="PageContainer">

				<SessionNavBar location={["Municipio", "Organismo"]}/>

				<StatusBar dropDownButton="Presupuesto" dropDownOption="Configuración"/>

				<h1 className="PageTitle">Configuración</h1>

				<div className="PageContent">				

					<Grid container columnSpacing={18}>

						<Grid item xs>
							<Card title="Nuevo Ejercicio" description="Generar el nuevo Ejercicio fiscal para el Presupuesto." />

							<Card title="Anteproyecto" description="Administrar la información de Anteproyectos." />

							<Card title="Clasificadores Primarios" description="Administrar la información de los clasificadores primarios."
								  options={["Clasificador Institucional", "Estructura Programática", "Recursos por Rubro", "Gastos por Objeto", "Fuentes de Financiamiento"]}/>

							<Card title="Clasificadores Agregados" description="Administrar la información de los Clasificadores Agregados." 
								  options={["Recursos por Origen y Procedencia", "Recursos por Carácter Económico", "Gastos por Finalidad y Función", "Gastos por Carácter Económico"]}/>

							<Card title="Reglas Presupuestarias" description="Administrar la información de Reglas Presupuestarias para la etapa de Formulación y Programación." />
						</Grid>

						<Grid item xs>
							<Card title="Categorías Programáticas" description="Administrar la información de Categorías Programáticas." />

							<Card title="Unidades Ejecutoras" description="Administrar la información de Unidades Ejecutoras." />

							<Card title="Causas de Desvíos" description="Administrar la información de las Causas Operativas, Financieras y conclusiones."
								  options={["Financieras", "Operativas", "Conclusiones"]}/>

							<Card title="Tablas Referenciales" description="Administrar la información de las Tablas Referenciales del Módulo Presupuesto."
								  options={["Unidades de Medida", "Gastos Prioritarios", "Motivos Reglas Presupuestarias"]}/>
						</Grid>

					</Grid>

				</div>

			</div>
		</>
	)
}

export default Home;