"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {  routing, usePathname } from "@/i18n/routing";

// #REPLACE NEXT LINK WITH INTL LINK
import Link from "next/link";


export default function Breadcrumbs() {
  const pathname = usePathname();
 
console.log(pathname);

  // Generate breadcrumbs from pathname
  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment.length > 0);

  return (
    <Breadcrumb>
      <BreadcrumbList className="uppercase text-slate-500 italic ">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathSegments.length > 0 && <BreadcrumbSeparator />}

        {pathSegments.map((segment, index) => {
         const href = ("/" + pathSegments.slice(0, index + 1).join("/")) as keyof typeof routing.pathnames;

          return (
            <BreadcrumbItem key={href}>
              {index === pathSegments.length - 1 ? (
                <BreadcrumbPage>{decodeURIComponent(segment)}</BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink className="uppercase" asChild>
                    <Link  href={href}>{decodeURIComponent(segment)}</Link>
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

