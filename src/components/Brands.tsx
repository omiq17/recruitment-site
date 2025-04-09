"use client";

import React, { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { MAX_CONTENT_WIDTH } from "@/lib/consts";
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

const slideStyleClasses =
  "keen-slider__slide justify-content-center justify-content-sm-start ";

const Brands = () => {
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
    <div className="container-fluid bg-white border-top border-bottom">
      <div
        className="container-fluid g-0 py-60"
        style={{ maxWidth: MAX_CONTENT_WIDTH }}
      >
        <p className="mb-30 text-center fs-7 lh-base fw-bold text-light">
          Who we work with
        </p>

        <div ref={sliderRef} className="keen-slider">
          <Microsoft.Combine
            className={slideStyleClasses}
            size={40}
            type={"color"}
          />
          <Meta.Combine
            className={slideStyleClasses}
            size={40}
            type={"color"}
          />
          <Cloudflare.Combine
            className={slideStyleClasses}
            size={40}
            type={"color"}
          />
          <Google.BrandColor
            className={slideStyleClasses}
            size={40}
            type={"color"}
          />
          <Aws.Combine className={slideStyleClasses} size={40} type="color" />
          <Adobe.Combine
            className={slideStyleClasses}
            size={40}
            type={"color"}
          />

          <Vercel.Combine className={slideStyleClasses} size={40} />
          <Replit.Combine
            className={slideStyleClasses}
            size={40}
            type={"color"}
          />
          <Notion.Combine className={slideStyleClasses} size={40} />
        </div>
      </div>
    </div>
  );
};

export default Brands;
