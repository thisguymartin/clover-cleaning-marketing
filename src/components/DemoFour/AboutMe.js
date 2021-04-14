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
                <h2>About Us</h2>
                <p>
                  We understand your work environment is where you conduct
                  business with it is where you deal with clients and potential
                  clients on a daily basis. A clean environment is important if
                  you want to conduct a successful and efficient business. A
                  clean office creates a positive initial impression, and image,
                  of your business. Clover Cleaning solutions we can take this
                  responsibility off of your shoulders and get all of your
                  cleaning and janitorial completed for you. We want to make
                  sure you stay ahead of your competition and have one of the
                  most pristine and professional businesses in your industry.
                  Clover Cleaning Solutions will partner with the office
                  managers, facility manager, and/or building owner to
                  understand the exact specific cleaning requirements and will
                  then submit a very detailed, written proposal outlining a very
                  cost-effective solution to meet your cleaning needs.
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
