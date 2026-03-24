// =====================================
// src/Components/ProjectsSection.tsx
// ===================================== PROJECTS SECTION COMPONENT

import darkNight from "../Assets/backgroundImage/darkNight.webp";
import PageLayout from "./Reusables/PageLayout";
import ProjectBoard from "./Reusables/ProjectBoard";
import { useState, useEffect } from "react";

const projects = [
	{
		title: "E-commerce Platform",
		description:
			"A full-stack e-commerce app with authentication, cart, and payment integration.",
		image: "/images/ecommerce.png",
		tech: ["React", "Node.js", "MongoDB", "Tailwind"],
		live: "https://your-live-link.com",
		github: "https://github.com/your-repo",
	},
	{
		title: "Real-Time Chat App",
		description:
			"A real-time messaging app with WebSocket integration and user presence.",
		image: "/images/chat.png",
		tech: ["React", "Socket.io", "Express"],
		live: "https://your-live-link.com",
		github: "https://github.com/your-repo",
	},
];
// =====================================

const ProjectsSection = () => {
	const [visibleCount, setVisibleCount] = useState(1);

	useEffect(() => {
		const updateCount = () => {
			if (window.innerWidth >= 1024) {
				setVisibleCount(1);
			} else if (window.innerWidth >= 768) {
				setVisibleCount(1);
			} else {
				setVisibleCount(1);
			}
		};

		updateCount();
		window.addEventListener("resize", updateCount);
		return () => window.removeEventListener("resize", updateCount);
	}, []);
	// =====================================

	return (
		<section className="projectSection relative w-full flex flex-col px-4 md:bg-black text-[#dbcfff] overflow-hidden min-h-[100vh] md:min-h-0 md:flex-1">
			{/* ============================== HERO IMAGE */}
			<img
				src={darkNight}
				alt="Background"
				className="aboutSection__mobile--backgroundImage md:hidden absolute inset-0 w-full h-full object-cover object-[center_30%]"
			/>

			{/* ============================== PAGE LAYOUT */}
			<PageLayout
				header={
					<div className="projectSectionHeader__parent text-[1.1rem] text-[#dbcfff] text-center md:text-[1rem] md:pt-[1rem] w-fit mx-auto bg-black/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0 p-[0.1rem] rounded md:text-start md:mb-[1rem]">
						<h2 className="sr-only">Projects</h2>
						<h3 className="projectSection__subHeader">
							...pause to view some{" "}
							<span className="text-orange-500">projects</span>
						</h3>
					</div>
				}
			>
				{/* ============================== PROJECT BOARD */}
				<ProjectBoard items={projects} visibleCount={visibleCount} />
			</PageLayout>
		</section>
	);
};

export default ProjectsSection;
