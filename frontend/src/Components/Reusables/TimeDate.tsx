// --------------------------------------------------
// TimeDate Reusable Component
// --------------------------------------------------
import { useEffect, useState } from "react";
// --------------------------------------------------
interface TimeDateProps {
	className?: string; 
}

// --------------------------------------------------
const TimeDate = ({ className = "" }: TimeDateProps) => {
	const [gmtTime, setGmtTime] = useState<string>("");
	const [gmtDate, setGmtDate] = useState<string>("");

	useEffect(() => {
		const updateTime = () => {
			const now = new Date();

			// Time
			const time = now.toLocaleString("en-GB", {
				timeZone: "UTC",
				timeStyle: "medium",
			});

			// Date
			const date = now.toLocaleString("en-GB", {
				timeZone: "UTC",
				dateStyle: "full",
			});

			setGmtTime(time + " GMT");
			setGmtDate(date);
		};

		updateTime(); // initial display
		const interval = setInterval(updateTime, 1000);

		return () => clearInterval(interval); // cleanup
	}, []);

	return (
		<div
			className={`time-date__parent flex flex-col text-[0.9rem] font-bold italic mt-[0.3rem] ${className}`}
		>
			<p>{gmtTime}</p>
			<p>{gmtDate}</p>
		</div>
	);
};

export default TimeDate;
