import HomeHeroCTASection from "@/components/HomeHeroCtaSection";
import FeaturedJobsSection from "@/components/sections/FeaturedJobsSection";
// import HeroSection from "@/components/sections/HeroSection";
import PopularJobsCateogriesSection from "@/components/sections/PopularJobsCateogriesSection";
import RecruitmentBanner from "@/components/sections/RecruitmentBanner";
import Divider from "@/components/shared/Divider";

export default function Home() {
  return (
    <>
      <HomeHeroCTASection/>
      <PopularJobsCateogriesSection />
      <Divider/>
      <FeaturedJobsSection />
      <RecruitmentBanner />
    </>
  );
}
