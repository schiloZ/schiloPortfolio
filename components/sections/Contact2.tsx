export default function Contact2() {
  return (
    <>
      <section
        id="contact"
        className="section-contact-2 position-relative pb-60 overflow-hidden"
      >
        <div className="container position-relative z-1">
          <div className="row align-items-center">
            <div className="col-lg-7 pb-5 pb-lg-0">
              <div className="position-relative">
                <div className="position-relative z-2">
                  <h3 className="text-primary-2 mb-3">Let’s connect</h3>
                  <form action="mailto:schilo127@gmail.com" method="post" encType="text/plain">
                    <div className="row g-3">
                      <div className="col-md-6 ">
                        <input
                          type="text"
                          className="form-control bg-3 border border-1 rounded-3"
                          id="name"
                          name="name"
                          placeholder="Your name"
                          aria-label="username"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control bg-3 border border-1 rounded-3"
                          id="phone"
                          name="phone"
                          placeholder="Phone"
                          aria-label="phone"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control bg-3 border border-1 rounded-3"
                          id="email"
                          name="email"
                          placeholder="Email"
                          aria-label="email"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control bg-3 border border-1 rounded-3"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          aria-label="subject"
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          className="form-control bg-3 border border-1 rounded-3"
                          id="message"
                          name="message"
                          placeholder="Message"
                          aria-label="With textarea"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary-2 rounded-2"
                        >
                          Send Message
                          <i className="ri-arrow-right-up-line" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="z-0 bg-primary-white rectangle-bg z-1 rounded-3" />
              </div>
            </div>
            <div className="col-lg-5 d-flex flex-column ps-lg-8">
              <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
                <div className="d-inline-block">
                  <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                    <i className="ri-phone-fill text-primary-2 fs-26" />
                  </div>
                </div>
                <div className="ps-3 h-100">
                  <span className="text-400 fs-6">Phone Number</span>
                  <h6 className="mb-0">+225-05-84-18-53-67</h6>
                </div>
                <a
                  href="tel:+2250584185367"
                  className="position-absolute top-0 start-0 w-100 h-100"
                />
              </div>
              <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
                <div className="d-inline-block">
                  <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                    <i className="ri-mail-fill text-primary-2 fs-26" />
                  </div>
                </div>
                <div className="ps-3 h-100">
                  <span className="text-400 fs-6">Email</span>
                  <h6 className="mb-0">schilo127@gmail.com</h6>
                </div>
                <a
                  href="mailto:schilo127@gmail.com"
                  className="position-absolute top-0 start-0 w-100 h-100"
                />
              </div>
              {/* <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
                <div className="d-inline-block">
                  <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                    <i className="ri-skype-fill text-primary-2 fs-26" />
                  </div>
                </div>
                <div className="ps-3 h-100">
                  <span className="text-400 fs-6">Skype</span>
                  <h6 className="mb-0">Schilo Zokou</h6>
                </div>
                <a
                  href="skype:SKYPENAME?add"
                  className="position-absolute top-0 start-0 w-100 h-100"
                />
              </div> */}
              <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
                <div className="d-inline-block">
                  <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                    <i className="ri-linkedin-fill text-primary-2 fs-26" />
                  </div>
                </div>
                <div className="ps-3 h-100">
                  <span className="text-400 fs-6">LinkedIn</span>
                  <h6 className="mb-0">Schilo Zokou</h6>
                </div>
                <a
                  href="https://www.linkedin.com/in/schilo-ibo-786310249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="position-absolute top-0 start-0 w-100 h-100"
                />
              </div>
              <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
                <div className="d-inline-block">
                  <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                    <i className="ri-github-fill text-primary-2 fs-26" />
                  </div>
                </div>
                <div className="ps-3 h-100">
                  <span className="text-400 fs-6">GitHub</span>
                  <h6 className="mb-0">@schiloZ</h6>
                </div>
                <a
                  href="https://github.com/schiloZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="position-absolute top-0 start-0 w-100 h-100"
                />
              </div>
              <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
                <div className="d-inline-block">
                  <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                    <i className="ri-map-2-fill text-primary-2 fs-26" />
                  </div>
                </div>
                <div className="ps-3 h-100">
                  <span className="text-400 fs-6">Address</span>
                  <h6 className="mb-0">Abidjan Cocody</h6>
                </div>
                <a
                  href="https://maps.app.goo.gl/rJg54pAMdAaoQnts5"
                  className="position-absolute top-0 start-0 w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
