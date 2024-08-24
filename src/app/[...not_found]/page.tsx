import ContainerLayout from "@/layouts/ContainerLayout";
import styles from "../../styles/Header.module.scss";
import React from "react";
import Link from "next/link";
import { Bowlby_One_SC } from "next/font/google";

const bowbly = Bowlby_One_SC({ subsets: ["latin"], weight: ["400"] });

export default function NotFound() {
  return (
    <main className="">
      <ContainerLayout>
        <div className="flex-col w-full flex justify-center items-center h-[80vh]">
          <span className={`${bowbly.className} text-6xl`}>404 Not FOUND</span>{" "}
          <br />
          <Link
            className={`uppercase font-semibold text-sm cursor-pointer bg-[#F1EBE3] border-black/50 border  rounded-full   h-[44px] flex items-center overflow-hidden max-w-[130px] lg:max-w-[180px] contact-button ${styles.contact_button}`}
            href="/"
          >
            <div
              className={`bg-black h-full text-white gap-4 items-center hover:animate-loop-scroll -ml-10 hidden scroll-element ${styles.scroll_element}`}
            >
              <span className="whitespace-nowrap">Home Page</span>
              <span className="whitespace-nowrap">Home Page</span>
              <span className="whitespace-nowrap">Home Page</span>
              <span className="whitespace-nowrap">Home Page</span>
              <span className="whitespace-nowrap">Home Page</span>
              <span className="whitespace-nowrap">Home Page</span>
            </div>
            <div
              className={`pt-0.5 w-[130px] lg:w-[180px] text-center block ${styles.static_element}`}
            >
              Home Page
            </div>
          </Link>
        </div>
      </ContainerLayout>
    </main>
  );
}
