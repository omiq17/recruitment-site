import Image from "next/image";
import { MAX_CONTENT_WIDTH } from "@/lib/consts";

const Hero = () => {
  return (
    <div
      id="hero"
      className="container-fluid bg-primary position-relative overflow-hidden"
    >
      {/* Circle - top left */}
      <div
        className="position-absolute bg-warning"
        style={{
          width: "290px",
          height: "290px",
          borderRadius: "50%",
          top: "-115px",
          left: "-150px",
          zIndex: "0",
        }}
      ></div>

      {/* Circle - bottom right */}
      <div
        className="position-absolute bg-secondary"
        style={{
          width: "290px",
          height: "290px",
          borderRadius: "50%",
          bottom: "-90px",
          right: "-65px",
          zIndex: "0",
        }}
      ></div>

      <div
        className="container-fluid g-0  py-60"
        style={{ maxWidth: MAX_CONTENT_WIDTH }}
      >
        <div className="py-30">
          <div className="row g-0 align-items-center justify-content-center">
            <div className="col-lg-6 text-white pe-3 z-1 w-max">
              <p className="fs-6 lh-base mb-1">
                Software Recruitment Specialists
              </p>

              <div className="d-inline-block w-max">
                <h1 className="display-4 fw-bold lh-base mb-3">
                  Elevate your career
                </h1>
                <div className="d-flex">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control p-3 fw-bold lh-base"
                      placeholder="E.g. networking"
                      aria-label="Job search"
                    />
                    <button
                      className="btn btn-secondary px-4 z-3"
                      type="button"
                    >
                      Search jobs
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 mt-4 mt-lg-0 text-center"
              style={{ zIndex: "1" }}
            >
              <div
                className="overflow-hidden"
                style={{ maxWidth: "507px", margin: "0 auto" }}
              >
                <Image
                  src="/hero-image.png"
                  alt="Hero Image"
                  width={640}
                  height={676}
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
