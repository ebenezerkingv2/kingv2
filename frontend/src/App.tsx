// =====================================
// src/App.tsx
// ===================================== APP COMPONENT

import { Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

// =====================================
function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="projects" element={<Projects />} />
				<Route path="services" element={<Services />} />
				<Route path="contact" element={<Contact />} />
			</Route>
		</Routes>
	);
}

export default App;
