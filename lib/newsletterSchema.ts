import { z } from "zod";

export const newsletterSchema = (t: (key: string) => string) =>
    z.object({
      email: z
        .string()
        .trim()
        .email({ message: t("NewsletterForm.validation.emailInvalid") })
        .min(1, { message: t("NewsletterForm.validation.required") })
        .max(100, { message: t("NewsletterForm.validation.emailMax") }),
  
        
    });
  
  export type TNewsletterFormSchema = z.infer<ReturnType<typeof newsletterSchema>>;