import Image from "next/image";
// import Breadcrumbs from "./Breadcrumbs";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

export default function PageIntro({ title }: { title: string }) {
  return (
    <section className="relative py-4 mt-18 lg:py-11.5 lg:mt-26">
      <Image
        src="/bg-hero.jpg"
        alt="hero bg"
        fill
        className="object-cover size-full -z-10"
      />
      <Container className="">
        <FadeIn className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-2xl font-bold tracking-widest text-slate-800 lg:text-4xl">
            {title}
          </h1>
         
        </FadeIn>
      </Container>
    </section>
  );
}
