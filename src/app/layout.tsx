import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/ThemeProvider"
import Background from "@/components/background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Best Computer Institute in Delhi | Web Tech Foundation",
  description: "Web Tech Foundation is a reputed organization in Delhi-NCR which provides Training in PHP, Java, NIELIT(DOEACC), Digital Marketing, Tally",
  keywords: "web development, programming, education, future tech, coding bootcamp",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="fVaVhBGwc0YCFpMj9FNBqgG7nMuIy8xwjpRowvnO4No" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-white text-black">
            <Navigation />
            <Background />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
