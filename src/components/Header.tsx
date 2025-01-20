"use client";
import BigLogo from "@/icons/BigLogo";
import ContainerLayout from "@/layouts/ContainerLayout";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";
import LanguageSwitcher from "./LangSwitcher";

const Header = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations();

  const isPortfolioPage = pathname.includes("/portfolio");

  return (
    <header
      className={`py-6 lg:py-8 bg-transparent absolute w-full z-20 ${isPortfolioPage ? "text-white" : ""} border-b border-gray-500/10`}
    >
      <ContainerLayout>
        <div
          className={`flex  items-center ${isPortfolioPage ? "justify-between" : "justify-end"}`}
        >
          {isPortfolioPage && (
            <Link href="/">
              <BigLogo darkColor={isPortfolioPage} />
            </Link>
          )}
          <div className="flex space-x-16 items-center">
            <Link
              className=" font-semibold text-sm cursor-pointer"
              href="/#portfolio"
            >
              {t("nav.home")}
            </Link>
            <Link
              className=" font-semibold text-sm cursor-pointer"
              href="/#portfolio"
            >
              {t("nav.portfolio")}
            </Link>
            <Link
              className=" font-semibold text-sm cursor-pointer"
              href="/#portfolio"
            >
              {t("nav.about")}
            </Link>
            <Link
              className=" font-semibold text-sm cursor-pointer"
              href="/#portfolio"
            >
              {t("nav.contact")}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </ContainerLayout>
    </header>
  );
};

export default Header;
