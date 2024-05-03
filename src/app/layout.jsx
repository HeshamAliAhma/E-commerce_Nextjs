"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { CartContext } from "@/context/CartContext";
import { useState } from "react";


const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "E-commerce",
//   description: "This is a first ecommerce app",
// };

export default function RootLayout({ children }) {
 const [cart, setCart] = useState([]);
  
 return (
   <ClerkProvider>
      <CartContext.Provider value={{ cart, setCart }}>
       <html lang="en">
           <link rel="icon" href="/logo.svg" sizes="any" />
          <body className={inter.className}>
           <Header />
           {children}
           <Footer />
         </body>
       </html>
      </CartContext.Provider>
    </ClerkProvider>
  );
}

