// =====================================
// src/App.tsx
// =====================================

import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./index.css";

// ===================================== APP COMPONENT
function App() {
	return (
		<Routes>
			{/* All pages wrapped by Layout */}
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				{/* Add other pages */}
				{/* <Route path="projects" element={<Projects />} /> */}
				{/* <Route path="services" element={<Services />} /> */}
				{/* <Route path="contact" element={<Contact />} /> */}
			</Route>
		</Routes>
	);
}

export default App;
