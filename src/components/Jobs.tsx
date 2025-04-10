"use client";

import React from "react";
import { MAX_CONTENT_WIDTH } from "@/lib/consts";
import dynamic from "next/dynamic";

const JobCards = dynamic(() => import("@/components/JobCards"), {
  ssr: false,
});

const Jobs = () => {
  return (
    <div className="container-fluid bg-primary-subtle">
      <div
        className="container-fluid g-0 py-6"
        style={{ maxWidth: MAX_CONTENT_WIDTH }}
      >
        <h2 className="mb-30 text-center text-info">Latest Jobs</h2>
        <JobCards />
      </div>
    </div>
  );
};

export default Jobs;
