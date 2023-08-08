import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bics Store",
  description: "Bics Store Ecommerce Application",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Header></Header>
          {children}
        </body>
      </html>
    </>
  );
}
