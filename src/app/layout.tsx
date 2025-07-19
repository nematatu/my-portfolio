import type { Metadata } from "next";
import "./globals.css";
import { zen_Kaku_Gothic_New } from "@/utils/fonts/v1/fonts";
import { Providers } from "./providers";
import ThemeSwitch from "@/components/ui/ThemeSwitch";

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
            <body className={`${zen_Kaku_Gothic_New.className} antialiased`}>
                <Providers>
                    <ThemeSwitch />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
