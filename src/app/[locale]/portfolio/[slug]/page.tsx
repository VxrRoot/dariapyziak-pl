import CustomerFeedback from "@/components/CustomerFeedback";
import ContainerLayout from "@/layouts/ContainerLayout";
import { IPortfolio } from "@/lib/interface";
import { getPortfolio, getPortfolios } from "@/lib/query";
import { urlFor } from "@/lib/sanity";
import dynamic from "next/dynamic";
import Image from "next/image";
import { notFound } from "next/navigation";

const StickyProjectDescription = dynamic(
  () => import("@/components/StickyProjectDescription"),
  { ssr: false }
);

export const revalidate = 30;

export async function generateStaticParams() {
  const portfolios: IPortfolio[] = await getPortfolios();
  const locales = ["en", "pl"]; // 🔥 Upewniamy się, że uwzględniamy oba języki

  if (!portfolios || portfolios.length === 0) return [];

  const paths = portfolios
    .filter((item) => item?.slug?.current)
    .flatMap((item) =>
      locales.map((locale) => ({
        slug: item.slug.current,
        locale, // 🔥 Dodajemy `locale` do URL
      }))
    );

  return paths;
}

type IPortfolioWithCustomTags = Omit<IPortfolio, "tags"> & {
  tags: string[]; // Zmieniamy typ tags na string[]
  title: string;
};

const PortfolioPage = async ({
  params,
}: {
  params: { slug: string; locale: "pl" | "en" };
}) => {
  const portfolioData: IPortfolioWithCustomTags[] = await getPortfolio(
    params.slug,
    params.locale
  );

  if (!portfolioData[0]) notFound();

  const portfolioItem = portfolioData[0];

  return (
    <main className="text-white pt-[64px] bg-black">
      <div className="px-0 h-full  w-full mx-auto  ">
        <div className="flex flex-col md:flex-row spacex  relative">
          <div className="relative flex-1 flex  justify-end">
            <StickyProjectDescription
              content={portfolioItem.content}
              tags={portfolioItem.tags}
              title={portfolioItem.title}
            />
          </div>

          <div className="flex-1 mt-16 md:mt-0 items-center md:justify-end md:items-end flex  flex-col">
            {portfolioItem?.images.map((img, idx) => (
              <Image
                key={idx}
                src={urlFor(img.url).url()}
                alt=""
                width={2000}
                height={2000}
                className="md:w-full h-auto block !m-0"
              />
            ))}
          </div>
        </div>
        <ContainerLayout>
          {portfolioItem.opinion && (
            <CustomerFeedback
              author={{
                name: portfolioItem.opinion.author.name,
                role: portfolioItem.opinion.author.role,
              }}
              content={portfolioItem.opinion.content}
              title={portfolioItem.opinion.title[params.locale]}
            />
          )}
        </ContainerLayout>
      </div>
    </main>
  );
};

export default PortfolioPage;
