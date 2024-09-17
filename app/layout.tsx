import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "WaterMoon",
  description: "r3f water moon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
