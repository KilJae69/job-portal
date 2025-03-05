"use client";
import React from "react";

import { Link } from "@/i18n/routing";



import { useTranslations } from "next-intl";
import Image from "next/image";

// import { FloatingDock } from "../ui/floating-dock";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
  useModal,
} from "../ui/animated-modal";

import { FaAngleRight, FaXmark } from "react-icons/fa6";
import navLinks from "@/constants/navLinks";
import { Button } from "../ui/button";

function NavigationLinks() {
  const { setOpen } = useModal();
  const t = useTranslations();

  return (
    <nav>
      <ul className="flex flex-col">
        {navLinks.map(({ href, title }) => (
          <li key={href} onClick={() => setOpen(false)}>
            <Link
              className="size-full hover:text-slate-100 transition-colors capitalize flex items-center text-slate-400 justify-between px-5 py-3"
              href={href}
            >
              {" "}
              {t(title)}
              <FaAngleRight />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ModalHeader() {
  const { setOpen } = useModal();
  return (
    <div className=" flex py-3 px-2 justify-between items-center bg-white ">
      <Link
        href="/"
        onClick={() => setOpen(false)}
        aria-label="Home"
        className="relative w-[120px] h-[40px]"
      >
        <Image
          src="/logo.png"
          alt="Spark Studio Logo"
          className="object-contain"
          fill
        />
      </Link>

      <FaXmark
        onClick={() => setOpen(false)}
        className="size-6 cursor-pointer"
      />
    </div>
  );
}

function ModalFooter() {
 

  return (
    <div className="mt-auto">
      <Button>Post Job</Button>
    </div>
  );
}

export default function AnimatedModalSidebar() {
//  const t = useTranslations("Header");
  return (
    <Modal>
      <ModalTrigger />

      <ModalBody className="size-full bg-slate-800 ">
        <ModalHeader />
        <ModalContent className="flex p-5">
          <NavigationLinks />
          {/* <div className="flex flex-col items-center justify-center py-10 mt-auto w-full">
            <p className="text-md sm:text-xl font-semibold tracking-widest mb-10 text-primary-800">
              {t("language-label")}
            </p>
            <FloatingDock />
          </div> */}
          <ModalFooter />
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}
