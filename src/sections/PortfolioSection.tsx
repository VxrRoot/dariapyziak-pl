import PortfolioCardItem from "@/components/PortfolioCardItem";
import ContainerLayout from "@/layouts/ContainerLayout";
import { IPortfolio } from "@/lib/interface";
import { getPortfolios } from "@/lib/query";
import React from "react";

const PortfolioSection = async () => {
  const portfolios = await getPortfolios();

  return (
    <section className="py-20 bg-black text-white" id="portfolio">
      <ContainerLayout>
        <h2 className="uppercase font-bold text-4xl lg:text-6xl text-center">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 mt-20 md:grid-cols-2 gap-5 md:gap-y-[95px] md:gap-x-[51px]">
          {portfolios
            .sort((a: IPortfolio, b: IPortfolio) => a.order - b.order)
            .reduce((visibleItems: IPortfolio[], item: IPortfolio) => {
              if (item.public) visibleItems.push(item);
              return visibleItems;
            }, [])
            .map((item: IPortfolio, idx: number) => {
              // Dodaj paddingTop tylko do drugiego widocznego elementu
              return (
                <PortfolioCardItem
                  key={item._id}
                  portfolioItem={item}
                  paddingTop={idx % 2 !== 0} // Drugi widoczny element
                />
              );
            })}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default PortfolioSection;
