"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import HatenaIcon from "@/components/icons/hatenablog-logo.svg";
import HatenaIconDark from "@/components/icons/hatenablog-logo-dark.svg";

export default function HatenaIconSwitch() {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return null;
	}

	if (resolvedTheme === "dark") {
		return (
			<div className="w-8 h-8">
				<HatenaIconDark />
			</div>
		);
	}

	if (resolvedTheme === "light") {
		return (
			<div className="w-8 h-8">
				<HatenaIcon />
			</div>
		);
	}
}
