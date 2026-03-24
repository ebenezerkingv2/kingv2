// =====================================
// src/Components/Reusables/ProjectBoard.tsx
// =====================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
	title: string;
	description: string;
	image: string;
	tech: string[];
	live?: string;
	github?: string;
};

type ProjectBoardProps = {
	items: Project[];
	visibleCount: number;
};

const ProjectBoard = ({ items, visibleCount }: ProjectBoardProps) => {
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

	// =====================================

	return (
		<div className="projectBoard__parent flex flex-col items-center gap-4 w-full z-20">
			{/* ================= SLIDER "TV SCREEN" */}
			<div className=" projectBoard__slider relative w-full md:w-[80%] lg:w-[60%] p-4 overflow-hidden h-[60vh] md:h-[45vh] lg:h-[60vh] flex flex-col items-center justify-center border border-orange-500 rounded-[1rem] flex-2 shadow-2xl bg-gray-900">
				<div className="projectBoard__sliderSecondBorder border border-orange-500 rounded-[1rem] w-full h-full p-2">
					<AnimatePresence mode="wait">
						<motion.div
							key={startIndex}
							className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 md:gap-6 items-stretch"
							initial={{ opacity: 0, filter: "blur(6px)" }}
							animate={{ opacity: 1, filter: "blur(0px)" }}
							exit={{ opacity: 0, filter: "blur(6px)" }}
							transition={{ duration: 0.4 }}
						>
							{visibleItems.map((project, index) => (
								<motion.div
									key={index}
									className="w-full flex flex-col"
									// whileHover={{ scale: 1.05 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									{/* ================= TV SHOW" */}
									<div className="projectCard flex flex-col bg-black/80 backdrop-blur-sm rounded-[1rem] border border-gray-500 overflow-hidden h-full">
										<img
											src={project.image}
											alt={project.title}
											className="w-full h-[200px] object-cover"
										/>
										<div className="p-4 flex flex-col justify-between flex-1">
											<h4 className="text-[1.25rem] font-bold text-orange-500 mb-2 text-center md:text-start">
												{project.title}
											</h4>
											<p className="text-[1.1rem] mb-2">
												{project.description}
											</p>
											<div className="flex flex-wrap gap-2 mb-2">
												{project.tech.map((tech, idx) => (
													<span
														key={idx}
														className="text-[0.9rem] px-2 py-[0.1rem] bg-orange-500/20 rounded-full"
													>
														{tech}
													</span>
												))}
											</div>
											<div className="flex justify-center md:justify-start gap-4 mt-auto">
												{project.live && (
													<a
														href={project.live}
														target="_blank"
														rel="noopener noreferrer"
														className="px-4 py-2 bg-orange-500 text-black font-bold rounded hover:bg-orange-600 transition-colors duration-300"
													>
														Live
													</a>
												)}
												{project.github && (
													<a
														href={project.github}
														target="_blank"
														rel="noopener noreferrer"
														className="px-4 py-2 bg-black/80 text-orange-500 border border-orange-500 font-bold rounded hover:bg-orange-500 hover:text-black transition-colors duration-300"
													>
														Code
													</a>
												)}
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					</AnimatePresence>
				</div>

				{/* =================== FAKE TV BUTTONS */}
				<div className="projectBoard__fakeButtons w-full flex justify-between items-center gap-8 mt-4">
					<div className="w-3 h-3 bg-orange-500 rounded-full"></div>
					<div className="centerButtons flex gap-2">
						<div className="w-1 h-1 bg-orange-500 rounded-full"></div>
						<div className="w-1 h-1 bg-[#dbcfff] rounded-full"></div>
					</div>
					<div className="w-3 h-3 bg-orange-500 rounded-full"></div>
				</div>
			</div>

			{/* ==========================  CORD TO BUTTON */}
			<div className="border border-orange-500 px-[1rem]"></div>
			<div className="border border-orange-500 px-[1rem]"></div>

			{/* ==========================  SHOW MORE BUTTON */}
			{items.length > visibleCount && (
				<button
					onClick={handleNext}
					className="cardSlider__button bg-orange-500 text-[#450693] font-bold hover:bg-[#dbcfff] hover:text-orange-500 py-2 px-6 rounded-[0.5rem] transition-colors duration-300 cursor-pointer border border-[#dbcfff]"
				>
					Switch
				</button>
			)}
		</div>
	);
};

export default ProjectBoard;
