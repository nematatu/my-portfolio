"use client";

import React from "react";
import { FadeIn, FadeInWithStagger } from "@/components/ui/FadeIn";
import Header from "@/layouts/v2/Header";

export default function About() {
	return (
		<FadeInWithStagger>
            <Header />
				<div className="w-full md:w-1/2 lg:w-1/4 mx-auto">
					<FadeIn>
						<div className="p-3 flex space-x-8 items-center">
							<div className="w-[15px] h-[15px] rounded-[3px] bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-200 border-solid border-[1.5px]" />
							<p className="text-xl font-bold tracking-widest my-8">About/</p>
						</div>
					</FadeIn>
				</div>
		</FadeInWithStagger>
	);
}
