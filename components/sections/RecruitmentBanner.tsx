import Image from "next/image";
import PrimaryButton from "../shared/PrimaryButton";
import { Container } from "../shared/Container";
import { FadeIn } from "../shared/FadeIn";
import SectionIntro from "../shared/SectionIntro";

export default function RecruitmentBanner() {
  return (
    <section className="my-12 lg:my-24">
      <Container>
        <FadeIn className="relative flex flex-col gap-4 sm:flex-row justify-between items-center px-12 pt-8 rounded-2xl overflow-hidden">
          <Image
            src="/bg-hero.jpg"
            alt="hero bg"
            fill
            className="object-cover size-full -z-10"
          />
          <div className="sm:max-w-1/2">
            <SectionIntro
              title="Recruiting?"
              paragraph="Advertise your jobs to millions of monthly users and search 15.8
              million CVs in our database."
              className="text-start"
            />

            <PrimaryButton className="w-full sm:w-fit">
              Start Recruiting Now
            </PrimaryButton>
          </div>
          <div>
            <Image
              src="/megaphone.png"
              alt="megaphone"
              width={300}
              height={300}
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
