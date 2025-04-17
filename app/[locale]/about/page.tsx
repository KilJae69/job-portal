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
import {
  CheckCircleIcon,
  HandshakeIcon,
  LanguagesIcon,
  ScaleIcon,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <PageIntro title={"About Us"} />
      <Container as="section" className="space-y-8 pt-12 lg:pt-24">
        <div className="flex flex-col gap-5 lg:flex-row justify-between">
          <div className="pb-12 lg:pb-24">
            <div className="flex flex-col gap-4">
              <MovingBorderBadge text="Radna Snaga" />
              <h2 className="text-h2">
                Kriza Nedostatka Radnika u Bosni i Hercegovini
              </h2>
              <p className="text-paragraph">
                Bosna i Hercegovina se suočava sa kritičnim nedostatkom radne
                snage - iako je stopa nezaposlenosti visoka (30.2%), poslodavci
                ne mogu naći radnike za ključne pozicije u građevinarstvu,
                poljoprivredi i ugostiteljstvu.
              </p>
              <p className="text-paragraph">
                Godišnje preko 50,000 ljudi napusti BiH zbog boljih plata u EU,
                dok se lokalni radnici sve manje interesuju za fizikalne
                poslove. Rezultat? Kašnjenja projekata, gubici u proizvodnji i
                opasnost zatvaranja firmi.
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
                        {trend.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-paragraph">{trend.detail}</p>
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
              <MovingBorderBadge text="Dokazano Rješenje" />
              <h2 className="text-h2">
                Zašto je Legalna Migracija Ključ za BiH Privredu?
              </h2>

              <p className="text-paragraph">
                Legalna migracija radnika{" "}
                <strong>nije samo nužnost - nego prilika</strong>. Kao što
                Hrvatska već godinama uspješno radi sa radnicama iz Azije, mi
                omogućavamo BiH kompanijama da riješe nedostatak kadrova kroz:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Regulisane radne dozvole</h3>
                    <p className="text-paragraph">
                      Potpuno zakonito zapošljavanje uz brzu proceduru (4-6
                      sedmica). EU zemlje poput Poljske i Mađarske već imaju
                      uspostavljene sisteme.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Smanjenje troškova</h3>
                    <p className="text-paragraph">
                      Prosječna ušteda od <strong>35%</strong> u odnosu na
                      lokalno zapošljavanje (izvor: Eurostat za Hrvatsku, 2023).
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Fleksibilni ugovorni okviri</h3>
                    <p className="text-paragraph">
                      Vi određujete trajanje ugovora - bilo sezonski (3-6
                      mjeseci) ili dugoročni radnici (1+ godina). Naš sistem
                      podržava oba modela.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-paragraph italic">
                  Hrvatska je 2024. izdala više od{" "}
                  <strong>200,000 radnih dozvola</strong> stranim radnicima -
                  dokaz da legalni modeli funkcionišu!
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
            <MovingBorderBadge text="Naš Pristup" />
          </div>
          <h2 className="text-h2">
            Kako Rješavamo Nedostatak Radne Snage u BiH
          </h2>
          <p className="text-paragraph mt-4">
            Kombiniramo globalne resurse sa lokalnim znanjem kako bismo riješili
            nedostatak radne snage u BiH kroz potpuno legalne i organizirane
            procese.
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
                  Direktna Veza sa Agencijama
                </h3>
                <p className="text-paragraph">
                  Ekskluzivni partneri u Filipinima, Nepalu i Indiji omogućavaju
                  brz pristup pre-verificiranim radnicima.
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
                  Cjelovita Pravna Podrška
                </h3>
                <p className="text-paragraph">
                  Kompletan proces od radnih dozvola do ugovora. Smanjujemo
                  papirologiju za poslodavce na minimum.
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
                <h3 className="font-bold text-xl mb-3">Integracioni Program</h3>
                <p className="text-paragraph">
                  Obuke o BiH kulturi i osnovama jezika prije dolaska,
                  smanjujući kulturološki šok.
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
                <MovingBorderBadge text="Jasne Faze" />
              </div>
              <h2 className="text-h2">
                Transparentan Proces Zapošljavanja Stranih Radnika
              </h2>
              <p className="text-paragraph mt-4">
                Naš sistem kombinuje globalne standarde sa lokalnim zakonima
                kako bismo osigurali brz i siguran proces zapošljavanja.
              </p>
            </div>
            <div className=" mx-auto">
              <TimelineItem
                number={1}
                title="Employer Application & Needs Assessment"
                description="We begin with a thorough consultation to understand your specific workforce needs, company culture, and requirements."
              />

              <TimelineItem
                number={2}
                title="Candidate Selection & Matching"
                description="Our team identifies and vets qualified candidates from our global talent pool, ensuring skills and experience align with your needs."
              />

              <TimelineItem
                number={3}
                title="Legal Documentation & Permits"
                description="We handle all work permits, visas, and legal requirements to ensure full compliance with BiH regulations."
              />

              <TimelineItem
                number={4}
                title="Pre-Departure Preparation"
                description="Selected workers receive language training, cultural orientation, and job-specific preparation before traveling to BiH."
              />

              <TimelineItem
                number={5}
                title="Arrival & Onboarding"
                description="We coordinate worker arrival, accommodation, and provide comprehensive onboarding support to ensure a smooth transition."
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
                <h2 className="text-h2">Ready to Save Your Bussiness?</h2>
                <p className="text-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  quam quas laudantium modi delectus quod, omnis, dolor dolorum
                  explicabo at labore libero sit qui eius dolorem corporis
                  deserunt commodi esse?
                </p>
                <PrimaryButton
                  className="w-fit self-center whitespace-nowrap"
                  href="/contact"
                >
                  Contact Us Now
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
