import React, { useRef } from 'react';
import { useFormik } from 'formik';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
require('dotenv').config();

// set email sender
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.SERVICE_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



// validate email
const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}


 function Contact() {
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

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

const onSubmit = (data) => {
  // Handle form submission
  console.log(data);
};

  return (
    <section id="contact" className="relative">
    <div className="flex justify-center">
      <form ref={form} onSubmit={(e) => { handleSubmit(onSubmit)(e); sendEmail(e); }}
        name="contact"
        className="flex flex-col w-50">
        <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
          Contact
        </h2>
        <p className="leading-relaxed mb-5">
        On my contact page, I provide a convenient way for you to get in touch with me. Whether you have a project idea, a question, or simply want to say hello, I'm always ready to listen and collaborate. 
        Feel free to fill out the contact form with your name, email address, and message, and I'll make sure to respond promptly.
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"  {...register('name', { required: true, minLength: 3 })}
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:brightness-200"
          />  {errors.name && errors.name.type === 'required' && (
            <div>Required</div>
          )}
          {errors.name && errors.name.type === 'minLength' && (
            <div>Name must be at least 3 characters.</div>
          )}
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
            name="message"   {...register('message', { required: true, minLength: 5 })}
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out hover:brightness-200"
          />  {errors.message && errors.message.type === 'required' && (
            <div>Required</div>
          )}
          {errors.message && errors.message.type === 'minLength' && (
            <div>Message must be at least 5 characters.</div>
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Submit
        </button>
      </form>
    </div>
  </section>
  );
}
}
