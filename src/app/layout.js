import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next-hero",
    template: "%s | Next-hero",
  },
  keywords: ["Next-hero", "best-search"],
  description: "best website for searching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
