import type { Metadata, Viewport } from "next";
import "./globals.css";
import LandscapeOverlay from "@/components/LandscapeOverlay";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Bare Shells",
  applicationName: "Bare Shells",
  description: "plum@bareshells.com",
  openGraph: {
    title: "Bare Shells",
    description: "plum@bareshells.com",
    url: "https://bareshells.com",
    siteName: "Bare Shells",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <LandscapeOverlay />
      </body>
    </html>
  );
}
