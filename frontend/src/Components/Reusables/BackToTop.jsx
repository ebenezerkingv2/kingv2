// =====================================
// src/Components/Reusables/BackToTop.jsx
// =====================================

import { useEffect, useState } from "react";
import { RiArrowUpDoubleLine } from "react-icons/ri";

// ===================================== BACK TO TOP COMPONENT
const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		isVisible && (
			<button
				onClick={scrollToTop}
				className="fixed bottom-[15rem] right-2 text-[#09063a] text-[1.5rem] transition-all duration-300 hover:scale-[2] cursor-pointer motion-preset-oscillate "
				aria-label="Back to top"
			>
				<RiArrowUpDoubleLine size={40} />
			</button>
		)
	);
};

export default BackToTop;
