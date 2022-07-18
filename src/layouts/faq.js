export default function FAQ(){
    return(
        <>

         <div className="section-title">
          <h3>About Our Hardworking <span>Team</span></h3>
          <p>We are a company with diverse talents and skills. Our leadership structure offers a dynamic
atmosphere in which talented, creative and motivated people thrive. We don’t just
acknowledge hard work and achievements; we reward it and groom it. We have an
experienced team of ambitious, vibrant and young professionals having ability to update
with latest trends and requirement of our client. Our team’s passion is to take challenges and
to deliver to client expectations.</p>
        </div>
        
        <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h3>Frequently Asked <span>Questions</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-10">
            <ul className="faq-list">

              <li>
                <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">Do you offer a design service? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                  <p>
                  Yes, when provided with the CAD Files our technical team can tailor make a design when the drawings include all departments in the hospital.
                  </p>
                </div>
              </li>

              <li>
                <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">Can you offer technical assistance with installation? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                  <p>Yes, once our products are purchased, our technical team can offer their support and guidance.</p>
                </div>
              </li>

              <li>
                <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">Do your products come with Test Certificates? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                  <p>Yes, all products are supplied with test certificates.</p>
                </div>
              </li>

              <li>
                <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">Do you stock all items? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                  <p>We do hold stock of Copper Tube, Copper Fittings, Line Valves and Outlets. All other items are manufactured and engineered bespoke to your requirement.</p>
                </div>
              </li>

              <li>
                <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">What is the order process? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                  <p>After the quotation has been approved and we have received your PO, we will send all specification sheets for approval, once approval has been received production will begin.</p>
                </div>
              </li>

              <li>
                <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">Serviceable Parts? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                  <p>We hold serviceable parts for up to 10 years and can provide details for each product once the batch number or order number is provided.</p>
                </div>
              </li>
              
              <li>
                <div data-bs-toggle="collapse" href="#faq7" className="collapsed question">What are your opening hours? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                <div id="faq7" className="collapse" data-bs-parent=".faq-list">
                  <p>Our team is available via email and phone, Monday-Thursday 8.30am-5pm, Friday 8.30am-2pm for any technical advice and support.</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </section>
    </>
    )
}