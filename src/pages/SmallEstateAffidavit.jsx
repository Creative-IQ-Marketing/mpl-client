import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import CleanServiceHero from "../components/CleanServiceHero";

const SmallEstateAffidavit = () => {
  return (
    <>
      <SEO
        title="Small Estate Affidavit in Texas | Morales Padia Law"
        description="Understand how a Small Estate Affidavit can help avoid probate for estates under $75,000 in Texas. Learn the requirements and process."
        keywords="small estate affidavit, small estate Texas, avoid probate"
        url="https://moralespadia.com/small-estate-affidavit"
      />
      <StructuredData
        type="Article"
        data={{
          headline: "Small Estate Affidavit in Texas",
          description:
            "Simplified estate settlement procedure for smaller estates.",
          datePublished: new Date().toISOString().split("T")[0],
        }}
      />

      <div className="">
        <CleanServiceHero
          title="Small Estate Affidavit in Texas"
          opening={[
            "In some cases, you may not need full probate.",
            "A small estate affidavit can offer a simpler, faster option.",
          ]}
          infoTitle="What It Is"
          infoDescription="This is a legal document used to transfer assets when the estate meets certain requirements."
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
                  What is a Small Estate Affidavit?
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  A Small Estate Affidavit is a legal document that allows heirs
                  to collect and distribute estate assets without going through
                  formal probate. This simplified procedure is available for
                  estates that meet specific requirements and can save
                  significant time and expense.
                </p>

                <div className="space-y-6 my-12">
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-mpl-navy mb-2">
                        Faster Process
                      </h3>
                      <p className="text-gray-700">
                        Can be completed in weeks instead of months, without
                        court proceedings.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-mpl-navy mb-2">
                        Cost Savings
                      </h3>
                      <p className="text-gray-700">
                        Significantly lower legal fees and court costs compared
                        to full probate.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-mpl-navy mb-2">
                        Privacy
                      </h3>
                      <p className="text-gray-700">
                        Less formal disclosure of assets and beneficiaries
                        compared to probate.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-mpl-navy mb-2">
                        Creditor Protection
                      </h3>
                      <p className="text-gray-700">
                        Still provides notice to creditors and establishes a
                        claims period for creditor resolution.
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
                  Eligibility Requirements
                </h2>
                <p className="text-gray-700 mb-8">
                  To use the Small Estate Affidavit procedure, the estate must
                  meet several requirements:
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-mpl-gold pl-4">
                    <h3 className="text-lg font-bold text-mpl-navy mb-2">
                      Estate Value
                    </h3>
                    <p className="text-gray-700">
                      The estate's gross value must be $75,000 or less (or in
                      some cases, meet additional qualifying requirements).
                    </p>
                  </div>

                  <div className="border-l-4 border-mpl-gold pl-4">
                    <h3 className="text-lg font-bold text-mpl-navy mb-2">
                      Waiting Period
                    </h3>
                    <p className="text-gray-700">
                      At least 30 days must pass since the person's death and
                      court order (if a will was filed).
                    </p>
                  </div>

                  <div className="border-l-4 border-mpl-gold pl-4">
                    <h3 className="text-lg font-bold text-mpl-navy mb-2">
                      No Pending Probate
                    </h3>
                    <p className="text-gray-700">
                      The estate must not have probate already pending or must
                      meet specific alternatives to probate requirements.
                    </p>
                  </div>

                  <div className="border-l-4 border-mpl-gold pl-4">
                    <h3 className="text-lg font-bold text-mpl-navy mb-2">
                      Debt Requirements
                    </h3>
                    <p className="text-gray-700">
                      The estate must not have substantial debts (beyond funeral
                      expenses and similar obligations).
                    </p>
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
                  The Small Estate Affidavit Process
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-mpl-navy mb-2">
                        Gather Documentation
                      </h3>
                      <p className="text-gray-700">
                        Collect the death certificate, inventory of assets, and
                        information about debts and liabilities.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-mpl-navy mb-2">
                        Prepare the Affidavit
                      </h3>
                      <p className="text-gray-700">
                        Draft the formal affidavit with accurate estate
                        information, typically with assistance from an attorney.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-mpl-navy mb-2">
                        Notify Creditors
                      </h3>
                      <p className="text-gray-700">
                        Provide formal notice to known creditors, establishing a
                        claims period.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-mpl-navy mb-2">
                        File and Collect Assets
                      </h3>
                      <p className="text-gray-700">
                        File the affidavit with the court and use it to collect
                        and transfer assets to beneficiaries.
                      </p>
                    </div>
                  </div>
                </div>
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
              className="bg-linear-to-r from-mpl-navy to-mpl-blue rounded-lg p-12 text-white text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Simplify Your Estate Settlement
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let us help you determine if a Small Estate Affidavit is right
                for your situation.
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
                We'll help you navigate the small estate process efficiently and
                affordably.
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
    </>
  );
};

export default SmallEstateAffidavit;
