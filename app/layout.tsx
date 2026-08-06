import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muneeb | Frontend UI Developer"
};

// Yahan humne path ko "../public/font/..." aur extension ko ".otf" kar diya hai
const sharpGrotesk = localFont({
  src: "../public/font/SharpGroteskMedium-20.woff",
  variable: "--font-sharp",
});

const generalSans = localFont({
  src: "../public/font/GeneralSans-Regular.otf",
  variable: "--font-general-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Navbar />
      {/* Backticks aur dollar sign ekdum sahi se lag gaye hain */}
      <body className={`min-h-full flex flex-col ${sharpGrotesk.variable} ${generalSans.variable}`}>
       
        <div className="w-full flex justify-center">
        <div className="w-[calc(100%-10%)] md:w-[calc(100%-55%)]">
          {children}
          
        </div>
      </div>

      </body>
      <Footer/>
    </html>
  );
}     