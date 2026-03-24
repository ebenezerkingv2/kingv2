// =====================================
// src/Components/Reusables/CardSlider.tsx
// ===================================== CARD SLIDER COMPONENT

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CardSliderProps<T> = {
	items: T[];
	renderItem: (item: T, index: number) => React.ReactElement;
	visibleCount: number;
};

const CardSlider = <T,>({
	items,
	renderItem,
	visibleCount,
}: CardSliderProps<T>) => {
	const [startIndex, setStartIndex] = useState(0);

	const handleNext = () => {
		const nextIndex = startIndex + visibleCount;
		if (nextIndex < items.length) {
			setStartIndex(nextIndex);
		} else {
			setStartIndex(0);
		}
	};

	const visibleItems = items.slice(startIndex, startIndex + visibleCount);

	return (
		<div className="flex flex-col items-center gap-4 z-20 w-full">
			{/* ================= SLIDER "TV SCREEN" */}
			<div className="relative w-full md:w-[70%] lg:w-[60%] p-4 overflow-hidden h-[55vh] md:h-[42vh] lg:h-[42vh] flex items-center justify-center">
				{/* ==================== GRID CARDS */}
				<AnimatePresence mode="wait">
					<motion.div
						key={startIndex}
						className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 items-stretch"
						initial={{ opacity: 0, filter: "blur(6px)" }}
						animate={{ opacity: 1, filter: "blur(0px)" }}
						exit={{ opacity: 0, filter: "blur(6px)" }}
						transition={{ duration: 0.4 }}
					>
						{visibleItems.map((item, index) => (
							<motion.div
								key={index}
								className="w-full flex flex-col"
								whileHover={{
									scale: 1.05,
									// boxShadow: "0px 12px 30px rgba(249,115,22,0.6)",
								}}
								transition={{ type: "spring", stiffness: 300 }}
							>
								{renderItem(item, index)}
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>
			</div>

			{/* ================= SHOW MORE BUTTON OUTSIDE */}
			{items.length > visibleCount && (
				<button
					onClick={handleNext}
					className="cardSlider__button bg-orange-500 text-[#450693] font-bold hover:bg-[#dbcfff] hover:text-orange-500 py-2 px-6 rounded-[0.5rem] transition-colors duration-300 cursor-pointer"
				>
					More...
				</button>
			)}
		</div>
	);
};

export default CardSlider;
