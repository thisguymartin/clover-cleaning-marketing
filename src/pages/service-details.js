import React from "react"
import Layout from "../components/App/layout"
import SEO from "../components/App/seo"
import Navbar from "../components/DemoFour/Navbar"
import Footer from "../components/DemoFour/Footer"

const ServicesDetails = () => (
  // <Layout>
  <div>
    <Navbar />
    <SEO title="Clover Cleaning Solution" />
    <div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
    <Footer />
  {/* </Layout> */}
  </div>
)

export default ServicesDetails
