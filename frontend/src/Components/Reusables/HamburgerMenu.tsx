// --------------------------------------------------
// Navbar Component for mobile view
// --------------------------------------------------
import { Link } from "react-router-dom";
// --------------------------------------------------

interface HamburgerMenuProps {
	isOpen: boolean;
}

export default function HamburgerMenu({ isOpen }: HamburgerMenuProps) {
	return (
		<div
			className={`hamburgerMenu fixed top-0 left-0 h-full w-[15rem] bg-[#f6f0ec] shadow-lg transform
			${isOpen ? "translate-x-0" : "-translate-x-full"}
			transition-transform duration-300`}
		>
			<ul className="hamburgerMenu__ul mt-[8.7rem] space-y-[2rem] px-[2rem]">
				<li className="hamburgerMenu__item border-t-2 border-b-2 border-[#450693] px-[0.5rem] hover:bg-[#dbcfff] transition-transform duration-300">
					<Link to="/contact">contact</Link>
				</li>
				<li className="hamburgerMenu__item border-t-2 border-b-2 border-[#450693] px-[0.5rem] hover:bg-[#dbcfff] transition-transform duration-300">
					<Link to="/contact">contact</Link>
				</li>
				<li className="hamburgerMenu__item border-t-2 border-b-2 border-[#450693] px-[0.5rem] hover:bg-[#dbcfff] transition-transform duration-300">
					<Link to="/services">services</Link>
				</li>
				<li className="hamburgerMenu__item border-t-2 border-b-2 border-[#450693] px-[0.5rem] hover:bg-[#dbcfff] transition-transform duration-300">
					<Link to="/about">about</Link>
				</li>
			</ul>
		</div>
	);
}
