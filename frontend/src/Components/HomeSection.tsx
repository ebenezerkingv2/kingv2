// =====================================
// src/Components/HomeSection.tsx
// ===================================== HOME SECTION COMPONENT

import Kingv2 from "../Assets/profilePic/kingv2_.webp";
import { motion } from "framer-motion";
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

const HomeSection = () => {
	return (
		<section className="homePage__parent bg-black text-[#f6f0ec] w-full flex flex-col flex-grow relative">
			{/* ========================================================================== */}
			<div className="homePage__container md:mx-auto md:md:w-[90%] lg:w-[60%]">
				{/* ========== SMALL SCREENS HOME SECTION  ============ */}
				<div className="homePage__smallScreens--home relative md:hidden w-full h-screen overflow-hidden flex items-center justify-center">
					{/* ================ HERO IMAGE */}
					<img
						src={redUmbrellaRainNight}
						alt="Background"
						className="homePage__smallScreens--backgroundImage absolute inset-0 w-full h-full object-cover object-[center_80%]"
					/>
					{/* =======================  HERO CONTENT */}
					<div className="homePage__smallScreens--hero-content relative z-10 flex flex-col items-center justify-center text-center text-white bg-black/80 backdrop-blur-sm rounded-[1rem] px-4 py-[0.3rem]">
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

				{/* ========================================================================== */}

				{/* ========== MEDIUM AND LARGE SCREENS HOME SECTION  ============ */}
				<div className="homePage__mediumLarge--home hidden md:flex md:h-screen items-start mx-auto">
					{/* ========== MEDIUM AND LARGE SCREENS HERO CONTAINER  ============ */}
					<div className="homePage__mediumLarge--hero-container w-full flex items-center justify-between md:mt-[16rem] lg:mt-[8rem] p-[1rem]">
						<motion.div
							className="homePage__mediumLarge--hero-image-motion"
							initial={springZoom.initial}
							animate={springZoom.animate}
							transition={springZoom.transition}
						>
							{/* ======================= HERO IMAGE CONTAINER  */}
							<div className="homePage__mediumLarge--profile-image-wrapper w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden border-4 border-orange-500 z-20 relative">
								<img
									src={Kingv2}
									alt="King"
									className="object-cover w-full h-full"
								/>
							</div>
						</motion.div>

						{/* ======================= HERO CONTENT  */}
						<motion.div
							className="homePage__mediumLarge--hero-content flex flex-col"
							initial={{ opacity: 0, x: 200 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								type: "spring",
								stiffness: 50,
								damping: 20,
								delay: 0.5,
							}}
						>
							<h1 className="relative text-[2rem] text-[#dbcfff] lg:text-[2.5rem] font-bold w-max hover:text-orange-500 transition-transform duration-300 leading-[1.2] z-10">
								<a
									href="https://www.coursera.org/articles/mern-stack"
									target="_blank"
									rel="noopener noreferrer"
								>
									MERN Full-Stack Developer
								</a>

								{/* =================== BORDER TOP */}
								<span className="absolute top-[-0.4rem] md:left-[-4.5rem] lg:left-[-2rem] md:w-[calc(100%+5rem)] lg:w-[calc(100%+3rem)] h-[4px] bg-orange-500 z-0"></span>

								{/* =================== BORDER BOTTOM */}
								<span className="absolute bottom-[-0.4rem] md:left-[-4.5rem] lg:left-[-2rem] md:w-[calc(100%+5rem)] lg:w-[calc(100%+3rem)] h-[4px] bg-orange-500 z-0"></span>
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

			{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
			<div className="hidden md:block pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent shadow-[0_0_12px_rgba(255,165,0,0.7)]"></div>
		</section>
	);
};

export default HomeSection;
