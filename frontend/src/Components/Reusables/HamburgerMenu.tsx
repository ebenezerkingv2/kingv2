// =====================================
// src/Components/Reusables/HamburgerMenu.tsx
// =====================================

import { Link } from "react-router-dom";

// =====================================
interface HamburgerMenuProps {
	isOpen: boolean;
	toggleMenu: () => void;
}

// ===================================== HAMBRGER MENU COMPONENT
export default function HamburgerMenu({
	isOpen,
	toggleMenu,
}: HamburgerMenuProps) {
	// =================================

	return (
		<div
			className={`hamburgerMenu fixed top-[9rem] left-0 h-auto w-[15rem] text-[1.1rem] text-orange-500 font-bold  bg-black rounded-r-[1rem] shadow-lg transform rounded
			${isOpen ? "translate-x-0" : "-translate-x-full"}
			transition-transform duration-300 z-50`}
		>
			<ul className="hamburgerMenu__ul space-y-[1.5rem] p-[1rem] list-none">
				<li>
					<Link to="/about" onClick={toggleMenu}>
						<span className="hamburgerMenu__item block text-orange-500 border-t-4 border-b-4 border-[#450693] py-[0.3rem] pl-[0.5rem] pr-[0.5rem] hover:bg-[#dbcfff] hover:border-orange-500 hover:text-orange-500 transition-transform duration-300 w-[100%]">
							about
						</span>
					</Link>
				</li>
				<li>
					<Link to="/projects" onClick={toggleMenu}>
						<span className="hamburgerMenu__item block text-orange-500 border-t-4 border-b-4 border-[#450693] py-[0.3rem] pl-[0.5rem] pr-[0.5rem] hover:bg-[#dbcfff] hover:border-orange-500 hover:text-orange-500 transition-transform duration-300 w-[100%]">
							projects
						</span>
					</Link>
				</li>
				<li>
					<Link to="/services" onClick={toggleMenu}>
						<span className="hamburgerMenu__item block text-orange-500 border-t-4 border-b-4 border-[#450693] py-[0.3rem] pl-[0.5rem] pr-[0.5rem] hover:bg-[#dbcfff] hover:border-orange-500 hover:text-orange-500 transition-transform duration-300 w-[100%]">
							services
						</span>
					</Link>
				</li>
				<li>
					<Link to="/contact" onClick={toggleMenu}>
						<span className="hamburgerMenu__item block text-orange-500 border-t-4 border-b-4 border-[#450693] py-[0.3rem] pl-[0.5rem] pr-[0.5rem] hover:bg-[#dbcfff] hover:border-orange-500 hover:text-orange-500 transition-transform duration-300 w-[100%]">
							contact
						</span>
					</Link>
				</li>
			</ul>
		</div>
	);
}
