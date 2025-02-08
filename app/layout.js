import "./globals.css";
import {Header} from "@/app/components/Header/Header";
import {Footer} from "@/app/components/Footer/Footer";

export const metadata = {
  title: "Sell CS2 Skins Instantly for Real Money | Fast & Secure Transactions",
  description: "SKINPLACE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
