import "./globals.css";
import {Header} from "@/app/components/Header/Header";
import {Footer} from "@/app/components/Footer/Footer";
import * as React from 'react'
import initTranslations from "../i18n";
import TranslationsProvider from "@/app/components/TranslationsProvider";
import {dir} from 'i18next'
import i18nConfig from '@/i18nConfig';


export const metadata = {
  title: "Sell CS2 Skins Instantly for Real Money | Fast & Secure Transactions",
  description: "PriceX2",
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout({children, params}) {
  const i18nNamespaces = ['home', 'footer', 'about', 'faq', 'contact', 'inventory', 'sell'];
  const locale = (await params).locale;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
      <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <html lang={locale} dir={dir(locale)}>
        <body className={`antialiased`}>
        <Header />
          {children}
        <Footer />
        </body>
      </html>
      </TranslationsProvider>
  );
}
