import React, { useState } from 'react';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    referral: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you shortly.');
  };

  return (
    <div id="consultation" className="bg-white p-8 md:p-10 rounded-xl shadow-xl">
      <h3 className="text-2xl font-serif font-bold text-mpl-navy mb-2">Schedule a Consultation</h3>
      <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-mpl-blue focus:border-transparent outline-none transition-shadow"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-mpl-blue focus:border-transparent outline-none transition-shadow"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-mpl-blue focus:border-transparent outline-none transition-shadow"
              placeholder="(123) 456-7890"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
          <select
            id="referral"
            name="referral"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-mpl-blue focus:border-transparent outline-none transition-shadow bg-white"
            value={formData.referral}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="google">Google Search</option>
            <option value="social">Social Media</option>
            <option value="friend">Friend/Family Referral</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Brief Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-mpl-blue focus:border-transparent outline-none transition-shadow resize-none"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <button type="submit" className="w-full btn-primary py-3 text-lg mt-2">
          Request Consultation
        </button>
        
        <p className="text-xs text-gray-400 mt-4 text-center">
          Disclaimer: The use of the Internet or this form for communication with the firm or any individual member of the firm does not establish an attorney-client relationship.
        </p>
      </form>
    </div>
  );
};

export default ConsultationForm;
