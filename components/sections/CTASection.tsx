import Image from "next/image";
import { Container } from "../shared/Container";
import { GridBackground } from "../ui/grid-background";
import PrimaryButton from "../shared/PrimaryButton";
import { getTranslations } from "next-intl/server";
import { Locale } from "@/lib/locales";
import CtaBubbles from "../CtaBubbles";
import { FadeIn } from "../shared/FadeIn";
import { MovingBorderBadge } from "../MovingBorderBadge";

export default async function CTASection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  return (
    <section className="relative py-12 lg:py-24">
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
              <FadeIn className="self-center">
                <MovingBorderBadge text="Act Now" />
              </FadeIn>
              <h2 className="text-h2">{t("Section6.heading")}</h2>
              <p className="text-paragraph">{t("Section6.p1")}</p>
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
  );
}
