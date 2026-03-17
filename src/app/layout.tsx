import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Socket Flanges",
  description: "Industrial Pipe Flanges",
  metadataBase: new URL("https://socketflanges.com"),
  openGraph: {
    type: "website",
    siteName: "Socket Flanges",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
