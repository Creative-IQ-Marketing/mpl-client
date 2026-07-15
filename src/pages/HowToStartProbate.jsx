import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import CleanServiceHero from "../components/CleanServiceHero";

const HowToStartProbate = () => {
  return (
    <div>
      <CleanServiceHero
        title="How to Start Probate in Texas"
        opening={[
          "Starting probate can feel confusing, especially if you have never gone through the process before.",
          "Knowing the first steps can make everything more manageable.",
        ]}
        infoTitle="The Process"
        infoDescription="Typical steps include: Filing an application with the court, Notifying interested parties, Attending a court hearing, and Receiving authority to act on behalf of the estate."
      />

      {/* Main Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-6">
                Steps to Initiate Probate
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The Texas probate process follows specific procedural
                requirements. Here's a comprehensive overview of the typical
                steps involved:
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Gather the Necessary Documents
                    </h3>
                    <p className="text-gray-700">
                      Collect the original will (if one exists), death
                      certificate, and information about all assets and debts.
                      Having complete documentation ready expedites the filing
                      process.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      File the Application for Probate
                    </h3>
                    <p className="text-gray-700">
                      Submit the application to the appropriate Texas county
                      court. This includes filing the will (if any), death
                      certificate, and other required documents with the probate
                      court clerk.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Obtain Letters Testamentary or Letters of Administration
                    </h3>
                    <p className="text-gray-700">
                      Once the court approves your application, you'll receive
                      official court documents authorizing you to act as
                      executor or administrator and access estate assets.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Notify Heirs and Creditors
                    </h3>
                    <p className="text-gray-700">
                      Texas law requires notifying all known heirs and creditors
                      of the probate. This provides an opportunity for creditors
                      to file claims and gives heirs notice of the proceedings.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Inventory Assets and Handle Claims
                    </h3>
                    <p className="text-gray-700">
                      Create a detailed inventory of all estate assets, pay
                      valid creditor claims, estate taxes, and probate expenses
                      from estate funds.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Distribute Assets to Beneficiaries
                    </h3>
                    <p className="text-gray-700">
                      After all claims and taxes are resolved, distribute
                      remaining assets according to the will or Texas succession
                      laws if no will exists.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold shrink-0">
                    7
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      File Final Account and Closing
                    </h3>
                    <p className="text-gray-700">
                      Submit a final accounting to the court detailing all
                      estate transactions, and request court approval to close
                      the probate estate.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Timeline and Details */}
            <motion.div
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-6">
                Probate Timeline
              </h2>
              <p className="text-gray-700 mb-6">
                Texas probate timelines vary based on estate complexity and
                whether disputes arise. Generally:
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-mpl-navy">
                      Simple estates:
                    </span>{" "}
                    <span className="text-gray-700">
                      Can close in 4-8 months
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-mpl-navy">
                      Moderate estates:
                    </span>{" "}
                    <span className="text-gray-700">May take 8-18 months</span>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-mpl-navy">
                      Complex estates:
                    </span>{" "}
                    <span className="text-gray-700">
                      May take 18+ months or longer
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Why Work With Us */}
            <motion.div
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-6">
                Why Choose Morales Padia Law for Probate
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Comprehensive guidance through every step of the process
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Expert handling of court filings and documentation
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Efficient estate administration to minimize delays
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Protection of your interests and those of beneficiaries
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Representation in disputes or complications
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="bg-linear-to-r from-mpl-navy to-mpl-blue rounded-lg p-12 text-white text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Start the Probate Process?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our experienced probate attorneys handle the details while you
              focus on what matters most. Contact us today for a consultation.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-mpl-navy px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:-translate-y-1 text-lg"
            >
              Schedule Your Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-6">
              Contact Morales Padia Law
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Our probate specialists are ready to guide you through the process
              with expertise and compassion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7262044044"
                className="bg-mpl-navy text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-mpl-blue transition-all transform hover:-translate-y-1 text-lg inline-flex items-center justify-center gap-2"
              >
                Call (726) 204-4044
              </a>
              <Link
                to="/contact"
                className="bg-white text-mpl-navy border-2 border-mpl-navy px-8 py-4 rounded-full font-bold hover:bg-mpl-navy hover:text-white transition-all text-lg"
              >
                Send a Message
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowToStartProbate;
