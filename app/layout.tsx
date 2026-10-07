import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { container, interactive } from "./lib/styles";

export const metadata: Metadata = { title: "Muneeb | Frontend UI Developer" };
const themeScript = `(function(){var theme;try{theme=localStorage.getItem('portfolio-theme')}catch(e){}if(theme!=='light'&&theme!=='dark'){theme='dark'}document.documentElement.dataset.theme=theme})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" className="min-h-full bg-white [color-scheme:light] data-[theme=dark]:bg-[#111113] data-[theme=dark]:[color-scheme:dark]" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="m-0 bg-white font-[Arial,Helvetica,sans-serif] text-base leading-[26px] text-[#1b1b1d] antialiased selection:bg-[#737580] selection:text-white min-[701px]:text-[17px] [html[data-theme=dark]_&]:bg-[#111113] [html[data-theme=dark]_&]:text-[#ededee]">
        <a className={`fixed top-3 left-3 z-10 -translate-y-[150%] bg-[#1b1b1d] px-4 py-2.5 text-white focus:translate-y-0 ${interactive}`} href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content" className={container}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
