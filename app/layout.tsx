import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Innvostep | Startup Learning Platform",
  description:
    "Learn entrepreneurship, startup execution, business strategy, and real-world startup skills with Innvostep.",
}

export const viewport: Viewport = {
  themeColor: "#050810",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}