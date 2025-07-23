import type { Metadata } from "next";
import "./globals.css";
import { FadeIn } from "@/components/ui/FadeIn";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import { zen_Kaku_Gothic_New } from "@/utils/fonts/v1/fonts";
import { Providers } from "./providers";

export const metadata: Metadata = {
	metadataBase: new URL("https://amatatu.com"),
	openGraph: {
		title: "amatatu",
		description: "amatatu's portfolio",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={`${zen_Kaku_Gothic_New.className}  antialiased`}>
				<div className="relative bg-gray-100 min-h-screen min-w-screen p-8 text-gray-700 dark:text-gray-200 dark:bg-gray-700">
					<Providers>
						<div className="absolute top-8 right-8">
							<ThemeSwitch />
						</div>
						{children}
					</Providers>
				</div>
			</body>
		</html>
	);
}
