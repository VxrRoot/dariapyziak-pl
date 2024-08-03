import ContainerLayout from "@/layouts/ContainerLayout";
import { Bowlby_One_SC } from "next/font/google";
import styles from "../styles/GradientElement.module.scss";
import gradientImg from "../../public/GRADIENT.svg";
import Image from "next/image";
import React from "react";
import GradientElement from "@/icons/GradientElement";

const bowbly = Bowlby_One_SC({ subsets: ["latin"], weight: ["400"] });

const HeroSection = () => {
  return (
    <section className="overflow-hidden">
      <ContainerLayout>
        <div className="relative h-full w-full pt-[10rem] pb-[10rem] min-h-[800px]  ">
          <div className="relative z-20">
            <div className="text-center text-base mb-8 tracking-wide">
              HI I’M DARIA PYZIAK!
            </div>
            <h1 className="text-5xl font-semibold uppercase text-center tracking-wide lg:text-[100px]">
              Design is <br />
              <span className={`${bowbly.className}`}>everything</span> <br />
              around you
            </h1>
          </div>
          <div className="absolute bottom-0 lg:-bottom-[30%] -left-[100%] lg:left-[200px] w-[600px] h-[600px] lg:w-[1200px] lg:h-[1200px] animate-pulse duration-2000">
            <Image src={gradientImg} alt="" className="w-full h-full " />
          </div>
          <div className="flex flex-wrap text-sm lg:text-base gap-2 justify-center mt-4 lg:mt-8 z-20 relative">
            <div className="rounded-full border w-fit py-2 px-6 lg:px-8 border-black/20 bg-black/5">
              websites and online shops
            </div>
            <div className="rounded-full border w-fit py-2 px-6 lg:px-8 border-black/20">
              apps
            </div>
            <div className="rounded-full border w-fit py-2 px-6 lg:px-8 border-black/20">
              branding
            </div>
            <div className="rounded-full border w-fit py-2 px-6 lg:px-8 border-black/20">
              brand managment
            </div>
            <div className="rounded-full border w-fit py-2 px-6 lg:px-8 border-black/20">
              prints and packaging
            </div>
          </div>
          <div className="w-[18px] h-[26px] border-2 rounded-lg border-black mx-auto mt-20 z-30 absolute left-1/2 bottom-[120px] flex justify-center">
            <div
              className={`w-0.5 h-2 bg-black rounded-full absolute top-1 ${styles.scroll_down}`}
            />
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default HeroSection;
