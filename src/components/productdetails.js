import React  from 'react';
import { Link } from "react-router-dom";

function ProductDetails() {
  return (
    <> 
      <main id="main" data-aos="fade-up">
        <section className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Product Details</h2>
              <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Portfolio</Link></li>
                <li>Product Details</li>
              </ol>
            </div>

          </div>
        </section>

        <section id="portfolio-details" className="portfolio-details">
          <div className="container">

            <div className="row gy-4">

              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">

                    <div className="swiper-slide">
                      <img src="/assets/img/portfolio/portfolio-details-1.jpg" alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img src="/assets/img/portfolio/portfolio-details-2.jpg" alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img src="/assets/img/portfolio/portfolio-details-3.jpg" alt="" />
                    </div>

                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Product information</h3>
                  <ul>
                    <li><strong>Name</strong>: Medical Grade Copper Pipes</li>
                    <li><strong>Category</strong>: MEDICAL GAS PIPELINE SYSTEM</li>
                    {/* <li><strong>Project date</strong>: 01 March, 2020</li>
                    <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li> */}
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>Product Description</h2>
                  <p>
                  The pipes are manufactured under thorough inspections and quality control measures. marked medical grade copper tubes are available in size range 6mm to 108mm OD, 0.6mm to 2.0mm wall thickness in Half Hard/Hard conditions and Length 3 meter as per requirement.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        </main>
    </>
    )

  }
export default ProductDetails;