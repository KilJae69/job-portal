"use client";

import type React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { MovingBorderBadge } from "./MovingBorderBadge";
import { FadeIn } from "./shared/FadeIn";

import { useTranslations } from "next-intl";
import { contactFormSchema, TContactFormSchema } from "@/lib/contactSchema";
import { sendEmailAction } from "@/lib/sendEmail.action";
import toast from "react-hot-toast";


// Props interface for reusability
interface ContactFormProps {
  
  defaultValues?: Partial<TContactFormSchema>;
  className?: string;
  
}

export default function ContactForm({
  
  defaultValues,
  className,
  
}: ContactFormProps) {
  const t = useTranslations("ContactForm");
 
 

  // Initialize React Hook Form with Zod resolver
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isSubmitting },
  } = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema(t)),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      ...defaultValues,
    },
  });

  // Form submission handler
  const onSubmit = async (data: TContactFormSchema) => {
    try {
      const response = await sendEmailAction(data);

      if (response.error) {
        toast.error(`${t("errorMessage")}:${response.error}`);
      } else {
        toast.success(`${t("successMessage")}`);
        reset();
      }
    } catch (error) {
      toast.error(`Unexpected error: ${error} `);
    }
  };

  return (
    <div
      className={cn(
        "shadow-input mx-auto w-full max-w-xl rounded-none bg-white md:rounded-2xl  ",
        className
      )}
    >
      <FadeIn>
        <MovingBorderBadge text={t("badge")} />
      </FadeIn>
      <h2 className="text-h2 my-3">{t("heading")}</h2>
      <p className="text-paragraph">
      {t("subheading")}
      </p>

      
        <FadeIn>
          <form
            className="my-8 bg-linear-to-b from-accent/20  to-white relative shadow-md p-4 rounded-md"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <LabelInputContainer>
                <Label htmlFor="firstName">{t("fields.firstName.label")}</Label>
                <Input
                  id="firstName"
                  placeholder={t("fields.firstName.placeholder")}
                  {...register("firstName")}
                />
                <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastName">{t("fields.lastName.label")}</Label>
                <Input
                  id="lastName"
                  placeholder={t("fields.lastName.placeholder")}
                  {...register("lastName")}
                />
                <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
              </LabelInputContainer>
            </div>

            <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <LabelInputContainer className="mb-4">
                <Label htmlFor="phone">{t("fields.phone.label")}</Label>
                <Input
                  id="phone"
                  placeholder={t("fields.phone.placeholder")}
                  type="tel"
                  {...register("phone")}
                />
                <ErrorMessage>{errors.phone?.message}</ErrorMessage>
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">{t("fields.email.label")}</Label>
                <Input
                  id="email"
                  placeholder="john.doe@gmail.com"
                  type="email"
                  {...register("email")}
                />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              </LabelInputContainer>
            </div>

            <LabelInputContainer className="mb-8">
              <Label htmlFor="message">{t("fields.message.label")}</Label>
              <Textarea
                id="message"
                placeholder={t("fields.message.placeholder")}
                className="min-h-[120px] resize-y"
                {...register("message")}
              />
              <ErrorMessage>{errors.message?.message}</ErrorMessage>
            </LabelInputContainer>

            <button
              className="group/btn cursor-pointer relative block h-10 w-full rounded-md bg-gradient-to-br from-accent to-accent/80 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]  disabled:opacity-70"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("pendingButton") : t("submitButton")}{" "}
              {!isSubmitting && "→"}
              <BottomGradient />
            </button>
          </form>
        </FadeIn>
      
    </div>
  );
}

// Reusable components
const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

export const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

// Error message component with fixed height to prevent layout shifts
export const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-[20px] text-xs text-rose-500 ">{children}</div>;
};
