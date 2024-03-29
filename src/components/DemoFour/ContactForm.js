import React, { useState } from "react"
// import axios from "axios"
// import baseUrl from "../../utils/baseUrl"
import { useForm, ValidationError } from "@formspree/react"

import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2"
const MySwal = withReactContent(Swal)

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  })
}

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
}

const ContactForm = () => {
  // const [contact, setContact] = useState(INITIAL_STATE)
  const [state, handleSubmit] = useForm("xeqvokzd")

  // const handleChange = e => {
  //   const { name, value } = e.target
  //   // setContact(prevState => ({ ...prevState, [name]: value }))
  //   // console.log(contact)
  // }

  if (state.succeeded && !state.submitting) {
    alertContent()
  }
  // const onSubmit = async e => {
  //   // e.preventDefault();
  //   try {
  //     // const url = `${baseUrl}/api/contact`;
  //     const { name, email, number, subject, text } = contact
  //     const payload = { name, email, number, subject, text }
  //     // await axios.post(url, payload);
  //     // console.log(url);
  //     setContact(INITIAL_STATE)
  //     alertContent()
  //   } catch (error) {
  //     // console.log(error)
  //   }
  // }

  return (
    <div id="contact" className="contact-area four pb-70">
      <div className="container">
        <div className="section-title four">
          <h3>
          Contact us for an opportunity to a competitive quote and lasting partnership relationship.
          </h3>
        </div>

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-7">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      // value={contact.name}
                      // onChange={handleChange}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ValidationError
                        prefix="name"
                        field="name"
                        errors={state.errors}
                      />{" "}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      // value={contact.email}
                      // onChange={handleChange}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ValidationError
                        prefix="email"
                        field="email"
                        errors={state.errors}
                      />{" "}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      // value={contact.subject}
                      // onChange={handleChange}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ValidationError
                        prefix="subject"
                        field="subject"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="number"
                      className="form-control"
                      placeholder="Phone"
                      // value={contact.number}
                      // onChange={handleChange}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ValidationError
                        prefix="number"
                        field="number"
                        errors={state.errors}
                      />{" "}
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea
                      name="text"
                      className="form-control"
                      cols="30"
                      rows="6"
                      placeholder="Write message"
                      // value={contact.text}
                      // onChange={handleChange}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ValidationError
                        prefix="text"
                        field="text"
                        errors={state.errors}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn common-btn">
                Send Message <span></span>
              </button>
            </form>
          </div>

          <div className="col-md-5 col-lg-5">
            <div className="contact-content">
              {/* <div className="top">
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
                    <a href="#" target="_blank">
                      www.reton.com
                    </a>
                  </li>
                  <li>
                    <span>Address:</span>
                    <a href="#" target="_blank">
                      12/7, Mc Street, Canada
                    </a>
                  </li>
                </ul>
              </div> */}

              {/* <div className="bottom">
                <ul>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-behance"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
