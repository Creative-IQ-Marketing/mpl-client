import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import CleanServiceHero from "../components/CleanServiceHero";

const ProbatingAWill = () => {
  return (
    <div>
      <CleanServiceHero
        title="Probating a Will in San Antonio"
        opening={[
          "If your loved one left a will, the next step is to have it recognized by the court.",
          "This ensures their wishes are carried out properly.",
        ]}
        infoTitle="What It Is"
        infoDescription="Probating a will is the legal process of validating the document and giving the executor authority to act."
      />

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-6">
                Understanding Will Probate
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Probating a will is the legal process by which a court validates
                the will and authorizes the executor to distribute the estate
                according to the testator's wishes. This formal process provides
                creditor protection and ensures proper distribution to
                beneficiaries.
              </p>

              <div className="space-y-6 my-12">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Will Validation
                    </h3>
                    <p className="text-gray-700">
                      The court verifies the will meets all legal requirements:
                      proper execution, testator capacity, and no evidence of
                      undue influence or fraud.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Executor Appointment
                    </h3>
                    <p className="text-gray-700">
                      The person named in the will to manage the estate receives
                      official court approval and legal authority to act on
                      behalf of the estate.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Asset Protection
                    </h3>
                    <p className="text-gray-700">
                      Through probate, creditors receive formal notice and their
                      claims are addressed. After the claims period expires,
                      assets are protected from future creditor actions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-mpl-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-mpl-navy mb-2">
                      Beneficiary Protection
                    </h3>
                    <p className="text-gray-700">
                      Probate ensures beneficiaries receive what they were
                      promised while protecting them from later challenges or
                      claims against the estate.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-6">
                The Will Probate Process
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-mpl-gold pl-4">
                  <h3 className="text-lg font-bold text-mpl-navy mb-2">
                    Filing the Application
                  </h3>
                  <p className="text-gray-700">
                    Submit the original will, death certificate, and application
                    to probate with the district court in the county where the
                    deceased lived.
                  </p>
                </div>

                <div className="border-l-4 border-mpl-gold pl-4">
                  <h3 className="text-lg font-bold text-mpl-navy mb-2">
                    Court Hearing
                  </h3>
                  <p className="text-gray-700">
                    The court may hold a hearing to verify the will's validity
                    and the executor's qualifications. In many cases, this may
                    be streamlined.
                  </p>
                </div>

                <div className="border-l-4 border-mpl-gold pl-4">
                  <h3 className="text-lg font-bold text-mpl-navy mb-2">
                    Letters Testamentary
                  </h3>
                  <p className="text-gray-700">
                    Upon approval, the executor receives official court
                    documents granting authority to manage assets and distribute
                    the estate according to the will.
                  </p>
                </div>

                <div className="border-l-4 border-mpl-gold pl-4">
                  <h3 className="text-lg font-bold text-mpl-navy mb-2">
                    Estate Administration
                  </h3>
                  <p className="text-gray-700">
                    The executor inventories assets, notifies creditors, pays
                    claims and taxes, and then distributes remaining assets per
                    the will's instructions.
                  </p>
                </div>

                <div className="border-l-4 border-mpl-gold pl-4">
                  <h3 className="text-lg font-bold text-mpl-navy mb-2">
                    Estate Closing
                  </h3>
                  <p className="text-gray-700">
                    The executor files a final accounting with the court and
                    requests approval to close the probate estate.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-6">
                Common Will Probate Challenges
              </h2>
              <p className="text-gray-700 mb-6">
                Some wills face challenges during probate. We can defend your
                will or represent your interests if issues arise:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="text-mpl-blue font-bold">•</span>
                  <span className="text-gray-700">
                    <strong>Will contests:</strong> Claims the will is invalid
                    or improperly executed
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-mpl-blue font-bold">•</span>
                  <span className="text-gray-700">
                    <strong>Undue influence:</strong> Allegations someone
                    improperly influenced the testator
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-mpl-blue font-bold">•</span>
                  <span className="text-gray-700">
                    <strong>Lack of capacity:</strong> Questions about the
                    testator's mental capacity when signing
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-mpl-blue font-bold">•</span>
                  <span className="text-gray-700">
                    <strong>Executor disputes:</strong> Disagreements about
                    executor fitness or management
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-mpl-blue font-bold">•</span>
                  <span className="text-gray-700">
                    <strong>Beneficiary conflicts:</strong> Disputes among heirs
                    over interpretation or distribution
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
            className="bg-linear-to-r from-mpl-navy to-mpl-blue rounded-lg p-12 text-white text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Protect Your Will and Estate
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our probate attorneys ensure your will is properly probated and
              your estate is distributed according to your wishes.
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
              Trust our experienced attorneys to handle your will probate with
              precision and care.
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

export default ProbatingAWill;
