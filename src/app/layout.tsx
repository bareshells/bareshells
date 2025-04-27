import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bareshells",
  description:
    "Bareshells is a multidisciplinary design studio that celebrates the harmony of simplicity and substance.",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
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
