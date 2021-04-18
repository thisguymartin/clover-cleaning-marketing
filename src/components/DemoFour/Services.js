import React from "react"
import about from "../../components/App/assets/images/services.jpg"
import { Link } from "gatsby"

const Services = () => {
  return (
    <div id="about" className="about-area four pb-70">
      <div className="container ">
        <div className="row align-items-center ">
          <div className="col-lg-6">
            <div className="about-content pt-70">
              <div className="section-title four">
                <h2>Our Services</h2>

                <ul className="list-inline">
                  <li class="list-inline-item"> Restroom cleaning</li>
                  <li class="list-inline-item"> General office cleaning</li>
                  <li class="list-inline-item"> Restroom cleaning</li>
                  <li class="list-inline-item"> Common area cleaning</li>
                  <li class="list-inline-item">
                     Paper product and soap restocking
                  </li>

                  <li class="list-inline-item"> Inventory control </li>

                  <li class="list-inline-item">
                     Cleaning and disinfecting high touch services that helps
                    fight the Covid19.
                  </li>
                  <li class="list-inline-item">
                     Carpet care and cleaning floor restoration 
                  </li>
                  <li class="list-inline-item">
                  High dustin
                    (Monthly or quarterly )
                  </li>
                  <li class="list-inline-item">
                     Porter services  
                  </li>
                  <li class="list-inline-item">
                  Waste and recycle removal
                  </li>
                  <li class="list-inline-item"> Window cleaning</li>
                </ul>
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

export default Services
