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
              <div className="section-title four">
                <h2>Meeting Our Client's Expectations:</h2>
                <ul className="list-inline">
                  <li class="list-inline-item">Quality Control</li>
                  <li class="list-inline-item">Sustainable Cleaning </li>
                  <li class="list-inline-item">Competitive Cost </li>
                  <li class="list-inline-item">Concepts Client </li>
                  <li class="list-inline-item">
                    Commitment Providing a clean and safe business environment
                    for over 20 years
                  </li>
                  <li class="list-inline-item">
                    Account Management Representation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expectations
