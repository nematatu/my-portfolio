"use client";

import Background from "@/components/backgrounds/v1-bg.svg";
import Header from "@/components/layouts/v1/Header";
import Home from "@/components/layouts/v1/Home";
import Profile from "@/components/layouts/v1/Profile";
import Projects from "@/components/layouts/v1/Projects";
import ParticlesBackground from "@/components/layouts/v1/particles";

export default function MinimalPortfolio() {
	return (
		<div className=" min-h-screen  text-white overflow-hidden relative">
			<Background className="fixed inset-0 z-0" />
			<ParticlesBackground />
			<Header />
			<main className="px-8 md:px-16 lg:px-24">
				<Home />
				<Profile />
				<Projects />
			</main>
		</div>
	);
}
