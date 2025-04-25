
import CTASection from "@/components/sections/CTASection";
import HomeHeroCTASection from "@/components/sections/HomeHeroCtaSection";
import NegativeTrendsHomeSection from "@/components/sections/NegativeTrendsHomeSection";
import OurCommitment from "@/components/sections/OurCommitmentSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import PilotGoalsSection from "@/components/sections/PilotGoalSection";




import { Locale, locales } from "@/lib/locales";
import {  setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

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
