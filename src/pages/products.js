
import Header from '../layouts/header'
import { Link } from "react-router-dom";


// import Products from "../layouts/products"

export default function Product(){
    return(
        <div class="inner_posituong computer_page">
            <Header/>
            
            
        <div  class="products">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
               <div className="section-title">
               <h3>Our <span>Products</span></h3>
               </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-12">
                  <div class="our_products">
                     <div class="row">
                        <div class="col-md-4 margin_bottom1">
                           <div class="product_box">
                              <figure><img class="product-img" src="assets/images2/COPPER PIPE.png" alt="#"/></figure>
                              <Link to="/productDetails"><h3>COPPER PIPE</h3></Link>
                           </div>
                        </div>
                        <div class="col-md-4 margin_bottom1">
                           <div class="product_box">
                              <figure><img class="product-img" src="assets/images2/VACUUM PUMP.jpg" alt="#"/></figure>
                              <h3>VACUUM PUMP</h3>
                           </div>
                        </div>
                        <div class="col-md-4 margin_bottom1">
                           <div class="product_box">
                              <figure><img class="product-img" src="assets/images2/AIR COOLED CONDENSING UNIT.jpg" alt="#"/></figure>
                              <h3>AIR COOLED CONDENSING UNIT</h3>
                           </div>
                        </div>
                        <div class="col-md-4 margin_bottom1">
                           <div class="product_box">
                              <figure><img class="product-img" src="assets/images2/CAUTERY MACHINE.jpg" alt="#"/></figure>
                              <h3>CAUTERY MACHINE</h3>
                           </div>
                        </div>
                        <div class="col-md-4 margin_bottom1">
                           <div class="product_box">
                              <figure><img class="product-img" src="assets/images2/CONTROL PANEL.png" alt="#"/></figure>
                              <h3>CONTROL PANEL</h3>
                           </div>
                        </div>
                        <div class="col-md-4 margin_bottom1">
                           <div class="product_box">
                              <figure><img class="product-img" src="assets/images2/SUCTHION MACHINE.png" alt="#"/></figure>
                              <h3>SUCTHION MACHINE</h3>
                           </div>
                        </div>
                        <div class="col-md-4">
                           <div class="product_box">
                              <figure><img class="product-img" src="assets/images2/SURGEON CONTROL PANEL.png" alt="#"/></figure>
                              <h3>SURGEON CONTROL PANEL</h3>
                           </div>
                        </div>
                        <div class="col-md-4">
                           <div class="product_box">
                              <figure><img class="product-img" src="assets/images2/AHU.png" alt="#"/></figure>
                              <h3>AIR HANDLING UNIT</h3>
                           </div>
                        </div>
                        <div class="col-md-4">
                           <div class="product_box">
                              <figure><img class="product-img" src="assets/images2/MULTIPARA MONITOR.jpg" alt="#"/></figure>
                              <h3>MULTIPARA MONITOR</h3>
                           </div>
                        </div>
                        {/* <div class="col-md-12">
                           <a class="read_more" href="#">See More</a>
                        </div> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

        </div>
    )
}