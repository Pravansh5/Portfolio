import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pyxfdds",  // Replace with your EmailJS Service ID
        "template_2r7gxk6",  // Replace with your EmailJS Template ID
        form.current,
        "xm-ZKB5tf-475B1eY"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
  id="contact"
  className="flex flex-col items-center justify-center py-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto bg-skills-gradient clip-path-custom"
>
  {/* Section Title */}
  <div className="text-center mb-16">
    <div className="inline-block">
      <h2 className="text-4xl font-bold text-white">CONTACT</h2>
      <div className="h-1 bg-[#c7f837] mt-1"></div>
    </div>
    <p className="text-gray-400 mt-4 text-lg font-semibold">
      I’d love to hear from you—reach out for any opportunities or questions!
    </p>
  </div>

  {/* Contact Form */}
  <div className="mt-8 w-full max-w-md bg-[#0d081f] rounded-lg border border-[#c7f837] shadow-[0_0_25px_2px_rgba(199,248,55,0.25)]">
    <h3 className="text-xl font-semibold text-white text-center pt-6">
      Connect With Me 
    </h3>
    <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4 p-6">
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-[#c7f837]"
      />
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-[#c7f837]"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-[#c7f837]"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows="4"
        required
        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-[#c7f837]"
      />

      {/* Send Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#c7f837] to-[#a7ff4d] py-3 text-black font-semibold rounded-md hover:opacity-90 transition"
      >
        Send
      </button>
    </form>
  </div>
</section>

  );
};

export default Contact;
