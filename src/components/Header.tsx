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
              className={`uppercase flex gap-2 font-semibold text-sm cursor-pointer ${isPortfolioPage ? "bg-transparent border-white/80" : "bg-transparent border-black/50"} border  rounded-full  h-[44px] ml-4 lg:ml-16 flex items-center overflow-hidden w-[130px] lg:w-[180px] contact-button`}
              href="/#kontakt"
            >
              <div className={styles.marquee_box_one}>
                <div className={styles.marquee_content_one}>
                  <span className="whitespace-nowrap h-full  pt-1">
                    CONTACT ME
                  </span>
                  <span className="whitespace-nowrap h-full  pt-1">
                    CONTACT ME
                  </span>
                  <span className="whitespace-nowrap h-full  pt-1">
                    CONTACT ME
                  </span>
                  <span className="whitespace-nowrap h-full  pt-1">
                    CONTACT ME
                  </span>
                  <span className="whitespace-nowrap h-full  pt-1">
                    CONTACT ME
                  </span>
                  <span className="whitespace-nowrap h-full  pt-1">
                    CONTACT ME
                  </span>
                  <span className="whitespace-nowrap h-full  pt-1">
                    CONTACT ME
                  </span>
                  <span className="whitespace-nowrap h-full  pt-1">
                    CONTACT ME
                  </span>
                </div>
                <div className={styles.marquee_content_one}>
                  <span className="whitespace-nowrap h-full  pt-1">
                    CONTACT ME
                  </span>
                  <span className="whitespace-nowrap h-full  pt-1">
                    CONTACT ME
                  </span>
                  <span className="whitespace-nowrap h-full  pt-1">
                    CONTACT ME
                  </span>
                  <span className="whitespace-nowrap h-full  pt-1">
                    CONTACT ME
                  </span>
                  <span className="whitespace-nowrap h-full  pt-1">
                    CONTACT ME
                  </span>
                  <span className="whitespace-nowrap h-full  pt-1">
                    CONTACT ME
                  </span>
                  <span className="whitespace-nowrap h-full  pt-1">
                    CONTACT ME
                  </span>
                  <span className="whitespace-nowrap h-full  pt-1">
                    CONTACT ME
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </ContainerLayout>
    </header>
  );
};

export default Header;
