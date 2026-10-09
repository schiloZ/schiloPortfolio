import Link from "next/link";

const journal = [
  { date: "Aug 2026", title: "E-GYM — Gym management SaaS" },
  { date: "Jun 2026", title: "CRYSTAL — Health audit platform" },
  { date: "Apr 2026", title: "Chorale Trompette de Jéricho website" },
  { date: "Mar 2026", title: "AYOOKA Beach Résidence website" },
  { date: "Aug 2025", title: "Banking application map" },
];

export default function Coporation2() {
  return (
    <>
      <section className="section-coporation">
        <div className="container pt-5 pb-8">
          <div className="row">
            <div className="col-lg-8">
              <div className="rounded-3 border border-1 position-relative overflow-hidden h-100">
                <div className="box-linear-animation h-100">
                  <div className="p-lg-8 p-md-6 p-3">
                    <div className="d-flex align-items-center">
                      <svg
                        className="text-primary-2 me-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width={5}
                        height={6}
                        viewBox="0 0 5 6"
                        fill="none"
                      >
                        <circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
                      </svg>
                      <span className="text-linear-4 d-flex align-items-center">
                        {" "}
                        Cooperation{" "}
                      </span>
                    </div>
                    <h3 className="fw-medium">
                      Available for{" "}
                      <span className="text-300">
                        freelance <br />
                      </span>{" "}
                      &amp; full-time <span className="text-300">projects_</span>
                    </h3>
                    <p className="text-300 my-4">
                      Web apps, SaaS platforms and AI-powered solutions — from
                      idea to deployment. Let&apos;s build something together.
                    </p>
                    <div className="d-flex flex-column flex-md-row align-items-center gap-3">
                      <div>
                        <div className="circle-1 position-relative z-0">
                          <div className="circle-2 position-absolute top-50 start-50 translate-middle z-1">
                            <div className="position-absolute top-50 start-50 translate-middle z-2">
                              <img
                                className="w-100 h-100 rounded-circle"
                                src="assets/imgs/schilo2.jpg"
                                alt="Schilo Zokou"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <Link href="https://github.com/schiloZ" target="_blank">
                          <i className="ri-github-fill" />
                          <span className="text-300">
                            [github]{" "}
                            <span className="text-secondary-2">@schiloZ</span>
                          </span>
                        </Link>
                        <Link href="tel:+2250584185367">
                          <i className="ri-phone-fill" />
                          <span className="text-300">
                            [phone]{" "}
                            <span className="text-secondary-2">
                              +225-058-418-5367
                            </span>
                          </span>
                        </Link>
                        <Link href="mailto:schilo127@gmail.com">
                          <i className="ri-mail-fill" />
                          <span className="text-300">
                            [email]{" "}
                            <span className="text-secondary-2">
                              schilo127@gmail.com
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <Link
                      href="#contact"
                      className="btn btn-primary-2 rounded-2 mt-5"
                    >
                      Let&apos;s talk
                      <i className="ri-arrow-right-up-line" />
                    </Link>
                  </div>
                  <div className="position-absolute d-none d-md-block decorate">
                    <div className="rotateme">
                      <div className="circle-1-1" />
                      <div className="circle-1-2 position-absolute top-50 start-50 translate-middle" />
                      <div className="circle-1-3 position-absolute top-50 start-50 translate-middle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pt-lg-0 pt-5">
              <div className="bg-3 rounded-3 border border-1 p-md-6 p-3 position-relative h-100 overflow-hidden">
                <div className="d-flex align-items-center">
                  <span className="text-linear-4 d-flex align-items-center">
                    {" "}
                    Git Journaling{" "}
                  </span>
                </div>
                <div className="h-100 position-relative">
                  <ul className="ps-3 d-flex flex-column justify-content-around h-100 position-relative">
                    {journal.map((j) => (
                      <li className="position-relative z-1" key={j.title}>
                        <div className="d-flex align-items-center gap-2">
                          <p className="text-300 text-nowrap">{j.date}:</p>
                          <span className="text-white">{j.title}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="line-left position-absolute border-start z-0" />
                </div>
                <div className="bg-overlay position-absolute bottom-0 start-0 z-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
