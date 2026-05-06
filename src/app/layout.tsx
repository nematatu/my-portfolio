import type { Metadata } from "next";
import "./globals.css";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import { Providers } from "./providers";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://amatatu.com"),
	openGraph: {
		type: "website",
		title: "amatatu",
		description: "amatatu's portfolio",
		url: "https://amatatu.com",
		images: {
			url: "/assets/icon.png",
			type: "image/png",
		},
	},
	twitter: {
		title: "amatatu",
		description: "amatatu's portfolio",
		images: {
			url: "/assets/icon.png",
			type: "image/png",
		},
		card: "summary",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={`${zenKakuGothicNew.className} antialiased`}>
				<div className="relative bg-gray-100 min-h-screen min-w-screen p-8 text-gray-700 dark:text-gray-200 dark:bg-gray-700 tracking-widest">
					<Providers>{children}</Providers>
				</div>
			</body>
		</html>
	);
}
