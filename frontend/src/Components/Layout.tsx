// =====================================
// src/Components/Layout.tsx
// ===================================== LAYOUT COMPONENT

import { Outlet } from "react-router-dom";
import Navbar from "./Reusables/Navbar";
import Footer from "./Reusables/Footer";
import BackToTop from "./Reusables/BackToTop";

// =====================================
function Layout() {
	return (
		<div className="flex flex-col min-h-screen w-full relative">
			{/* ============== HEADER ============== */}
			<header>
				<Navbar />
			</header>

			{/* ============== MAIN ============== */}
			<main className="flex-grow flex flex-col w-full relative z-0">
				<Outlet />
			</main>

			{/* ============== FOOTER ============== */}
			<footer>
				<Footer />
			</footer>

			{/* ============== BACK TO TOP ============== */}
			<BackToTop />
		</div>
	);
}

export default Layout;
