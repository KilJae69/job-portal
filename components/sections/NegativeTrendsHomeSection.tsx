import Image from "next/image";
import { MovingBorderBadge } from "../MovingBorderBadge";
import { FadeIn, FadeInStagger } from "../shared/FadeIn";
import { GridBackground } from "../ui/grid-background";
import { ArrowTrendingUpIcon, BuildingOfficeIcon, ClockIcon, CurrencyEuroIcon } from "@/constants/icons";
import CountUp from "../CountUp";
import { Locale } from "@/lib/locales";
import { getTranslations } from "next-intl/server";

export default async function NegativeTrendsHomeSection({ locale }: { locale: Locale }) {

    const t = await getTranslations({ locale, namespace: "HomePage" });
  return (
   <section className="w-full py-12 relative lg:py-24 ">
         <GridBackground/>
           <div className="container mx-auto px-4 md:px-6">
             <div className="flex flex-col items-center  mb-12">
               <MovingBorderBadge text={t("NegativeTrends.badge")} className="" />
               <h2 className="text-h2 mt-3 mb-3">
               {t("NegativeTrends.heading")}
               </h2>
               <p className="text-paragraph max-w-3xl mx-auto">
               {t("NegativeTrends.subheading")}
               </p>
             </div>
   
             <FadeInStagger className="relative">
               {/* Connecting trend line */}
               <FadeIn className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-[#1A73E8] to-blue-200 transform -translate-y-1/2 z-0"></FadeIn>
   
               <FadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
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
                   <h3 className="text-4xl font-bold text-[#1A73E8] mb-2">
                     <CountUp to={68} />%
                   </h3>
                   <p className="text-gray-700">
                   {t("NegativeTrends.cards.shortages")}
                   </p>
                 </div>
   
                 {/* Stat Card 2 */}
                 <FadeIn className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
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
                     €<CountUp to={245} />M
                   </h3>
                   <p className="text-gray-700">
                   {t("NegativeTrends.cards.economicImpact")}
                   </p>
                 </FadeIn>
   
                 {/* Stat Card 3 */}
                 <FadeIn className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
                   <Image
                     src="/bg-hero.jpg"
                     alt="hero bg"
                     fill
                     className="object-cover size-full -z-10"
                   />
                   <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                     <ArrowTrendingUpIcon className="w-7 h-7 text-[#1A73E8]" />
                   </div>
                   <h3 className="text-4xl font-bold text-[#1A73E8] mb-2"><CountUp to={74}/>%</h3>
                   <p className="text-gray-700">
                   {t("NegativeTrends.cards.foreignTalent")}
                   </p>
                 </FadeIn>
   
                 {/* Stat Card 4 */}
                 <FadeIn className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
                   <Image
                     src="/bg-hero.jpg"
                     alt="hero bg"
                     fill
                     className="object-cover size-full -z-10"
                   />
                   <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                     <ClockIcon className="w-7 h-7 text-[#1A73E8]" />
                   </div>
                   <h3 className="text-4xl font-bold text-[#1A73E8] mb-2"><CountUp to={9}/></h3>
                   <p className="text-gray-700">
                   {t("NegativeTrends.cards.timeToFill")}
                   </p>
                 </FadeIn>
               </FadeIn>
             </FadeInStagger>
   
             <div className="text-center mt-6 text-sm text-gray-500">
             {t("NegativeTrends.source")}
             </div>
           </div>
         </section>
  );
  
}