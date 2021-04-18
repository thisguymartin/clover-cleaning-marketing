import React from "react"
import Layout from "../components/App/layout"
import SEO from "../components/App/seo"
import Navbar from "../components/DemoFour/Navbar"
import MainBanner from "../components/DemoFour/MainBanner"
import Services from "../components/DemoFour/Services"
import CaseStudy from "../components/DemoFour/CaseStudy"
import AboutMe from "../components/DemoFour/AboutMe"
import Testimonials from "../components/DemoFour/Testimonials"
import Expectations from "../components/DemoFour/Expectations"
import ContactForm from "../components/DemoFour/ContactForm"
import Footer from "../components/DemoFour/Footer"

const IndexPage = () => (
  <Layout>
    <Navbar />
    <SEO title="Clover Cleaning Solution" />
    <MainBanner />
    <Services />
    <Expectations />
    <AboutMe />
    <Testimonials />
    {/* <BlogPost /> */}
    <ContactForm />
    <Footer />
  </Layout>
)

export default IndexPage
