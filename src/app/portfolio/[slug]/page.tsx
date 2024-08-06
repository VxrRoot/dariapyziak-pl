import ContainerLayout from "@/layouts/ContainerLayout";
import { IPortfolio } from "@/lib/interface";
import { getPortfolio, getPortfolios } from "@/lib/query";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";
import ArrowLeftIcon from "@/icons/ArrowLeftIcon";
import { PortableText } from "next-sanity";

export const revalidate = 30;

export async function generateStaticParams() {
  const portfolios = await getPortfolios();

  return portfolios.map((item: IPortfolio) => ({
    slug: item.slug.current,
  }));
}

const PortfolioPage = async ({ params }: { params: { slug: string } }) => {
  const portfolioData: IPortfolio[] = await getPortfolio(params.slug);

  if (!portfolioData[0]) notFound();

  const portfolioItem = portfolioData[0];

  return (
    <main className="text-white  pt-[10rem] bg-black">
      <div className="px-0 h-full  w-full mx-auto md:px-6 lg:px-16 max-w-[1440px]">
        <div className="mb-6 px-5 md:px-0">
          <Link
            href="/"
            className="text-sm text-[#F9F7F4]/50 flex items-center gap-2"
          >
            <ArrowLeftIcon /> Powrót
          </Link>
        </div>
        <div className="flex flex-col md:flex-row relative">
          <div className="flex-1 px-5 md:px-0 md:pr-4 md:sticky h-fit md:top-4">
            <div className="mb-6 flex gap-4 ">
              {portfolioItem?.tags?.map((tag, idx) => (
                <div
                  key={`${tag}-${idx}`}
                  className="bg-[#F9F7F4]/10 pt-2 pb-[6px] px-4 text-[#F9F7F4] text-xs rounded-full border border-[#F9F7F4]/20 whitespace-nowrap"
                >
                  {tag}
                </div>
              ))}
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              {portfolioItem?.title.pl}
            </h1>
            <div className="mt-8 prose  max-w-5xl prose-invert prose-lg w-full mx-auto flex flex-col">
              <PortableText value={portfolioItem?.content} />
            </div>
          </div>
          <div className="flex-1 mt-16 md:mt-0 items-center md:justify-end md:items-end flex flex-col">
            {portfolioItem?.images.map((img, idx) => (
              <Image
                key={idx}
                src={urlFor(img).url()}
                alt=""
                width={500}
                height={500}
                className="md:w-[548px] h-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;
