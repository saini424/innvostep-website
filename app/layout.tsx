import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innvostep | Startup Learning Platform",
  description:
    "Learn entrepreneurship, startup execution and business growth.",

  verification: {
    google: "CttwmsORfBm1DVOc5jmQPLNlx1w6CXrAwdZScnPo5q4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}