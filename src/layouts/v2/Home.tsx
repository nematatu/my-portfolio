import Logo from "@/components/icons/logo.svg";

export default function Home() {
	return (
		<div className="bg-gray-100 min-h-screen min-w-screen p-8">
			<div className="w-full md:w-1/2 lg:w-1/4 mx-auto">
				<div className="w-full pt-12 pr-12 pl-12 mb-7">
					<div className="rounded-[28px] p-[8px] border-[1px] bg-white border-solid border-blue-400 ">
						<Logo className="rounded-[20px]" />
					</div>
					<p className="text-[140%] tracking-widest mt-6">Amtt</p>
					<div className="flex items-center space-x-4 my-6">
						<div className="w-[20px] h-[18px] rounded-[5px] bg-white border-blue-400 border-solid border-[1px]" />
						<div className="w-full h-[1px] bg-blue-400" />
					</div>
				</div>

				{/* <div className="pl-13 md:pl-16"> */}
					<div className="flex space-x-9">
						<div className="relative pl-6 space-y-5 md:space-y-10 text-xs md:text-sm lg:text-base tracking-widest">
							<div className="flex space-x-8 items-center">
						<div className="w-[15px] h-[15px] rounded-[3px] bg-white border-blue-400 border-solid border-[1px]" />
								<p className="whitespace-pre">About </p>
								<p className="absolute left-32">{">"}</p>
							</div>
							<div className="flex space-x-8 items-center">
						<div className="w-[15px] h-[15px] rounded-[3px] bg-white border-blue-400 border-solid border-[1px]" />
								<p className="whitespace-pre">Works </p>
								<p className="absolute left-32">{">"}</p>
							</div>
							<div className="flex space-x-8 items-center">
						<div className="w-[15px] h-[15px] rounded-[3px] bg-white border-blue-400 border-solid border-[1px]" />
								<p className="whitespace-pre">Blog </p>
								<p className="absolute left-32">{">"}</p>
							</div>
						</div>
					</div>
				{/* </div> */}
			</div>
		</div>
	);
}
