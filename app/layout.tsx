import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "InnvoStep | Startup Knowledge for the Next Generation",
  description: "Learn entrepreneurship, AI tools, and founder mindset to build the future.",
  openGraph: {
    title: "InnvoStep Blog",
    description: "Modern startup execution and business skills.",
    url: "https://innvostep.site",
    siteName: "InnvoStep",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}