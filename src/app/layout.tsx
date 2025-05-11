import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bareshells",
  description:
    "Bareshells is a design studio shaping objects, spaces, and concepts. We care about materials, details, and doing more with less.",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  icons: {
    icon: [{ url: "/favicon.png" }],
    apple: [{ url: "/favicon.png" }],
  },
  openGraph: {
    title: "Bareshells",
    description: "",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
