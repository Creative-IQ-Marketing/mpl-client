import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Sub-components are defined first to avoid Temporal Dead Zone errors
// (all are const arrow functions; FAQ must come after them)

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white mt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(68,117,181,0.10),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(35,67,116,0.08),transparent_50%),radial-gradient(circle_at_30%_90%,rgba(99,155,227,0.08),transparent_60%)]" />
      <div className="container-custom relative">
        <div className="py-16 md:py-20">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Get answers to common questions about estate planning, family law,
              and legal services.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQCategories = () => {
  const categories = [
    {
      title: "Estate Planning",
      items: [
        {
          q: "What is a Will?",
          a: "A will is a legal document that states how your property should be distributed after your death and who should manage your estate.",
        },
        {
          q: "What is an Estate Plan?",
          a: "An estate plan is a set of documents and decisions that help protect your assets, clarify your wishes, and support your loved ones during life events and after death.",
        },
        {
          q: "Do I Need More Than a Will?",
          a: "Depending on your assets and goals, you may benefit from additional tools like powers of attorney, medical directives, beneficiary designations, or a trust.",
        },
        {
          q: "What if You Pass Away Without a Will?",
          a: "If you die without a will, Texas intestacy rules determine who inherits your assets, which can create delays, added expense, and outcomes you may not have wanted.",
        },
        {
          q: "What is Probate?",
          a: "Probate is the court-supervised process of validating a will (if one exists), paying debts, and distributing assets to heirs or beneficiaries.",
        },
        {
          q: "What is a Living Will?",
          a: "A living will (advance directive) communicates your preferences about medical care if you become unable to make decisions for yourself.",
        },
        {
          q: "Should I Name My Children as Beneficiaries of My Life Insurance Policy?",
          a: "Naming minors directly can create complications. Many families use a trust or guardian/administration structure to ensure funds are managed appropriately.",
        },
        {
          q: "Should I Avoid Probate?",
          a: "Some families choose planning tools that reduce probate complexity. The best approach depends on your assets, goals, and the level of control you want.",
        },
        {
          q: "How Long Does the Process Take?",
          a: "Timelines vary by situation. A straightforward estate plan can often be completed quickly, while probate timelines depend on the court and estate complexity.",
        },
        {
          q: "How Much Does an Estate Plan Cost?",
          a: "Cost depends on what you need. We'll review your goals and provide a clear scope before moving forward.",
        },
      ],
    },
    {
      title: "Family Law, Divorce & Custody",
      items: [
        {
          q: "How long does a divorce take in Texas?",
          a: "In Texas, there is a mandatory 60-day waiting period from the date the divorce is filed before it can be finalized. However, most divorces take several months depending on factors like property division, custody disputes, and whether both parties agree on the terms. Amicable divorces can move much faster than contested cases.",
        },
        {
          q: "What is the difference between contested and uncontested divorce?",
          a: "An uncontested divorce means both spouses agree on major issues such as property division, child custody, child support, and debts. A contested divorce occurs when the parties disagree on one or more issues and may require mediation or court hearings to resolve them.",
        },
        {
          q: "How is child custody decided in Texas?",
          a: "Texas courts make custody decisions based on the \"best interest of the child.\" The court considers factors such as the child's emotional and physical needs, each parent's involvement, stability of the home, communication between parents, and any history of family violence or substance abuse.",
        },
        {
          q: "What is the difference between custody and conservatorship in Texas?",
          a: 'In Texas, the legal term for custody is "conservatorship." Conservatorship refers to the rights and duties parents have regarding their child, including decision-making authority for education, healthcare, and daily care. Parents may be named Joint Managing Conservators or one parent may be awarded Sole Managing Conservatorship in certain situations.',
        },
        {
          q: "Do I have to go to court for a custody case?",
          a: "Not always. Many custody matters are resolved through negotiation, mediation, or collaborative law without a full trial. If parents can reach an agreement, the process is often less stressful, less expensive, and faster for everyone involved — especially the children.",
        },
        {
          q: "Can child custody orders be modified later?",
          a: "Yes. Custody and visitation orders can be modified if there has been a material and substantial change in circumstances, such as relocation, changes in the child's needs, changes in a parent's schedule, or concerns involving the child's safety or well-being.",
        },
        {
          q: "How is child support calculated in Texas?",
          a: "Texas uses statutory guidelines based primarily on the paying parent's net monthly income and the number of children involved. Additional factors such as healthcare costs, daycare expenses, and special needs may also impact the final support amount.",
        },
        {
          q: "What happens to property during a divorce?",
          a: 'Texas is a community property state, meaning most property and debts acquired during the marriage are considered jointly owned. The court aims for a "just and right" division, which may not always mean a perfect 50/50 split.',
        },
        {
          q: "What should I do before filing for divorce?",
          a: "Before filing, it is helpful to gather financial records, create a budget, document important information regarding children and assets, and speak with an attorney to understand your rights and options. Preparation can help reduce stress and avoid surprises during the process.",
        },
        {
          q: "Can grandparents get visitation or custody rights in Texas?",
          a: "In limited situations, grandparents may request visitation or custody rights if they can show it is necessary for the child's physical or emotional well-being. Texas law sets a high standard for these cases, so it is important to speak with an attorney about the specific circumstances.",
        },
        {
          q: "What if my spouse and I want an amicable divorce?",
          a: "An amicable divorce can often be resolved through mediation or collaborative law. These approaches focus on communication, problem-solving, and minimizing conflict while helping families create workable long-term solutions outside of court whenever possible.",
        },
        {
          q: "How can Morales Padia Law help me during my family law case?",
          a: "At Morales Padia Law, we focus on educating and guiding clients through every step of the process. Whether you are facing divorce, custody issues, child support concerns, or modifications, our team works to provide clear communication, compassionate support, and practical legal strategies tailored to your family's goals.",
        },
      ],
    },
    {
      title: "Criminal Law in Texas",
      items: [
        {
          q: "What should I do if I am arrested in Texas?",
          a: "Remain calm and exercise your right to remain silent. Do not answer questions or give statements to law enforcement without an attorney present. Politely request a lawyer immediately and avoid discussing your case with anyone other than your attorney.",
        },
        {
          q: "Do I need a lawyer if I have not been formally charged yet?",
          a: "Yes. Even if charges have not been filed, having an attorney early can make a significant difference. A lawyer may be able to communicate with law enforcement or prosecutors on your behalf, protect your rights during the investigation stage, and potentially help avoid charges altogether.",
        },
        {
          q: "What is the difference between a misdemeanor and a felony in Texas?",
          a: "Misdemeanors are less serious offenses that may carry penalties such as county jail time, probation, or fines. Felonies are more serious offenses that can result in prison time, larger fines, and long-term consequences affecting employment, housing, and firearm rights.",
        },
        {
          q: "What happens at my first court appearance?",
          a: "Your first appearance is usually an arraignment or magistration hearing where the court informs you of the charges, possible bond conditions, and your rights. In some cases, the court may also address bail or scheduling matters.",
        },
        {
          q: "Can criminal charges be dismissed?",
          a: "Yes, depending on the facts of the case. Charges may be dismissed due to lack of evidence, constitutional violations, witness issues, completion of diversion programs, or successful negotiations by your attorney.",
        },
        {
          q: "What is a plea bargain?",
          a: "A plea bargain is an agreement between the defense and the prosecutor to resolve a case without trial. This may involve reduced charges, lighter sentencing recommendations, or alternative outcomes such as probation or diversion programs.",
        },
        {
          q: "Will I go to jail for a first-time offense?",
          a: "Not necessarily. Many first-time offenders may qualify for alternatives such as probation, deferred adjudication, counseling programs, or diversion programs depending on the charge and circumstances.",
        },
        {
          q: "What is deferred adjudication in Texas?",
          a: "Deferred adjudication is a form of probation where the judge delays a finding of guilt while you complete certain conditions. If completed successfully, you may avoid a formal conviction on your record, although the case may still appear in background checks unless later sealed.",
        },
        {
          q: "Can a criminal record be cleared or sealed in Texas?",
          a: "In some situations, yes. Texans may qualify for expunctions or nondisclosure orders depending on the outcome of the case, the type of offense, and criminal history. These legal remedies can help limit public access to criminal records.",
        },
        {
          q: "What are my rights during a police stop?",
          a: "You have the right to remain silent, the right to refuse certain searches, and the right to an attorney. You should remain respectful and avoid resisting, but you are not required to answer incriminating questions.",
        },
        {
          q: "What happens if I violate probation?",
          a: "A probation violation can lead to a motion to revoke probation and possible penalties including jail or prison time. However, there may be defenses or alternatives available depending on the circumstances of the alleged violation.",
        },
        {
          q: "How can Morales Padia Law help with my criminal case?",
          a: "At Morales Padia Law, we understand that criminal charges can impact every part of your life, your family, career, finances, and future. Our team works closely with clients to explain the legal process, protect their rights, build strong defense strategies, and pursue the best possible outcome both inside and outside the courtroom.",
        },
      ],
    },
  ];

  const [openCategory, setOpenCategory] = React.useState(0);
  const [openQuestions, setOpenQuestions] = React.useState({});

  const toggleCategory = (idx) => {
    setOpenCategory(openCategory === idx ? -1 : idx);
  };

  const toggleQuestion = (categoryIdx, questionIdx) => {
    const key = `${categoryIdx}-${questionIdx}`;
    setOpenQuestions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto space-y-6">
          {categories.map((category, catIdx) => {
            const isCategoryOpen = catIdx === openCategory;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1 }}
              >
                {/* Main Category Accordion */}
                <button
                  type="button"
                  onClick={() => toggleCategory(catIdx)}
                  className="w-full flex items-center justify-between gap-6 px-8 py-6 bg-gradient-to-r from-mpl-navy to-mpl-blue text-white rounded-2xl hover:shadow-lg transition-all duration-300 group"
                >
                  <span className="text-left text-xl md:text-2xl font-serif font-bold">
                    {category.title}
                  </span>
                  <motion.div
                    animate={{ rotate: isCategoryOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={28} className="text-white" />
                  </motion.div>
                </button>

                {/* Category Contents - Individual FAQs */}
                <motion.div
                  initial={{ opacity: 1, height: 0 }}
                  animate={{
                    opacity: isCategoryOpen ? 1 : 0,
                    height: isCategoryOpen ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-3 mt-4">
                    {category.items.map((item, qIdx) => {
                      const questionKey = `${catIdx}-${qIdx}`;
                      const isQuestionOpen = openQuestions[questionKey];

                      return (
                        <motion.div
                          key={item.q}
                          initial={{ opacity: 1, y: 0 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: qIdx * 0.02 }}
                          className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                        >
                          {/* Question Button */}
                          <button
                            type="button"
                            onClick={() => toggleQuestion(catIdx, qIdx)}
                            className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-mpl-navy font-serif font-bold text-base md:text-lg pr-4">
                              {item.q}
                            </span>
                            <motion.div
                              animate={{ rotate: isQuestionOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="flex-shrink-0"
                            >
                              <ChevronDown
                                size={20}
                                className="text-mpl-blue"
                              />
                            </motion.div>
                          </button>

                          {/* Answer */}
                          <motion.div
                            initial={{ opacity: 1, height: 0 }}
                            animate={{
                              opacity: isQuestionOpen ? 1 : 0,
                              height: isQuestionOpen ? "auto" : 0,
                            }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden border-t border-gray-100"
                          >
                            <div className="px-6 py-5 text-gray-600 leading-relaxed text-sm md:text-base bg-gray-50">
                              {item.a}
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ReadyCTA = () => {
  return (
    <section className="py-14 md:py-16">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-gray-200 shadow-sm p-10 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Have more questions about estate planning, family law, or our legal
            services? Our experienced attorneys are here to provide personal and
            guided comprehensive legal solutions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-mpl-navy text-white px-8 py-4 rounded-full font-bold hover:bg-mpl-blue transition-colors"
            >
              Schedule a Consultation <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-mpl-navy px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const RelatedServices = () => {
  const items = [
    { label: "Estate Planning Overview", to: "/services#estate-planning" },
    { label: "Will Services", to: "/services#estate-planning" },
    { label: "Trust Services", to: "/services#estate-planning" },
    { label: "Probate Law", to: "/services#probate-law" },
    { label: "Family Law Services", to: "/family-law" },
    { label: "Criminal Defense", to: "/criminal-defense" },
    { label: "Meet Our Attorneys", to: "/firm-overview" },
    { label: "About Our Firm", to: "/firm-overview" },
  ];

  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-sm font-bold tracking-wider uppercase text-gray-500">
              Related Legal Services
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {items.map((it) => (
              <Link
                key={it.label}
                to={it.to}
                className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-semibold text-mpl-navy hover:bg-gray-50 transition-colors"
              >
                {it.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ wrapper defined last so all sub-components are in scope (avoids TDZ errors)
const FAQ = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
      <FAQCategories />
      <ReadyCTA />
      <RelatedServices />
    </div>
  );
};

export default FAQ;
