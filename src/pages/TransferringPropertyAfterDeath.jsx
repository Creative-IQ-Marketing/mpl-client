import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import CleanServiceHero from "../components/CleanServiceHero";

const TransferringPropertyAfterDeath = () => {
  return (
    <div>
      <CleanServiceHero
        title="How to Transfer Property After Death in Texas"
        opening={[
          "One of the most common concerns after a loss is what happens to property.",
          "Property may be transferred through probate, muniment of title, affidavit of heirship, or small estate affidavit depending on your situation.",
        ]}
        infoTitle="What It Means"
        infoDescription="The right method for property transfer depends on the estate size, whether there was a will, and the property type."
      />

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-6">
                Property Transfer Methods
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The method used to transfer property after death depends on how
                the property was titled, whether the person left a will or
                trust, and the size and nature of the estate. Here are the main
                options:
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Probate (Through a Will)
                    </h3>
                    <p className="text-gray-700">
                      Formal court process where the will is validated, executor
                      appointed, and property distributed according to the
                      will's instructions. Most common for larger estates or
                      property held solely in the deceased's name.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Trust Transfer
                    </h3>
                    <p className="text-gray-700">
                      When property is held in a living trust, title transfers
                      to the trust beneficiaries without probate or court
                      involvement. Often faster and more private than probate.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Joint Tenancy with Right of Survivorship
                    </h3>
                    <p className="text-gray-700">
                      Property automatically transfers to the surviving joint
                      tenant(s) upon death. No probate required.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Community Property with Right of Survivorship
                    </h3>
                    <p className="text-gray-700">
                      In Texas, married couples can hold property as community
                      property with survivorship rights, allowing automatic
                      transfer to the surviving spouse.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Affidavit of Heirship
                    </h3>
                    <p className="text-gray-700">
                      For intestate estates (no will), an affidavit can
                      establish heirship and transfer real property without
                      formal probate.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Small Estate Affidavit
                    </h3>
                    <p className="text-gray-700">
                      For estates under $75,000, heirs can use this simplified
                      procedure to collect assets without probate.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-6">
                Factors in Choosing Your Transfer Method
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    <strong>Estate size:</strong> Smaller estates may qualify
                    for simplified procedures
                  </span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    <strong>Property type:</strong> Real property, personal
                    property, or combination
                  </span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    <strong>Property title:</strong> How the property is
                    currently held
                  </span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    <strong>Existing documents:</strong> Will, trust, or other
                    estate planning documents
                  </span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    <strong>Creditor claims:</strong> Whether there are
                    significant estate debts
                  </span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    <strong>Potential disputes:</strong> Whether conflicts among
                    heirs are anticipated
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-6">
                Why Plan Ahead for Property Transfer
              </h2>
              <p className="text-gray-700 mb-6">
                Morales Padia Law advocates estate planning to avoid probate.
                Proper planning ensures:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Smooth property transfer according to your wishes
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Minimized taxes and probate costs
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Privacy and confidentiality of your estate
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Faster transfer to your beneficiaries
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Less stress and confusion for your family
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-mpl-navy to-mpl-blue rounded-lg p-12 text-white text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ensure Smooth Property Transfer
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our probate and estate planning attorneys can help you choose the
              best method for your situation and ensure proper execution.
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-6">
              Contact Morales Padia Law
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Let us help you navigate the property transfer process with
              expertise and care.
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

export default TransferringPropertyAfterDeath;
