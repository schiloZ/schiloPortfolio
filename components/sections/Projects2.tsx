"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: false,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const GITHUB = "https://github.com/schiloZ";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  live?: string;
  repo?: string;
};

// Professional work shown in the slider
const featured: (Project & { client: string; duration: string })[] = [
  {
    title: "Jarvis — AI banking agent",
    description:
      "AI-powered virtual banking assistant that handles customer queries and stores the collected information in AWS through an API.",
    image: "assets/imgs/jarvis.png",
    client: "AFG BANK Côte d'Ivoire",
    duration: "3 months",
    tags: ["Next.js", "React", "AWS", "OpenAI API", "LangChain"],
  },
  {
    title: "LLM app for client data reliability",
    description:
      "AI-powered SaaS that automatically captures data from ID cards (CNI) and verifies it with LLM models to make banking data reliable.",
    image: "assets/imgs/fiablisation.png",
    client: "AFG BANK Côte d'Ivoire",
    duration: "6 months",
    tags: ["Next.js", "React", "MySQL", "OpenAI API", "Tailwind CSS"],
    live: "https://formulaire-particulier.vercel.app",
    repo: `${GITHUB}/PROJET-DE-FIABILISATION-DES-DONEES`,
  },
  {
    title: "Banking application map",
    description:
      "Interactive map of a bank's application landscape, grouped by hosting type, with PDF export.",
    image: "assets/imgs/projects-live/app-map-insight.png",
    client: "AFG BANK Côte d'Ivoire",
    duration: "—",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://app-map-insight.vercel.app",
    repo: `${GITHUB}/app-map-insight`,
  },
  {
    title: "SCHIZ TECH landing page",
    description:
      "Landing page built to increase the visibility of SCHIZ TECH COMPANY.",
    image: "assets/imgs/schiz.png",
    client: "SCHIZ TECH COMPANY",
    duration: "1 week",
    tags: ["Next.js", "Tailwind CSS"],
  },
];

// Personal & freelance projects shown in the grid
const projects: Project[] = [
  {
    title: "E-Gym",
    description:
      "SaaS platform for gyms: clients, subscriptions, payments and schedules in one place.",
    image: "assets/imgs/projects-live/e-gym.png",
    tags: ["Next.js", "TypeScript", "SaaS"],
    live: "https://e-gym-three.vercel.app",
    repo: `${GITHUB}/e-gym`,
  },
  {
    title: "CRYSTAL — Health audit",
    description:
      "Audit platform for health insurance managers: automated controls, fraud detection and PDF reports.",
    image: "assets/imgs/projects-live/crystal.png",
    tags: ["Next.js", "Prisma", "MySQL"],
    live: "https://crystal-nextjs.vercel.app",
    repo: `${GITHUB}/crystal-nextjs`,
  },
  {
    title: "AYOOKA Beach Résidence",
    description:
      "Website for a premium seaside residence: rooms, gallery, testimonials and booking.",
    image: "assets/imgs/projects-live/ayooka.png",
    tags: ["Next.js", "TypeScript"],
    live: "https://ayooka.vercel.app",
    repo: `${GITHUB}/ayooka`,
  },
  {
    title: "Chorale Trompette de Jéricho",
    description:
      "Website for a gospel choir in Abidjan: services, gallery, agenda and recruitment.",
    image: "assets/imgs/projects-live/chorale.png",
    tags: ["Next.js", "TypeScript"],
    live: "https://chorale-one.vercel.app",
    repo: `${GITHUB}/chorale`,
  },
  {
    title: "Resi King",
    description:
      "Residence rental and management app with search by destination, dates and guests.",
    image: "assets/imgs/projects-live/resi-king.png",
    tags: ["Next.js", "TypeScript"],
    live: "https://resi-king.vercel.app",
    repo: `${GITHUB}/Resi_King`,
  },
  {
    title: "Thé de Papa",
    description:
      "Showcase website for an artisanal, natural tea brand from Côte d'Ivoire.",
    image: "assets/imgs/projects-live/the-de-papa.png",
    tags: ["Next.js", "JavaScript"],
    live: "https://the-de-papa.vercel.app",
    repo: `${GITHUB}/the-de-papa`,
  },
  {
    title: "Acme Rockets",
    description: "Responsive landing page with a mobile menu and product tiers.",
    image: "assets/imgs/projects-live/rocket.png",
    tags: ["Next.js", "Tailwind CSS"],
    live: "https://rocket-rho-one.vercel.app",
    repo: `${GITHUB}/rocket`,
  },
];

