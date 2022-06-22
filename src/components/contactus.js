import React  from 'react'


export default function ContactUs() {
  return (
    <> 
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <h3><span>Contact Us</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>Our Address</h3>
              <p>JUMBO MEDICAL TECHNOLOGIES
                  Shop No : 23, 24, 24A, 1st Floor,
                  Laxmi Balakrishna Square,
                  Station Road, Hubballi - 580020
                  </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>jumbomeditech@yahoo.in
</p>
              <p>jumbomeditechindia@gmail.com
</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p> 0836-2369755</p>
            </div>
          </div>

        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-6 ">
            <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1923.7757457645646!2d75.14449863404877!3d15.346590422662297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d7ccffa3fcc9%3A0x2c6eabf4b7b011c8!2sJumbo%20Medical%20Technologies!5e0!3m2!1sen!2sin!4v1655630014160!5m2!1sen!2sin" frameBorder="0" style={{border:'0', width: '100%', height: '384px'}} allowFullScreen></iframe>
            {/* <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" style={{border:'0', width: '100%', height: '384px'}} allowFullScreen></iframe> */}
          </div>

          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

    </>
    )

  }