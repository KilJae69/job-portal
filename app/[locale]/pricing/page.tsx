import { Container } from "@/components/shared/Container";
import PageIntro from "@/components/shared/PageIntro";
import pricingPlans from "@/components/template/dummyData";
import { useTranslations } from "next-intl";

export default function PricingPage() {
  const t = useTranslations("Pricing");
  return (
    <>
      <PageIntro title={t("page-title")} />
      <Container>
        <div className="flex flex-col md:flex-row gap-4 mt-12 lg:mt-24 ">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`border rounded-md p-6 flex-1 lg:p-12 ${
                plan.recommended ? "border-blue-500" : "border-slate-200"
              }`}
            >
              <div className="flex flex-col md:gap-6">
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold text-blue-600">
                    {plan.title}
                  </h3>
                 {plan.recommended && <span className="text-green-700 text-xs bg-green-200 py-1 px-3 rounded-full">Recommended</span>}
                </div>
                <p className="text-2xl md:text-3xl font-semibold">
                  ${plan.price.toFixed(2)}
                </p>
                <ul className="my-4">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-slate-600"
                    >
                      ✔️ {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full rounded-sm py-4 text-lg font-semibold  ${
                    plan.recommended
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-blue-600"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
