"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import type { WorkItem, WorksClientProps } from "../const/type";
import { WorkModal } from "./WorkModal";

export function WorksClient({ worksData }: WorksClientProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

	const openModal = (work: WorkItem) => {
		setSelectedWork(work);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedWork(null);
	};

	return (
		<>
			<div className="w-full md:w-1/2 mx-auto space-y-8">
				<div className="flex flex-col mt-9 md:mt-12">
					<FadeIn>
						<div className="flex space-x-4 md:space-x-8 items-center mb-8">
							<div className="w-[12px] h-[12px] md:w-[15px] md:h-[15px] rounded-[3px] bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-200 border-solid border-[1.5px] mt-1" />
							<p className="text-2xl md:text-3xl font-bold tracking-widest">
								Works/
							</p>
						</div>
					</FadeIn>
					<div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{worksData.map((work) => (
							<FadeIn key={work.id}>
								<div
									className="flex flex-col group shadow-2xs rounded-xl overflow-hidden hover:shadow-lg focus:outline-hidden focus:shadow-lg transition dark:bg-neutral-900 dark:shadow-neutral-700/70 border-solid dark:border-gray-500 border-gray-600 border-[1px] dark:hover:border-gray-200 cursor-pointer"
									onClick={() => openModal(work)}
								>
									<div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
										<Image
											width={200}
											height={0}
											className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
											src={`/works/${work.thumbnail}`}
											alt={work.title}
										/>
									</div>
									<div className="bg-gray-100 dark:bg-gray-800 p-4 md:p-5">
										<h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
											{work.title}
										</h3>
										<p className="mt-1 text-gray-500 dark:text-neutral-400">
											{work.description}
										</p>
									</div>
								</div>
							</FadeIn>
						))}
					</div>
				</div>
			</div>

			<AnimatePresence>
				{selectedWork && (
					<WorkModal
						isOpen={isModalOpen}
						onClose={closeModal}
						selectedWork={selectedWork}
					/>
				)}
			</AnimatePresence>
		</>
	);
}
