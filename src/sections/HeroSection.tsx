import ContainerLayout from "@/layouts/ContainerLayout";
import { useTranslations } from "next-intl";
import { Bowlby_One_SC } from "next/font/google";
import Image from "next/image";
import gradientImg from "../../public/GRADIENT.svg";
import BigLogo from "@/icons/BigLogo";

const bowbly = Bowlby_One_SC({ subsets: ["latin"], weight: ["400"] });

const HeroSection = () => {
  const t = useTranslations();

  const items = [
    t("services.uxui"),
    "dot",
    t("services.ecommerce"),
    "dot",
    t("services.appDesign"),
    "dot",
    t("services.webDesign"),
    "dot",
    t("services.branding"),
    "dot",
    t("services.brandManagment"),
    "dot",
    t("services.prints"),
    "dot",
    t("services.socialMedia"),
  ];

  return (
    <section className="overflow-hidden bg-[#F9F7F4]">
      <ContainerLayout>
        <div className="relative h-full w-full pt-[10rem]  min-h-[800px]  flex flex-col justify-end">
          <div
            // className={`absolute bottom-0 lg:-bottom-[30%] -left-[100%] lg:left-[200px] w-[600px] h-[600px] lg:w-[1200px] lg:h-[1200px]  ${styles.gradient}`}
            className={`absolute -right-[600px] -bottom-[500px] w-[600px] h-[600px] lg:w-[1600px] lg:h-[1600px]  `}
          >
            <Image src={gradientImg} alt="" className="w-full h-full " />
          </div>
          <div className="flex flex-col justify-end relative">
            <div className="mb-10">
              <BigLogo darkColor={false} />
            </div>
            <h1
              className=" text-4xl lg:text-[71px] font-semibold leading-tight"
              dangerouslySetInnerHTML={{ __html: t("heroTitle") }}
            />
          </div>
        </div>
      </ContainerLayout>
      <div className="border-b border-gray-500/10 border-t py-6 mb-20 mt-8">
        <ContainerLayout>
          <div className="flex justify-between items-center">
            {items.map((item, idx) => {
              if (item === "dot")
                return (
                  <div
                    key={idx}
                    className="w-[5px] h-[5px] bg-black rounded-full"
                  />
                );

              return (
                <div key={idx} className="text-[18px]">
                  {item}
                </div>
              );
            })}
          </div>
        </ContainerLayout>
      </div>
    </section>
  );
};

export default HeroSection;
