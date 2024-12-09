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
	keywords: "GoGoCloud, Minecraft server hosting, cloud solutions, scalable Minecraft hosting, cloud infrastructure, fast Minecraft servers, Go programming, cloud hosting for games",
	authors: [{
		name: "Fedox",
		url: "https://fedox.ovh",
	}],
	robots: "index, follow",
	openGraph: {
		title: "GoGoCloud | Robust Cloud Solution for Minecraft Networks",
		description: "GoGoCloud offers scalable and high-performance cloud solutions for Minecraft networks. Powered by Go and modern cloud technologies.",
		url: "https://gogo.fedustria.net",
		siteName: "GoGoCloud",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		site: "@gogocloud",
		title: "GoGoCloud | Robust Cloud Solution for Minecraft Networks",
		description: "GoGoCloud is a robust cloud solution, offering powerful and scalable hosting for your Minecraft network.",
	},
};

export default function RootLayout({
									   children,
								   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
		<head>
			{/* Meta tags for better SEO */}
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<meta name="theme-color" content="#F1F4FA"/>
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
			<link rel="icon" href="/favicon.ico"/>
			<link rel="canonical" href="https://gogo.fedustria.net"/>
		</head>
		<body className={`${quicksand.variable} bg-[#F1F4FA] dark:bg-gogo-dark-100`}>
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem={false}
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
