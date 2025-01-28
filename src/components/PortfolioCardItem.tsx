import { IPortfolio } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";
import styles from "../styles/PortfolioCardItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLocale } from "next-intl";

interface Props {
  portfolioItem: IPortfolio;
  paddingTop?: boolean;
}

const PortfolioCardItem = ({ portfolioItem, paddingTop }: Props) => {
  const locale = useLocale();

  const selectedLang = locale === "pl" ? "pl" : "en";

  return (
    <Link href={`${locale}/portfolio/${portfolioItem.slug.current}`}>
      <div
        className={`${paddingTop ? "md:mt-20" : ""} mx-auto flex rounded-md overflow-hidden flex-col bg-[#252424] justify-center items-center w-full  ${styles.wrapper}`}
      >
        <Image
          src={urlFor(portfolioItem.titleImage).url()}
          alt=""
          className={`w-full bg-cover bg-center ${styles.image}`}
          width={500}
          height={500}
        />
        <div className=" p-6 w-full">
          <div className="mb-6 flex gap-4 flex-wrap">
            {portfolioItem.tags[selectedLang].map((tag, idx) => (
              <div
                key={`${tag}-${idx}`}
                className="bg-[#F9F7F4]/10 pt-2 pb-[6px] px-4 text-[#F9F7F4] text-xs rounded-full border border-[#F9F7F4]/20 whitespace-nowrap"
              >
                {tag}
              </div>
            ))}
          </div>
          <p className="font-bold text-2xl">
            {portfolioItem.title[selectedLang]}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCardItem;
