"use client";

import { MAX_CONTENT_WIDTH } from "@/lib/consts";
import dynamic from "next/dynamic";

const BrandsSlider = dynamic(() => import("@/components/BrandsSlider"), {
  ssr: false,
});

const Brands = () => {
  return (
    <div className="container-fluid bg-white">
      <div
        className="container-fluid g-0 py-60"
        style={{ maxWidth: MAX_CONTENT_WIDTH }}
      >
        <p
          className="mb-30 text-center fs-6 lh-base fw-bold text-light-emphasis"
          style={{ letterSpacing: "-1px" }}
        >
          Who we work with
        </p>
        <BrandsSlider />
      </div>
    </div>
  );
};

export default Brands;
