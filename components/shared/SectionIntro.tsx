import clsx from "clsx";
import { FadeIn } from "./FadeIn";

export default function SectionIntro({
  title,
  paragraph,
  className,
}: {
  title: string;
  paragraph: string;
  className?: string;
}) {
  return (
    <FadeIn className={clsx("w-full text-center space-y-3 mb-12", className)}>
      <h2 className="text-slate-800 font-semibold text-2xl lg:text-3xl">
        {title}
      </h2>
      <p className="text-slate-600">{paragraph}</p>
    </FadeIn>
  );
}
