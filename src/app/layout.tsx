import type { Metadata, Viewport } from "next";
import "./globals.css";
import LandscapeOverlay from "@/components/LandscapeOverlay";


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Bareshells",
  applicationName: "Bareshells",
  description: "info@bareshells.com",
  openGraph: {
    title: "Bareshells",
    description: "info@bareshells.com",
    url: "https://bareshells.com",
    siteName: "Bareshells",
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
