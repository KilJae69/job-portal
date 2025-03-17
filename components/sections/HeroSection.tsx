"use client";

import { Container } from "../shared/Container";
import JobSearchForm from "../forms/JobSearchForm";
import Image from "next/image";
import { FadeIn } from "../shared/FadeIn";
import HeroBubbles from "../HeroBubbles";

export default function HeroSection() {
  const numJobs = 19856;
  return (
    <section className="relative pt-24 sm:pt-36 pb-12 lg:pb-0">
      <Image
        src="/bg-hero.jpg"
        alt="hero bg"
        fill
        className="object-cover size-full -z-10"
      />
      <Container className="text-slate-600">
        <div className="flex items-center justify-center lg:justify-between">
          <FadeIn className="flex flex-col lg:justify-center gap-4 lg:gap-8 lg:max-w-1/2">
            <h1 className="text-2xl text-slate-800 lg:text-5xl font-semibold">
              There are <span className="text-blue-600">{numJobs}</span>{" "}
              Postings here for you!
            </h1>
            <p className="lg:text-lg">
              Find Jobs, Employment & Career Opportunities
            </p>
            <JobSearchForm isHomePage/>
            <p>
              <span className="font-semibold">Popular searches:</span> Designer,
              Developer, Web, IOS, PHP, Senior, Engineer
            </p>
          </FadeIn>

          <FadeIn className="hidden lg:block relative pl-24  min-h-[600px] w-1/2">
            <Image
              priority
              src="/avatar-hero.png"
              alt="avatar"
              className="object-contain object-top relative"
              fill
            />
             <HeroBubbles />
           
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
