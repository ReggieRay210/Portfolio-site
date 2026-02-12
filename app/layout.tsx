import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const layoutColor =
  "min-h-screen bg-gradient-to-br from-[#2B66F7] from-0% via-[#9A557D] via-50% to-[#FF4303] to-100%";

export const metadata: Metadata = {
  title: "Reginald Griffin II | Portfolio Page",
  description: "Portfolio page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="public/favicon-32x32.png" />
      </head>
      <body
        className={`scroll-smooth text-white text-center mx-2 ${layoutColor}${
          inter.className
        }`}
      >
        {children}
      </body>
    </html>
  );
}
