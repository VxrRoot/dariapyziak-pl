"use client";
import BigLogo from "@/icons/BigLogo";
import ContainerLayout from "@/layouts/ContainerLayout";
import { useTranslations } from "next-intl";
import Image from "next/image";
import gradientImg from "../../public/GRADIENT.svg";
import styles from "../styles/GradientElement.module.scss";
import { motion } from "framer-motion";
import HeroScrollingItems from "@/components/HeroScrollingItems";

const HeroSection = () => {
  const t = useTranslations();

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

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
    "dot",
  ];

  return (
    <section className="overflow-hidden bg-[#F9F7F4] h-screen max-h-[1200px] flex flex-col">
      <ContainerLayout>
        <div className="relative h-full w-full lg:pt-[10rem]  flex flex-col justify-end ">
          <div
            className={`absolute lg:-right-[600px] lg:-bottom-[500px] w-[600px] h-[600px] lg:w-[1600px] lg:h-[1600px] ${styles.gradient}`}
          >
            <Image src={gradientImg} alt="" className="w-full h-full " />
          </div>
          <motion.div
            className="flex flex-col justify-end relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            variants={fadeInUp}
          >
            <motion.div
              className="mb-10"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <BigLogo darkColor={false} />
            </motion.div>
            <motion.h1
              className="text-4xl lg:text-[71px] font-semibold leading-tight"
              dangerouslySetInnerHTML={{ __html: t("heroTitle") }}
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>
        </div>
      </ContainerLayout>
      <div className="h-44 relative z-10">
        <HeroScrollingItems items={items} />
      </div>
    </section>
  );
};

export default HeroSection;
