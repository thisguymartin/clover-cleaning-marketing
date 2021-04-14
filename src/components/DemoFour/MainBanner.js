import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

const MainBanner = () => {
  return (
    <div id="home" className="banner-area four">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="banner-content">
              <h1>Clover Cleaning Solution</h1>
              <p>
                One goal, one passion - <span>Commitment</span>
              </p>
              <div className="banner-btn-area">
                <AnchorLink
                  offset={() => -1}
                  className="common-btn banner-btn"
                  href="#contact"
                >
                  Hire Us
                </AnchorLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
