import React, { useState } from 'react'
import axios from 'axios'
import baseUrl from '../../utils/baseUrl'
import { useForm } from 'react-hook-form'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
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
    text: ""
};

const ContactForm = () => {

    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            await axios.post(url, payload);
            // console.log(url);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            // console.log(error)
        }
    };

    return (
        <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="name" 
                            className="form-control" 
                            placeholder="Name" 
                            value={contact.name}
                            onChange={handleChange}
                            ref={register({ required: true })}
                        />
                        <div className='invalid-feedback' style={{display: 'block'}}>
                            {errors.name && 'Name is required.'}
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="email" 
                            className="form-control" 
                            placeholder="Email" 
                            value={contact.email}
                            onChange={handleChange}
                            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                        />
                        <div className='invalid-feedback' style={{display: 'block'}}>
                            {errors.email && 'Email is required.'}
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
                            value={contact.subject}
                            onChange={handleChange}
                            ref={register({ required: true })}
                        />
                        <div className='invalid-feedback' style={{display: 'block'}}>
                            {errors.subject && 'Subject is required.'}
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
                            value={contact.number}
                            onChange={handleChange}
                            ref={register({ required: true })}
                        />
                        <div className='invalid-feedback' style={{display: 'block'}}>
                            {errors.number && 'Number is required.'}
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
                            value={contact.text}
                            onChange={handleChange}
                            ref={register({ required: true })}
                        />
                        <div className='invalid-feedback' style={{display: 'block'}}>
                            {errors.text && 'Text body is required.'}
                        </div>
                    </div>
                </div>
            </div>
        
            <button type="submit" className="btn common-btn">Send Message <span></span></button>
        </form>
    )
}

export default ContactForm