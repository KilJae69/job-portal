
import clsx from "clsx";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



export const socialMediaProfiles = [
  {
    title: "Facebook",
    href: "https://facebook.com/SparkStudioDev",
    icon: FaFacebook,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/sparkstudiodev",
    icon: FaInstagram,
  },
  {
    title: "Github",
    href: "https://www.github.com",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: FaLinkedin,
  },
];

export function SocialMedia({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-8",
        invert ? "text-white" : "text-slate-400",
        className
      )}
    >
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <a
            rel="noopener noreferrer"
            target="__blank"
            href={socialMediaProfile.href}
            aria-label={socialMediaProfile.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-blue-800"
            )}
          >
            <socialMediaProfile.icon className="size-4 fill-current" />
          </a>
        </li>
      ))}
    </ul>
  );
}
