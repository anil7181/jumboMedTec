
import Header from '../layouts/header'
export default function About(){
    return(
       <div class="inner_posituong">
       <Header/>
        <div class="about">
         <div class="container">
            <div class="row d_flex">
               <div class="col-md-5">
                  <div class="titlepage">
                     <h2>About Us</h2>
                     <p>JUMBO MEDICAL TECHNOLOGIES (J M T) an ISO 9001 : 2015 Certified Company.</p>
                     <p>We Jumbo Medical Technologies are specialized in following services and medical products.</p>
                     <p><i className="bx bx-chevron-right"></i> Centralized Medical Gas Pipe Line System as per latest HTM02-01, C11 standards. We JMT can provide the industry’s most complete and varied line of products including medical grade EN 13348 : 2008 Lloyd’s certified copper pipes, Medical Manifolds, Medical Air Plants, Medical Vacuum Plants, Anesthesia Gas Scavenging System, AVSU Modules, Zonal Valves, Master Alarms, Area Alarms and SOT products and accessories.</p>
                     <p><i className="bx bx-chevron-right"></i> Designing and Installation of Modular Operation Theatres & Laminar Air Flow System.</p>
                     <p><i className="bx bx-chevron-right"></i> LED Operating Lights.</p>
                     <p><i className="bx bx-chevron-right"></i> Operating Room and Intensive Care Pendants.</p>
                     <p><i className="bx bx-chevron-right"></i> Media Bridge : Ceiling Suspended Medical Supply Units.</p>
                     <p><i className="bx bx-chevron-right"></i> High care hospital furnitures.</p>
                     <p><i className="bx bx-chevron-right"></i> Stainless steel equipments and surgical scrub sink and CSSD Equipments.</p>

                     {/* <a class="read_more" href="#">Read More</a> */}
                  </div>
               </div>
               <div class="col-md-7">
                  <div class="about_img">
                     <figure><img src="assets/images/pasted image 0.png" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </div>
    )
}