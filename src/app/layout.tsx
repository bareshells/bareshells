import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bareshells",
  applicationName: "Bareshells",
  description:
    "",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  openGraph: {
    title: "Bareshells",
    description:
      "",
    url: "https://bareshells.com", // your real domain here
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
      <body>{children}</body>
    </html>
  );
}
