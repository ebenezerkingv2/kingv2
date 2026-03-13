// =====================================
// src/Components/Layout.tsx
// =====================================

import { Outlet } from "react-router-dom";
import Navbar from "./Reusables/Navbar";
import Footer from "./Reusables/Footer";

// ===================================== LAYOUT COMPONENT
function Layout() {
	return (
		<div className="flex flex-col min-h-screen w-full">
			{/* ============== HEADER ============== */}
			<header>
				<Navbar />
			</header>

			{/* ============== MAIN ============== */}
			<main className="flex-grow flex flex-col w-full">
				<Outlet /> 
			</main>

			{/* ============== FOOTER ============== */}
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default Layout;
