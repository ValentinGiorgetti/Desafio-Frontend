import { Route, Routes, Navigate } from 'react-router-dom';
import Home from "./views/home/Home";
import Login from "./views/login/Login"

export default function App() {
	return (

		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/home" element={<Home />} />
			<Route path="*" element={<Navigate replace to="/login" />} />
		</Routes>

	  )
}