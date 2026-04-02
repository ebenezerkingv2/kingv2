// =====================================
// src/Components/Navbar.tsx
// =====================================

import { Link } from "react-router-dom";
import TimeDate from "./TimeDate";
import { useState } from "react";
import MobileSidebar from "./HamburgerMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { motion } from "motion/react";

// ===================================== ANIMATION CONFIG
const navbarMotion = {
	initial: { y: -150, opacity: 1 },
	animate: { y: 0, opacity: 1 },
	exit: { y: -100, opacity: 0 },
};

const navbarTransition = {
	duration: 1.5,
	easing: "ease-out",
};

// ===================================== NAVBAR COMPONENT
function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.nav
			initial={navbarMotion.initial}
			animate={navbarMotion.animate}
			exit={navbarMotion.exit}
			transition={navbarTransition}
			className="navbar__parent relative bg-black w-full min-h-[130px] text-[1.1rem] flex flex-col px-[1rem] py-[1rem] md:text-[1.1rem]"
		>
			{/* ================ NAVBAR CONTENTS ================ */}
			<div className="relative z-20">
				{/* ================ Navbar Logo ================ */}
				<div className="navbarHeader__logo text-[1.7rem] font-bold whitespace-nowrap mb-[1rem]">
					<Link
						to="/"
						className="navbarHeader__logo--link border-t-2 border-b-2 border-orange-500 hover:bg-[#dbcfff] hover:text-[#450693] transition-transform duration-300"
					>
						<span className=" text-orange-500 md:text-[#450693] transition-transform duration-300">
							Ebenezer
						</span>
						<span className="text-[#450693] md:text-orange-500">King</span>
					</Link>
				</div>

				{/* ============================================ */}
				<div className="navbar__main text-orange-500 md:text-[#dbcfff] flex justify-between items-end">
					{/* ================ Time and Date ================ */}
					<div className="">
						<TimeDate className="timeDate text-[1rem]" />
					</div>

					{/* ================ Navigation Links ================ */}
					<div className="navbar__menu flex items-center gap-4">
						<ul className="navbar__links hidden md:flex gap-[1.5rem] font-semibold capitalize">
							<li className="navbar__item border-t-2 border-b-2 border-orange-500 px-[0.5rem] hover:bg-[#dbcfff] hover:text-[#450693] transition-transform duration-300">
								<Link to="/about">about</Link>
							</li>
							<li className="navbar__item border-t-2 border-b-2 border-orange-500 px-[0.5rem] hover:bg-[#dbcfff] hover:text-[#450693] transition-transform duration-300">
								<Link to="/projects">projects</Link>
							</li>
							<li className="navbar__item border-t-2 border-b-2 border-orange-500 px-[0.5rem] hover:bg-[#dbcfff] hover:text-[#450693] transition-transform duration-300">
								<Link to="/services">services</Link>
							</li>
							<li className="navbar__item border-t-2 border-b-2 border-orange-500 px-[0.5rem] hover:bg-[#dbcfff] hover:text-[#450693] transition-transform duration-300">
								<Link to="/contact">contact</Link>
							</li>
						</ul>

						{/* ================ Hamburger Menu / Small screens ================ */}
						<button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
							{isOpen ? (
								<FaTimes
									size={28}
									className="text-[#450693] bg-orange-500 rounded"
								/>
							) : (
								<GiHamburgerMenu size={28} />
							)}
						</button>

						<MobileSidebar
							isOpen={isOpen}
							toggleMenu={() => setIsOpen(false)}
						/>
					</div>
				</div>
			</div>
		</motion.nav>
	);
}

export default Navbar;
