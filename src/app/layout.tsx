import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bareshells",
  applicationName: "Bareshells",
  description:
    "Bareshells is a design studio dedicated to crafting refined furniture and objects.",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  openGraph: {
    title: "Bareshells",
    description:
      "Bareshells is a design studio dedicated to crafting refined furniture and objects.",
    url: "https://bareshells.com", // your real domain here
    siteName: "Bareshells",
    images: [
      {
        url: "https://bareshells.com/background.png", // must be absolute URL!
        width: 1200,
        height: 630,
        alt: "Bareshells Studio",
      },
    ],
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
      <body>{children}</body>
    </html>
  );
}
