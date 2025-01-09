import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
 
export const metadata = {
  title: "Sajon Co. | Product Designer & Co-Founder",
  description: "Sajon Co., Head of Design & Founder at Orix Creative, leads innovative design solutions, shaping impactful projects with creative expertise and vision.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
