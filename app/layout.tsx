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
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://iqtisodiyot.fardu.uz";

export const metadata: Metadata = {
  title: {
    default: "Iqtisodiyot Fakulteti | FarDU",
    template: "%s | Iqtisodiyot Fakulteti",
  },
  description:
    "Farg'ona Davlat Universiteti Iqtisodiyot va raqamli texnologiyalar fakulteti — zamonaviy iqtisodchi va raqamli menejerlar tayyorlash markazi.",
  keywords: ["iqtisodiyot", "fakultet", "FarDU", "Farg'ona", "universitet", "bakalavriat", "magistratura"],
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: siteUrl,
    siteName: "Iqtisodiyot Fakulteti — FarDU",
    title: "Iqtisodiyot va Raqamli Texnologiyalar Fakulteti",
    description:
      "Zamonaviy iqtisodchi va raqamli menejerlar tayyorlash markazi — Farg'ona Davlat Universiteti.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iqtisodiyot Fakulteti | FarDU",
    description: "Farg'ona Davlat Universiteti Iqtisodiyot fakulteti.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body
        className={`${epilogue.variable} ${poppins.variable} antialiased flex flex-col`}
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
