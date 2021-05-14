import React from "react"
import about from "../../components/App/assets/images/about-us.jpg"

const AboutMe = () => {
  return (
    <div id="about" className="about-area four pb-70">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content">
              <div className="section-title four">
                <h2>Story</h2>
                <p>
                  Growing small business company with beginning roots in
                  Southern California. Our Management team consists of trained
                  professionals with over 20 years of experience in office
                  building and hospitality fields. Our "lean" cleaning
                  methodology ensures efficient, thorough and safe practices,
                  allowing for the most competitive cost to our clients. Our
                  services are tailored to each clients' needs from daily
                  cleaning, porter services, infection control or periodic
                  services. All staff members are trained in all cleaning
                  concepts before being placed on the field. Our management team
                  adheres to a level of quality control measures based on
                  industry and governing standards.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-img-two">
              <img src={about} alt="About" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
