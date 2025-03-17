"use client";
import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import Form from "next/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaLocationDot, FaMagnifyingGlass } from "react-icons/fa6";
import SearchSubmitButton from "./SearchSubmitButton";
import { ComboboxDemo } from "./inputs/Combobox";
import { Button } from "../ui/button";
import { ChevronDownIcon } from "lucide-react";

const locations = [
  "Florida",
  "London",
  "Los Angeles",
  "Miami",
  "Nevada",
  "New York",
];

export default function JobSearchForm({
  keyword,
  location,
  isHomePage = false,
}: {
  keyword?: string;
  location?: string;
  isHomePage?: boolean;
}) {
  const [isAdvOpen, setIsAdvOpen] = useState(false);

  const toggleAdvancedFilters = () => {
    setIsAdvOpen((prev) => !prev);
  };
  return (
    <Form
      action="/jobs"
      className="flex flex-col  relative p-4  rounded-lg shadow-lg bg-white text-slate-600 "
    >
      {/* 🔍 Job Search Input */}
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center w-full">
          <FaMagnifyingGlass className="size-6" />
          <Input
            name="keyword"
            className="border-none shadow-none w-full"
            placeholder="Job title, keywords..."
            defaultValue={keyword}
          />
        </div>

        <div className="w-full h-px bg-slate-200 lg:w-px lg:h-full" />

        {/* 📍 Location Select Dropdown */}
        <div className="flex items-center w-full">
          <FaLocationDot className="size-6" />
          <Select name="location" defaultValue={location}>
            <SelectTrigger className="w-full border-none shadow-none cursor-pointer">
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
        </div>

        <div className="w-full h-px bg-slate-200 lg:w-px lg:h-full" />
        {/* 📋 Category Combobox */}

        {!isHomePage && (
          <div className="flex w-full">
            <ComboboxDemo />
          </div>
        )}

        {/* 🔘 Search Button with useFormStatus() */}
        <div className="flex w-full items-center gap-5 mt-5 lg:mt-0">
          <Button
            type="button"
            className="shadow-none text-blue-600"
            onClick={toggleAdvancedFilters}
          >
            <ChevronDownIcon />
            Advanced
          </Button>

          <SearchSubmitButton />
        </div>
      </div>
      <AnimatePresence>
        {isAdvOpen && (
          <m.div
            key="advanced-filters" // Add a unique key for AnimatePresence
            initial={{ height: 0, opacity: 0 }} // Initial state
            animate={{ height: "auto", opacity: 1 }} // Animate to full height and visible
            exit={{ height: 0, opacity: 0 }} // Animate out
            transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
            className="w-full overflow-hidden" // Ensure content doesn't overflow
          >
            <div className="min-h-[200px]  bg-gray-100 p-4 rounded-lg">
              {/* Placeholder for advanced filters */}
              <p>Advanced filters go here...</p>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </Form>
  );
}
