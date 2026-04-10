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
  title: "Burbly — The AI Flashcard App Built on Spaced Repetition",
  description: "Burbly uses FSRS spaced repetition and AI to help you remember more with less effort. Create decks instantly, study with friends, and track your mastery. Free to start.",
  keywords: "flashcard app, spaced repetition, FSRS, AI flashcards, study app, Anki alternative, Quizlet alternative, learning app, memorization, language learning",
  icons: {
    icon: '/image copy 6.png',
    apple: '/image copy 6.png',
  },
  openGraph: {
    title: "Burbly — The AI Flashcard App Built on Spaced Repetition",
    description: "Burbly uses FSRS spaced repetition and AI to help you remember more with less effort. Create decks instantly, study with friends, and track your mastery.",
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
