import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import CleanServiceHero from "../components/CleanServiceHero";

const AffidavitOfHeirship = () => {
  return (
    <div className="">
      <CleanServiceHero
        title="Affidavit of Heirship in Texas"
        opening={[
          "Transferring property after someone passes away can be complicated, especially without formal probate.",
          "An affidavit of heirship is used to establish who inherits property, often real estate.",
        ]}
        infoTitle="What It Is"
        infoDescription="An affidavit of heirship is used to establish legal heirs and can be used for property transfer when someone dies without a will."
      />

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-6">
                What is an Affidavit of Heirship?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                An Affidavit of Heirship is a legal document that identifies the
                heirs of a person who died intestate (without a valid will).
                When properly executed, it can be used to transfer real property
                to the heirs without going through full probate proceedings.
                This procedure is particularly useful for straightforward
                situations with no disputes.
              </p>

              <div className="space-y-6 my-12">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Establishes Legal Heirs
                    </h3>
                    <p className="text-gray-700">
                      Documents who is entitled to inherit based on Texas
                      intestacy law.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Transfers Property Title
                    </h3>
                    <p className="text-gray-700">
                      Can be used with county records to transfer real estate
                      directly to the heirs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Avoids Full Probate
                    </h3>
                    <p className="text-gray-700">
                      Provides a simplified alternative when probate isn't
                      available or practical.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Cost Effective
                    </h3>
                    <p className="text-gray-700">
                      Generally less expensive than full probate proceedings.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-6">
                When You Can Use an Affidavit of Heirship
              </h2>
              <p className="text-gray-700 mb-6">
                An Affidavit of Heirship can typically be used when:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <span className="text-gray-700">
                    The deceased died intestate (no valid will)
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <span className="text-gray-700">
                    No prior probate or administration took place
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <span className="text-gray-700">
                    The property is only real estate (land or buildings)
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Certain waiting periods have been satisfied
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <span className="text-gray-700">
                    No creditor disputes exist
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-6">
                The Affidavit of Heirship Process
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-mpl-gold pl-4">
                  <h3 className="text-lg font-bold text-mpl-navy mb-2">
                    Document Preparation
                  </h3>
                  <p className="text-gray-700">
                    We prepare the affidavit with detailed family information
                    and heirship documentation.
                  </p>
                </div>

                <div className="border-l-4 border-mpl-gold pl-4">
                  <h3 className="text-lg font-bold text-mpl-navy mb-2">
                    Execution and Notarization
                  </h3>
                  <p className="text-gray-700">
                    The affidavit must be executed by qualified witnesses and
                    notarized to be legally valid.
                  </p>
                </div>

                <div className="border-l-4 border-mpl-gold pl-4">
                  <h3 className="text-lg font-bold text-mpl-navy mb-2">
                    Recording with County Records
                  </h3>
                  <p className="text-gray-700">
                    File the affidavit with the county clerk's office where the
                    property is located.
                  </p>
                </div>

                <div className="border-l-4 border-mpl-gold pl-4">
                  <h3 className="text-lg font-bold text-mpl-navy mb-2">
                    Title Transfer
                  </h3>
                  <p className="text-gray-700">
                    Use the recorded affidavit to transfer the property title to
                    the heirs' names.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="bg-linear-to-r from-mpl-navy to-mpl-blue rounded-lg p-12 text-white text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Establish Your Heirship Rights
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our probate attorneys can guide you through the heirship process
              and help transfer property efficiently.
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

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-6">
              Contact Morales Padia Law
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              We're ready to help you establish heirship and transfer property
              through the affidavit process.
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

export default AffidavitOfHeirship;
