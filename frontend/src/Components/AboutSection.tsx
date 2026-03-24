// =====================================
// src/Components/AboutSection.tsx
// ===================================== ABOUT SECTION COMPONENT

import tokyoNights from "../Assets/backgroundImage/tokyoNight.webp";

// =====================================
const AboutSection = () => {
	return (
		<section className="aboutSection relative flex-1 md:bg-black text-[#dbcfff] w-full overflow-hidden">
			{/* ============================== HERO IMAGE */}
			<img
				src={tokyoNights}
				alt="Background"
				className="aboutSection__mobile--backgroundImage md:hidden absolute inset-0 w-full h-full object-cover object-[center_30%]"
			/>

			{/* ============================== HERO CONTENT */}
			<div className="aboutSection__mobile--hero-content relative z-20 h-screen grid grid-rows-[auto_1fr_auto] px-4 md:h-auto lg:w-[60%] lg:mx-auto">
				{/* ============================== ABOUT HEADER */}
				<div className="aboutSection__headerSubHeader text-[1.1rem] text-center md:pt-[1rem] md:text-[1rem] text-center w-fit mx-auto bg-black/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0 p-[0.1rem] rounded md:text-start md:mb-[1rem]">
					<h2 className="sr-only">About Me</h2>

					<h3 className="aboutSection__subHeader">
						...About me <span className="text-orange-500">professionally</span>
					</h3>
				</div>

				{/* ============================== ABOUT CONTENT */}
				<div className="servicesSection__paragraphs mx-auto flex flex-col gap-4 lg:gap-3 text-[1.2rem] self-center">
					<p className="w-fit bg-black/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0 rounded-[1rem] px-4 py-[0.1rem]">
						I started my tech journey on May 19th, 2024, a day after my
						birthday, and the beginning of a new chapter in my life.
					</p>

					<p className="w-fit bg-black/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0 rounded-[1rem] px-4 py-[0.1rem]">
						The journey has been an interesting one so far, filled with ups and
						downs, and small wins along the way.
					</p>

					<p className="w-fit bg-black/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0 rounded-[1rem] px-4 py-[0.1rem]">
						Being part of the tech ecosystem has helped me grow — not just
						technically, but also as an individual, a team member, and a leader.
					</p>

					<p className="w-fit bg-black/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0 rounded-[1rem] px-4 py-[0.1rem]">
						Now, with over two years of experience, I build full-stack
						applications using the JavaScript ecosystem.
					</p>

					<p className="w-fit bg-black/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0 rounded-[1rem] px-4 py-[0.1rem]">
						<span className="font-bold text-orange-500">On the frontend,</span>{" "}
						I work with{" "}
						<span className="font-bold text-orange-500">
							React, TypeScript, Vite, and Tailwind CSS.
						</span>
					</p>

					<p className="w-fit bg-black/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0 rounded-[1rem] px-4 py-[0.1rem]">
						<span className="font-bold text-orange-500">On the backend,</span> I
						build <span className="font-bold text-orange-500">APIs</span> using{" "}
						<span className="font-bold text-orange-500">
							Node.js and Express,
						</span>{" "}
						and work with{" "}
						<span className="font-bold text-orange-500">
							MongoDB or SQL databases.
						</span>
					</p>

					<p className="w-fit bg-black/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0 rounded-[1rem] px-4 py-[0.1rem]">
						I’m constantly learning, and refining my craft, pushing myself to
						build better with each experience.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
