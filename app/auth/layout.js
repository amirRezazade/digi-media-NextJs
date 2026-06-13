import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "digi-media | auth",
  description: "ورود یا ثبت نام در سایت digi-media",
};
export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={` dark theme font-[iran-sans] `}>{children}</body>
    </html>
  );
}
