import React from "react"
import { Link } from "gatsby"
import { useRecoilState } from "recoil"
import { sModalState } from "../../utils/recoil-atoms"
import AnchorLink from "react-anchor-link-smooth-scroll"
import logo from "../../components/App/assets/images/clover_logo.svg"

const Navbar = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [sidebarModal, setSidebarModal] = useRecoilState(sModalState)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  const toggleModal = () => {
    setSidebarModal(!sidebarModal)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("navbar")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
    window.scrollTo(0, 0)
  })

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <React.Fragment>
      <nav
        id="navbar"
        className="navbar navbar-expand-md navbar-light four fixed-top"
      >
        <div className="container">
          <Link href="/demo-four">
            <a className="navbar-brand">
              <img src={logo} alt="logo" width="60px" />
            </a>
          </Link>

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <AnchorLink
                  // onClick={toggleNavbar}
                  offset={() => 100}
                  className="nav-link active"
                  href="#home"
                >
                  Home
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink
                  // onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#services"
                >
                  Services
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink
                  // onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#about"
                >
                  About
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink
                  // onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#contact"
                >
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar
