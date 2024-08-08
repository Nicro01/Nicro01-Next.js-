import "./globals.css";
import Navbar from "@/app/components/navbar";

import { poppins, righteous } from "./fonts";
import Footer from "@/app/components/footer";

export const metadata = {
  title: "Nicro01",
  description: "Nicro01",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${righteous.variable}`}>
      <body suppressHydrationWarning={true}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
