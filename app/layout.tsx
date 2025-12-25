import type { Metadata } from "next";
import { Epilogue, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Providers } from "./ThemeProvider";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-epilogue",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Iqtisodiyot Fakulteti",
  description: "Farg'ona Davlat Universiteti Iqtisodiyot fakulteti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${epilogue.variable} ${poppins.variable}antialiased flex flex-col`}
      >
        <Providers>
          <Header />
          <main className="grow pt-25">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
