import { motion, useReducedMotion } from "framer-motion";
import React, {
	type ComponentPropsWithoutRef,
	createContext,
	useContext,
} from "react";

const StaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -120px" };

export function FadeIn(props: ComponentPropsWithoutRef<typeof motion.div>) {
	const shouldRefuceMotion = useReducedMotion();

	const isStagger = useContext(StaggerContext);

	return (
		<motion.div
			transition={{
				duration: 0.8,
				ease: [0.4, 0, 0.2, 1],
			}}
			variants={{
				hidden: {
					opacity: 0,
					y: shouldRefuceMotion ? 0 : 30,
				},
				visible: {
					opacity: 1,
					y: 0,
				},
			}}
			{...(isStagger
				? {}
				: {
						initial: "hidden",
						whileInView: "visible",
						viewport,
					})}
			{...props}
		/>
	);
}

export function FadeInWithStagger({
	slow = false,
	speed,
	...props
}: ComponentPropsWithoutRef<typeof motion.div> & {
	slow?: boolean;
	speed?: number;
}) {
	return (
		<StaggerContext.Provider value>
			<motion.div
				initial="hidden"
				transition={{
					staggerChildren: speed ?? (slow ? 0.2 : 0.1),
				}}
				viewport={viewport}
				whileInView="visible"
				{...props}
			/>
		</StaggerContext.Provider>
	);
}

export function EaseDriver() {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "0px 0px -20px" }}
			variants={{
				hidden: { scaleX: 0 },
				visible: { scaleX: 1 },
			}}
			transition={{
				duration: 0.8,
				ease: [0.6, 0.01, -0.05, 0.95],
			}}
			style={{ transformOrigin: "left" }}
		>
			<div className="w-[100%] h-[1px] bg-gray-700 dark:bg-gray-200" />
		</motion.div>
	);
}
