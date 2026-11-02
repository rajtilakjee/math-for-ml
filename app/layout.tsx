import type { Metadata } from "next"
import { Figtree, Fraunces, Source_Serif_4 } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

const sans = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-figtree",
  display: "swap",
})

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-fraunces",
  display: "swap",
})

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Math for Machine Learning",
    template: "%s · Math for Machine Learning",
  },
  description: "Math for Machine Learning. Tutorials typeset with MathJax.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${serif.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <SiteHeader />
        <div className="mx-auto w-full max-w-[50rem] px-6 pb-24">{children}</div>
      </body>
    </html>
  )
}
