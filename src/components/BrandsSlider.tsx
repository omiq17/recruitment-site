"use client";

import React, { useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  Adobe,
  Aws,
  Cloudflare,
  Google,
  Meta,
  Microsoft,
  Notion,
  Replit,
  Vercel,
} from "@lobehub/icons";

const BrandsSlider = () => {
  const slideStyle =
    "keen-slider__slide justify-content-center justify-content-lg-start ";

  const timer = useRef<NodeJS.Timeout | null>(null);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 576px)": {
        slides: { perView: 3, spacing: 8 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 5, spacing: 10 },
      },
    },
    slides: {
      perView: 1,
      spacing: 0,
    },
    loop: true,
  });

  useEffect(() => {
    if (!slider) return;

    const run = () => {
      timer.current = setInterval(() => {
        slider.current?.next();
      }, 2500);
    };

    run();

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [slider]);

  return (
    <div ref={sliderRef} className="keen-slider">
      <Microsoft.Combine className={slideStyle} size={40} type={"color"} />
      <Meta.Combine className={slideStyle} size={40} type={"color"} />
      <Cloudflare.Combine className={slideStyle} size={40} type={"color"} />
      <Google.BrandColor className={slideStyle} size={40} type={"color"} />
      <Aws.Combine className={slideStyle} size={40} type="color" />
      <Adobe.Combine className={slideStyle} size={40} type={"color"} />

      <Vercel.Combine className={slideStyle} size={40} />
      <Replit.Combine className={slideStyle} size={40} type={"color"} />
      <Notion.Combine className={slideStyle} size={40} />
    </div>
  );
};

export default BrandsSlider;
