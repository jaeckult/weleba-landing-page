import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "./components/layout";
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "All-in-one Hotel Management Software | weleba",
  description: "The complete hospitality platform. Streamline operations, enhance guest experiences, and maximize revenue with our unified PMS & AI Concierge.",
  keywords: "hotel management software, PMS, property management system, hospitality software, booking engine, channel manager",
  openGraph: {
    title: "All-in-one Hotel Management Software | weleba",
    description: "The complete hospitality platform. Streamline operations, enhance guest experiences, and maximize revenue with our unified PMS & AI Concierge.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <script src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.11/dist/dotlottie-wc.js" type="module" async />
      </head>
      <body className={`${inter.variable} antialiased bg-[#F7F6F3] overflow-x-hidden`}>
        <LanguageProvider>
          <Header />
          <div className="max-w-[1320px] mx-auto overflow-x-hidden">
            {children}
            <Analytics />
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
