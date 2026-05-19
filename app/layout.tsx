import "./globals.css";

export const metadata = {
  title: "Innvostep | Startup Learning Platform",
  description:
    "Learn entrepreneurship, startup execution and business growth.",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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