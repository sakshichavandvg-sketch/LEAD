import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}