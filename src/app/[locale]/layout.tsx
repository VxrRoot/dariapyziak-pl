import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Epilogue } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";

/**
 * Typy metadanych dla obsługiwanych języków
 */
interface MetadataLocale extends Metadata {
  title: string;
  description: string;
  openGraph?: {
    title: string;
    description: string;
    url: string;
    locale: string;
  };
}

/**
 * Generowanie dynamicznych metadanych na podstawie języka
 */
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const metadataByLocale: Record<string, MetadataLocale> = {
    pl: {
      title: "Daria Pyziak Design - Portfolio Projekty graficzne",
      description:
        "Zaprojektujmy Twoją markę. Branding. Logo. Strony internetowe. Aplikacje. Materiały drukowane. Grafiki.",
      openGraph: {
        title: "Daria Pyziak Design - Portfolio Projekty graficzne",
        description:
          "Zaprojektujmy Twoją markę. Branding. Logo. Strony internetowe. Aplikacje. Materiały drukowane. Grafiki.",
        url: "https://www.dariapyziakdesign.pl/pl",
        locale: "pl_PL",
      },
      icons: { icon: "favicon.png" },
    },
    en: {
      title: "Daria Pyziak Design - Portfolio Graphic design projects",
      description:
        "Let's design your brand. Branding. Logos. Websites. Applications. Printed materials. Graphics.",
      openGraph: {
        title: "Daria Pyziak Design - Portfolio Graphic design projects",
        description:
          "Let's design your brand. Branding. Logos. Websites. Applications. Printed materials. Graphics.",
        url: "https://www.dariapyziakdesign.pl/en",
        locale: "en_US",
      },
      icons: { icon: "favicon.png" },
    },
  };

  // Zwraca metadane dla wybranego języka lub domyślnie angielski
  return metadataByLocale[locale] || metadataByLocale.en;
}

const epilogue = Epilogue({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale === "pl" ? "pl" : "en"}>
      <body className={`${epilogue.className}`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
