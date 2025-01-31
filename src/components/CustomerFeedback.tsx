"use client";
import { useTranslations, useLocale } from "next-intl";
import { PortableText } from "next-sanity";
import React from "react";

export type CustommerFeedbackProps = {
  title: string;
  content: any;
  author: {
    name: string;
    role: string;
  };
};

const CustomerFeedback = ({
  author,
  content,
  title,
}: CustommerFeedbackProps) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="mt-[140px] bg-[#FFFFFF12] flex flex-col md:flex-row rounded-[13px] p-8 lg:p-16">
      <div className="text-[40px] font-semibold leading-[41px] w-[350px]">
        {t("opinion")}
      </div>
      <div className="flex-1 max-md:mt-16 md:pl-20">
        <span className="text-[19px] leading-[32px] font-bold mb-4 inline-block">
          {title}
        </span>
        <div className="prose text-[16px] leading-[27px] font-light">
          <PortableText value={content[locale]} />
        </div>
        <div className="flex mt-4 ">
          <div className="flex items-center justify-center px-2">
            <span className="w-1 h-1 rounded-full bg-white" />
          </div>
          <span className="font-bold pr-2">{author.name},</span>
          <span>{author.role}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
