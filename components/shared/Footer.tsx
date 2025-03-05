import Image from "next/image";
import { Container } from "./Container";
import { Link } from "@/i18n/routing";
import Divider from "./Divider";
import { SocialMedia } from "./SocialMedia";
import footerNavigation from "@/constants/footerNavLinks";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  return (
    <footer>
      <Divider />
      <Container>
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-col justify-start gap-3">
            <div className="relative self-start w-[160px] h-[50px]">
              <Link href="/" aria-label="Home">
                <Image
                  src="/logo.png"
                  priority
                  alt="Spark Studio Logo"
                  className="object-contain"
                  fill
                />
              </Link>
            </div>
            <div className="space-y-4">
              <div className="text-lg font-semibold">
                <p className="text-slate-800">Call us</p>
                <p className="text-blue-600">123 456 7890</p>
              </div>
              <div className="text-sm space-y-2 text-slate-500">
                <p>
                  328 Queensberry Street, North Melbourne VIC 3051, Australia.
                </p>
                <p>support@superio.com</p>
              </div>
            </div>
          </div>
          <nav className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(footerNavigation).map((section) => (
              <div key={section.title}>
                <h4 className="text-lg text-slate-800 font-semibold mb-3">
                  {t(section.title)}
                </h4>
                <ul className="space-y-3 text-sm">
                  {section.links.map(({ href, title }) => (
                    <li key={href} className="group">
                      <Link
                        href={href}
                        className="text-slate-500 duration-500 flex items-center  relative overflow-hidden hover:text-blue-600 transition"
                      >
                        <span className="h-[2px] bg-blue-600 w-0 duration-500 group-hover:w-3.5 group-hover:mr-2"/>
                        {t(title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </Container>
      <Divider />
      <Container>
        <div className="flex flex-col justify-between items-center gap-12 pb-12 lg:pb-24 md:flex-row">
          <p className="text-slate-400 text-sm ">
            © 2025 Superio. All Right Reserved.
          </p>
          <SocialMedia />
        </div>
      </Container>
    </footer>
  );
}
