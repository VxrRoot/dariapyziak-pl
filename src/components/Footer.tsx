import ContainerLayout from "@/layouts/ContainerLayout";
import React from "react";
import avatarImg from "../../public/avatar.png";
import gradientImg from "../../public/GRADIENT.svg";
import Image from "next/image";
import PhoneIcon from "@/icons/PhoneIcon";
import MailIcon from "@/icons/MailIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import LinkedinIcon from "@/icons/LinkedinIcon";
import DribbleIcon from "@/icons/DribbleIcon";
import BehanceIcon from "@/icons/BehanceIcon";

const Footer = () => {
  return (
    <footer id="kontakt" className="bg-black text-white py-24 overflow-hidden">
      <ContainerLayout>
        <div className="w-full relative">
          <div className="flex flex-col">
            <div className="flex items-center gap-8">
              <Image
                className="w-14 h-14"
                src={avatarImg}
                alt="Avatar Daria Pyziak"
              />
              <p className="text-4xl lg:text-6xl  font-semibold">
                {"Let’s talk"}
              </p>
            </div>
            <div className="mt-8">
              <a className="flex gap-4 items-center" href="">
                <PhoneIcon />
                <span>+48 510 010 903</span>
              </a>
              <a className="flex gap-4 mt-2 items-center" href="">
                <MailIcon />
                <span>dariapyziakdesign@gmail.com</span>
              </a>
            </div>
            <div className="flex gap-4 mt-10 relative z-20">
              <a
                href="https://www.instagram.com/dariapyziakdesign/"
                target="_blank"
                className="cursor-pointer"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.instagram.com/dariapyziakdesign/"
                target="_blank"
                className="cursor-pointer"
              >
                <BehanceIcon />
              </a>
              <a
                href="https://www.instagram.com/dariapyziakdesign/"
                target="_blank"
                className="cursor-pointer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.instagram.com/dariapyziakdesign/"
                target="_blank"
                className="cursor-pointer"
              >
                <DribbleIcon />
              </a>
            </div>
          </div>
          <div className="absolute top-[70%] lg:top-0 -right-1/4 lg:left-1/2 w-[500px] lg:w-[800px] h-[400px] lg:h-[800px]">
            <Image src={gradientImg} alt="" className="w-full h-full " />
          </div>
        </div>
      </ContainerLayout>
    </footer>
  );
};

export default Footer;
