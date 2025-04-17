"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { ArrowUpRight, TrendingUp, LineChart, Cog } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MovingBorderBadge } from "../MovingBorderBadge";
import { Container } from "../shared/Container";
import dynamic from "next/dynamic";
import useLazyLoad from "@/hooks/useLazyLoad";
import Image from "next/image";
import PrimaryButton from "../shared/PrimaryButton";

const DynamicLottieComponent = dynamic(
  () => import("@/components/shared/LottieComponent"),
  {
    ssr: false,
  }
);

export default function OurCommitment() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { ref, isLoaded } = useLazyLoad();

  const timelineItems = [
    {
      year: 2025,
      title: "Become the #1 workforce partner in construction/agriculture",
      progress: 30,
    },
    {
      year: 2026,
      title: "Reduce permit times to EU averages (under 4 weeks)",
      progress: 15,
    },
    {
      year: 2027,
      title: "Expand to 10+ source countries with cultural training",
      progress: 5,
    },
  ];

  const commitmentPillars = [
    {
      title: "Economic Stability",
      description:
        "Every 100 workers placed = €5M retained in BiH's economy (World Bank model)",
      icon: <LineChart className="h-10 w-10 text-accent" />,
      stats: [25, 40, 65, 80],
    },
    {
      title: "Process Innovation",
      description:
        "Streamlining BiH's work permit system based on Croatia's success",
      icon: <Cog className="h-10 w-10 text-accent" />,
      stats: [30, 45, 60, 90],
    },
    {
      title: "Continuous Improvement",
      description: "+30% faster processing with each 50 contracts completed",
      icon: <TrendingUp className="h-10 w-10 text-accent" />,
      stats: [20, 50, 70, 95],
    },
  ];

  return (
    <section ref={ref} className="w-full relative py-12 md:py-24">
      <Container className="relative z-20">
        {/* Hero Section */}
        <div className="mb-16 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <MovingBorderBadge text="Naše Zalaganje" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Preventing Economic Collapse in BiH Through Workforce Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Bridging the labor gap today to secure Bosnia&apos;s tomorrow
            </p>
            <m.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <PrimaryButton
                href="/contact"
                variant="solid"
                className="flex items-center w-fit"
              >
                Join us in rebuilding BiH&apos;s workforce
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </PrimaryButton>
            </m.div>
          </div>
          <div className="relative w-full overflow-hidden aspect-square ">
            {isLoaded ? (
              <div className="relative h-full w-full translate-x-10 -translate-y-10">
                <DynamicLottieComponent path="/animations/globe.json" />
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-32 rounded-full border-4 border-accent/30 border-t-accent animate-spin" />
              </div>
            )}
            <Image
              fill
              src="/bih-map.svg"
              alt="bih-map"
              className="absolute inset-0 -z-10
      filter invert-[93%] sepia-[13%] saturate-[139%] hue-rotate-[229deg] brightness-[105%] contrast-[41%]"
            />
          </div>
        </div>

        {/* Three Commitment Pillars */}
        <div className="grid relative  gap-6 md:grid-cols-3 mb-16">
          {commitmentPillars.map((pillar, index) => (
            <m.div
              key={index}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="h-full border-none bg-gradient-to-r from-accent/5 to-accent/15 shadow-md">
                <CardHeader>
                  <m.div
                    animate={hoveredCard === index ? { y: [0, -5, 0] } : {}}
                    transition={{
                      duration: 0.5,
                      repeat:
                        hoveredCard === index ? Number.POSITIVE_INFINITY : 0,
                      repeatType: "loop",
                    }}
                    className="mb-2"
                  >
                    {pillar.icon}
                  </m.div>
                  <CardTitle>{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {pillar.description}
                  </CardDescription>
                  <div className="flex items-end h-12 gap-1">
                    {pillar.stats.map((stat, i) => (
                      <m.div
                        key={i}
                        className="bg-accent/80 w-6 rounded-t-sm"
                        style={{ height: `${stat}%` }}
                        initial={{ scaleY: 0, originY: 1 }} // Start from bottom
                        animate={{
                          scaleY: 1,
                          y: hoveredCard === index ? [0, -5, 0] : 0,
                        }}
                        transition={{
                          scaleY: { duration: 0.5, delay: i * 0.1 },
                          y: {
                            duration: 0.5,
                            repeat: hoveredCard === index ? Infinity : 0,
                            repeatType: "loop",
                            delay: 0.5 + i * 0.05, // Delay after initial animation
                          },
                        }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </m.div>
          ))}
        </div>

        {/* Goal Timeline */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Our Roadmap to Success</h3>
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-accent/20 rounded-full"></div>
            <div className="space-y-8 pl-6">
              {timelineItems.map((item, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[30px] top-1 h-4 w-4 rounded-full bg-accent shadow-md"></div>
                  <div className="grid gap-2 md:grid-cols-[100px_1fr]">
                    <div className="text-xl font-bold text-accent">
                      {item.year}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">{item.title}</h4>
                      <div className="h-2 w-full rounded-full bg-slate-100">
                        <div
                          className={cn(
                            "h-full rounded-full bg-gradient-to-r from-accent to-accent/20"
                          )}
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
