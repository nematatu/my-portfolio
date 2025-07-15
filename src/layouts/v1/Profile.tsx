import { Icon } from "@iconify/react";
import awsIcon from "@iconify-icons/logos/aws";
import shellScriptIcon from "@iconify-icons/logos/bash-icon";
import pythonIcon from "@iconify-icons/logos/python";
import typeScriptIcon from "@iconify-icons/logos/typescript-icon";
import Link from "next/link";
import Figmalogo from "@/components/icons/figmalogo.svg";
import Github from "@/components/icons/sns/github.svg";
import X from "@/components/icons/sns/x.svg";
import Zenn from "@/components/icons/sns/zenn.svg";

interface Skills {
	name: string;
	icon: React.ElementType;
}

const SkillIcons: { [key: string]: Skills } = {
	TypeScript: {
		name: "TypeScript",
		icon: () => <Icon icon={typeScriptIcon} />,
	},
	Python: { name: "Python", icon: () => <Icon icon={pythonIcon} /> },
	AWS: { name: "AWS", icon: () => <Icon icon={awsIcon} /> },
	ShellScript: {
		name: "ShellScript",
		icon: () => <Icon icon={shellScriptIcon} />,
	},
};

export default function Profile() {
	return (
		<section id="Profile" className="offset-anchor py-16 relative z-30">
			<h2 className="text-5xl font-bold text-center mb-32">Profile</h2>
			<div className="md:px-36 flex flex-col lg:flex-row items-center justify-between">
				<div className="w-[550px] overflow-hidden rounded-full border-2 border-white">
					<div className="flex items-center jusltify-center">
						<Figmalogo className="w-full h-full" />
					</div>
				</div>
				<div className="flex flex-col space-y-8 mt-8 lg:mt-0 lg:ml-12 w-full">
					<div className="relative pb-2 border-b-2 border-green-300 flex flex-col md:flex-row items-center md:space-x-12 justify-between w-full">
						<h1 className="font-bold text-3xl my-8 md:my-0">
							あまたつ amatatu
						</h1>
						<div className="flex space-x-4">
							<Link
								href="https://twitter.com/T_kanntoku"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="transition-transform duration-200 ease-in-out hover:scale-110 hover:-translate-y-2 p-2 rounded border border-transparent hover:border-gray-300">
									<X className="w-[40px] h-[40px]" />
								</div>
							</Link>
							<Link
								href="https://zenn.com/ama"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="transition-transform duration-200 ease-in-out hover:scale-110 hover:-translate-y-2 p-2 rounded border border-transparent hover:border-gray-300">
									<Zenn className="w-[40px] h-[40px]" />
								</div>
							</Link>
							<Link
								href="https://github.com/nematatu"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="transition-transform duration-200 ease-in-out hover:scale-110 hover:-translate-y-2 p-2 rounded border border-transparent hover:border-gray-300">
									<Github className="w-[40px] h-[40px]" />
								</div>
							</Link>
						</div>
					</div>

					<div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-6 items-center">
						<h1 className="font-bold text-2xl text-gray-300 text-right">
							Age :
						</h1>
						<p className="text-base md:text-lg">21</p>

						<h1 className="font-bold text-2xl text-gray-300 text-right">
							Skills :
						</h1>
						<div className="flex space-x-4">
							{Object.values(SkillIcons).map((skill, index) => (
								<div key={index} className="flex items-center space-x-2">
									<skill.icon />
								</div>
							))}
						</div>

						<h1 className="font-bold text-2xl text-gray-300 text-right">
							Hobby :
						</h1>
						<div className="flex space-x-4 text-base md:text-lg">
							<p>Badminton 🏸</p>
							<p>Photography 📸</p>
						</div>

						<h1 className="font-bold text-2xl text-gray-300 text-right">
							Music :
						</h1>
						<div className="flex space-x-4 text-base md:text-lg">
							<p>Yorushika</p>
							<p>ZTMY</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
