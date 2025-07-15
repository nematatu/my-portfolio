import Logo from "@/components/icons/logo.svg";

export default function Home() {
	return (
		<div className="bg-gray-100 min-h-screen min-w-screen flex items-center justify-center">
			<div className=" w-full md:w-3/1 sm:w-1/2 lg:w-1/4 p-8">
				<div className="rounded-[28px] bg-white p-[8px]">
					<Logo className="rounded-[20px]" />
				</div>
				<p>hello</p>
				<p>world</p>
			</div>
		</div>
	);
}
