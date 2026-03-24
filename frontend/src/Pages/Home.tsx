// =====================================
// src/Pages/Home.tsx
// ===================================== HOME PAGE COMPONENT

import King from "../Assets/profilePic/King.webp";
// import lonelyWalk from "../Assets/backgroundImage/lonelyWalk.webp";
import { motion } from "framer-motion";
import AboutSection from "../Components/AboutSection";
import ProjectsSection from "../Components/ProjectsSection";
import ServicesSection from "../Components/ServicesSection";
import ContactSection from "../Components/ContactSection";
import redUmbrellaRainNight from "../Assets/backgroundImage/redUmbrellaRainNight.webp";

// =====================================
const springZoom = {
	initial: { opacity: 0, scale: 0.5 },
	animate: { opacity: 1, scale: 1 },
	transition: {
		type: "spring" as const,
		stiffness: 40,
		damping: 15,
	},
};

const Home = () => {
	return (
		<div className="homePage__parent bg-black text-[#f6f0ec] w-full flex flex-col flex-grow">
			{/* ========================================================================== */}

			{/* ============================== SMALL SCREENS  */}
			<div className="homePage__layout w-full flex flex-col md:flex-row flex-grow">
				{/* ======================= HERO */}
				<div className="homePage__mobile--heroOne relative md:hidden w-full h-screen md:h-screen overflow-hidden flex items-center justify-center">
					{/* ================ HERO IMAGE */}
					<img
						src={redUmbrellaRainNight}
						alt="Background"
						className="homePage__mobile--backgroundImage absolute inset-0 w-full h-full object-cover object-[center_80%]"
					/>
					{/* ======================= HERO OVERLAY */}
					<div className="homePage__mobile--hero-overlay absolute inset-0 bg-black/5 z-10 md:hidden"></div>
					{/* =======================  HERO CONTENT */}
					<div className="homePage__mobile--hero-content relative z-10 flex flex-col items-center justify-center text-center text-white bg-black/50 backdrop-blur-sm rounded-[1rem] px-4 py-[0.3rem]">
						<p className="text-[1.2rem] text-[#dbcfff] mb-2">Known as King</p>

						<h1 className="text-[1.4rem] font-bold uppercase text-orange-500 border-t-2 border-b-2 border-orange-500 hover:border-[#450693] hover:bg-[#dbcfff] hover:text-[#450693] transition-transform duration-300 px-2">
							<a
								href="https://www.coursera.org/articles/full-stack-developer"
								target="_blank"
								rel="noopener noreferrer"
							>
								I'm a full-stack Developer
							</a>
						</h1>

						<p className="text-[1.2rem] mt-2 text-[#dbcfff]">MERN Stack</p>
					</div>
				</div>

				{/* ========================= MOBILE STACKED CONTENTS  */}
				<div className="homePage__mobile--contents md:hidden flex flex-col z-30">
					<AboutSection />
					<ProjectsSection />
					<ServicesSection />
					<ContactSection />
				</div>
				{/* ========================================================================== */}

				{/* ========================= MEDIUM AND LARGE SCREENS ========================= */}
				<div className="homePage__desktop--hero hidden md:min-w-[60%] md:flex items-center justify-between space-x-4 my-[2rem] mx-auto">
					<motion.div
						className="homePage__desktop--hero-image-motion p-[1rem]"
						initial={springZoom.initial}
						animate={springZoom.animate}
						transition={springZoom.transition}
					>
						{/* ======================= HERO IMAGE  */}
						<div className="homePage__desktop--hero-image-wrapper w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden border-4 border-orange-500">
							<img
								src={King}
								alt="King"
								className="object-cover w-full h-full"
							/>
						</div>
					</motion.div>

					{/* ======================= HERO CONTENT  */}
					<motion.div
						className="homePage__desktop--hero-content flex flex-col md:px-4"
						initial={{ opacity: 0, x: 200 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							type: "spring",
							stiffness: 50,
							damping: 20,
							delay: 0.2,
						}}
					>
						<h1 className="text-[2rem] text-[#dbcfff] lg:text-[2.5rem] font-bold border-t-4 border-b-4 border-orange-500 w-max hover:text-orange-500 transition-transform duration-300 leading-[1.2]">
							<a
								href="https://www.coursera.org/articles/mern-stack"
								target="_blank"
								rel="noopener noreferrer"
							>
								MERN Full-Stack Developer
							</a>
						</h1>

						<p className="text-[1rem] text-[#dbcfff] lg:text-[1.2rem] flex items-center gap-[0.2rem] mt-[1rem]">
							<span>{"{"}</span>
							<span>With over 2 years of experience</span>
							<span>{"}"}</span>
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Home;
