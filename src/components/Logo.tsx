import { siteConfig } from "@/config/site";

export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const stroke = tone === "light" ? "#9C7630" : "#E5C885";
  return (
    <span className="flex items-center gap-2.5">
      {/* <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
        <path
          d="M10 34V20a10 10 0 0 1 20 0v14z"
          fill="none"
          stroke={stroke}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="23" r="2.4" fill={stroke} />
      </svg> */}
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl leading-none font-semibold text-plum-900">
          {siteConfig.shortName}
        </span>
        <span className="mt-1 text-xs tracking-wide text-plum-700">
          Salon &amp; Studio
        </span>
      </span>
    </span>
  );
}
