"use client";
import BigLogo from "@/icons/BigLogo";
import ContainerLayout from "@/layouts/ContainerLayout";
import Link from "next/link";
import styles from "../styles/Header.module.scss";
import { usePathname } from "next/navigation";

import React from "react";

const Header = () => {
  const pathname = usePathname();

  const isPortfolioPage = pathname.includes("/portfolio");

  return (
    <header
      className={`py-6 lg:py-8 bg-transparent absolute w-full z-20 ${isPortfolioPage ? "text-white" : ""}`}
    >
      <ContainerLayout>
        <div className="flex justify-between items-center">
          <Link href="/">
            <BigLogo darkColor={isPortfolioPage} />
          </Link>
          <div className="flex items-center">
            <Link
              className="uppercase font-semibold text-sm cursor-pointer"
              href="/#portfolio"
            >
              Portfolio
            </Link>
            <Link
              className={`uppercase font-semibold text-sm cursor-pointer ${isPortfolioPage ? "bg-transparent border-white/80" : "bg-[#F1EBE3] border-black/50"} border  rounded-full   h-[44px] ml-4 lg:ml-16 flex items-center overflow-hidden max-w-[130px] lg:max-w-[180px] contact-button ${styles.contact_button}`}
              href="/#kontakt"
            >
              <div
                className={`bg-black h-full text-white gap-4 items-center hover:animate-loop-scroll -ml-10 hidden scroll-element ${styles.scroll_element}`}
              >
                <span className="whitespace-nowrap">Contact Me</span>
                <span className="whitespace-nowrap">Contact Me</span>
                <span className="whitespace-nowrap">Contact Me</span>
                <span className="whitespace-nowrap">Contact Me</span>
                <span className="whitespace-nowrap">Contact Me</span>
                <span className="whitespace-nowrap">Contact Me</span>
              </div>
              <div
                className={`pt-0.5 w-[130px] lg:w-[180px] text-center block ${styles.static_element}`}
              >
                Contact Me
              </div>
            </Link>
          </div>
        </div>
      </ContainerLayout>
    </header>
  );
};

export default Header;
