import Logo from "@/components/icons/logo.svg";

export default function Home() {
	return (
		<div className="bg-gray-100 min-h-screen min-w-screen flex flex-col items-center justify-start p-8">
			<div className="w-80 md:w-1/3 lg:w-1/4 p-12">
				<div className="rounded-[28px] bg-white p-[8px]">
					<Logo className="rounded-[20px]" />
				</div>
			</div>
			<p className="pt-12">Hello</p>
		</div>
	);
}
