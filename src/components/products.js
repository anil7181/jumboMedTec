import React  from 'react';
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <> 
    <section className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          {/* <h2>Our Products</h2> */}
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>Products</li>
          </ol>
        </div>

      </div>
    </section>
     <section id="team" className="team section-bg" style={{padding: '0px'}}>
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h3>Our <span>Products</span></h3>
          <p>We offer our reliable services and high quality products in abidance with Health Technical
Memorandum (HTM-02-01).</p>
        </div>

        <h4>MEDICAL GAS PIPELINE SYSTEM</h4>
        <div className="row">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <Link to="/products/1">
              <div className="member">
                <div className="member-img">
                  <img src="assets/img/products/COPPER PIPE.png" className="img-fluid product-img" alt="" />
                  </div>
                <div className="member-info">
                  <h4>Medical Grade Copper Pipes</h4>
                  {/* <span>Chief Executive Officer</span> */}
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <Link to="/products/1">
              <div className="member">
              <div className="member-img">
              <img src="assets/img/products/OUTLET.jpg" className="img-fluid product-img" alt="" />
              </div>
              <div className="member-info">
                <h4>Gas Terminal (Outlet) Units</h4>
                {/* <span>Product Manager</span> */}
              </div>
            </div>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <Link to="/products/1">
              <div className="member">
              <div className="member-img">
              <img src="assets/img/products/AGSS.jpg" className="img-fluid product-img" alt="" />
              </div>
              <div className="member-info">
                <h4>AGSS - Anaesthetic Gas Scavenging Systems</h4>
                {/* <span>CTO</span> */}
              </div>
            </div>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
            <Link to="/products/1">
              <div className="member">
              <div className="member-img">
              <img src="assets/img/products/VACUUM PUMP.jpg" className="img-fluid product-img" alt="" />
              </div>
              <div className="member-info">
                <h4>Medical Vacuum Supply System</h4>
                {/* <span>Accountant</span> */}
              </div>
            </div>
            </Link>
          </div>

        </div>

        <h4>MODULAR O.T & LAMINAR AIR FLOW</h4>
        <div className="row">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <Link to="/products/1">
              <div className="member">
              <div className="member-img">
                <img src="assets/img/products/AHU.png" className="img-fluid product-img" alt="" />
              </div>
              <div className="member-info">
                <h4>Air Handling Unit</h4>
                {/* <span>Chief Executive Officer</span> */}
              </div>
            </div>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <Link to="/products/1">
              <div className="member">
              <div className="member-img">
              <img src="assets/img/products/AIR COOLED CONDENSING UNIT.jpg" className="img-fluid product-img" alt="" />
              
              </div>
              <div className="member-info">
                <h4>Air Cooled Condensing Unit</h4>
                {/* <span>Product Manager</span> */}
              </div>
            </div>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <Link to="/products/1">
              <div className="member">
              <div className="member-img">
              <img src="assets/img/products/Laminar Air Flow.jpeg" className="img-fluid product-img" alt="" />
              
              </div>
              <div className="member-info">
                <h4>Laminar Air Flow System</h4>
                {/* <span>CTO</span> */}
              </div>
            </div>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
            <Link to="/products/1">
              <div className="member">
              <div className="member-img">
              <img src="assets/img/products/SURGEON CONTROL PANEL.png" className="img-fluid product-img" alt="" />
              
              </div>
              <div className="member-info">
                <h4>Surgen Control Panel</h4>
              </div>
            </div>
            </Link>
          </div>

        </div>

      </div>
    </section>
    </>
    )

  }