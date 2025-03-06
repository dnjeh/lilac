import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";

const pretendard = localFont({
  src: "../../public/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "oh, lilac",
  description: "when the petals bloom Hello!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${pretendard.variable} antialiased break-keep selection:bg-purple-400 dark:selection:bg-yellow-600`}
      >
        <ThemeProvider attribute={"class"}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
