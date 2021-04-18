import React from "react"
import expectations from "../../components/App/assets/images/Expectations.jpg"
import { Link } from "gatsby"

const Expectations = () => {
  return (
    <div id="about" className="about-area four pb-70">
      <div className="container ">
        <div className="row align-items-center ">
          <div className="col-lg-6">
            <div className="about-img-two">
              <img src={expectations} alt="expectations" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content pt-70">
              <div className="section-title four ">
                <h2>Expectations</h2>
                <p>
                We possessed over 20 years of experience in the janitorial industry And looking forward towards demonstrating our knowledge and experience we have.The knowledge and experience gained throughout the years has given us the proper edicate training in-order to execute our daily duties to provide the required cleaning standards within your company.We are committed and passionate staff have high expectations towards our customer service, with providing the best janitorial cleaning services but also affordable and mindful of your budget . Don’t hold back but commit to our services because we are here to commit to you and your staff, to keep a clean and safe environment for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expectations
