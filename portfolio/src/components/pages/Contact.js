import React, { useState } from 'react';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import '../../styles/style.css'

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
        console.log('Email sent successfully!', response.status, response.text, params);
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






  return (
    <section id="contact" className="relative px-1 py-4">
      <div className=" container px-1 py-4 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-5">
        <h1 className="shadow1 text-4xl sm:text-5xl font-bold mb-4 text-blue-500 p-2">
            Contact Me 📧
          </h1>
          <p className="text-justify text-xl leading-8">
          📞 On my contact page, you can easily reach out to me. Whether you have a project, a question, or just want to say hi, I'm here to chat. Feel free to use the contact form with your name, email, and message, and I'll get back to you soon! 👋
          </p>
        </div>
        <div className='flex flex-col items-center'>
        <form onSubmit={handleSubmit}
          name="contact"
          className="form1">

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-lg text-gray-800">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              minLength={2}
              maxLength={20}
              className="w-full bg-sky-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-slate-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:brightness-50" required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-lg text-gray-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-sky-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-slate-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:brightness-50"
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            {formik.touched.email && formik.errors.email && (
              <span>{formik.errors.email}</span>
            )}
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-lg text-gray-800"
              name="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              minLength={5}
              maxLength={100}
              className="w-full bg-sky-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-slate-600 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out hover:brightness-50" required
            />
          </div>
          {(!formik.dirty || !formik.isValid) && (
            <div className="text-red-500 text-center">Please fill out all the fields</div>
          )}
          <button
            type="submit"
            className={`text-white bg-sky-300 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg`}
            disabled={!formik.dirty || !formik.isValid}
            title="Please fill out all the fields"
          >
            Submit
          </button>
        </form>
        </div>
      </div>

      {showModal && (
        <div className="modal1" >
          <div className="modal2">
            <h3>Email Sent Successfully!</h3>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

