import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./globals.scss";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Accessbility",
  description: "Learn web accessibility with real life examples",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuroraBackground>{children}</AuroraBackground>
        <Footer />
      </body>
    </html>
  );
}
