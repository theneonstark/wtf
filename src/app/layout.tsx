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
  title: "Best Computer Institute in Delhi NCR | Web Tech Foundation – Coding, AI & Web Development Courses in Badarpur, New Delhi",
  description:
    "Web Tech Foundation (WTF) is Delhi NCR's leading computer training institute in Badarpur, New Delhi. Learn Full Stack Web Development, AI, React, Next.js, Python, Digital Marketing & more. 900+ students trained, 73% placement rate. Enroll now!",
  keywords:
    "best computer institute in delhi, computer classes in delhi ncr, coding classes badarpur, web development course delhi, AI course new delhi, react next.js training delhi ncr, python course delhi, digital marketing course delhi, full stack developer course delhi ncr, web tech foundation, WTF delhi, computer training institute near me, NIELIT delhi, DOEACC delhi, programming classes south delhi",
  openGraph: {
    title: "Web Tech Foundation | Best Computer Institute in Delhi NCR",
    description:
      "Delhi NCR's top-rated computer training institute in Badarpur. Master Full Stack Development, AI, React, Next.js & more. Job-oriented courses with 73% placement.",
    url: "https://www.webtechfoundation.in",
    siteName: "Web Tech Foundation",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Web Tech Foundation - Best Computer Institute in Delhi NCR",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Computer Institute in Delhi NCR | Web Tech Foundation",
    description:
      "Delhi NCR's top-rated computer training institute. Master Full Stack Development, AI, React, Next.js & more.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.webtechfoundation.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "New Delhi",
    "geo.position": "28.5087;77.3071",
    ICBM: "28.5087, 77.3071",
  },
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
          <div className="min-h-screen bg-white text-slate-900">
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
