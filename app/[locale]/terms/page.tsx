import { Container } from "@/components/shared/Container";
import PageIntro from "@/components/shared/PageIntro";
import termsData from "@/constants/termsData";
import { useTranslations } from "next-intl";

export default function TermsPage() {
  const t = useTranslations("Terms");
  return (
    <>
      <PageIntro title={t("page-title")} />
      <Container className="">
        <div className="space-y-8 max-w-3xl mx-auto mt-12 lg:mt-24">
          {termsData.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl text-slate-800 font-bold">
                {t(section.key)}
              </h2>
              <p className="text-slate-500 mt-2">{t(section.contentKey)}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
