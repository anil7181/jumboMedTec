
import React  from 'react'
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <> 
    <footer id="footer">

<div className="footer-newsletter">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h4>Join Our Newsletter</h4>
        <p>Get latest updates</p>
        <form action="" method="post">
          <input type="email" name="email" /><input type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  </div>
</div>

<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6 footer-contact">
        <h3>BizLand<span>.</span></h3>
        <p>
        JUMBO MEDICAL TECHNOLOGIES <br />
        Shop No : 23, 24, 24A, 1st Floor,<br />
        Laxmi Balakrishna Square,<br />
        Station Road, Hubballi - 580020 <br />
 <br />
          <strong>Phone:</strong> 0836-2369755<br />
          <strong>Email:</strong> jumbomeditechindia@gmail.com<br />
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; jumbomeditech@yahoo.in<br />
        </p>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Products</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <Link to="/products">MEDICAL GAS PIPELINE SYSTEM</Link></li>
          <li><i className="bx bx-chevron-right"></i> <Link to="/products">MODULAR O.T & LAMINAR AIR FLOW</Link></li>
          <li><i className="bx bx-chevron-right"></i> <Link to="/products">MEDICAL HOSPITAL DEVICES</Link></li>
          <li><i className="bx bx-chevron-right"></i> <Link to="/products">MEDICAL EQUIPMENTS</Link></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Social Networks</h4>
        <p>Follow us on</p>
        <div className="social-links mt-3">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>

    </div>
  </div>
</div>

{/* <div className="container py-4">
  <div className="copyright">
    &copy; Copyright <strong><span>BizLand</span></strong>. All Rights Reserved
  </div>
  <div className="credits">
    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
  </div>
</div> */}
</footer>


    </>
    )

  }