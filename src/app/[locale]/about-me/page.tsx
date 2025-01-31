import { getAboutMe } from "@/lib/query";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import React from "react";
import gradientImg from "../../../../public/GRADIENT.svg";
import { PortableText } from "next-sanity";
import LinkedinButton from "@/components/LinkedinButton";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const metadataByLocale: Record<string, Metadata> = {
    en: {
      title: "About Me - Daria Pyziak Design",
      description:
        "Learn about my experience and approach to graphic design. Discover how I can help you achieve your project goals. Let's work together.",
      openGraph: {
        title: "About Me - Daria Pyziak Design",
        description:
          "Learn about my experience and approach to graphic design. Discover how I can help you achieve your project goals. Let's work together.",
        url: "https://www.dariapyziakdesign.pl/en/about-me",
        locale: "en_US",
      },
    },
  };

  // Zwraca metadane dla wybranego języka lub domyślnie angielski
  return metadataByLocale["en"];
}

const AboutMePage = async ({ params }: { params: { locale: string } }) => {
  if (params.locale === "pl") {
    redirect("/pl/o-mnie");
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

export default AboutMePage;