function ProjectLinks({ live, repo }: { live?: string; repo?: string }) {
  if (!live && !repo) return null;
  return (
    <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
      {live && (
        <Link
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-300 border-bottom border-1 px-2 pb-2 link-hover"
        >
          <i className="ri-external-link-line me-1" />
          Live Demo
        </Link>
      )}
      {repo && (
        <Link
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-300 border-bottom border-1 px-2 pb-2 link-hover"
        >
          <i className="ri-github-fill me-1" />
          View on Github
        </Link>
      )}
    </div>
  );
}

export default function Projects2() {
  return (
    <>
      <section id="portfolio" className="section-projects-2 pt-5">
        <div className="container">
          <div className="rounded-3 border border-1 position-relative overflow-hidden">
            <div className="box-linear-animation position-relative z-1">
              <div className="p-lg-8 p-md-6 p-3 position-relative z-1">
                <div className="d-flex align-items-center">
                  <span className="text-linear-4 d-flex align-items-center">
                    {" "}
                    Projects{" "}
                  </span>
                </div>
                <h3>
                  Featured work <span className="text-300">for clients</span>
                </h3>
                <div className="position-relative">
                  <Swiper
                    {...swiperOptions}
                    className="swiper slider-two pb-3 position-relative"
                  >
                    {featured.map((p) => (
                      <SwiperSlide key={p.title}>
                        <div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
                          <div className="row">
                            <div className="col-lg-5">
                              <img className="w-100" src={p.image} alt={p.title} />
                            </div>
                            <div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
                              <h4 className="text-linear-4">{p.title}</h4>
                              <p>{p.description}</p>
                              <ul className="mt-4 list-unstyled">
                                <li className="text-secondary-2 mb-3 border-bottom pb-3">
                                  Project Info
                                </li>
                                <li className="text-white mb-3 border-bottom pb-3">
                                  <div className="d-flex justify-content-between">
                                    <p className="text-white mb-0 text-end">
                                      Client
                                    </p>
                                    <p className="text-300 mb-0 text-end">
                                      {p.client}
                                    </p>
                                  </div>
                                </li>
                                <li className="text-white mb-3 border-bottom pb-3">
                                  <div className="d-flex justify-content-between">
                                    <p className="text-white mb-0 text-end">
                                      Completion Time
                                    </p>
                                    <p className="text-300 mb-0 text-end">
                                      {p.duration}
                                    </p>
                                  </div>
                                </li>
                                <li className="text-white mb-3 border-bottom pb-3">
                                  <div className="d-flex justify-content-between">
                                    <p className="text-white mb-0 text-end">
                                      Technologies
                                    </p>
                                    <p className="text-300 mb-0 text-end">
                                      {p.tags.join(", ")}
                                    </p>
                                  </div>
                                </li>
                              </ul>
                              <ProjectLinks live={p.live} repo={p.repo} />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="position-absolute bottom-0 end-0 gap-2 pb-7 pe-5 d-none d-md-flex">
                    <div className="swiper-button-prev end-0 shadow position-relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="swiper-button-next end-0 shadow position-relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                          fill="#A8FF53"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <h3 className="mt-8">
                  More projects{" "}
                  <span className="text-300">— built &amp; deployed</span>
                </h3>
                <div className="row g-4 mt-2">
                  {projects.map((p) => (
                    <div className="col-lg-4 col-md-6" key={p.title}>
                      <div className="bg-3 border border-1 rounded-3 h-100 d-flex flex-column overflow-hidden hover-up">
                        <Link
                          href={p.live ?? p.repo ?? GITHUB}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-block border-bottom border-1"
                        >
                          <img
                            className="w-100"
                            src={p.image}
                            alt={p.title}
                            style={{ aspectRatio: "16 / 10", objectFit: "cover", objectPosition: "top" }}
                          />
                        </Link>
                        <div className="p-4 d-flex flex-column flex-grow-1">
                          <h5 className="text-linear-4 mb-2">{p.title}</h5>
                          <p className="fs-7 text-300 mb-3">{p.description}</p>
                          <div className="d-flex flex-wrap gap-2 mt-auto">
                            {p.tags.map((t) => (
                              <span
                                key={t}
                                className="fs-7 text-300 border border-1 px-2 py-1"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <ProjectLinks live={p.live} repo={p.repo} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <Link
                    href={GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary-2 rounded-2"
                  >
                    See all on GitHub
                    <i className="ri-arrow-right-up-line" />
                  </Link>
                </div>
              </div>
              <img
                className="position-absolute top-0 start-0 z-0"
                src="assets/imgs/home-page-2/projects/bg.png"
                alt="zelio"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
