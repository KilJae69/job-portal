
import CTASection from "@/components/sections/CTASection";
import HomeHeroCTASection from "@/components/sections/HomeHeroCtaSection";
import NegativeTrendsHomeSection from "@/components/sections/NegativeTrendsHomeSection";
import OurCommitment from "@/components/sections/OurCommitmentSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import PilotGoalsSection from "@/components/sections/PilotGoalSection";




import { Locale, locales } from "@/lib/locales";
import { Metadata } from "next";
import {  getTranslations, setRequestLocale } from "next-intl/server";

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
    t("titleHome")
  )}&description=${encodeURIComponent(
    t("ogDescriptionHome")
  )}&locale=${locale}`;

  return {
    title: t("titleHome"),
    description: t("descriptionHome"),
    openGraph: {
      title: t("titleHome"),
      description: t("ogDescriptionHome"),
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: t("titleHome"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("titleHome"),
      description: t("ogDescriptionHome"),
      images: [ogImageUrl],
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  
  return (
    <>
      <HomeHeroCTASection  />
      <NegativeTrendsHomeSection locale={locale}/>
      <PainPointsSection />
      <OurCommitment/>
      <PilotGoalsSection locale={locale}/>
      <CTASection locale={locale}/>
    </>
  );
}
