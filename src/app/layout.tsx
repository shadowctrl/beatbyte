import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import LoadingSpinner from "@/components/ui/loading/loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BeatByte - Your Ultimate Music Companion",
  description:
    "Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.",
  keywords:
    "music, streaming, share music, emerging artists, major artists, BeatByte",
  authors: [{ name: "shadowctrl" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ClerkLoading>
            <LoadingSpinner />
          </ClerkLoading>
          <ClerkLoaded> {children}</ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
