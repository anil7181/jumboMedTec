export default function Laptop(){
    return(
        <div class="laptop">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <div class="titlepage">
                  <h2>ESAIC Euroanaesthesia 2021 Symposium: Focus Patient Safety</h2> 
                     
                   <p>Watch the clinical lectures held at the Dräger Satellite Symposium at Euroanaesthesia 2021. Focus was on how assistance system can help improve patient safety in anaesthesia</p>
                   </div>
               </div>
               <div class="col-md-6">
                  <div class="laptop_box">
                     {/* <figure><img src="assets/images/pc.png" alt="#"/></figure> */}
                     <figure> <iframe width="100%" height="350" src="https://www.youtube.com/embed/bMUFQKRHNz4?rel=0&controls=1&modestbranding=1&showinfo=0&enablejsapi=1&autoplay=1&mute=1">
                  </iframe></figure> 
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
}