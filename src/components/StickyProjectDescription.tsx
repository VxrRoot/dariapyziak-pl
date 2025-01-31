"use client";
import { PortableText } from "next-sanity";
import React, { FC, useEffect, useRef, useState } from "react";

type StickyProjectDescriptionProps = {
  title: string;
  content: any;
  tags: string[];
};

const StickyProjectDescription: FC<StickyProjectDescriptionProps> = ({
  content,
  tags,
  title,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [overflowData, setOverflowData] = useState(0);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();

        setOverflowData(
          rect.bottom > window.innerHeight
            ? rect.bottom - window.innerHeight
            : 0
        );
      }
    };

    // Sprawdzenie przy montowaniu i podczas zmiany rozmiaru okna
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`sticky pt-10 flex-1 h-fit max-md:px-5 md:pl-6 lg:pl-16 lg:pr-10 max-w-[960px]`}
      style={{
        top: overflowData > 0 ? `-${overflowData}px` : "0px",
      }}
    >
      <div className="mb-6 flex gap-4 flex-wrap ">
        {tags.map((tag, idx) => (
          <div
            key={`${tag}-${idx}`}
            className={`pr-4 relative text-[#F9F7F4] font-normal text-opacity-50 text-sm  whitespace-nowrap }`}
          >
            {tag}
            {idx + 1 !== tags.length && (
              <span className="absolute right-0 h-[11px] w-[1px] bg-[#878685] top-1/2 -translate-y-1/2" />
            )}
          </div>
        ))}
      </div>
      <h1 className="text-4xl lg:text-[40px] lg:leading-tight font-semibold mt-6 mb-[42px]">
        {title}
      </h1>
      <div className=" prose max-w-5xl !m-0 !p-0 [&>h6]:mb-3 [&>h6]:mt-6 [&>h6]:opacity-50 prose-invert text-[#c4c4c4] font-light prose-lg [&>ul]:my-6  mx-auto flex flex-col [&>ul]:list-disc [&>ul]:list-outside [&>ul>li]:ml-4">
        <PortableText
          value={content}
          components={{
            listItem: ({ children }) => {
              if (Array.isArray(children) && children.length > 0) {
                const firstLine = children[0]; // Pierwszy element
                const rest = children.slice(1); // Pozostałe elementy

                return (
                  <li>
                    {/* Stylowanie pierwszej linii */}
                    <span className="mb-2 inline-block">{firstLine}</span>
                    {/* Stylowanie reszty */}
                    {rest.length > 0 && (
                      <span className="text-[#F9F7F4] text-opacity-50 font-light">
                        {rest}
                      </span>
                    )}
                  </li>
                );
              }

              return <li>{children}</li>;
            },
          }}
        />
      </div>
    </div>
  );
};

export default StickyProjectDescription;
