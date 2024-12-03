import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import ThemeSwitch from "@/components/gocloud/ThemeSwitch";
import {Toaster} from "@/components/gocloud/Toaster";

const quicksand = localFont({
	src: "./fonts/Quicksand.ttf",
	variable: "--font-quicksand",
	weight: "300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
	title: "GoGoCloud | Robust cloud solution",
	description: "GoGoCloud is a robust cloud solution, for your minecraft network. Built on top of the latest technologies, like Go, and TypeScript.",
};

export default function RootLayout({
									   children,
								   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
		<body className={`${quicksand.variable} bg-[#F1F4FA] dark:bg-gogo-dark-100`}>
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem={true}
		>
			{children}
			<div className={'z-30 absolute bottom-0 right-0 p-4 fixed'}>
				<ThemeSwitch/>
			</div>
			<Toaster/>

		</ThemeProvider>
		</body>
		</html>
	);
}
