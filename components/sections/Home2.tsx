"use client";
import Link from "next/link";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";

const stats = [
  { icon: "ri-shape-line", value: 2, label: "Years Experience" },
  { icon: "ri-computer-line", value: 20, label: "Projects Completed" },
  { icon: "ri-service-line", value: 5, label: "Satisfied Clients" },
];

export default function Home2() {
  return (
    <>
      <section
        id="about"
        className="section-hero-2 position-relative pt-130 pb-3"
      >
        <div className="container hero-2">
          <div className="border border-1 rounded-3">
            <div className="box-linear-animation position-relative z-1">
              <div className="row align-items-center py-60 g-4">
                {/* Image Section - Reordered for mobile */}
                <div className="col-lg-5 order-lg-1 order-2">
                  <div className="position-relative px-lg-5 px-4 d-flex justify-content-center">
                    <div
                      className="position-relative"
                      style={{ maxWidth: "400px", width: "100%" }}
                    >
                      <img
                        src="assets/imgs/schilo.jpg"
                        alt="Schilo Zokou"
                        className="w-100 h-auto rounded-3"
                        style={{ objectFit: "cover" }}
                      />
                      <div className="position-absolute end-0 top-100 translate-middle-y icon-decorate d-none d-lg-block">
                        <img
                          src="assets/imgs/home-page-2/hero-1/icon.svg"
                          alt="zelio"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="col-lg-7 order-lg-2 order-1">
                  <div className="p-lg-5 p-md-4 p-3">
                    <div className="text-secondary-2 d-flex align-items-center mb-3">
                      <span className="opacity-75">&lt;span&gt;</span>
                      <div className="text-white ms-2">
                        <div className="typewriter">
                          <h1 className="fs-6 fw-medium mb-0">
                            Hey, I'm Schilo
                          </h1>
                        </div>
                      </div>
                      <span className="opacity-75 ms-2">&lt;/span&gt;</span>
                    </div>

                    <h1 className="fs-lg-50 fs-md-40 fs-32 my-3 my-lg-4">
                      Junior{" "}
                      <span className="text-linear-4">
                        {"{"}Full Stack & AI Engineer{"}"}
                      </span>
                      <br className="d-none d-sm-block" />
                      Web &amp; App developer
                      <span className="flicker">_</span>
                    </h1>

                    <div className="mb-4 mb-lg-6 text-secondary-2">
                      <span className="opacity-75">&lt;p&gt;</span>
                      <p className="d-inline text-white mb-0">
                        With expertise in cutting-edge technologies such as{" "}
                        <span className="text-secondary-2 fw-medium">
                          NodeJS
                        </span>
                        ,{" "}
                        <span className="text-secondary-2 fw-medium">
                          React
                        </span>
                        ,{" "}
                        <span className="text-secondary-2 fw-medium">
                          Tailwind CSS
                        </span>
                        ,{" "}
                        <span className="text-secondary-2 fw-medium">
                          Angular
                        </span>
                        ,{" "}
                        <span className="text-secondary-2 fw-medium">
                          Python
                        </span>
                        ,{" "}
                        <span className="text-secondary-2 fw-medium">
                          LangSmith
                        </span>
                        ,{" "}
                        <span className="text-secondary-2 fw-medium">
                          LangChain
                        </span>
                        , and{" "}
                        <span className="text-secondary-2 fw-medium">
                          Next JS
                        </span>
                        ... I deliver innovative and robust web solutions, and I
                        also develop advanced AI systems with real-world
                        applications.
                      </p>
                      <span className="opacity-75">&lt;/p&gt;</span>
                    </div>

                    {/* Key numbers */}
                    <div className="row g-3 mb-4">
                      {stats.map((s) => (
                        <div className="col-4" key={s.label}>
                          <div className="bg-3 border border-1 rounded-3 p-3 h-100">
                            <i className={`${s.icon} text-primary-2 fs-5`} />
                            <h2 className="fs-lg-50 fs-32 fw-medium text-white my-1">
                              <CountUp end={s.value} duration={2} />
                            </h2>
                            <p className="fs-7 text-300 mb-0">{s.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technology Stack Icons */}
                    <div className="mb-4">
                      <Marquee
                        className="carouselTicker carouselTicker-left position-relative z-1"
                        gradient={false}
                        speed={30}
                      >
                        <ul className="carouselTicker__list d-flex align-items-center mb-0">
                          <li className="carouselTicker__item">
                            <Link
                              href="#"
                              className="brand-logo icon_60 icon-shape rounded-3"
                            >
                              <img
                                src="assets/imgs/home-page-2/hero-1/icon-1.svg"
                                alt="brand"
                              />
                            </Link>
                          </li>
                          <li className="carouselTicker__item">
                            <Link
                              href="#"
                              className="brand-logo icon_60 icon-shape rounded-3"
                            >
                              <img
                                src="assets/imgs/home-page-2/hero-1/icon-2.svg"
                                alt="brand"
                              />
                            </Link>
                          </li>
                          <li className="carouselTicker__item">
                            <Link
                              href="#"
                              className="brand-logo icon_60 icon-shape rounded-3"
                            >
                              <img
                                src="assets/imgs/home-page-2/hero-1/icon-3.svg"
                                alt="brand"
                              />
                            </Link>
                          </li>
                          <li className="carouselTicker__item">
                            <Link
                              href="#"
                              className="brand-logo icon_60 icon-shape rounded-3"
                            >
                              <img
                                src="assets/imgs/home-page-2/hero-1/icon-4.svg"
                                alt="brand"
                              />
                            </Link>
                          </li>
                          <li className="carouselTicker__item">
                            <Link
                              href="#"
                              className="brand-logo icon_60 icon-shape rounded-3"
                            >
                              <img
                                src="assets/imgs/home-page-2/hero-1/icon-5.svg"
                                alt="brand"
                              />
                            </Link>
                          </li>
                          <li className="carouselTicker__item">
                            <Link
                              href="#"
                              className="brand-logo icon_60 icon-shape rounded-3"
                            >
                              <img
                                src="assets/imgs/home-page-2/hero-1/icon12.svg"
                                alt="brand"
                              />
                            </Link>
                          </li>
                          <li className="carouselTicker__item">
                            <Link
                              href="#"
                              className="brand-logo icon_60 icon-shape rounded-3"
                            >
                              <img
                                src="assets/imgs/home-page-2/hero-1/icon13.svg"
                                alt="brand"
                              />
                            </Link>
                          </li>
                        </ul>
                      </Marquee>
                      <span className="fs-7 text-300 mt-2 d-inline-block">
                        ...and more
                      </span>
                    </div>

                    {/* Download CV Button */}
                    <Link
                      href="assets/resume.pdf"
                      className="btn me-2 text-300 ps-0 mt-3"
                      target="_blank"
                    >
                      <i className="ri-download-line text-primary-2" />[
                      Download my CV ]
                    </Link>
                    <Link
                      href="https://github.com/schiloZ"
                      className="btn me-2 text-300 mt-3"
                      target="_blank"
                    >
                      <i className="ri-github-fill text-primary-2" />[ GitHub ]
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/schilo-ibo-786310249/"
                      className="btn text-300 mt-3"
                      target="_blank"
                    >
                      <i className="ri-linkedin-fill text-primary-2" />[ LinkedIn ]
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background */}
        <div className="background position-absolute top-0 start-0 w-100 h-100">
          <img
            className="bg-w w-100 h-100"
            src="assets/imgs/home-page-2/hero-1/bg.png"
            alt="zelia"
            style={{ objectFit: "cover" }}
          />
          {/* <img
            className="bg-d w-100 h-100"
            src="assets/imgs/home-page-2/hero-1/bg-white.png"
            alt="zelia"
            style={{ objectFit: "cover" }}
          /> */}
        </div>
      </section>
    </>
  );
}
