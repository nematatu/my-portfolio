import Logo from "@/components/icons/logo.svg";

export default function Home() {
	return (
		<div className="bg-gray-100 min-h-screen min-w-screen flex items-center justify-center">
			<div className="w-80 md:w-1/3 lg:w-1/4 p-8">
				<div className="rounded-[28px] bg-white p-[8px]">
					<Logo className="rounded-[20px]" />
				</div>
				<p>hello</p>
				<p>world</p>
			</div>
		</div>
	);
}
