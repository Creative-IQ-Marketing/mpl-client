import React from "react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="pt-32 pb-20">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-8">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-400 mb-10">
            Last updated: July 12, 2025
          </p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-serif font-bold text-mpl-navy mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="leading-relaxed">
                By accessing or using the Morales Padia Law PLLC website
                ("Site"), you agree to be bound by these Terms of Service. If
                you do not agree with any part of these terms, please do not use
                the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-mpl-navy mb-4">
                2. No Attorney-Client Relationship
              </h2>
              <p className="leading-relaxed">
                The information provided on this Site is for general
                informational purposes only and does not constitute legal
                advice. Viewing this Site or submitting a contact form does not
                create an attorney-client relationship. An attorney-client
                relationship is formed only upon execution of a written
                engagement agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-mpl-navy mb-4">
                3. No Legal Advice
              </h2>
              <p className="leading-relaxed">
                Nothing on this Site should be construed as legal advice. Please
                consult a licensed attorney for guidance specific to your
                individual situation. Laws vary by jurisdiction and
                circumstances; do not rely on general information as legal
                advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-mpl-navy mb-4">
                4. Intellectual Property
              </h2>
              <p className="leading-relaxed">
                All content on this Site, including text, graphics, logos, and
                images, is the property of Morales Padia Law PLLC and is
                protected by applicable copyright and trademark laws.
                Unauthorized reproduction or use of any content is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-mpl-navy mb-4">
                5. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                Morales Padia Law PLLC shall not be liable for any damages
                arising from your use of or reliance on information contained on
                this Site. We make no representations about the accuracy,
                completeness, or timeliness of any information on the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-mpl-navy mb-4">
                7. Changes to Terms
              </h2>
              <p className="leading-relaxed">
                We reserve the right to update these Terms of Service at any
                time. Changes will be posted on this page with a revised "Last
                updated" date. Continued use of the Site constitutes acceptance
                of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-mpl-navy mb-4">
                8. Contact Us
              </h2>
              <p className="leading-relaxed">
                Questions about these Terms of Service should be directed to:
              </p>
              <div className="mt-4 p-6 border border-gray-200 rounded-sm">
                <p className="font-semibold text-mpl-navy">
                  Morales Padia Law PLLC
                </p>
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

export default TermsOfService;
