// =====================================
// src/Components/Reusables/ProjectBoard.tsx
// =====================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
	title: string;
	description: string;
	images: {
		mobile: string;
		tablet?: string;
		desktop?: string;
	};
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
		<div className="projectBoard__parent flex flex-col items-center gap-4 w-full z-20 md:my-[4rem]">
			{/* ================= SLIDER "TV SCREEN" */}
			<div className=" projectBoard__slider relative w-full md:w-[90%] lg:w-[60%] p-4 overflow-hidden flex flex-col items-center justify-start border border-orange-500 rounded-[1rem] flex-2  bg-gray-900 flex-shrink-0 ">
				<div className="projectBoard__sliderSecondBorder border border-orange-500 rounded-[1rem] w-full h-full">
					<AnimatePresence mode="wait">
						<motion.div
							key={startIndex}
							className="w-full h-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 md:gap-6 items-stretch"
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
									<div className="projectCard min-h-[55vh] sm:min-h-[50vh] md:min-h-[35vh] flex flex-col bg-black/80 backdrop-blur-sm rounded-[1rem] border border-gray-500 overflow-hidden h-full">
										{/* ================= TV IMAGE SIZES */}
										<div className="w-full h-full flex gap-3 flex-1">
											{/* ================== MOBILE */}
											<div className="flex-1 h-full p-4">
												<img
													src={project.images.mobile}
													alt={project.title}
													className="w-full h-full object-cover rounded-md"
												/>
											</div>

											{/* =================== TABLET */}
											{project.images.tablet && (
												<div className="flex-1 h-full p-4">
													<img
														src={project.images.tablet}
														alt={project.title}
														className="w-full h-full object-cover rounded-md"
													/>
												</div>
											)}

											{/* =================== DESKTOP */}
											{project.images.desktop && (
												<div className="hidden md:flex flex-2 h-full p-4">
													<img
														src={project.images.desktop}
														alt={project.title}
														className="w-full h-full object-cover rounded-md"
													/>
												</div>
											)}
										</div>

										{/* ================= TV DETAILS" */}
										<div className="px-4 py-2 flex flex-col justify-between flex-2">
											{/* ============================ PROJECT TITLE */}
											<div className="text-[1.25rem] font-bold text-orange-500 mb-2 text-start">
												<h4>{project.title}</h4>
											</div>

											{/* ============================ PROJECT DESCRIPTION */}
											<div className="text-[1.1rem] mb-2">
												<p>{project.description}</p>
											</div>

											{/* ============================ PROJECT TECHNOLOGIES */}
											<div className="flex flex-wrap gap-[0.7rem] mb-2">
												{project.tech.map((tech, idx) => (
													<span
														key={idx}
														className="text-[0.9rem] border-l border-r border-orange-500 px-2 py-[0.2rem] bg-orange-500/20"
													>
														{tech}
													</span>
												))}
											</div>

											{/* ============================ PROJECT BUTTONS LIVE & CODE */}
											<div className="projectBoard__buttonsLiveCode flex justify-center md:justify-start gap-4 mt-auto">
												{project.live && (
													<a
														href={project.live}
														target="_blank"
														rel="noopener noreferrer"
														className="projectBoard__buttonLive w-[5rem] flex justify-center bg-orange-500 text-[#450693] font-bold hover:bg-[#dbcfff] hover:text-orange-500 py-2 rounded-[0.5rem] transition-colors duration-300 cursor-pointer border border-[#dbcfff]"
													>
														Live
													</a>
												)}
												{project.github && (
													<a
														href={project.github}
														target="_blank"
														rel="noopener noreferrer"
														className="projectBoard__buttonCode w-[5rem] flex justify-center bg-orange-500 text-[#450693] font-bold hover:bg-[#dbcfff] hover:text-orange-500 py-2 rounded-[0.5rem] transition-colors duration-300 cursor-pointer border border-[#dbcfff]"
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
					<div className="projectBoard__centerButtons flex gap-2">
						<div className="w-1 h-1 bg-orange-500 rounded-full"></div>
						<div className="w-1 h-1 bg-[#dbcfff] rounded-full"></div>
					</div>
					<div className="w-3 h-3 bg-orange-500 rounded-full"></div>
				</div>
			</div>

			{/* ==========================  CORD TO BUTTON */}
			<div className="border border-orange-500 px-[1.5rem]"></div>
			<div className="border border-orange-500 px-[1.5rem]"></div>

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
