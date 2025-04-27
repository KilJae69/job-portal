"use server";

import { Resend } from "resend";
import { getErrorMessage, validateString } from "./utils";
import ContactFormEmail from "@/email/ContactFormEmail";
import React from "react";
import { TContactFormSchema } from "./contactSchema";



const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction({
  firstName,
  lastName,
  email,
  message,
  phone,
}: TContactFormSchema) {
  if (!validateString(email, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  try {
    const response = await resend.emails.send({
      from: "Contact Form TalentLinkBiH <onboarding@resend.dev>",
      to: "talentlinkbih@gmail.com",
      subject: "Poruka iz kontaktne forme - TalentLinkBiH",
      replyTo: email as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        email: email as string,
        firstName: firstName as string,
        lastName:lastName as string,
        phone: phone as string,
      }),
    });

    if (!response.data || response.error) {
      throw new Error(response?.error?.message || "Email sending failed");
    }

    return { data: response.data };
  } catch (error: unknown) {
    console.error("Error in sendEmailAction:", error);
    return { error: getErrorMessage(error) };
  }
}
