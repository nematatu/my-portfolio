import Logo from "@/components/icons/logo.svg";
import { FadeIn, FadeInWithStagger } from "@/components/ui/FadeIn";
import ThemeSwitch from "@/components/ui/ThemeSwitch";

export default function Home() {
	return (
		<div className="relative bg-gray-100 min-h-screen min-w-screen p-8 text-gray-700 dark:text-gray-200 dark:bg-gray-700">
			<div className="w-full md:w-1/2 lg:w-1/4 mx-auto">
				<div className="absolute top-8 right-8">
					<ThemeSwitch />
				</div>
				<div className="w-full pt-12 pr-12 pl-12 mb-8">
					<div className="rounded-[28px] p-[8px] border-[1.5px] bg-white dark:bg-gray-800 border-solid border-gray-700 dark:border-gray-200 ">
						<Logo className="rounded-[20px] border-[1.5px] bg-blue-400 border-solid border-gray-700 dark:border-gray-200" />
					</div>
					<FadeIn>
						<p className="text-2xl tracking-widest my-8">Amtt</p>
					</FadeIn>
					<div className="flex items-center space-x-8">
						<div className="w-[20px] h-[18px] rounded-[4px] bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-200 border-solid border-[1.5px]" />
						<div className="w-full h-[1.5px] bg-gray-700 dark:bg-gray-200" />
					</div>
				</div>

				<FadeInWithStagger>
					<div className="flex flex-col items-center mr-8 text-lg tracking-widest">
						<div className="relative space-y-8">
							<FadeIn>
								<div className="flex space-x-8 items-center">
									<div className="w-[15px] h-[15px] rounded-[3px] bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-200 border-solid border-[1.5px]" />
									<p className="whitespace-pre">About </p>
									<p className="absolute left-24">{">"}</p>
								</div>
							</FadeIn>
							<FadeIn>
								<div className="flex space-x-8 items-center">
									<div className="w-[15px] h-[15px] rounded-[3px] bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-200 border-solid border-[1.5px]" />
									<p className="whitespace-pre">Works </p>
									<p className="absolute left-24">{">"}</p>
								</div>
							</FadeIn>
							<FadeIn>
								<div className="flex space-x-8 items-center">
									<div className="w-[15px] h-[15px] rounded-[3px] bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-200 border-solid border-[1.5px]" />
									<p className="whitespace-pre">Blog </p>
									<p className="absolute left-24">{">"}</p>
								</div>
							</FadeIn>
						</div>
					</div>
				</FadeInWithStagger>
			</div>
		</div>
	);
}
