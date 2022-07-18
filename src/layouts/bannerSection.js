import { Link } from "react-router-dom"

export default function BannerSection(){
    return(
        <section class="banner_main">
        <div id="banner1" class="carousel slide" data-ride="carousel">
           <ol class="carousel-indicators">
              <li data-target="#banner1" data-slide-to="0" class="active"></li>
              <li data-target="#banner1" data-slide-to="1"></li>
              <li data-target="#banner1" data-slide-to="2"></li>
              <li data-target="#banner1" data-slide-to="3"></li>
              <li data-target="#banner1" data-slide-to="4"></li>
           </ol>
           <div class="carousel-inner">
              <div class="carousel-item active">
                 <div class="container">
                    <div class="carousel-caption">
                       <div class="row">
                          <div class="col-md-6">
                             <div class="text-bg">
                                {/* <span>Our Medical Products</span> */}
                                <h1>Our Medical Products</h1>
                                <p>Our core business is providing an all-inclusive planning, design and installation service, using our own directly employed fully qualified engineers. </p>
                                 <Link to="/contact">Contact </Link>
                             </div>
                          </div>
                          <div class="col-md-6">
                             <div class="text_img">
                                <figure><img src="assets/images2/MULTIPARA_MONITOR.png" alt="#"/></figure>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div class="carousel-item">
                 <div class="container">
                    <div class="carousel-caption">
                       <div class="row">
                          <div class="col-md-6">
                             <div class="text-bg">
                                {/* <span>Computer And Laptop</span> */}
                                <h1>Our Medical Products</h1>
                                <p>JMT is recognized as an organization for Design, Supply, Installation and Commissioning of Medical Gas Pipeline Systems, Modular Operation Theatre & Laminar Air Flow Systems. </p>
                                 <a href="contact.html">Contact </a>
                             </div>
                          </div>
                          <div class="col-md-6">
                             <div class="text_img">
                                <figure><img src="assets/images2/AHU2.png" alt="#"/></figure>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div class="carousel-item">
                 <div class="container">
                    <div class="carousel-caption">
                       <div class="row">
                          <div class="col-md-6">
                             <div class="text-bg">
                                {/* <span>Computer And Laptop</span> */}
                                <h1>Our Medical Products</h1>
                                <p>Having interacted and worked with many leading Hospitals & Nursing Homes and the Private Sector across the India for over 20 years, designing, installing and maintaining a wide range of Medical Gas Systems & Modular Operation Theatres.</p>
                                 <a href="contact.html">Contact </a>
                             </div>
                          </div>
                          <div class="col-md-6">
                             <div class="text_img">
                                <figure><img src="assets/images2/CONTROL_PANEL.png" alt="#"/></figure>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div class="carousel-item">
                 <div class="container">
                    <div class="carousel-caption">
                       <div class="row">
                          <div class="col-md-6">
                             <div class="text-bg">
                                {/* <span>Computer And Laptop</span> */}
                                <h1>Our Medical Products</h1>
                                <p>We get access to the latest technology and world class products from our principals who incidentally enjoy a market lead position in the medical field.</p>
                                 <a href="contact.html">Contact </a>
                             </div>
                          </div>
                          <div class="col-md-6">
                             <div class="text_img">
                                <figure><img src="assets/images2/CAUTERY_MACHINE.png" alt="#"/></figure>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div class="carousel-item">
                 <div class="container">
                    <div class="carousel-caption">
                       <div class="row">
                          <div class="col-md-6">
                             <div class="text-bg">
                                {/* <span>Computer And Laptop</span> */}
                                <h1>Our Medical Products</h1>
                                <p>We are also proud to be an Approved Specialist Distributor, providing Medical Gas Solutions, Modular Operation Theatres, CSSD Solutions and Services for most of the Institutions.</p>
                                 <a href="contact.html">Contact </a>
                             </div>
                          </div>
                          <div class="col-md-6">
                             <div class="text_img">
                                <figure><img src="assets/images2/COPPER_PIPE.png" alt="#"/></figure>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <a class="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
           <i class="fa fa-chevron-left" aria-hidden="true"></i>
           </a>
           <a class="carousel-control-next" href="#banner1" role="button" data-slide="next">
           <i class="fa fa-chevron-right" aria-hidden="true"></i>
           </a>
        </div>
     </section>
    )
}