import React from 'react'
import aboutImg from '../../components/App/assets/images/about4.jpg'

const About = () => {
    return (
        <div id="about" className="about-area border-bottom-two three ptb-100">
            <div className="container align-items-center">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="about-img-three">
                            <img src={aboutImg} alt="About" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="about-content">
                            <div className="section-title three">
                                <span className="sub-title">ABOUT ME</span>
                                <h2>I Am A Web Developer, Specialized In WordPress, PHP, JavaScript & React</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et.</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="left">
                                        <ul>
                                            <li>
                                                <span>Age:</span>
                                                26 Years
                                            </li>
                                            <li>
                                                <span>Residence:</span>
                                                San Francisco
                                            </li>
                                            <li>
                                                <span>Address:</span>
                                                <a href="#" target="_blank">12/7, Mc Street, Canada</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="right">
                                        <ul>
                                            <li>
                                                <span>Phone:</span>
                                                <a href="tel:+00932123456">+009 321 23456</a>
                                            </li>
                                            <li>
                                                <span>Email:</span>
                                                <a href="mailto:hello@reton.com">hello@reton.com</a>
                                            </li>
                                            <li>
                                                <span>Website:</span>
                                                <a href="http://drexia.com" target="_blank">www.drexia.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About