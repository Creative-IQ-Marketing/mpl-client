import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Privacy Policy | Morales Padia Law"
        description="Privacy Policy for Morales Padia Law PLLC, San Antonio TX."
        canonical="https://www.moralespadialaw.com/privacy-policy"
        robots="noindex, nofollow"
      />
      <div className="pt-32 pb-20">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-8">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400 mb-10">
            Last updated: July 12, 2025
          </p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-serif font-bold text-mpl-navy mb-4">
                1. Information We Collect
              </h2>
              <p className="leading-relaxed">
                Morales Padia Law PLLC ("we," "us," or "our") collects
                information you provide directly when you contact us, submit a
                consultation request, or communicate with our firm. This may
                include your name, email address, phone number, and a
                description of your legal matter.
              </p>
              <p className="mt-4 leading-relaxed">
                We also collect standard technical information through website
                analytics tools (including Google Analytics and Ahrefs
                Analytics) such as IP address, browser type, pages visited, and
                time spent on our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-mpl-navy mb-4">
                2. How We Use Your Information
              </h2>
              <p className="leading-relaxed">
                Information you provide is used solely to respond to your
                inquiry, schedule a consultation, and provide legal services.
                We do not sell, rent, or share your personal information with
                third parties for marketing purposes.
              </p>
              <p className="mt-4 leading-relaxed">
                Communications with our attorneys may be protected by the
                attorney-client privilege. We take the confidentiality of all
                client communications seriously.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-mpl-navy mb-4">
                3. Cookies and Analytics
              </h2>
              <p className="leading-relaxed">
                Our website uses cookies and similar tracking technologies to
                improve your browsing experience and analyze site traffic. You
                may disable cookies in your browser settings; however, some
                features of the site may not function properly without them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-mpl-navy mb-4">
                4. Third-Party Services
              </h2>
              <p className="leading-relaxed">
                Our site may include links to third-party websites. We are not
                responsible for the privacy practices of those sites. We
                encourage you to review the privacy policies of any third-party
                sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-mpl-navy mb-4">
                5. Data Security
              </h2>
              <p className="leading-relaxed">
                We implement reasonable administrative, technical, and physical
                safeguards to protect your information from unauthorized access
                or disclosure. No method of internet transmission is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-mpl-navy mb-4">
                6. Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy, please contact
                us at:
              </p>
              <div className="mt-4 p-6 border border-gray-200 rounded-sm">
                <p className="font-semibold text-mpl-navy">Morales Padia Law PLLC</p>
                <p>45 NE Loop 410, Suite 307</p>
                <p>San Antonio, TX 78216</p>
                <a
                  href="mailto:info@moralespadialaw.com"
                  className="text-mpl-blue hover:text-mpl-navy transition-colors"
                >
                  info@moralespadialaw.com
                </a>
                <br />
                <a
                  href="tel:7262044044"
                  className="text-mpl-blue hover:text-mpl-navy transition-colors"
                >
                  (726) 204-4044
                </a>
              </div>
            </section>
          </div>

          <div className="mt-12">
            <Link
              to="/"
              className="text-mpl-blue font-semibold hover:text-mpl-navy transition-colors"
            >
              ← Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
