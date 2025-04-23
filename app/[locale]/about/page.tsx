import AboutBubbles from "@/components/AboutBubbles";
import CountUp from "@/components/CountUp";
import CtaBubbles from "@/components/CtaBubbles";
import { MovingBorderBadge } from "@/components/MovingBorderBadge";
import OurCommitment from "@/components/sections/OurCommitmentSection";

import { Container } from "@/components/shared/Container";
import { FadeIn, FadeInStagger } from "@/components/shared/FadeIn";
import PageIntro from "@/components/shared/PageIntro";
import PrimaryButton from "@/components/shared/PrimaryButton";
import TimelineItem from "@/components/TimelineItem";
import { GridBackground } from "@/components/ui/grid-background";
import negativeTrends from "@/constants/negativeTrendsData";
import { Locale, locales } from "@/lib/locales";
import {
  CheckCircleIcon,
  HandshakeIcon,
  LanguagesIcon,
  ScaleIcon,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const ogImageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=${encodeURIComponent(
    t("titleAbout")
  )}&description=${encodeURIComponent(t("ogDescriptionAbout"))}&locale=${locale}`;

  return {
    title: t("titleAbout"),
    description: t("descriptionAbout"),
    openGraph: {
      title: t("titleAbout"),
      description: t("ogDescriptionAbout"),
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: t("titleAbout"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("titleAbout"),
      description: t("ogDescriptionAbout"),
      images: [ogImageUrl],
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  return (
    <>
      <PageIntro title={t('PageIntro.title')} />
      <Container as="section" className="space-y-8 pt-12 lg:pt-24">
        <div className="flex flex-col gap-5 lg:flex-row justify-between">
          <div className="pb-12 lg:pb-24">
            <div className="flex flex-col gap-4">
              <MovingBorderBadge text={t('Section1.badge')} />
              <h2 className="text-h2">
              {t('Section1.heading')}
              </h2>
              <p className="text-paragraph">
              {t('Section1.p1')}
              </p>
              <p className="text-paragraph">
              {t('Section1.p2')}
              </p>
            </div>

            {/* Negative Trends Cards */}
            <FadeIn className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-12 ">
              {negativeTrends.map((trend, index) => (
                <div
                  key={index}
                  className="overflow-hidden p-6 relative rounded-xl shadow-md border-l-4 border-accent hover:shadow-lg transition-all"
                >
                  <Image
                    src="/bg-hero.jpg"
                    alt="hero bg"
                    fill
                    className="object-cover size-full -z-10"
                  />
                  <div className="flex items-center gap-4 mb-3">
                    {<trend.icon className="size-8 text-accent" />}
                    <div>
                      <span className="text-3xl font-bold">
                        <CountUp separator="." to={trend.value} />
                        <span className="ml-2">{trend.suffix}</span>
                      </span>
                      <p className="text-paragraph font-medium">
                      {t(`negativeTrends.${trend.key}.description`)}
                      </p>
                    </div>
                  </div>
                  <p className="text-paragraph"> {t(`negativeTrends.${trend.key}.detail`)}</p>
                </div>
              ))}
            </FadeIn>
          </div>
          <div className="relative size-full self-end  min-h-[300px] md:min-h-[500px] lg:min-h-[700px]">
            <Image
              src="/images/avatar-about.png"
              className="object-contain size-full flex-1"
              alt="concerned bussinessman avatar"
              fill
            />
            <AboutBubbles />
          </div>
        </div>
      </Container>
      <section className="relative pt-12 lg:pt-24">
        <Image
          src="/bg-hero.jpg"
          alt="hero bg"
          fill
          className="object-cover size-full -z-10"
        />
        <Container>
          <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">
            {/* Image with Bubbles */}
            <div className="relative w-full self-end min-h-[300px] md:min-h-[500px] ">
              <Image
                src="/images/about-cooperation.png"
                className="object-contain"
                alt="Bosanski poslodavac i strani radnik se rukuju"
                fill
              />
            </div>

            {/* Text Content */}
            <div className="w-full pb-10 space-y-6">
              <MovingBorderBadge text={t('Section2.badge')} />
              <h2 className="text-h2">
              {t('Section2.heading')}
              </h2>

              <p className="text-paragraph">
              {t('Section2.p1')}
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">{t('Section2.list.permits.title')}</h3>
                    <p className="text-paragraph">
                    {t('Section2.list.permits.description')}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">{t('Section2.list.costSavings.title')}</h3>
                    <p className="text-paragraph">
                    {t('Section2.list.costSavings.description')}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">{t('Section2.list.flexibleContracts.title')}</h3>
                    <p className="text-paragraph">
                    {t('Section2.list.flexibleContracts.description')}
                    </p>
                  </div>
                </li>
              </ul>

              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-paragraph italic">
                {t('Section2.benchmark')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* New "Our Solution" section */}
      <Container as="section" className="py-12 lg:py-24">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-full flex items-center justify-center mb-4">
            <MovingBorderBadge text={t('Section3.badge')} />
          </div>
          <h2 className="text-h2">
          {t('Section3.heading')}
          </h2>
          <p className="text-paragraph mt-4">
          {t('Section3.p1')}
          </p>
        </div>

        {/* Cards Grid */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <FadeIn>
            <div className="group relative bg-white rounded-xl shadow-lg p-8 h-full border border-gray-100 hover:border-accent/30 transition-all hover:shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-accent"></div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-accent/10 rounded-full group-hover:scale-110 transition-transform">
                  <HandshakeIcon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-3">
                {t('Section3.cards.directAgency.title')}
                </h3>
                <p className="text-paragraph">
                {t('Section3.cards.directAgency.description')}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Card 2 */}
          <FadeIn>
            <div className="group relative bg-white rounded-xl shadow-lg p-8 h-full border border-gray-100 hover:border-accent/30 transition-all hover:shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-accent"></div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-accent/10 rounded-full group-hover:scale-110 transition-transform">
                  <ScaleIcon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-3">
                {t('Section3.cards.legalSupport.title')}
                </h3>
                <p className="text-paragraph">
                {t('Section3.cards.legalSupport.description')}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Card 3 */}
          <FadeIn>
            <div className="group relative bg-white rounded-xl shadow-lg p-8 h-full border border-gray-100 hover:border-accent/30 transition-all hover:shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-accent"></div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-accent/10 rounded-full group-hover:scale-110 transition-transform">
                  <LanguagesIcon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-3"> {t('Section3.cards.integrationProgram.title')}</h3>
                <p className="text-paragraph">
                {t('Section3.cards.integrationProgram.description')}
                </p>
              </div>
            </div>
          </FadeIn>
        </FadeInStagger>
      </Container>
      <section className="relative py-12 lg:py-24">
        <Image
          src="/bg-hero.jpg"
          alt="hero bg"
          fill
          className="object-cover size-full -z-10"
        />
        <Container>
          <div className="flex flex-col">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="w-full flex items-center justify-center mb-4">
                <MovingBorderBadge text={t('Section4.badge')} />
              </div>
              <h2 className="text-h2">
              {t('Section4.heading')}
              </h2>
              <p className="text-paragraph mt-4">
              {t('Section4.p1')}
              </p>
            </div>
            <div className=" mx-auto">
              <TimelineItem
                number={1}
                title={t('Section4.timeline.step1.title')}
                description={t('Section4.timeline.step1.description')}
              />

              <TimelineItem
                number={2}
                title={t('Section4.timeline.step2.title')}
                description={t('Section4.timeline.step2.description')}
              />

              <TimelineItem
                number={3}
                title={t('Section4.timeline.step3.title')}
                description={t('Section4.timeline.step3.description')}
              />

              <TimelineItem
                number={4}
                title={t('Section4.timeline.step4.title')}
                description={t('Section4.timeline.step4.description')}
              />

              <TimelineItem
                number={5}
                title={t('Section4.timeline.step5.title')}
                description={t('Section4.timeline.step5.description')}
                isLast={true}
              />
            </div>
          </div>
        </Container>
      </section>

      <OurCommitment />
      <section className="relative py-12">
        <GridBackground />
        <Container className="relative z-10">
          <div className="relative px-6 pt-5 rounded-3xl  shadow-xl">
            <Image
              src="/bg-hero.jpg"
              alt="hero bg"
              fill
              className="object-cover size-full rounded-3xl -z-10"
            />

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex flex-col gap-6 text-center  md:max-w-1/2">
                <h2 className="text-h2">
                  {t("Section6.heading")}
                </h2>
                <p className="text-paragraph">
                {t("Section6.p1")}
                </p>
                <PrimaryButton
                  className="w-fit self-center whitespace-nowrap"
                  href="/contact"
                >
                 {t("Section6.cta")}
                </PrimaryButton>
              </div>
              <div className="relative">
                <Image
                  src="/avatar-cta.png"
                  alt="bussinessman avatar "
                  width={500}
                  height={500}
                />
                <CtaBubbles />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
