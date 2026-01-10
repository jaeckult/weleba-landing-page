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
  title: "All-in-one Business Management Software | weleba",
  description: "The complete management platform for hotels, ecommerce, retail, and more. Streamline operations, enhance customer experiences, and maximize revenue with our unified system.",
  keywords: "business management software, management system, ecommerce platform, retail software, hotel management, operations management, inventory management",
  icons: {
    icon: '/logo/canvas.png',
    apple: '/logo/canvas.png',
  },
  openGraph: {
    title: "All-in-one Business Management Software | weleba",
    description: "The complete management platform for hotels, ecommerce, retail, and more. Streamline operations, enhance customer experiences, and maximize revenue with our unified system.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
