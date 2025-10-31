"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Facebook, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const socialLinks = [
    { 
      icon: <Mail size={20} />, 
      href: "mailto:muhamadyajidrizky@gmail.com",
      label: "Email"
    },
    { 
      icon: <Facebook size={20} />, 
      href: "https://web.facebook.com/Frientia", 
      target: "_blank",
      label: "Facebook"
    },
    { 
      icon: <Github size={20} />, 
      href: "https://github.com/Frientia", 
      target: "_blank",
      label: "GitHub"
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="text-purple-400" size={20} />,
      text: "muhamadyajidrizky@gmail.com",
      href: "mailto:muhamadyajidrizky@gmail.com"
    },
    {
      icon: <Phone className="text-purple-400" size={20} />,
      text: "+62 812-3456-7890",
      href: "tel:+6281234567890"
    },
    {
      icon: <MapPin className="text-purple-400" size={20} />,
      text: "Indonesia",
      href: "#"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen px-4 md:px-6 bg-gray-900 text-white py-8 md:py-12"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold text-purple-400 mb-4 md:mb-6 text-center"
      >
        Contact Me
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-300 text-center max-w-2xl mb-8 md:mb-12 text-sm md:text-base px-2"
      >
        You can reach me via email or connect on social media. Let's collaborate and create something awesome!
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 w-full max-w-6xl">
        {/* Contact Information - Stack on mobile, side by side on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6 md:space-y-8 order-2 lg:order-1"
        >
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 text-center lg:text-left">
            Get In Touch
          </h3>
          
          {/* Contact Info */}
          <div className="space-y-3 md:space-y-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                className="flex items-center gap-3 md:gap-4 text-gray-300 hover:text-white transition-colors duration-300 group text-sm md:text-base"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-purple-600 transition-colors duration-300 flex-shrink-0">
                  {info.icon}
                </div>
                <span className="break-words">{info.text}</span>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-4 md:pt-6">
            <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 text-center lg:text-left">
              Follow Me
            </h4>
            <div className="flex gap-3 md:gap-4 justify-center lg:justify-start">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.target || "_self"}
                  rel={link.target ? "noopener noreferrer" : ""}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center text-purple-400 hover:text-purple-300 p-2 md:p-3 rounded-lg md:rounded-xl bg-gray-800 hover:bg-gray-700 shadow-lg transition-all duration-300 group"
                  aria-label={link.label}
                >
                  {link.icon}
                  <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-gray-800 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-xl order-1 lg:order-2"
        >
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 text-center lg:text-left">
            Send Message
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors duration-300 text-sm md:text-base"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors duration-300 text-sm md:text-base"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors duration-300 text-sm md:text-base"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors duration-300 resize-none text-sm md:text-base"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 md:py-3 px-4 md:px-6 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </motion.button>

            {/* Status Message */}
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 md:p-4 rounded-lg text-center text-sm ${
                  submitStatus === "success" 
                    ? "bg-green-600 text-white" 
                    : "bg-red-600 text-white"
                }`}
              >
                {submitStatus === "success" 
                  ? "✅ Message sent successfully!" 
                  : "❌ Failed to send message. Please try again."}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}