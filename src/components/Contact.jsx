import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

/*
 * ============================================================================
 * EMAILJS SETUP INSTRUCTIONS
 * ============================================================================
 * Follow these steps to connect this form to your Gmail (rs2047552@gmail.com):
 *
 * 1. Create an EmailJS Account:
 *    - Go to https://www.emailjs.com/ and sign up for a free account.
 * 
 * 2. Connect Your Gmail:
 *    - In the EmailJS dashboard, go to "Email Services".
 *    - Click "Add New Service" and select "Gmail".
 *    - Connect your rs2047552@gmail.com account and click "Create Service".
 *    - Copy the "Service ID" (e.g., service_xxxxx) and paste it into the .env file.
 *
 * 3. Create an Email Template:
 *    - Go to "Email Templates" and click "Create New Template".
 *    - Design your email. You MUST use these exact variable names in double curly braces:
 *      - Sender Name: {{name}}
 *      - Sender Email: {{email}}
 *      - Message: {{message}}
 *    - Example Template Body:
 *      You got a new message from {{name}} ({{email}}):
 *      {{message}}
 *    - Save the template, copy the "Template ID" (e.g., template_xxxxx), and paste it into .env.
 * 
 * 4. Get Your Public Key:
 *    - Go to "Account" -> "API Keys".
 *    - Copy the "Public Key" and paste it into the .env file.
 * ============================================================================
 */

const contactInfo = [
  {
    icon: <FaPhone className="w-6 h-6" />,
    label: 'Phone Number',
    value: '+91 8707206905',
    href: 'tel:+918707206905',
  },
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    label: 'Email Address',
    value: 'rs2047552@gmail.com',
    href: 'mailto:rs2047552@gmail.com',
  },
  {
    icon: <FaLinkedin className="w-6 h-6" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/raja-jai-singh-465bb5241',
    href: 'https://www.linkedin.com/in/raja-jai-singh-465bb5241',
  },
  {
    icon: <FaGithub className="w-6 h-6" />,
    label: 'GitHub',
    value: 'github.com/raja123singh',
    href: 'https://github.com/raja123singh',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);
    
    try {
      // Fetch credentials from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS credentials are missing. Please check your .env file.");
      }

      // Prepare the data to match the EmailJS template variables
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      // Send the email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
      
    } catch (error) {
      console.error('FAILED to send email:', error);
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Contact
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Interested in working together or hiring me? Let’s connect. Feel free to contact me regarding job opportunities or professional networking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={info.href}
                target={info.href.startsWith('http') ? "_blank" : undefined}
                rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (!info.href.startsWith('http')) {
                    e.preventDefault();
                  }
                }}
                className="group relative p-1 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800 hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
              >
                <div className="h-full w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl p-6 flex flex-col items-center text-center group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 transition-all duration-300">
                  <div className="p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    {info.label}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium break-all">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 dark:opacity-30"></div>
            <div className="relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-2xl p-8 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-900/50 border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-900/50 border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-900/50 border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white resize-none transition-all`}
                    placeholder="How can I help you?"
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold flex items-center justify-center space-x-2 transform hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-800 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute bottom-0 left-0 right-0 transform translate-y-full pt-4"
                    >
                      <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg flex items-center space-x-3 border border-green-200 dark:border-green-800">
                        <FaCheckCircle className="w-5 h-5 flex-shrink-0" />
                        <p className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                      </div>
                    </motion.div>
                  )}
                  {isError && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute bottom-0 left-0 right-0 transform translate-y-full pt-4"
                    >
                      <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-4 rounded-lg flex items-center space-x-3 border border-red-200 dark:border-red-800">
                        <FaExclamationCircle className="w-5 h-5 flex-shrink-0" />
                        <p className="text-sm font-medium">Failed to send message. Please check your config or try again later.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
