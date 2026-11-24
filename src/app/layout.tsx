import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://schoolos.in"),
  title: {
    default: "SchoolOS — The AI Operations Layer for Schools",
    template: "%s | SchoolOS",
  },
  description:
    "SchoolOS brings school administration, parent communication, attendance and everyday workflows together in one intelligent platform. Book a live demo today.",
  keywords: [
    "school management software",
    "school ERP India",
    "parent teacher communication app",
    "school attendance software",
    "school operations platform",
    "AI school management",
    "school SaaS India",
    "SchoolOS",
  ],
  authors: [{ name: "SchoolOS" }],
  creator: "SchoolOS",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://schoolos.in",
    siteName: "SchoolOS",
    title: "SchoolOS — The AI Operations Layer for Schools",
    description:
      "Run your school smarter. Not harder. One platform to simplify school operations, connect parents and teachers, and automate everyday administrative work.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SchoolOS — The AI Operations Layer for Schools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SchoolOS — The AI Operations Layer for Schools",
    description: "Run your school smarter. Not harder.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "SchoolOS",
              description:
                "The AI Operations Layer for Schools — connecting school operations, parents and teachers through intelligent workflows.",
              url: "https://schoolos.in",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web, iOS, Android",
              offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
              provider: {
                "@type": "Organization",
                name: "SchoolOS",
                url: "https://schoolos.in",
              },
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
