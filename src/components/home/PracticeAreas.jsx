import { useRef } from "react";
import { Users, Scale, FileText, Gavel, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      id: "family",
      title: "Family Law",
      description: "Divorce, custody, and adoption support.",
      icon: Users,
    },
    {
      id: "estate",
      title: "Estate Planning",
      description: "Wills, trusts, and securing your legacy.",
      icon: FileText,
    },
    {
      id: "probate",
      title: "Probate Law",
      description: "Guidance through estate settlement.",
      icon: Scale,
    },
    {
      id: "criminal",
      title: "Criminal Law",
      description: "Defense for DWI and criminal charges.",
      icon: Gavel,
    },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-serif text-mpl-navy mb-4">
            Practice Areas
          </h2>
          <div className="h-1 w-20 bg-mpl-blue mx-auto opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map((area, index) => (
            <PracticeCard key={area.id} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PracticeCard = ({ area, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const Icon = area.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group p-8 border border-gray-100 hover:border-mpl-blue/30 hover:shadow-lg hover:shadow-mpl-blue/5 rounded-xl transition-all duration-300 bg-white"
    >
      <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-mpl-navy mb-6 group-hover:bg-mpl-navy group-hover:text-white transition-colors duration-300">
        <Icon className="w-6 h-6" />
      </div>

      <h3 className="text-xl font-serif text-mpl-navy mb-3 group-hover:text-mpl-blue transition-colors">
        {area.title}
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed mb-6">
        {area.description}
      </p>

      <div className="flex items-center text-mpl-blue text-sm font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Learn more <ArrowRight className="w-4 h-4 ml-1" />
      </div>
    </motion.div>
  );
};

export default PracticeAreas;
