import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce",
  description: "This is a first ecommerce app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <link rel="icon" href="/logo.svg" sizes="any" />
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
