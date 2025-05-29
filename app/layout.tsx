import type { Metadata } from "next";
import "./globals.css";
import { fredoka } from "@/utils/fonts/v1/fonts";

export const metadata: Metadata = {
    openGraph: {
        title: "amatatu",
        description: "amatatu's portfolio",
        images: [
            {
                url: "/ogp/thumbnail.png", // 🌟 静的画像の指定
                width: 1200,
                height: 630,
            },
        ],
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
