"use client";
import LinkedinIcon from "@/icons/LinkedinIcon";
import { useTranslations } from "next-intl";
import React from "react";

const LinkedinButton = () => {
  const t = useTranslations();
  return (
    <a
      href="https://www.linkedin.com/in/daria-pyziak-29081b1a6/"
      target="_blank"
      className="bg-black text-white flex items-center px-4 py-3 space-x-4 w-fit"
    >
      <span className="leading-none">{t("aboutMe.seeMoreOnLinkedin")}</span>
      <LinkedinIcon color="#FFFFFF" />
    </a>
  );
};

export default LinkedinButton;
