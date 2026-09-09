import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // metadataBase: new URL("https://your-real-domain.com"),

  title: "Shweta Bharti | Full Stack Developer",
  description:
    "Portfolio of Shweta Bharti, a Full Stack Developer building modern and responsive web applications.",

  keywords: [
    "Shweta Bharti",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
  ],

  authors: [
    {
      name: "Shweta Bharti",
    },
  ],

  openGraph: {
    title: "Shweta Bharti | Full Stack Developer",
    description:
      "Portfolio of Shweta Bharti, a Full Stack Developer building modern and responsive web applications.",
    type: "website",
  },

  icons: {
    icon: "../favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
