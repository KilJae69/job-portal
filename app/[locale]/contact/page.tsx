import ContactForm from "@/components/ContactForm";
import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import PageIntro from "@/components/shared/PageIntro";
import { GridBackground } from "@/components/ui/grid-background";
import { Locale, locales } from "@/lib/locales";
import { Mail, Phone } from "lucide-react";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";


export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const ogImageUrl = `${
    process.env.NEXT_PUBLIC_SITE_URL
  }/api/og?title=${encodeURIComponent(
    t("titleContact")
  )}&description=${encodeURIComponent(
    t("ogDescriptionContact")
  )}&locale=${locale}`;

  return {
    title: t("titleContact"),
    description: t("descriptionContact"),
    openGraph: {
      title: t("titleContact"),
      description: t("ogDescriptionContact"),
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: t("titleContact"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("titleContact"),
      description: t("ogDescriptionContact"),
      images: [ogImageUrl],
    },
  };
}

function ContactMethods() {
  return (
    <div className="flex flex-wrap justify-between gap-4 mb-8">
      <a
        href="mailto:hello@superio.com"
        className="inline-flex items-center space-x-2 bg-blue-50 hover:bg-blue-100 transition rounded-full px-6 py-5 text-lg font-medium"
      >
        <Mail className="size-7 text-blue-600" />
        <span>hello@superio.com</span>
      </a>
      <a
        href="tel:+38761123456"
        className="inline-flex items-center space-x-2 bg-green-50 hover:bg-green-100 transition rounded-full px-6 py-5 text-lg font-medium"
      >
        <Phone className="size-7 text-green-600" />
        <span>+387 61 123 456</span>
      </a>
    </div>
  );
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  return (
    <>
      <PageIntro title={t("h1")} />
      <section className="relative pt-12 lg:pt-24">
        <GridBackground />
        <Container>
          <div className="flex flex-col-reverse gap-4 md:flex-row">
            <div className="relative flex flex-col sm:flex-row items-center md:flex-col">
              <div className="relative shadow-md border border-accent w-fit  rounded-full overflow-hidden">
                <Image
                  src="/bg-hero.jpg"
                  alt="hero bg"
                  fill
                  className="object-cover size-full rounded-3xl z-10"
                />
                <Image
                  src="/avatar-cta.png"
                  alt="bussinessman avatar "
                  width={500}
                  height={500}
                  className="z-20 relative"
                />
              </div>

              <FadeIn className="flex flex-col items-center gap-4 mt-4">
                <h3 className="text-h2">{t("h3")}</h3>
                <ContactMethods />
              </FadeIn>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
