import { MAX_CONTENT_WIDTH } from "@/lib/consts";
import Image from "next/image";

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
          top: "-125px",
          left: "-125px",
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
          bottom: "-75px",
          right: "-50px",
          zIndex: "0",
        }}
      ></div>

      <div
        className="container-fluid g-0  py-60"
        style={{ maxWidth: MAX_CONTENT_WIDTH }}
      >
        <div className="py-30">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 text-white pe-3" style={{ zIndex: "1" }}>
              <p className="mb-3 fs-6 ls-base">
                Software Recruitment Specialists
              </p>
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
                  <button className="btn btn-secondary px-4" type="button">
                    Search jobs
                  </button>
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
