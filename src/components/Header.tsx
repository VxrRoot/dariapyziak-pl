"use client";
import BigLogo from "@/icons/BigLogo";
import ContainerLayout from "@/layouts/ContainerLayout";
import Link from "next/link";
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
          <div>
            <Link
              className="uppercase font-semibold text-sm cursor-pointer"
              href="/#portfolio"
            >
              Portfolio
            </Link>
            <Link
              className={`uppercase font-semibold text-sm cursor-pointer ${isPortfolioPage ? "bg-transparent border-white/80" : "bg-[#F1EBE3] border-black/50"} border  rounded-full py-4 px-8  ml-4 lg:ml-16`}
              href="/#kontakt"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </ContainerLayout>
    </header>
  );
};

export default Header;
