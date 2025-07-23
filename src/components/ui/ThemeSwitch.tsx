"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { FadeIn } from "@/components/ui/FadeIn";

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return null;
	}

	if (resolvedTheme === "dark") {
		return (
			<div className="cursor-pointer">
				<FadeIn>
					<FiSun size={30} onClick={() => setTheme("light")} />
				</FadeIn>
			</div>
		);
	}

	if (resolvedTheme === "light") {
		return (
			<div className="cursor-pointer">
				<FadeIn>
					<FiMoon size={30} onClick={() => setTheme("dark")} />
				</FadeIn>
			</div>
		);
	}
}
