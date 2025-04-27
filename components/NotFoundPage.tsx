

import { useTranslations } from "next-intl";
import { Container } from "./shared/Container";
import { FadeIn } from "./shared/FadeIn";
import PrimaryButton from "./shared/PrimaryButton";


export default function NotFoundPage() {
  const t = useTranslations("NotFound");
  return (
    <>
      <Container className="flex  items-center pt-24 sm:pt-32 lg:pt-46">
        <FadeIn className="flex max-w-xl flex-col items-center text-center">
          <p className="text-h2">
            {t("title")}
          </p>
          <h1 className="mt-4 text-h2">
            {t("header")}
          </h1>
          <p className="mt-2 text-paragraph">{t("description")}</p>
          <PrimaryButton
            href="/"
            className="mt-4"
          >
            {t("homeLink")}
          </PrimaryButton>
        </FadeIn>
      </Container>
      
    </>
  );
}
