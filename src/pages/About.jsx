import React from 'react';

const About = () => {
  return (
    <div className="pt-8 pb-20">
      <div className="bg-mpl-navy text-white py-20 mb-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Morales Padia Law</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Award-winning, women-led, bilingual team dedicated to compassionate, expert legal guidance.
          </p>
        </div>
      </div>

      <div className="container-custom">
        {/* Firm Overview */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-3xl font-serif font-bold text-mpl-navy mb-8">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At Morales Padia Law, we believe that every client deserves a legal team that not only understands the law but also understands their unique situation. 
            Our mission is to protect your rights and achieve the best possible outcome for your case through aggressive representation and compassionate counsel.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you are facing a complex family law matter, planning for the future of your estate, or navigating the criminal justice system, 
            we stand by your side every step of the way. We are proud to be a women-led firm serving the San Antonio community with integrity and dedication.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-mpl-navy mb-12 text-center">Our Attorneys</h2>
          
          {/* Trisha */}
          <div className="flex flex-col md:flex-row gap-12 mb-20 items-start">
            <div className="w-full md:w-1/3">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Trisha Morales Padia" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-3xl font-serif font-bold text-mpl-navy mb-2">Trisha Morales Padia</h3>
              <p className="text-xl text-mpl-blue font-medium mb-6">Founder & CEO</p>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Trisha Morales Padia founded Morales Padia Law with a vision to provide accessible, high-quality legal services to families in San Antonio. 
                  Licensed in Texas, she has dedicated her career to helping clients navigate the emotional and legal complexities of family law and estate planning.
                </p>
                <p>
                  With years of experience handling contested divorces, custody battles, and intricate estate matters, Trisha is known for her strategic approach 
                  and her ability to find solutions even in the most contentious situations. She is a fierce advocate for her clients in the courtroom and a 
                  compassionate advisor in the conference room.
                </p>
                
                <div className="pt-4">
                  <h4 className="font-bold text-mpl-navy mb-2">Practice Areas:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Family Law</li>
                    <li>Divorce & Child Custody</li>
                    <li>Estate Planning & Probate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Aiden */}
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3 md:order-2">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Aiden Gamble" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:order-1">
              <h3 className="text-3xl font-serif font-bold text-mpl-navy mb-2">Aiden Gamble</h3>
              <p className="text-xl text-mpl-blue font-medium mb-6">Associate Attorney</p>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Aiden Gamble brings a dynamic perspective to the firm, specializing in Criminal Defense and Family Law. 
                  He is committed to ensuring that every client receives a fair defense and that their rights are upheld throughout the legal process.
                </p>
                <p>
                  Aiden's approach is detailed and client-focused. He understands that criminal charges or family disputes can be life-altering, 
                  and he works tirelessly to achieve the best possible outcomes, whether through negotiation or litigation.
                </p>
                
                <div className="pt-4">
                  <h4 className="font-bold text-mpl-navy mb-2">Practice Areas:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Criminal Defense (DWI, Drug Charges)</li>
                    <li>Domestic Violence Defense</li>
                    <li>Family Law Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
