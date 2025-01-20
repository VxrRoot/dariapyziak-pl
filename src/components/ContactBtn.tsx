import React from "react";
import styles from "../styles/Header.module.scss";
import Link from "next/link";

const ContactBtn = () => {
  return (
    <Link
      className={`uppercase flex gap-2 font-semibold text-sm cursor-pointer ${false ? "bg-transparent border-white/80" : "bg-transparent border-black/50"} border  rounded-full  h-[44px] ml-4 lg:ml-16 flex items-center overflow-hidden w-[130px] lg:w-[180px] contact-button`}
      href="/#kontakt"
    >
      <div className={styles.marquee_box_one}>
        <div className={styles.marquee_content_one}>
          <span className="whitespace-nowrap h-full  pt-1">CONTACT ME</span>
          <span className="whitespace-nowrap h-full  pt-1">CONTACT ME</span>
          <span className="whitespace-nowrap h-full  pt-1">CONTACT ME</span>
          <span className="whitespace-nowrap h-full  pt-1">CONTACT ME</span>
          <span className="whitespace-nowrap h-full  pt-1">CONTACT ME</span>
          <span className="whitespace-nowrap h-full  pt-1">CONTACT ME</span>
          <span className="whitespace-nowrap h-full  pt-1">CONTACT ME</span>
          <span className="whitespace-nowrap h-full  pt-1">CONTACT ME</span>
        </div>
        <div className={styles.marquee_content_one}>
          <span className="whitespace-nowrap h-full  pt-1">CONTACT ME</span>
          <span className="whitespace-nowrap h-full  pt-1">CONTACT ME</span>
          <span className="whitespace-nowrap h-full  pt-1">CONTACT ME</span>
          <span className="whitespace-nowrap h-full  pt-1">CONTACT ME</span>
          <span className="whitespace-nowrap h-full  pt-1">CONTACT ME</span>
          <span className="whitespace-nowrap h-full  pt-1">CONTACT ME</span>
          <span className="whitespace-nowrap h-full  pt-1">CONTACT ME</span>
          <span className="whitespace-nowrap h-full  pt-1">CONTACT ME</span>
        </div>
      </div>
    </Link>
  );
};

export default ContactBtn;
