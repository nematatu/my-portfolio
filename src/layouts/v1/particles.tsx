import Particles from "@/components/ui/particles";

export default function ParticlesBackground() {
	const color = "#ffffff";
	return (
		<Particles
			className="fixed inset-0 z-10"
			quantity={30}
			ease={100}
			color={color}
		/>
	);
}
