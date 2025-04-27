import { Locale, locales } from "@/lib/locales";
import { routing } from "../../i18n/routing";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { LazyMotion, domAnimation } from "framer-motion";
import { Poppins } from "next/font/google";
import "@/app/globals.css";

import InnerLayout from "../../components/shared/InnerLayout";
import { Toaster } from "react-hot-toast";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>; // params is now a Promise
};

const poppins = Poppins({
  subsets: ["latin"], // Choose language subsets as needed
  weight: ["200", "300", "400", "500", "700"], // Include only the weights you use
  variable: "--font-poppins", // Optional CSS variable
  preload: true, // Ensures the font is preloaded automatically
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  console.log(locale);
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  // Enable static rendering
  setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${poppins.className} h-full bg-white text-base antialiased`}
    >
      <body className="flex min-h-full flex-col ">
        <NextIntlClientProvider messages={messages}>
          <LazyMotion features={domAnimation}>
            <InnerLayout>{children}</InnerLayout>
          </LazyMotion>
        </NextIntlClientProvider>
        <Toaster/>
      </body>
    </html>
  );
}
