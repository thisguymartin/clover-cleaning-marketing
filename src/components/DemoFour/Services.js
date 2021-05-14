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
                <p>
                  General Building Cleaning Daily, Weekly or periodic building
                  Cleaning of:{" "}
                </p>
                <ul className="list-inline">
                  <li class="list-inline-item">Restrooms</li>
                  <li class="list-inline-item">Common Areas</li>
                  <li class="list-inline-item">Courtyards</li>
                  <li class="list-inline-item">Offices/Office Spaces</li>
                  <li class="list-inline-item">Lounge Rooms</li>
                  <li class="list-inline-item">Conference Rooms</li>
                  <li class="list-inline-item">
                    Paper Product and Personal Use Supply restocking
                  </li>
                  <li class="list-inline-item">
                    Disinfection of high touch areas
                  </li>
                  <li class="list-inline-item">Infection Control </li>
                  <li class="list-inline-item">High Dust Detail Cleaning</li>
                  <li class="list-inline-item">Porter Services</li>
                  <li class="list-inline-item">Waste and Recycle Removal</li>
                  <li class="list-inline-item">Window Cleaning</li>
                  <li class="list-inline-item">Floor Care</li>
                  <li class="list-inline-item">Carpet Deep Cleaningi></li>
                  <li class="list-inline-item">Chair Cleaning</li>
                  <li class="list-inline-item">VCT/Hard Floor Restoration</li>
                  <li class="list-inline-item">Inventory Control</li>
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
