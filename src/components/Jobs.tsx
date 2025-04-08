"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles/jobs.scss";
import { JOBS } from "@/lib/data";
import { MAX_CONTENT_WIDTH } from "@/lib/consts";

const Jobs = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 15,
    },
    loop: false,
  });

  return (
    <div className="container-fluid bg-primary-subtle">
      <div
        className="container-fluid g-0"
        style={{ maxWidth: MAX_CONTENT_WIDTH }}
      >
        <h2 className="mb-3 text-center">Latest Jobs</h2>

        <div ref={sliderRef} className="keen-slider">
          {JOBS.map((job, i) => (
            <div key={i} className="keen-slider__slide card">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">{job.company}</p>
                <p className="card-text">
                  <small className="text-muted">{job.location}</small>
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
