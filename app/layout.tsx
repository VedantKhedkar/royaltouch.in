import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
// Import your media utilities
import { getImagePath, BRAND_ASSETS } from "@/lib/media";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

// Dynamically generate the logo and OG image URLs
const logoUrl = getImagePath(BRAND_ASSETS.LOGO);
const ogImageUrl = getImagePath(BRAND_ASSETS.MAIN_HERO);

export const metadata: Metadata = {
  title: "Royal Touch Beauty Care & Academy | Best Makeup Artist in Amravati",
  description: "Official Royal Touch Academy by Pooja Mankar. Amravati's premier ISO 9001:2015 certified institute for Professional Makeup, Hair Styling, and Skin Care.",
  keywords: ["Makeup Artist Amravati",
      "Bridal Makeup Amravati", "Pooja Mankar",
      "Royal Touch Academy", "Beautician Course Amravati"],
      
  authors: [{ name: "Pooja Mankar" }],
  openGraph: {
    title: "Royal Touch Beauty Care & Academy",
    description: "Experience royal elegance and professional beauty training in Amravati.",
    url: "https://royaltouchin.vercel.app/",
    siteName: "Royal Touch Amravati",
    images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: logoUrl, // Sets your dynamic logo as the browser favicon
    apple: logoUrl,
  },
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* --- LOCAL SEO SCHEMA (JSON-LD) --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": "Royal Touch Beauty Care & Academy",
              "image": logoUrl, // Using dynamic logo path
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Moti Nagar, Near Vadhu Var Maratha Kendra",
                "addressLocality": "Amravati",
                "addressRegion": "Maharashtra",
                "postalCode": "444606",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 20.9374,
                "longitude": 77.7796
              },
              "url": "https://royaltouchin.vercel.app/",
              "telephone": "+919685232913"
            }),
          }}
        />
      </head>
      <body className={`${cinzel.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}