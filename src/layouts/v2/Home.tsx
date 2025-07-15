import Logo from "@/components/icons/logo.svg";

export default function Home() {
	return (
		<div className="bg-gray-100 min-h-screen min-w-screen p-8 bg-blue-200">
			<div className="w-full md: w-1/2 lg:w-1/3 mx-auto">
				<div className="w-full p-12">
					<div className="rounded-[28px] bg-white p-[8px]">
						<Logo className="rounded-[20px]" />
					</div>
				</div>

				<p className="text-4xl my-2 flex items-start justify-start">Amtt</p>
				<div className="flex flex-col items-start justify-start">
					<div className="space-y-9">
						<p className="">About</p>
						<p className="">Works</p>
						<p className="">Blog</p>
					</div>
				</div>
			</div>
		</div>
	);
}
