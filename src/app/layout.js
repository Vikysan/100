import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Quiz app",
  description: "Just Quiz app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#10b981" />
      </header>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center items-center`}
      >
        {children}
      </body>
    </html>
  );
}
