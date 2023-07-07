import React, { useState } from 'react';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';

// email sender 



 const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}


export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formik.isValid) {
      formik.setTouched({
        name: true,
        email: true,
        message: true
      });
      return;
    }

    // Get the form values
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Create the email parameters
    const params = {
      from_name: name,
      from_email: email,
      message: message
    };

    // Send the email
    emailjs.send('service_4bz76nx', 'template_antjpxu', params, 'm-q4iPuK6x4vj7Zo2')
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setShowModal(true); 
    })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Add any error handling code or display an error message
      });
  };

  const closeModal = () => {
    setShowModal(false);
    window.location.href = ' https://gabrielparada05.github.io/React-Portfolio/'
  };
  
// validate email
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

/// validate message 



  return (
    <section id="contact" className="relative px-1 py-4">
    <div className=" container flex justify-center flex-col text-center items-center mb-5">
    <div className="text-center mb-5">
    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font mb-3">
          Contact Me
        </h2>
        <p className="text-white w--7/12 mb-3 text-justify ">
        On my contact page, I provide a convenient way for you to get in touch with me. Whether you have a project idea, a question, or simply want to say hello, I'm always ready to listen and collaborate. 
        Feel free to fill out the contact form with your name, email address, and message, and I'll make sure to respond promptly.
        </p>
</div>
      <form onSubmit={handleSubmit}
        name="contact"
        className="flex flex-col w-50">
       
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            minLength={2}
          maxLength={20}
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:brightness-200"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:brightness-200"
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            {formik.touched.email && formik.errors.email && (
            <span>{formik.errors.email}</span>
          )}
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="message"
            className="leading-7 text-sm text-gray-400"
            name="message"
            >
            Message
          </label>
          <textarea
            id="message"
            name="message"   
            minLength={5}
            maxLength={100} 
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out hover:brightness-200"
          />
        </div>
        <button 
          type="submit"
          className={`text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg`}
          disabled={!formik.dirty || !formik.isValid}
          >
          Submit
        </button>
      </form>
    </div>
    
    {showModal && (
        <div className="modal" >
          <div className="modal-content">
            <h3>Email Sent Successfully!</h3>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
  </section>
  );
}

