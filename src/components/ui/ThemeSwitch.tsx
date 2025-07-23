"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

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
				<FiSun size={21} onClick={() => setTheme("light")} />
			</div>
		);
	}

	if (resolvedTheme === "light") {
		return (
			<div className="cursor-pointer">
				<FiMoon size={21} onClick={() => setTheme("dark")} />
			</div>
		);
	}
}
