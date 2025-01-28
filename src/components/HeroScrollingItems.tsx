"use client";

import ContainerLayout from "@/layouts/ContainerLayout";
import { motion } from "framer-motion";
import React from "react";

const SectionWithScrollingItems = ({
  items,
}: {
  items: Array<string | "dot">;
}) => {
  // Klonujemy elementy, aby stworzyć nieskończone przewijanie
  const repeatedItems = [...items, ...items, ...items]; // Trzykrotne powielenie

  return (
    <div className="border-b border-gray-500/10 border-t py-6 mb-20 mt-8">
      <ContainerLayout>
        {/* Desktop: Statyczne elementy */}
        <motion.div
          className="hidden lg:flex justify-between items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {items.map((item, idx) => {
            if (item === "dot")
              return (
                <motion.div
                  key={idx}
                  className="w-[5px] h-[5px] bg-black rounded-full"
                />
              );

            return (
              <motion.div key={idx} className="text-[18px] whitespace-nowrap">
                {item}
              </motion.div>
            );
          })}
        </motion.div>
      </ContainerLayout>

      {/* Mobile: Nieskończone przewijanie */}
      <div className="lg:hidden overflow-hidden relative">
        <motion.div
          className="flex space-x-8 items-center"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 10, // Dłuższy czas, aby ruch był płynny
            ease: "linear",
          }}
        >
          {repeatedItems.map((item, idx) => {
            if (item === "dot")
              return (
                <div
                  key={idx}
                  className="w-[5px] h-[5px] bg-black rounded-full shrink-0"
                />
              );

            return (
              <div key={idx} className="text-[18px] whitespace-nowrap shrink-0">
                {item}
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWithScrollingItems;
