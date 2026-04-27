import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { submitConsultationToGHL } from '../services/ghl';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    referral: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await submitConsultationToGHL(formData, {
        source: 'website_consultation_form',
        pagePath: window.location.pathname,
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
         setIsSubmitted(false);
         setFormData({ name: '', email: '', phone: '', referral: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('Consultation form submission failed:', error);
      setIsSubmitting(false);
      setSubmitError('We could not send your request right now. Please call us at (726) 204-4044.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center justify-center text-center h-[600px] border border-gray-100">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-serif text-mpl-navy font-bold mb-4">Message Sent!</h3>
        <p className="text-gray-600 max-w-md">
          Thank you for reaching out. A member of our team will review your information and contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <div id="consultation" className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 relative group">
      {/* Decorative top border */}
      
      <div className="p-8 md:p-12 relative z-10">
        <div className="mb-8">
          <h3 className="text-3xl font-serif font-bold text-mpl-navy mb-3">Schedule a Consultation</h3>
          <p className="text-gray-600">
            Tell us about your case. Your information is secure and confidential.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="group">
            <label htmlFor="name" className="block text-sm font-semibold text-mpl-navy mb-2 uppercase tracking-wider">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-mpl-blue/20 focus:border-mpl-blue outline-none transition-all duration-300"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-mpl-navy mb-2 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-mpl-blue/20 focus:border-mpl-blue outline-none transition-all duration-300"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-mpl-navy mb-2 uppercase tracking-wider">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-mpl-blue/20 focus:border-mpl-blue outline-none transition-all duration-300"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="referral" className="block text-sm font-semibold text-mpl-navy mb-2 uppercase tracking-wider">How did you hear about us?</label>
            <div className="relative">
              <select
                id="referral"
                name="referral"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-mpl-blue/20 focus:border-mpl-blue outline-none transition-all duration-300 appearance-none cursor-pointer"
                value={formData.referral}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="google">Google Search</option>
                <option value="social">Social Media</option>
                <option value="referral">Friend/Family Referral</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-mpl-navy mb-2 uppercase tracking-wider">Brief Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-mpl-blue/20 focus:border-mpl-blue outline-none transition-all duration-300 resize-none"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-mpl-navy text-white font-bold py-4 rounded-lg shadow-lg hover:bg-mpl-blue hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {isSubmitting ? (
              <span className="animate-pulse">Sending...</span>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          {submitError && (
            <p className="text-sm text-red-600" role="alert">
              {submitError}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
