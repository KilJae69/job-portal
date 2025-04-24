import HomeHeroCTASection from "@/components/HomeHeroCtaSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";

import {
  ArrowTrendingUpIcon,
  BuildingOfficeIcon,
  ClockIcon,
  CurrencyEuroIcon,
} from "@/constants/icons";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHeroCTASection />
      <section className="w-full py-12 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Bosnia&apos;s Workforce Challenge
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our businesses face unprecedented staffing shortages that threaten
              growth
            </p>
          </div>

          <div className="relative">
            {/* Connecting trend line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-[#1A73E8] to-blue-200 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {/* Stat Card 1 */}
              <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
                <Image
                  src="/bg-hero.jpg"
                  alt="hero bg"
                  fill
                  className="object-cover size-full -z-10"
                />
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <BuildingOfficeIcon className="w-7 h-7 text-[#1A73E8]" />
                </div>
                <h3 className="text-4xl font-bold text-[#1A73E8] mb-2">68%</h3>
                <p className="text-gray-700">
                  of Bosnian businesses report critical staffing shortages
                </p>
              </div>

              {/* Stat Card 2 */}
              <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
                <Image
                  src="/bg-hero.jpg"
                  alt="hero bg"
                  fill
                  className="object-cover size-full -z-10"
                />
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CurrencyEuroIcon className="w-7 h-7 text-[#1A73E8]" />
                </div>
                <h3 className="text-4xl font-bold text-[#1A73E8] mb-2">
                  €245M
                </h3>
                <p className="text-gray-700">
                  estimated economic impact from unfilled positions
                </p>
              </div>

              {/* Stat Card 3 */}
              <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
                <Image
                  src="/bg-hero.jpg"
                  alt="hero bg"
                  fill
                  className="object-cover size-full -z-10"
                />
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <ArrowTrendingUpIcon className="w-7 h-7 text-[#1A73E8]" />
                </div>
                <h3 className="text-4xl font-bold text-[#1A73E8] mb-2">74%</h3>
                <p className="text-gray-700">
                  increase in businesses seeking foreign talent solutions
                </p>
              </div>

              {/* Stat Card 4 */}
              <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
                <Image
                  src="/bg-hero.jpg"
                  alt="hero bg"
                  fill
                  className="object-cover size-full -z-10"
                />
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <ClockIcon className="w-7 h-7 text-[#1A73E8]" />
                </div>
                <h3 className="text-4xl font-bold text-[#1A73E8] mb-2">9</h3>
                <p className="text-gray-700">
                  months average time to fill specialized positions
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 text-sm text-gray-500">
            Source: Bosnia Economic Institute, 2024
          </div>
        </div>
      </section>
      <PainPointsSection/>
    </>
  );
}
