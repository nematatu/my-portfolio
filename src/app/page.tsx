"use client";

import Background from "@/components/backgrounds/v1-bg.svg";
import Header from "@/components/layouts/v1/Header";
import Home from "@/components/layouts/v2/Home";

export default function MinimalPortfolio() {
	return (
		<div className=" min-h-screen  text-white overflow-hidden relative">
			<Background className="fixed inset-0 z-0" />
			<Header />
			<main className="px-8 md:px-16 lg:px-24">
				<Home />
			</main>
		</div>
	);
}
