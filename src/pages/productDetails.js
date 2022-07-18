
import Header from '../layouts/header'
export default function ProductDetails(){
    return(
      <div class="inner_posituong computer_page">
      <Header/>
        <div class="laptop1">
         <div class="container">
            <div class="row">
               <div class="col-md-7">
                  <div class="laptop1_img">
                     <figure><img src="assets/images2/CONTROL_PANEL.png" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-5">
                  <div class="titlepage">
                     <h2>GAS CONTROL PANEL</h2>
                     <p>The Gas Control Panel is designed to power surgical instruments in operating rooms. The Gas Control Panels are available for use with Nitrogen or Instrument Air. A large Control knob located in the center of the unit allows hospital personnel to regulate the output pressure and hence control the pressure delivered to the instrument.

                        <br /><p className='features'>FEATURES</p>
                        <i className="bx bx-chevron-right"></i>Manual shut-off valve
                        <br /><i className="bx bx-chevron-right"></i>Wall mount with adjustable brackets for different wall thicknesses
                        <br /><i className="bx bx-chevron-right"></i>Maximum supply pressure 250 psi [1,724 kPa]
                        <br /><i className="bx bx-chevron-right"></i>Maximum delivery pressure: DISS = 200 psi
                        </p>
                     <a class="read_more" href="#">Read More</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </div>
    )
}