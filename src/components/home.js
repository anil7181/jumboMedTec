import React  from 'react';
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <> 
  <section id="hero" className="d-flex align-items-center">
    <div className="container" data-aos="zoom-out" data-aos-delay="100">
      <h1>Welcome to <span>JUMBO MEDICAL TECHNOLOGIES</span></h1>
      <h2>We are a company with diverse talents and skills</h2>
      <div className="d-flex">
        <a href="#about" className="btn-get-started scrollto">Get Started</a>
        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
      </div>
    </div>
  </section>

  <main id="main">
    {/* <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4 className="title"><a href="">Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4 className="title"><a href="">Magni Dolores</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4 className="title"><a href="">Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

        </div>

      </div>
    </section> */}
    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
          <h3>Find Out More <span>About Us</span></h3>
          <p>JUMBO MEDICAL TECHNOLOGIES (J M T) an ISO 9001 : 2015 Certified Company.</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <img src="assets/img/about.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <h3><span style={{fontSize: '16px', lineHeight: 1}}>J M T</span> <span style={{fontSize: '14px', lineHeight: 1}}>is recognized as an organization for Design, Supply, Installation and Commissioning of
Medical Gas Pipeline Systems, Modular Operation Theatre & Laminar Air Flow Systems.</span></h3>
            <p className="fst-italic" style={{marginBottom: 0}}>
            We Jumbo Medical Technologies are specialized in following services and medical
products.
            </p>
            <ul>
              <li>
              &gt; Centralized Medical Gas Pipe Line System as per latest HTM02-01, C11 standards. We
              JMT can provide the industry’s most complete and varied line of products including
              medical grade EN 13348 : 2008 Lloyd’s certified copper pipes, Medical Manifolds,
              Medical Air Plants, Medical Vacuum Plants, Anesthesia Gas Scavenging System, AVSU
              Modules, Zonal Valves, Master Alarms, Area Alarms and SOT products and accessories.
              </li>
              <li>
              &gt; Designing and Installation of Modular Operation Theatres & Laminar Air Flow System.
              </li>
              <li>
              &gt; LED Operating Lights.
              </li>
              <li>
              &gt; Operating Room and Intensive Care Pendants.
              </li>
              <li>
              &gt; Media Bridge : Ceiling Suspended Medical Supply Units
              </li>
              <li>
              &gt; High care hospital furnitures
              </li>
              <li>
              &gt; Stainless steel equipments and surgical scrub sink and CSSD Equipments.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">

        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
              <p>Happy Clients</p>
              <p>100</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              {/* <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span> */}
              <p>Products</p>
              <p>100</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-headset"></i>
              {/* <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span> */}
              <p>Hours Of Support</p>
              <p>24/7</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-people"></i>
              {/* <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span> */}
              <p>Hard Workers</p>
              <p>100</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="clients" className="clients section-bg">
      <div className="container" data-aos="zoom-in">

        <div className="row">

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
          </div>

        </div>

      </div>
    </section>
    <section id="product" className="services">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Products</h2>
          <h3>Check our <span>Products</span></h3>
          {/* <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p> */}
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h6><Link to="/products">MEDICAL GAS PIPELINE SYSTEM</Link></h6>
              <p>Details</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h6><Link to="/products">MODULAR O.T & LAMINAR AIR FLOW</Link></h6>
              <p>Details</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h6><Link to="/products">MEDICAL HOSPITAL DEVICES</Link></h6>
              <p>Details</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h6><Link to="/products">MEDICAL EQUIPMENTS</Link></h6>
              <p>Details</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="zoom-in">

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                <h3>User name</h3>
                <h4>Position</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  description.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                <h3>User name</h3>
                <h4>Position</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  description.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                <h3>User name</h3>
                <h4>Position</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  description.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                <h3>User name</h3>
                <h4>Position</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  description.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                <h3>User name</h3>
                <h4>Position</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  description.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>
    {/* <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
          <h3>Check our <span>Portfolio</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

        </div>

      </div>
    </section> */}
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Team</h2>
          <h3>Our Hardworking <span>Team</span></h3>
          <p>We are a company with diverse talents and skills. Our leadership structure offers a dynamic
atmosphere in which talented, creative and motivated people thrive. We don’t just
acknowledge hard work and achievements; we reward it and groom it. We have an
experienced team of ambitious, vibrant and young professionals having ability to update
with latest trends and requirement of our client. Our team’s passion is to take challenges and
to deliver to client expectations.</p>
        </div>

        {/* <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="member">
              <div className="member-img">
                <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="member">
              <div className="member-img">
                <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="member">
              <div className="member-img">
                <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
            <div className="member">
              <div className="member-img">
                <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>

        </div> */}

      </div>
    </section>
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>F.A.Q</h2>
          <h3>Frequently Asked <span>Questions</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-10">
            <ul className="faq-list">

              <li>
                <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </p>
                </div>
              </li>

              <li>
                <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                  </p>
                </div>
              </li>

              <li>
                <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                  </p>
                </div>
              </li>

              <li>
                <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                  </p>
                </div>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </section>

  </main>
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center" ><i className="bi bi-arrow-up-short"></i></a>
    </>
  )
}
