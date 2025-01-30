"use client";
import ContainerLayout from "@/layouts/ContainerLayout";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

import SmallLogo from "@/icons/SmallLogo";
import { motion } from "framer-motion";
import { useState } from "react";
import LanguageSwitcher from "./LangSwitcher";
import NavButton from "./NavButton";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Stan dla burger menu
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations();

  const isHomePage =
    pathname === "/" || pathname === "/en" || pathname === "/pl";

  const isAboutMePage =
    pathname === "/pl/o-mnie" || pathname === "/en/about-me";

  return (
    <header
      className={` bg-transparent   absolute w-full z-20 ${
        !isHomePage ? "text-white border-white/15 " : "border-gray-500/10"
      } border-b ${isAboutMePage && "!text-black !border-black/5"}`}
    >
      <ContainerLayout>
        <div
          className={`flex  h-[64px] items-center ${
            !isHomePage ? "justify-between" : "justify-end"
          }`}
        >
          {(!isHomePage || isAboutMePage) && (
            <Link href="/">
              {/* <BigLogo darkColor={isPortfolioPage} /> */}
              <SmallLogo darkColor={isAboutMePage} />
            </Link>
          )}

          {/* Menu desktop */}
          <div className="hidden lg:flex space-x-16 items-center">
            <NavButton href="/" text={t("nav.home")} />
            <NavButton href="/#portfolio" text={t("nav.portfolio")} />
            <NavButton
              href={locale === "pl" ? "/pl/o-mnie" : "/en/about-me"}
              text={t("nav.about")}
            />
            <NavButton href="/#kontakt" text={t("nav.contact")} />
            <LanguageSwitcher />
          </div>

          {/* Menu burger - mobile */}
          <div className="lg:hidden flex items-center">
            <button
              className="z-30 flex flex-col items-end space-y-[5px] outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {/* Animowany burger */}
              <motion.span
                className={`h-[2px] w-6 bg-current block ${menuOpen ? "bg-white" : "bg-black"}`}
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`h-[2px] w-6 bg-current block ${menuOpen ? "bg-white" : "bg-black"}`}
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`h-[2px] w-6 bg-current block ${menuOpen ? "bg-white" : "bg-black"}`}
                animate={
                  menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            </button>

            {/* Rozwijane menu */}
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-[#111111] text-white flex flex-col items-center justify-center space-y-6 z-20"
              initial={{ opacity: 0, y: "-100%" }}
              animate={
                menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }
              }
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <NavButton href="/" text={t("nav.home")} />
              <NavButton href="/#portfolio" text={t("nav.portfolio")} />
              <NavButton
                href={locale === "pl" ? "/pl/o-mnie" : "/en/about-me"}
                text={t("nav.about")}
              />
              <NavButton href="/portfolio" text={t("nav.contact")} />
              <LanguageSwitcher />
            </motion.div>
          </div>
        </div>
      </ContainerLayout>
    </header>
  );
};

export default Header;
