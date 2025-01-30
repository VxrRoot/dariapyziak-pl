"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

export default function LocaleSwitcherSelect() {
  const router = useRouter();

  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(locale: "pl" | "en") {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: locale }
    );
  }

  return (
    <div className="flex space-x-2">
      <button
        className="font-semibold text-[14px] relative"
        onClick={() => onSelectChange("pl")}
      >
        PL
        {params.locale === "pl" && (
          <span className="absolute h-[2px] w-full bg-[#F8B200] bottom-0 left-0 right-0" />
        )}
      </button>
      <span className="font-semibold text-[14px]">/</span>
      <button
        onClick={() => onSelectChange("en")}
        className={`font-semibold text-[14px] relative `}
      >
        EN
        {params.locale === "en" && (
          <span className="absolute h-[2px] w-full bg-[#F8B200] bottom-0 left-0 right-0" />
        )}
      </button>
    </div>
  );
}
