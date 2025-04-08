"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { JOBS } from "@/lib/data";
import { MAX_CONTENT_WIDTH } from "@/lib/consts";
import { getCardBackgroundColor, getCardTextColor } from "@/lib/utils";
import LocationIcon from "@/assets/LocationIcon";

const Jobs = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 40,
    },
    loop: true,
  });

  return (
    <div className="container-fluid bg-primary-subtle">
      <div
        className="container-fluid g-0 py-6"
        style={{ maxWidth: MAX_CONTENT_WIDTH }}
      >
        <h2 className="mb-4 text-center text-info">Latest Jobs</h2>

        <div ref={sliderRef} className="keen-slider">
          {JOBS.map((job, i) => (
            <div
              key={i}
              className={`keen-slider__slide card ${getCardBackgroundColor(i)}`}
              style={{ padding: "2.5rem" }}
            >
              <div className="card-body p-0">
                <h3 className={`card-title ${getCardTextColor(i)}`}>
                  {job.title}
                </h3>
                <p
                  className={`card-text ${getCardTextColor(i)} flex m-0`}
                  style={{ gap: "1.125rem" }}
                >
                  <LocationIcon /> <span>{job.location}</span>
                </p>
                <p className={`card-text ${getCardTextColor(i)}`}>
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-footer mt-3">
          <div className="arrow-controls">
            <button
              className="btn btn-outline-primary me-2"
              onClick={() => instanceRef.current?.prev()}
            >
              ←
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => instanceRef.current?.next()}
            >
              →
            </button>
          </div>

          <a href="/jobs" className="btn btn-primary">
            View More Jobs
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
