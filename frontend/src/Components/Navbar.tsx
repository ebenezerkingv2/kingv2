// --------------------------------------------------
// Navbar Component
// --------------------------------------------------
import { Link } from "react-router-dom";
import TimeDate from "./Reusables/TimeDate";
import { useState } from "react";
import MobileSidebar from "./Reusables/HamburgerMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { motion } from "motion/react";
// --------------------------------------------------

const navbarMotion = {
	initial: { y: -150, opacity: 1 },
	animate: { y: 0, opacity: 1 },
	exit: { y: -100, opacity: 0 },
};

const navbarTransition = {
	duration: 1.5,
	easing: "ease-out",
};
// --------------------------------------------------

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.nav
			initial={navbarMotion.initial}
			animate={navbarMotion.animate}
			exit={navbarMotion.exit}
			transition={navbarTransition}
			className="navbar__parent bg-[#f6f0ec] w-screen text-[1.1rem] flex flex-col p-[1rem] md:text-[1.2rem] lg:text-[1.1rem]"
		>
			<div className="navbarHeader__logo text-[1.7rem] font-bold whitespace-nowrap mb-[1rem]">
				<Link
					to="/"
					className="navbarHeader__logo--link border-t-2 border-b-2 border-[#450693] px-[0.5rem] hover:bg-[#dbcfff] transition-transform duration-300"
				>
					<span className="text-[#450693]">Ebenezer</span>
					<span className="text-orange-500">Tiewei</span>
				</Link>
			</div>

			<div className="navbar__main text-[#450693] flex justify-between items-end">
				<TimeDate className="timeDate px-[0.5rem]" />

				<div className="navbar__menu flex items-center gap-4">
					<ul className="navbar__links hidden md:flex gap-[1.5rem] font-semibold capitalize">
						<li className="navbar__item border-t-2 border-b-2 border-[#450693] px-[0.5rem] hover:bg-[#dbcfff] transition-transform duration-300">
							<Link to="/contact">contact</Link>
						</li>
						<li className="navbar__item border-t-2 border-b-2 border-[#450693] px-[0.5rem] hover:bg-[#dbcfff] transition-transform duration-300">
							<Link to="/services">services</Link>
						</li>
						<li className="navbar__item border-t-2 border-b-2 border-[#450693] px-[0.5rem] hover:bg-[#dbcfff] transition-transform duration-300">
							<Link to="/about">about</Link>
						</li>
					</ul>

					<button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
						{isOpen ? (
							<FaTimes size={28} className="text-[#450693]" />
						) : (
							<GiHamburgerMenu size={26} />
						)}
					</button>

					<MobileSidebar isOpen={isOpen} />
				</div>
			</div>
		</motion.nav>
	);
};

export default Navbar;
