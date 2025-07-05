import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import ThemeCom from "../components/ThemeCom";
import Navbar from "../components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dahalmovie",
  description: "A simple movie app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html suppressHydrationWarning>
        <body>
          <ThemeCom>
            <Header />
            <Navbar />
            {children}
          </ThemeCom>
        </body>
      </html>
    </ClerkProvider>
  );
}
