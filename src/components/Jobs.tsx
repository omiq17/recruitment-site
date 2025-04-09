"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { JOBS } from "@/lib/data";
import { MAX_CONTENT_WIDTH } from "@/lib/consts";
import { getCardBackgroundColor, getCardTextColor } from "@/lib/utils";
import LocationIcon from "@/assets/LocationIcon";
import PoundIcon from "@/assets/PoundIcon";
import LeftArrowIcon from "@/assets/LeftArrowIcon";
import RightArrowIcon from "@/assets/RightArrowIcon";
import { TrackDetails } from "keen-slider";

const Jobs = () => {
  const [sliderDetails, setSliderDetails] = useState<TrackDetails>();
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 600px)": {
        slides: { perView: 2, spacing: 30 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 40 },
      },
    },
    slides: {
      perView: 1,
      spacing: 15,
    },
    loop: false,
    slideChanged(slider) {
      setSliderDetails(slider.track.details);
    },
  });

  return (
    <div className="container-fluid bg-primary-subtle">
      <div
        className="container-fluid g-0 py-6"
        style={{ maxWidth: MAX_CONTENT_WIDTH }}
      >
        <h2 className="mb-30 text-center text-info">Latest Jobs</h2>

        <div ref={sliderRef} className="keen-slider">
          {JOBS.map((job, i) => (
            <div
              key={i}
              className={`keen-slider__slide card ${getCardBackgroundColor(i)}`}
            >
              <div
                className={`card-body p-0 ${getCardTextColor(
                  i
                )} d-flex flex-column gap-3 m-40 justify-content-between`}
              >
                <img
                  src={job.iconSrc}
                  alt={job.technology}
                  width="75"
                  height="24"
                  className="rounded-2"
                />

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

        <div className="mt-30 d-flex justify-content-between align-items-center">
          <div className="d-flex gap-3">
            <LeftArrowIcon
              fillOpacity={
                sliderDetails === undefined
                  ? 0.5
                  : sliderDetails.minIdx === sliderDetails.rel
                  ? 0.5
                  : 1
              }
              onClick={() => instanceRef.current?.prev()}
            />
            <RightArrowIcon
              fillOpacity={
                sliderDetails && sliderDetails.maxIdx === sliderDetails.rel
                  ? 0.5
                  : 1
              }
              onClick={() => instanceRef.current?.next()}
            />
          </div>

          <p>
            <a
              href="#"
              className="link-underline link-underline-opacity-0 text-dark m-0 fw-medium lh-base fh-6"
            >
              View more jobs
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
