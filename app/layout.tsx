import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "KODENIGMA LABS LTD | Software Development & Digital Transformation",
  description:
    "KODENIGMA LABS LTD - A Nigerian tech company specializing in software development, custom bespoke applications, IT strategy consulting, and digital transformation for emerging markets. RC: 9339579",
  keywords: [
    "software development",
    "custom software",
    "digital transformation",
    "IT consulting",
    "emerging markets",
    "Nigeria",
    "KODENIGMA LABS",
    "proprietary applications",
    "technology optimization",
  ],
  authors: [{ name: "KODENIGMA LABS LTD" }],
  creator: "KODENIGMA LABS LTD",
  publisher: "KODENIGMA LABS LTD",
  metadataBase: new URL("https://kodenigmalabs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KODENIGMA LABS LTD | Innovating Software for Emerging Markets",
    description:
      "Custom Software Solutions • Digital Transformation • IT Strategy • Technology Optimization",
    type: "website",
    locale: "en_NG",
    siteName: "KODENIGMA LABS LTD",
  },
  twitter: {
    card: "summary_large_image",
    title: "KODENIGMA LABS LTD",
    description: "Innovating Software for Emerging Markets",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(inter.variable, "font-sans")}>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-[#0A1428] text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
