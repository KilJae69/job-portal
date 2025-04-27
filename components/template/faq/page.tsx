import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import PageIntro from "@/components/shared/PageIntro";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqData from "@/constants/faqData";
import { useTranslations } from "next-intl";

export default function FaqPage() {
  const t = useTranslations("FAQ");
  return (
    <>
      <PageIntro title={"FAQ"} />
      <Container className="space-y-8">
        {faqData.map((category) => (
          <FadeIn key={category.category} className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold my-5 lg:my-8">{t(category.category)}</h2>
            <Accordion type="single" collapsible className="w-full">
              {category.questions.map((q) => (
                <AccordionItem
                  key={q.key}
                  value={q.key}
                  className="border border-gray-200 rounded-lg mb-2 "
                >
                  <AccordionTrigger className="p-4 py-4 lg:py-8 text-left w-full  text-md font-medium bg-white rounded-lg cursor-pointer">
                    {t(q.key)}
                  </AccordionTrigger>
                  <AccordionContent className="p-4 text-sm text-gray-700">
                    {t(q.answerKey)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        ))}
      </Container>
    </>
  );
}
