"use client";

import type React from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { CircleCheck, Clock, Globe, HandshakeIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Container } from "../shared/Container";
import { FadeIn, FadeInStagger } from "../shared/FadeIn";
import { MovingBorderBadge } from "../MovingBorderBadge";
import PrimaryButton from "../shared/PrimaryButton";

import { useTranslations } from "next-intl";



export default function HomeHeroCTASection() {

  const t = useTranslations("HomePage")
  return (
    <section className="w-full relative pt-24 sm:pt-36 pb-12 bg-gradient-to-br from-slate-50 to-slate-100">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-18 items-center">
          <div className="space-y-6">
            {/* Beta badge */}
            <FadeIn>
              <MovingBorderBadge
                text={t("HeroSection.badge")}
                icon={<Clock className="mr-1 h-4 w-4" />}
              />
            </FadeIn>
            {/* <div className="inline-flex items-center rounded-lg bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              <Clock className="mr-1 h-4 w-4" />
              <span>Beta Launch</span>
            </div> */}

            {/* Headline */}
            <h2 className="text-h2 ">
            {t("HeroSection.heading-part1")}{" "}
              <span className="text-blue-600">{t("HeroSection.heading-part2")}</span>
            </h2>

            {/* Subhead */}
            <p className="text-paragraph">
            {t("HeroSection.subhead")}
            </p>

            {/* Feature Cards */}
            <div className="space-y-4">
              <FadeInStagger className="grid gap-2 sm:grid-cols-3">
                <FadeIn className="sm:flex">
                  <Card className="bg-white/50 border-0 shadow-sm ">
                    <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
                      <Clock className="h-8 w-8 text-blue-600 mb-2" />
                      <h3 className="font-bold">{t("HeroSection.cards.pilotProgram.title")}</h3>
                      <p className="text-sm text-muted-foreground">
                      {t("HeroSection.cards.pilotProgram.description")}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn className="sm:flex">
                  <Card className="bg-white/50 border-0 shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
                      <Globe className="h-8 w-8 text-blue-600 mb-2" />
                      <h3 className="font-bold">{t("HeroSection.cards.globalNetwork.title")}</h3>
                      <p className="text-sm text-muted-foreground">
                      {t("HeroSection.cards.globalNetwork.description")}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn className="sm:flex">
                  <Card className="bg-white/50 border-0 shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
                      <HandshakeIcon className="h-8 w-8 text-blue-600 mb-2" />
                      <h3 className="font-bold">{t("HeroSection.cards.complianceFirst.title")}</h3>
                      <p className="text-sm text-muted-foreground">
                      {t("HeroSection.cards.complianceFirst.description")}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              </FadeInStagger >

              {/* Bullet list */}
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CircleCheck className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span> {t("HeroSection.bullets.sourcing")}</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>{t("HeroSection.bullets.workflow")}</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <span>{t("HeroSection.bullets.support")}</span>
                </li>
              </ul>
            </div>

            {/* CTA + Dialog */}
            <FadeIn className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton href="/contact">
              {t("HeroSection.cta")}
              </PrimaryButton>
            </FadeIn>

            {/* Partner / pilot info */}
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-3">
              {t("HeroSection.infoText")}
              </p>
              <div className="flex flex-wrap gap-4 items-center opacity-70">
                <div className="flex items-center bg-white px-3 py-1 rounded-full text-xs font-medium">
                {t("HeroSection.infoAction")}
                </div>
              </div>
            </div>
          </div>

          {/* Hero image + placeholders */}
          <div className="relative lg:order-last ">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-transparent mix-blend-overlay" />
              <Image
                src="/avatar-hero.png?height=800&width=600"
                alt="3D businessman prototype"
                width={600}
                height={800}
                className="w-full h-auto object-cover aspect-[3/4]"
              />
            </div>

            {/* Optional testimonial placeholder */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:left-8 bg-white rounded-lg shadow-lg p-4 max-w-xs opacity-70">
              <p className="font-medium text-sm italic">
              {t("HeroSection.testimonial.text")}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
              {t("HeroSection.testimonial.by")}
              </p>
            </div>

            {/* Early-partner count */}
            <m.div
              className="absolute top-6 -right-6 md:top-8 md:right-8 bg-white rounded-lg shadow-lg p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{t("HeroSection.stats.count")}</div>
                <p className="text-xs text-muted-foreground">
                {t("HeroSection.stats.label")}
                </p>
              </div>
            </m.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
