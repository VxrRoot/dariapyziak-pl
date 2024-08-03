import { IPortfolio } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  portfolioItem: IPortfolio;
  paddingTop?: boolean;
}

const PortfolioCardItem = ({ portfolioItem, paddingTop }: Props) => {
  return (
    <Link href={`/portfolio/${portfolioItem.slug.current}`}>
      <div
        className={`${paddingTop ? "md:pt-20" : ""} mx-auto flex rounded-md overflow-hidden flex-col justify-center items-center w-full max-w-[548px]`}
      >
        <Image
          src={urlFor(portfolioItem.titleImage).url()}
          alt=""
          className="w-full bg-cover bg-center"
          width={500}
          height={500}
        />
        <div className="bg-[#252424] p-6 w-full">
          <div className="mb-6 flex gap-4 ">
            {portfolioItem.tags.map((tag, idx) => (
              <div
                key={`${tag}-${idx}`}
                className="bg-[#F9F7F4]/10 pt-2 pb-[6px] px-4 text-[#F9F7F4] text-xs rounded-full border border-[#F9F7F4]/20"
              >
                {tag}
              </div>
            ))}
          </div>
          <p className="font-bold text-2xl">{portfolioItem.title.pl}</p>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCardItem;