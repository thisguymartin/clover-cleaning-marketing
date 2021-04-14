import React from "react"
import about from "../../components/App/assets/images/about-us.jpg"
import { Link } from "gatsby"

const Services = () => {
  return (
    <div id="about" className="about-area four pb-70">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content">
              <div className="section-title four">
                <h2>Our Services</h2>
                <ul>
                  <li>● Restroom cleaning</li>
                  <li>● General office cleaning</li>
                  <li>● Restroom cleaning</li>
                  <li>● Common area cleaning</li>
                  <li>● Paper product and soap restocking</li>

                  <li>● Inventory control </li>

                  <li>
                    ● Cleaning and disinfecting high touch services that helps
                    fight the Covid19.
                  </li>
                  <li>
                    ● Carpet care and cleaning floor restoration ● High dustin
                    (Monthly or quarterly )
                  </li>
                  <li>● Porter services ● Waste and recycle removal</li>
                  <li>● Window cleaning</li>
                </ul>
                <Link to="/service-details" className="common-btn four">
                View Details
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
