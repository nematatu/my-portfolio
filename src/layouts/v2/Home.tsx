import Folder from "@/components/icons/japan/B_folder.svg";
import NewsPaper from "@/components/icons/japan/B_newspaper.svg";
import Bird from "@/components/icons/japan/N_birdwatching.svg";
import Logo from "@/components/icons/logo.svg";

export default function Home() {
	return (
		<div className="bg-gray-100 min-h-screen min-w-screen p-8">
			<div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
				<div className="w-full pt-12 pr-12 pl-12 mb-7">
					<div className="rounded-[28px] p-[8px] border-[1px] border-solid border-blue-400 ">
						<Logo className="rounded-[20px]" />
					</div>
					<p className="text-[140%] tracking-widest mt-6">Amtt</p>
					<div className="flex items-center space-x-4 my-6">
						<div className="w-[16px] h-[16px] rounded-[5px] border-blue-400 border-solid border-[1px]" />
						<div className="w-[77%] h-[1px] bg-blue-400  " />
					</div>
				</div>

				<div className="px-12">
					<div className="flex space-x-9">
						{/* <div className="h-[10vw] w-[1px] bg-blue-400 mb-7" /> */}
						<div className="pl-6 space-y-5 md:space-y-10 text-xs md:text-sm lg:text-base tracking-widest">
							<div className="flex space-x-5 items-center">
								<Bird className="w-[24px]" />
								<p className="whitespace-pre">About /</p>
							</div>
							<div className="flex space-x-5 items-center">
								<Folder className="w-[24px]" />
								<p className="whitespace-pre">Works /</p>
							</div>
							<div className="flex space-x-5 items-center">
								<NewsPaper className="w-[24px]" />
								<p className="whitespace-pre">Blog /</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
