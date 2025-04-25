"use client"
import { useState } from "react"
import type React from "react"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

// Define the contact form schema with Zod
const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  phone: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

// TypeScript type for the form values
type ContactFormValues = z.infer<typeof contactFormSchema>

// Props interface for reusability
interface ContactFormProps {
  onSubmitSuccess?: (data: ContactFormValues) => void
  defaultValues?: Partial<ContactFormValues>
  className?: string
  submitButtonText?: string
  
}

export default function ContactForm({
  onSubmitSuccess,
  defaultValues,
  className,
  submitButtonText = "Send Message",
 
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Initialize React Hook Form with Zod resolver
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      ...defaultValues,
    },
  })

  // Form submission handler
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    try {
      // Call the custom submit handler if provided
      if (onSubmitSuccess) {
        await onSubmitSuccess(data)
      }
      setSubmitSuccess(true)
      reset() // Reset form after successful submission
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className={cn(
        "shadow-input mx-auto w-full max-w-xl rounded-none bg-white p-4 md:rounded-2xl md:p-8 ",
        className,
      )}
    >
      <h2 className="text-h2">Get in Touch</h2>
      <p className="text-paragraph">
        Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>

      {submitSuccess ? (
        <div className="my-8 rounded-md bg-green-50 p-4 ">
          <p className="text-green-800 ">Thank you for your message! We&apos;ll be in touch soon.</p>
        </div>
      ) : (
        <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" placeholder="John" {...register("firstName")} />
              <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" placeholder="Doe" {...register("lastName")} />
              <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input id="phone" placeholder="+1 (555) 123-4567" type="tel" {...register("phone")} />
            <ErrorMessage>{errors.phone?.message}</ErrorMessage>
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="john.doe@example.com" type="email" {...register("email")} />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </LabelInputContainer>

          <LabelInputContainer className="mb-8">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="How can we help you?"
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
            {isSubmitting ? "Sending..." : submitButtonText} {!isSubmitting && "→"}
            <BottomGradient />
          </button>

         
        </form>
      )}
    </div>
  )
}

// Reusable components
const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
}

// Error message component with fixed height to prevent layout shifts
const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-[20px] text-xs text-rose-500 ">{children}</div>
}


