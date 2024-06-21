import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../../app/Nav"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bloggity blog",
  description: "Trying to create a fullstack Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Nav />
      <body className={inter.className}>{children}</body>
      
    </html>
  );
}
