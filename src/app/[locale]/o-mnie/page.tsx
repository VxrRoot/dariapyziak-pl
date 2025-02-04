import LinkedinButton from "@/components/LinkedinButton";
import { getAboutMe } from "@/lib/query";
import Image from "next/image";
import gradientImg from "../../../../public/GRADIENT.svg";

import { PortableText } from "next-sanity";
import React from "react";
import { urlFor } from "@/lib/sanity";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const revalidate = 300;

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const metadataByLocale: Record<string, Metadata> = {
    pl: {
      title: "O mnie - Daria Pyziak Design",
      description:
        "Poznaj moje doświadczenie i podejście do projektowania graficznego. Dowiedz się, jak mogę Ci pomóc w realizacji Twojego projektu. Zapraszam do współpracy.",
      openGraph: {
        title: "O mnie - Daria Pyziak Design",
        description:
          "Poznaj moje doświadczenie i podejście do projektowania graficznego. Dowiedz się, jak mogę Ci pomóc w realizacji Twojego projektu. Zapraszam do współpracy.",
        url: "https://www.dariapyziakdesign.pl/pl/o-mnie",
        locale: "pl_PL",
      },
    },
  };

  // Zwraca metadane dla wybranego języka lub domyślnie angielski
  return metadataByLocale["pl"];
}

const OmniePage = async ({ params }: { params: { locale: string } }) => {
  if (params.locale === "en") {
    redirect("/en/about-me");
  }

  const response = await getAboutMe(params.locale);

  const data = response[0];

  return (
    <main className="pt-[64px] overflow-hidden">
      <section className="flex flex-col lg:flex-row">
        <div className="flex-1 relative">
          <Image
            alt=""
            src={urlFor(data.Image).url()}
            width={2000}
            height={2000}
            className="z-10 relative"
          />
          <div
            className={`z-0 absolute -right-[50%] top-40 lg:-right-[600px] lg:-top-[250px] w-[600px] h-[600px] lg:w-[1600px] lg:h-[1600px] `}
          >
            <Image src={gradientImg} alt="" className="w-full h-full " />
          </div>
        </div>
        <div className="flex-1 max-md:my-14">
          <div className="max-w-[960px] lg:p-20 md:pr-6  max-md:px-5 relative z-10">
            <h1
              dangerouslySetInnerHTML={{ __html: data.title }}
              className="font-semibold text-4xl lg:text-[47px] leading-tight mb-8 "
            />
            <div className="[&>h2]:font-bold [&>h2]:mb-2 [&>p]:mb-8 font-light text-[13px] leading-tight [&>h2]:text-[14px]">
              <PortableText value={data.content} />
            </div>
            <div className="mt-10">
              <LinkedinButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OmniePage;
