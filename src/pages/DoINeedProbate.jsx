import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import CleanServiceHero from "../components/CleanServiceHero";

const DoINeedProbate = () => {
  return (
    <div>
      <CleanServiceHero
        title="Do You Need Probate in Texas?"
        opening={[
          "One of the first questions people ask is whether probate is even necessary.",
          "The answer depends on how assets were owned and whether there is a will.",
        ]}
        infoTitle="What It Means"
        infoDescription="Not every estate requires full probate. Some assets can pass outside of probate, while others require court involvement."
      />

      {/* Main Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-6">
                Determining if Probate is Necessary
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In Texas, not all estates must go through probate. Whether you
                need probate depends on several factors, including the size and
                nature of your estate, how property is titled, and whether you
                have proper estate planning documents in place.
              </p>

              <div className="space-y-8 my-12">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Estate Size
                    </h3>
                    <p className="text-gray-700">
                      Texas allows small estates (under $75,000 in certain
                      cases) to avoid full probate through affidavit procedures.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Property Title and Ownership
                    </h3>
                    <p className="text-gray-700">
                      Property held in joint tenancy, as community property with
                      right of survivorship, or in a trust bypasses probate
                      automatically.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Beneficiary Designations
                    </h3>
                    <p className="text-gray-700">
                      Life insurance, retirement accounts, and bank accounts
                      with beneficiary designations pass directly to named
                      beneficiaries without probate.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Existing Estate Plan
                    </h3>
                    <p className="text-gray-700">
                      A properly funded living trust can eliminate the need for
                      probate entirely while providing privacy and control
                      during incapacity.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* When Probate IS Needed */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-6">
                When Probate is Necessary
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-mpl-blue font-bold">•</span>
                  <span>
                    Estate includes real property (land, homes) in Texas solely
                    in the deceased's name
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mpl-blue font-bold">•</span>
                  <span>
                    Significant assets with no beneficiary designation and not
                    in a trust
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mpl-blue font-bold">•</span>
                  <span>
                    Estate value exceeds $75,000 and no valid will exists
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mpl-blue font-bold">•</span>
                  <span>
                    Will contests or disputes among heirs require court
                    intervention
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mpl-blue font-bold">•</span>
                  <span>
                    Estate has significant debts or creditor claims that need
                    resolution
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Probate Alternatives */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-6">
                Probate Alternatives in Texas
              </h2>
              <p className="text-gray-700 mb-6">
                Morales Padia Law advocates estate planning to avoid probate.
                Several alternatives may be available:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-mpl-gold pl-4">
                  <h3 className="text-lg font-bold text-mpl-navy mb-2">
                    Small Estate Affidavit
                  </h3>
                  <p className="text-gray-700">
                    For estates under $75,000, heirs can use an affidavit to
                    collect estate assets without formal probate.
                  </p>
                </div>
                <div className="border-l-4 border-mpl-gold pl-4">
                  <h3 className="text-lg font-bold text-mpl-navy mb-2">
                    Affidavit of Heirship
                  </h3>
                  <p className="text-gray-700">
                    Used to transfer real property when someone dies without a
                    valid will and no other valid claims exist.
                  </p>
                </div>
                <div className="border-l-4 border-mpl-gold pl-4">
                  <h3 className="text-lg font-bold text-mpl-navy mb-2">
                    Living Trust
                  </h3>
                  <p className="text-gray-700">
                    Transfer assets to a trust during your lifetime to avoid
                    probate entirely and maintain privacy.
                  </p>
                </div>
                <div className="border-l-4 border-mpl-gold pl-4">
                  <h3 className="text-lg font-bold text-mpl-navy mb-2">
                    Joint Ownership
                  </h3>
                  <p className="text-gray-700">
                    Property held jointly with right of survivorship passes
                    automatically to surviving owners.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-linear-to-r from-mpl-navy to-mpl-blue rounded-lg p-12 text-white text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Need Help Determining Your Estate Planning Strategy?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our experienced estate planning attorneys can analyze your
              specific situation and recommend the best approach to protect your
              assets and provide for your loved ones.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-mpl-navy px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:-translate-y-1 text-lg"
            >
              Schedule Your Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-6">
              Contact Morales Padia Law
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Let us help you understand your probate situation and develop a
              comprehensive estate plan that works for you.
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

export default DoINeedProbate;
