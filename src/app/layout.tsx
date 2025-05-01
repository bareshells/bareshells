import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bareshells",
  description:
    "Bareshells is a multidisciplinary design studio that celebrates the harmony of simplicity and substance.",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  icons: {
    icon: [{ url: "/favicon.png" }],
    apple: [{ url: "/favicon-large.png" }],
  },
  openGraph: {
    title: "Bareshells",
    description:
      "Bareshells is a multidisciplinary design studio that celebrates the harmony of simplicity and substance.",
    url: "https://bareshells.com", // your real domain here
    siteName: "Bareshells",
    images: [
      {
        url: "https://bareshells.com/scaffolding.PNG", // must be absolute URL!
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
