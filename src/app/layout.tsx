import type { Metadata } from "next";
import "./globals.css";
import { fredoka } from "@/utils/fonts/v1/fonts";

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
		<html lang="en">
			<body className={`${fredoka.className} antialiased`}>{children}</body>
		</html>
	);
}
