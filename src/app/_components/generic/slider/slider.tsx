"use client";

import { useEffect, useState } from "react";
import "./slider.css";
import { Slide } from "./slide";
import { SlideNavigator } from "./slide-indicator";
import { iSlideContent } from "./interface";
import { useTranslations } from "next-intl";
import { lc } from "@/app/language-content/iLanguageContent";

export const Slider = ({}) => {

  const t = useTranslations();

  const slidescontent: iSlideContent[] = [
    {
      heading: t(lc.banner_slide_1_heading),
      text: t(lc.banner_slide_1_text),
      buttonText: t(lc.banner_slide_1_button_text),
      link:"#services"
    },
    {
      heading: t(lc.banner_slide_2_heading),
      text: t(lc.banner_slide_2_text),
      buttonText: t(lc.banner_slide_2_button_text),
      link:"/services"
    },
    {
      heading: t(lc.banner_slide_3_heading),
      text: t(lc.banner_slide_3_text),
      buttonText: t(lc.banner_slide_3_button_text),
      link:"/career"
    },
    {
      heading: t(lc.banner_slide_4_heading),
      text: t(lc.banner_slide_4_text),
      buttonText: t(lc.banner_slide_4_button_text),
      link:"/about"
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  useEffect(() => {
    const showSile = setTimeout(() => {
      if (currentSlideIndex < slidescontent.length - 1) {
        setCurrentSlideIndex(currentSlideIndex + 1);
      } else {
        setCurrentSlideIndex(0);
      }
    }, 5000);
    return () => {
      clearTimeout(showSile);
    };
  }, [currentSlideIndex]);

  return (
    <div className="body-content flex h-[100%] relative justify-center items-center">
      <div className="slideshow-container">
        {slidescontent.map((content: iSlideContent, index: number) => {
          return (
            <Slide
              key={index}
              content={content}
              isCurrent={index === currentSlideIndex}
            />
          );
        })}
      </div>

      <div className="indicator-container">
        {slidescontent.map((content: iSlideContent, index: number) => {
          return (
            <SlideNavigator
              key={index}
              isCurrent={index === currentSlideIndex}
              loadSlide={() => setCurrentSlideIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};
