import React from 'react';
import { Users, Scale, FileText, Gavel, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'family-law',
      title: 'Family Law',
      icon: Users,
      description: 'We provide compassionate support for all family-related legal matters.',
      items: ['Divorce (Contested & Uncontested)', 'Child Custody & Visitation', 'Child Support', 'Adoption', 'Prenuptial Agreements', 'Protective Orders']
    },
    {
      id: 'estate-planning',
      title: 'Estate Planning',
      icon: FileText,
      description: 'Secure your future and protect your loved ones with comprehensive estate planning.',
      items: ['Wills & Trusts', 'Power of Attorney', 'Medical Directives', 'Asset Protection', 'Legacy Preservation', 'Guardianship Designations']
    },
    {
      id: 'probate-law',
      title: 'Probate Law',
      icon: Scale,
      description: 'Navigating the probate process can be complex. We guide you every step of the way.',
      items: ['Probate Administration', 'Estate Settlement', 'Heirship Determinations', 'Will Contests', 'Small Estate Affidavits', 'Executor Assistance']
    },
    {
      id: 'criminal-law',
      title: 'Criminal Defense',
      icon: Gavel,
      description: 'Aggressive defense strategies to protect your rights and your future.',
      items: ['DWI/DUI Defense', 'Drug Charges', 'Domestic Violence', 'Expungement / Non-Disclosure', 'Assault Charges', 'Theft & Property Crimes']
    }
  ];

  return (
    <div className="pt-8 pb-20">
      <div className="bg-mpl-navy text-white py-20 mb-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Practice Areas</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Expert legal representation tailored to your unique needs.
          </p>
        </div>
      </div>

      <div className="container-custom space-y-24">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={service.id} id={service.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="flex-1">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative overflow-hidden">
                  <div className="absolute -right-10 -bottom-10 text-gray-200 opacity-50">
                    <Icon size={200} />
                  </div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-mpl-blue rounded-lg flex items-center justify-center text-white mb-6 shadow-lg">
                      <Icon size={32} />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-mpl-navy mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.items.map((item, i) => (
                        <div key={i} className="flex items-center text-gray-700 font-medium">
                          <CheckCircle size={18} className="text-mpl-lightBlue mr-3 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                 {/* Placeholder for service specific image */}
                 <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] bg-gray-200 relative">
                    <div className="absolute inset-0 bg-mpl-navy/10 mix-blend-multiply"></div>
                    <img 
                      src={`https://source.unsplash.com/random/800x600?law,${service.id}`} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}} 
                    />
                 </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-24 bg-mpl-gray py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif font-bold text-mpl-navy mb-6">Need Legal Assistance?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't navigate the legal system alone. Contact Morales Padia Law today to schedule a consultation and discuss your case.
          </p>
          <a href="/#consultation" className="btn-primary inline-block">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
