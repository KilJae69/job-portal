"use client"
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function SearchSubmitButton() {
    const { pending } = useFormStatus();

    return (
      <Button
        
        type="submit"
        disabled={pending}
        className="w-full  flex-1 border  lg:w-fit text-md h-12.5 bg-blue-600 py-2.5 px-7.5 text-white cursor-pointer transition-all duration-300 hover:bg-white  hover:border-blue-600 hover:text-blue-600"
      >
        {pending ? "Searching..." : "Find Jobs"}
      </Button>
    );
  
}