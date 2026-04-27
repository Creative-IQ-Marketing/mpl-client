import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import CleanServiceHero from "../components/CleanServiceHero";

const ProbateDisputesLitigation = () => {
  return (
    <>
      <SEO
        title="Probate Disputes & Litigation | Morales Padia Law"
        description="Experienced representation for probate disputes, will contests, and estate litigation in Texas. Protect your interests with skilled attorneys."
        keywords="probate litigation, will contests, estate disputes, probate attorney"
        url="https://moralespadia.com/probate-disputes-litigation"
      />
      <StructuredData
        type="Article"
        data={{
          headline: "Probate Disputes & Litigation",
          description:
            "Guide to resolving probate disputes and estate litigation.",
          datePublished: new Date().toISOString().split("T")[0],
        }}
      />

      <div>
        <CleanServiceHero
          title="Probate Disputes & Litigation in San Antonio"
          opening={[
            "Not all probate cases are straightforward. Disputes can arise between family members or over the validity of a will.",
            "These cases may involve will contests, disagreements between heirs, and concerns about how an estate is handled.",
          ]}
          infoTitle="What It Means"
          infoDescription="When probate or estate matters lead to disputes between family members or other parties, experienced legal representation is critical to protecting your interests."
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
                  Common Types of Probate Disputes
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Estate and probate disputes arise from various issues. Our
                  experienced litigation team handles all types of estate
                  conflicts, including:
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-mpl-navy mb-2">
                        Will Contests
                      </h3>
                      <p className="text-gray-700">
                        Challenges to the validity of a will based on improper
                        execution, testator lack of capacity, undue influence,
                        or fraud.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-mpl-navy mb-2">
                        Executor Disputes
                      </h3>
                      <p className="text-gray-700">
                        Conflicts over executor qualifications, removal,
                        misconduct, or disagreements about estate management and
                        distribution.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-mpl-navy mb-2">
                        Beneficiary Conflicts
                      </h3>
                      <p className="text-gray-700">
                        Disputes between beneficiaries over will interpretation,
                        distribution timing, or priority of claims.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-mpl-navy mb-2">
                        Undue Influence Claims
                      </h3>
                      <p className="text-gray-700">
                        Allegations that someone improperly influenced the
                        testator to change the will or estate plans.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-mpl-navy mb-2">
                        Fiduciary Duty Breaches
                      </h3>
                      <p className="text-gray-700">
                        Claims that an executor, trustee, or administrator
                        violated duties owed to the estate or beneficiaries.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-mpl-navy mb-2">
                        Asset Distribution Disputes
                      </h3>
                      <p className="text-gray-700">
                        Conflicts over how assets should be divided, valuations,
                        or claims to specific property.
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
                  Our Approach to Estate Litigation
                </h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-mpl-gold pl-4">
                    <h3 className="text-lg font-bold text-mpl-navy mb-2">
                      Case Evaluation
                    </h3>
                    <p className="text-gray-700">
                      We thoroughly evaluate the merits of your claim or
                      defense, gathering evidence and identifying key legal
                      issues.
                    </p>
                  </div>

                  <div className="border-l-4 border-mpl-gold pl-4">
                    <h3 className="text-lg font-bold text-mpl-navy mb-2">
                      Settlement Negotiation
                    </h3>
                    <p className="text-gray-700">
                      We attempt to resolve disputes through negotiation and
                      mediation, often saving time and money compared to trial.
                    </p>
                  </div>

                  <div className="border-l-4 border-mpl-gold pl-4">
                    <h3 className="text-lg font-bold text-mpl-navy mb-2">
                      Litigation Representation
                    </h3>
                    <p className="text-gray-700">
                      When necessary, we provide aggressive courtroom
                      representation to protect your interests before the judge.
                    </p>
                  </div>

                  <div className="border-l-4 border-mpl-gold pl-4">
                    <h3 className="text-lg font-bold text-mpl-navy mb-2">
                      Appeal Advocacy
                    </h3>
                    <p className="text-gray-700">
                      If needed, we pursue or defend appeals to ensure your
                      rights are protected at all levels.
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
                  Why Choose Morales Padia Law
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                    <span className="text-gray-700">
                      <strong>Experience:</strong> Decades of handling complex
                      probate and estate disputes
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                    <span className="text-gray-700">
                      <strong>Skilled advocates:</strong> Trial-tested attorneys
                      who excel in courtroom representation
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                    <span className="text-gray-700">
                      <strong>Comprehensive representation:</strong> From
                      negotiation through trial and appeals
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                    <span className="text-gray-700">
                      <strong>Client focus:</strong> We prioritize your
                      interests and goals throughout the process
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="w-6 h-6 text-mpl-gold flex-shrink-0 mt-1" />
                    <span className="text-gray-700">
                      <strong>Strategic planning:</strong> We develop effective
                      strategies tailored to your specific case
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
                Protect Your Estate Interests
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Don't face estate litigation alone. Our experienced attorneys
                are ready to fight for your rights.
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
                Call our experienced estate litigation attorneys today for a
                confidential consultation.
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

export default ProbateDisputesLitigation;
