import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner";



export const metadata: Metadata = {
  title: "Star Web Maker AI",
  description: "Star Web Maker AI  Mobile App and Web App Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      
        <Header/>
        {children}
        <Toaster  position="top-right" richColors/>
        <Footer/> 
        
      </body>
    </html>
  );
}
