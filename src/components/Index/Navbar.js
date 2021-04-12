import React from 'react'
import { useRecoilState } from 'recoil'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {sModalState} from '../../utils/recoil-atoms'
import logo from '../../components/App/assets/images/logo.png'
import SidebarDemosModal from '../App/SidebarDemosModal'

const Navbar = () => {
    const [collapsed, setCollapsed] = React.useState(true)
    const [sidebarModal, setSidebarModal] = useRecoilState(sModalState)

    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }

    const toggleModal = () => {
        setSidebarModal(!sidebarModal)
        // console.log(sidebarModal)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <nav id="navbar" className="navbar navbar-expand-md navbar-light fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="logo" />
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
                                    href="#portfolio"
                                >
                                    Portfolio
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink 
                                    // onClick={toggleNavbar} 
                                    offset={() => -1} 
                                    className="nav-link" 
                                    href="#blog"
                                >
                                    Blog
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

                        <div className="side-nav">
                            <Link to="#" className="common-btn">
                                Download CV <i className='bx bxs-download'></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar Demos Modal */}
            <div className="demo-side-icon">
                <button type="button" className="modal-btn" 
                    onClick={toggleModal}
                >
                    <span>Demos</span>
                </button>
            </div>

            <SidebarDemosModal />
        </React.Fragment>
    )
}

export default Navbar
