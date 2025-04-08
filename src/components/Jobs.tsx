"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { JOBS } from "@/lib/data";
import { MAX_CONTENT_WIDTH } from "@/lib/consts";
import { getCardBackgroundColor, getCardTextColor } from "@/lib/utils";
import LocationIcon from "@/assets/LocationIcon";
import PoundIcon from "@/assets/PoundIcon";

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
            >
              <div
                className={`card-body p-0 ${getCardTextColor(
                  i
                )} d-flex flex-column gap-20 m-40`}
              >
                <h3 className={`card-title m-0`}>{job.title}</h3>

                <div className={`d-flex flex-column gap-10`}>
                  <p
                    className={`card-text d-flex flex-row m-0 fs-6 lh-base gap-10`}
                  >
                    <LocationIcon fill="currentColor" />{" "}
                    <span>{job.location}</span>
                  </p>
                  <p
                    className={`card-text d-flex flex-row m-0 fs-6 lh-base gap-10`}
                  >
                    <PoundIcon fill="currentColor" /> <span>{job.salary}</span>
                  </p>
                </div>

                <p
                  className={`card-text fs-6 lh-base m-0 overflow-hidden`}
                  style={{
                    height: "calc(1.5rem * 4)",
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {job.description}
                </p>

                <button type="button" className="btn btn-light p-0">
                  <p className="text-primary m-0 fw-medium lh-base fh-6 py-10">
                    View this job
                  </p>
                </button>

                <p
                  className={`card-text fs-7 lh-base m-0`}
                  style={{ opacity: 0.8 }}
                >
                  Posted on {job.date}
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
