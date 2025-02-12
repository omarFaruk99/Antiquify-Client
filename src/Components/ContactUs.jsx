import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., send data to a server)
    console.log("Form submitted", formData);
  };

  return (
    <div className="my-16 px-4">
      <h2 className="text-4xl font-semibold text-center text-yellow-400 mb-8">
        Contact Us
      </h2>
      <div className="max-w-sm mx-auto bg-base-100 p-6 rounded-lg shadow-lg border">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium text-base">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Omar Faruk"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block  font-medium text-base">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="omar@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium text-base">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-yellow-400 border-none text-black hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
