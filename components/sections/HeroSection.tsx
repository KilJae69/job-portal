"use client";

import { Container } from "../shared/Container";
import JobSearchForm from "../forms/JobSearchForm";
import Image from "next/image";
import { FadeIn } from "../shared/FadeIn";

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
            <JobSearchForm />
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
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 800 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100%" height="100%" fill="url(#gradient)" />

              <path
                d="M 400 200 Q 500 220, 600 250 T 700 400 T 600 550 T 400 600 T 200 550 T 100 400 T 200 250 T 400 200"
                stroke="#D1D9E6"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 400 150 Q 550 180, 650 250 T 750 400 T 650 550 T 400 650 T 150 550 T 50 400 T 150 250 T 400 150"
                stroke="#D1D9E6"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M 400 100 Q 600 130, 700 250 T 800 400 T 700 550 T 400 700 T 100 550 T 0 400 T 100 250 T 400 100"
                stroke="#E0E7F1"
                strokeWidth="1"
                fill="none"
              />

              <circle cx="500" cy="220" r="8" fill="#D1D9E6" />
              <circle cx="650" cy="250" r="8" fill="#D1D9E6" />
              <circle cx="720" cy="400" r="8" fill="#D1D9E6" />
              <circle cx="600" cy="550" r="8" fill="#D1D9E6" />
              <circle cx="400" cy="600" r="8" fill="#D1D9E6" />
              <circle cx="250" cy="520" r="8" fill="#D1D9E6" />
              <circle cx="100" cy="400" r="8" fill="#D1D9E6" />
              <circle cx="200" cy="250" r="8" fill="#D1D9E6" />
            </svg>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
