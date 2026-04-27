import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import CleanServiceHero from "../components/CleanServiceHero";

const NoProbateOptions = () => {
  return (
    <>
      <SEO
        title="No Will? Probate Options in Texas | Morales Padia Law"
        description="Learn about probate options when there's no will in Texas. Explore intestate succession, small estate affidavits, and heirship proceedings."
        keywords="no will probate, intestate succession, probate without will, Texas intestacy"
        url="https://moralespadia.com/probate-without-will"
      />
      <StructuredData
        type="Article"
        data={{
          headline: "No Will? Probate Options in Texas",
          description:
            "Guide to probate and succession when the deceased left no will.",
          datePublished: new Date().toISOString().split("T")[0],
        }}
      />

      <div>
        <CleanServiceHero
          title="Probate Without a Will in Texas"
          opening={[
            "If someone passes away without a will, it can create uncertainty about what happens next.",
            "This is called intestate probate, and Texas law determines how assets are distributed.",
          ]}
          infoTitle="The Process"
          infoDescription="Identify heirs, File with the court, Determine legal inheritance, and Transfer assets. This may involve an Heirship Proceeding."
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
                  Intestate Succession in Texas
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  When someone dies without a valid will (called dying
                  "intestate"), Texas intestacy laws determine who inherits the
                  estate. The distribution depends on who survives the deceased
                  and the nature of the property.
                </p>

                <div className="space-y-6 my-12">
                  <div className="border-l-4 border-mpl-gold pl-4">
                    <h3 className="text-lg font-bold text-mpl-navy mb-2">
                      Spouse and Children
                    </h3>
                    <p className="text-gray-700">
                      If the deceased is survived by a spouse and children, the
                      estate is typically divided between them. Community
                      property and separate property may be treated differently.
                    </p>
                  </div>

                  <div className="border-l-4 border-mpl-gold pl-4">
                    <h3 className="text-lg font-bold text-mpl-navy mb-2">
                      Spouse Only
                    </h3>
                    <p className="text-gray-700">
                      If only a spouse survives, they generally inherit the
                      entire estate (with exceptions for non-marital property).
                    </p>
                  </div>

                  <div className="border-l-4 border-mpl-gold pl-4">
                    <h3 className="text-lg font-bold text-mpl-navy mb-2">
                      Children Only
                    </h3>
                    <p className="text-gray-700">
                      If no spouse survives, children inherit the estate equally
                      unless some are deceased (in which case their share passes
                      to their descendants).
                    </p>
                  </div>

                  <div className="border-l-4 border-mpl-gold pl-4">
                    <h3 className="text-lg font-bold text-mpl-navy mb-2">
                      Other Heirs
                    </h3>
                    <p className="text-gray-700">
                      If no spouse or children survive, Texas law determines
                      succession through parents, siblings, grandparents, and
                      more distant relatives in a specific order.
                    </p>
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
                  Probate Options Without a Will
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-mpl-navy mb-2">
                        Full Probate (Intestate)
                      </h3>
                      <p className="text-gray-700">
                        Court-supervised administration following Texas
                        intestacy laws, appropriate for larger estates or
                        complex circumstances.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-mpl-navy mb-2">
                        Small Estate Affidavit
                      </h3>
                      <p className="text-gray-700">
                        For estates under $75,000, heirs can use a simplified
                        affidavit process to collect and distribute assets
                        without formal probate.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-mpl-navy mb-2">
                        Affidavit of Heirship
                      </h3>
                      <p className="text-gray-700">
                        Used to transfer real property when specific conditions
                        are met, allowing heirs to establish ownership without
                        probate.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mpl-gold text-white font-bold shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-mpl-navy mb-2">
                        Muniment of Title
                      </h3>
                      <p className="text-gray-700">
                        A specialized procedure to transfer real property
                        without administering the entire estate, used when only
                        land needs to transfer.
                      </p>
                    </div>
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
                  Choosing the Right Path
                </h2>
                <p className="text-gray-700 mb-6">
                  The best approach depends on:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Estate size and complexity
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Nature and location of assets
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Presence of creditor claims
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Potential disputes among heirs
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Time and cost considerations
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
              className="bg-linear-to-r from-mpl-navy to-mpl-blue rounded-lg p-12 text-white text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Let Us Guide Your Estate Settlement
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our probate attorneys can evaluate your situation and recommend
                the most efficient and cost-effective approach.
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
                We're here to help resolve your estate administration issues
                professionally and compassionately.
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

export default NoProbateOptions;
