import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import ConsultationForm from "../ConsultationForm";

const Consultation = () => {
  const benefits = [
    "Compassionate, client-centered approach",
    "Award-winning legal representation",
    "Bilingual team (English & Spanish)",
    "Proven track record of success",
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "(210) 555-0123",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@moralespadialaw.com",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "San Antonio, TX",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-mpl-blue/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-mpl-lightBlue/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-mpl-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Content Section */}
          <div className="lg:sticky lg:top-20">
            {/* Section Header */}
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-mpl-navy mb-6 leading-tight">
                Ready to Discuss Your Case?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand that legal issues can be overwhelming. Our team is
                here to listen, understand your situation, and provide the clear
                guidance you need to move forward.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-12">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 text-base lg:text-lg leading-relaxed pt-0.5">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Get in Touch
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={index}
                      className="group relative rounded-2xl overflow-hidden"
                    >
                      {/* Card Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 z-0" />
                      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-0" />

                      {/* Card Content */}
                      <div className="relative p-6 border border-gray-200 rounded-2xl group-hover:border-mpl-blue/40 transition-all duration-300">
                        <div className="flex items-start gap-3 mb-2">
                          <IconComponent className="w-5 h-5 text-mpl-navy mt-0.5 flex-shrink-0" />
                          <p className="text-xs font-semibold text-gray-500 uppercase">
                            {info.label}
                          </p>
                        </div>
                        <p className="text-sm lg:text-base font-semibold text-mpl-navy group-hover:text-mpl-blue transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-8 lg:p-12 sticky top-20">
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-mpl-navy mb-2">
                Schedule Your Consultation
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll be in touch within 24 hours
              </p>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
