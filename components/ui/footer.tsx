"use client"
import { usePathname } from "next/navigation";
import React from "react";

const GitHubIcon = (props: React.ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.667c-4.605 0-8.334 3.823-8.334 8.544 0 3.78 2.385 6.974 5.698 8.106.417.075.573-.182.573-.406 0-.203-.011-.875-.011-1.592-2.093.397-2.635-.522-2.802-1.002-.094-.246-.5-1.005-.854-1.207-.291-.16-.708-.556-.01-.567.656-.01 1.124.62 1.281.876.75 1.292 1.948.93 2.427.705.073-.555.291-.93.531-1.143-1.854-.213-3.791-.95-3.791-4.218 0-.929.322-1.698.854-2.296-.083-.214-.375-1.09.083-2.265 0 0 .698-.224 2.292.876a7.576 7.576 0 0 1 2.083-.288c.709 0 1.417.096 2.084.288 1.593-1.11 2.291-.875 2.291-.875.459 1.174.167 2.05.084 2.263.53.599.854 1.357.854 2.297 0 3.278-1.948 4.005-3.802 4.219.302.266.563.78.563 1.58 0 1.143-.011 2.061-.011 2.35 0 .224.156.491.573.405a8.365 8.365 0 0 0 4.11-3.116 8.707 8.707 0 0 0 1.567-4.99c0-4.721-3.73-8.545-8.334-8.545Z"
      />
    </svg>
  );
};

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      clipRule="evenodd"
    />
  </svg>
);

const SocialLink = ({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group">
      <span className="sr-only">{children}</span>
      <Icon
        className={`h-6 w-6 ${
          href === "https://github.com/career-tokens/WebAccessibility" ? "h-7 w-7" : ""
        } fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500`}
      />
    </a>
  );
};

const Footer = () => {
  const route = usePathname();
  const isItPerceivePage = route == "/perceive";
  return (
    <div className={`${route=="/modal"?"absolute":route=="/"?"sm:absolute":route=="/form"?"xl:absolute":""} bottom-0 p-4 flex w-full flex-col items-center justify-between gap-5  sm:flex-row dark:border-white/5`}>
      <div>Made with ❤️ by Mainak.</div>
      <div className="flex gap-4 items-center">
        <SocialLink href="https://github.com/career-tokens/WebAccessibility" icon={GitHubIcon}>
          Find the Code on Github
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/mainak-mukherjee1234" icon={LinkedInIcon}>
          Follow me on LinkedIn
        </SocialLink>
      </div>
    </div>
  );
};

export default Footer;
