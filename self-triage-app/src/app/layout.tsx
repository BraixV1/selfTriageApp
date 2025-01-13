import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tervisenõunik",
  description:
    "Saa kergelt ja mugavalt usaldusväärset meditsiinilist nõu kuhu oma murega pöörduda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-blue ">{children}</body>
    </html>
  );
}
