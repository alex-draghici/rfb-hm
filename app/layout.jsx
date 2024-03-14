import "../assets/styles/main.scss";
import React from "react";
import Header from '../components/Header';

export let metadata = {
	creator: "",
	description: "",
	title: { template: "", default: "" },
	openGraph: { description: null, siteName: null, type: "", locale: "", title: null, url: null },
	icons: { icon: "" },
	metadataBase: null,
	authors: [{ name: "", url: "" }]
};

const title = "Homework"
const description = "My production-ready solution for refurbed homework."
const author = "Alexandru Draghici"

metadata = {
	metadataBase: process.env.NEXT_PUBLIC_SITE_URL,
	title: {
		default: title,
		template: `%s | ${title}`,
	},
	description: description,
	authors: [
		{
			name: author,
			url: "https://alexdraghici.dev",
		},
	],
	creator: author,
	openGraph: {
		type: "website",
		locale: "en_US",
		url: process.env.NEXT_PUBLIC_SITE_URL,
		title,
		description,
		siteName: title,
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="font-semibold antialiased">
				<Header/>

				{children}
			</body>
		</html>
	)
}
