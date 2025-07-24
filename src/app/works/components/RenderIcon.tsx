import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip";

const iconMap: { [key: string]: React.ElementType } = {
    "Next.js": RiNextjsFill,
    TailwindCSS: RiTailwindCssFill,
    Vercel: IoLogoVercel,
    GitHub: FaGithub,
    ExternalLink: TbExternalLink,
};

type RenderIconProps = {
    name: string;
    size: number;
};

export default function RenderIcon({ name, size }: RenderIconProps) {
    const IconComponent = iconMap[name];
    if (IconComponent) {
        return (
            <TooltipProvider delayDuration={300}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <span>
                        <IconComponent
                            className="text-gray-600 dark:text-gray-200"
                            size={size}
                        />
                        </span>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="font-bold">{name}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        );
    }
}
