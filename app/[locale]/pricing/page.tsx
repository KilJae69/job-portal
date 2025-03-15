import PageIntro from "@/components/shared/PageIntro";
import { useTranslations } from "next-intl";

export default function PricingPage() {
    const t = useTranslations("Pricing");
  return (
    <>
    <PageIntro title={t("page-title")} />
    </>
  );
  
}