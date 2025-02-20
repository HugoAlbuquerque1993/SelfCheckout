import "./globals.css"

import type { Metadata } from "next"
import { Poppins } from "next/font/google"

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "SelfCheckout",
	description:
		"O self-checkout é uma solução tecnológica que visa otimizar o processo de compra, oferecendo mais agilidade e autonomia para os clientes.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className} antialiased`}>{children}</body>
		</html>
	)
}
