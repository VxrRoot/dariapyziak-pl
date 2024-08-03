import BigLogo from "@/icons/BigLogo";
import ContainerLayout from "@/layouts/ContainerLayout";
import Link from "next/link";

import React from "react";

const Header = () => {
  return (
    <header className="py-6 lg:py-8 bg-transparent absolute w-full z-20">
      <ContainerLayout>
        <div className="flex justify-between items-center">
          <BigLogo />
          <div>
            <Link
              className="uppercase font-semibold text-sm cursor-pointer"
              href="/#portfolio"
            >
              Portfolio
            </Link>
            <Link
              className="uppercase font-semibold text-sm cursor-pointer bg-[#F1EBE3] border border-black/50 rounded-full py-4 px-8  ml-4 lg:ml-16"
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
