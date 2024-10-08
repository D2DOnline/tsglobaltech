import "../globals.css";
import "./layout.css";

import { locales } from "../../locale-config";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { Header } from "../_components/header/header";
import { Footer } from "../_components/footer/footer";
import { CopyrightInfo } from "../_components/copyright-info/copyright-info";
import { Breadcrumb } from "../_components/breadcrumb/breadcrumb";
import { CookiesInfo } from "../_components/commom/cookie-info/cookies-info";
import { Metadata } from "next";
import { Snackbar } from "../_components/commom/snackbar/snackbar";
import { SnackbarProvider } from "@/context/snackbar-context";

export const metadata: Metadata = {
  title: "TS Global Tech",
  description: "A leading IT company",
  keywords: ["Software", "Website", "Mobile app"],
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale}>
      {/* inter.className */}
      <body className={""}>
        <NextIntlClientProvider messages={messages}>
        <SnackbarProvider>
          <Header />
          <Breadcrumb />
          {children}
          <Footer />
          <CookiesInfo />
          </SnackbarProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
