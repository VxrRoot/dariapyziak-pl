import Link from "next/link";
import React from "react";

const AnimatedButton = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link
      href={href}
      className="relative inline-block overflow-hidden rounded-lg group text-[14px] px-2"
    >
      <span className="relative block  font-semibold transition-transform duration-300 ease-in-out translate-y-0 group-hover:-translate-y-full ">
        {text}
      </span>
      <span className="absolute inset-0 flex items-center justify-center   font-semibold transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0 ">
        {text}
      </span>
    </Link>
  );
};

export default AnimatedButton;
