"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useFormState, useFormStatus } from "react-dom"; // React 19 Hooks

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaLocationDot, FaMagnifyingGlass } from "react-icons/fa6";

// ✅ Define the schema using Zod
const searchSchema = z.object({
  keyword: z.string().min(2, { message: "Enter at least 2 characters" }),
  location: z.string().min(1, { message: "Please select a location" }),
});

type SearchFormValues = z.infer<typeof searchSchema>;

const locations = [
  "Florida",
  "London",
  "Los Angeles",
  "Miami",
  "Nevada",
  "New York",
];

export default function JobSearchForm() {
  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      keyword: "",
      location: "",
    },
  });

  function onSubmit(values: SearchFormValues) {
    console.log("Search Values:", values);
    // 🚀 TODO: Send request to backend API when available
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4  p-4 min-h-[100px] rounded-lg shadow-lg bg-white text-slate-600 lg:flex-row lg:items-center lg:justify-between"
      >
        {/* 🔍 Job Search Input */}
        <FormField
          control={form.control}
          name="keyword"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormLabel className="sr-only">Job title, keywords...</FormLabel>
              <FaMagnifyingGlass className="size-6" />
              <FormControl>
                <Input
                  className="border-none shadow-none"
                  placeholder="Job title, keywords..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full h-px bg-slate-200 lg:w-px lg:h-full" />
        {/* 📍 Location Select Dropdown */}
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormLabel className="sr-only">City or postcode</FormLabel>
              <FaLocationDot className="size-6" />
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full border-none shadow-none">
                    <SelectValue placeholder="City or postcode" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-200 text-slate-600">
                    {locations.map((city) => (
                      <SelectItem className="py-2" key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 🔘 Search Button with useFormStatus() */}
        <SubmitButton />
      </form>
    </Form>
  );
}

// 🟢 Submit Button with Loading State (React 19 `useFormStatus()`)
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full mt-5 lg:mt-0 lg:w-fit text-md h-12.5 bg-blue-600 py-2.5 px-7.5 text-white"
    >
      {pending ? "Searching..." : "Find Jobs"}
    </Button>
  );
}
