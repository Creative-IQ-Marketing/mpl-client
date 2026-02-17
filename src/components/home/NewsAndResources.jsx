import {
  PlayCircle,
  BookOpen,
  FileText,
  Download,
  ArrowRight,
  Maximize2,
} from "lucide-react";
import { motion } from "framer-motion";

const NewsAndResources = () => {
  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-[95rem] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[800px]">
          {/* Big News Feature - Takes 7 Cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative h-[600px] lg:h-auto rounded-[3rem] overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-mpl-navy z-0">
              {/* Placeholder for video thumbnail image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-mpl-navy/50 to-transparent z-10" />
            </div>

            <div className="relative z-20 h-full flex flex-col justify-end p-10 md:p-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium mb-6 w-fit border border-white/20">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Live Updates
              </div>

              <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-[0.95]">
                Leading the Conversation <br /> on{" "}
                <span className="italic text-mpl-lightBlue">Family Law.</span>
              </h3>

              <div className="flex flex-wrap gap-6 items-center">
                <button className="h-20 w-20 rounded-full bg-white text-mpl-navy flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <PlayCircle className="w-8 h-8 fill-current" />
                </button>
                <p className="text-xl text-white/80 max-w-md border-l border-white/30 pl-6">
                  Watch our exclusive interview on SA Living discussing recent
                  legislative changes.
                </p>
              </div>
            </div>

            {/* Giant decorative text */}
            <div className="absolute -top-10 -right-10 text-[15rem] font-bold text-white/5 pointer-events-none select-none overflow-hidden">
              NEWS
            </div>
          </motion.div>

          {/* Resources Stack - Takes 5 Cols */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="mb-8 p-4">
              <h2 className="text-5xl font-serif text-mpl-navy mb-4">
                Empower Yourself.
              </h2>
              <p className="text-gray-500 text-lg">
                Knowledge is your first line of defense.
              </p>
            </div>

            {[
              {
                title: "Divorce Guide",
                icon: BookOpen,
                color: "bg-mpl-lightBlue/10 text-mpl-blue",
              },
              {
                title: "Estate Planning",
                icon: FileText,
                color: "bg-mpl-navy/10 text-mpl-navy",
              },
              {
                title: "Probate Checklist",
                icon: Download,
                color: "bg-mpl-blue/10 text-mpl-blue",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.02, x: -10 }}
                className="flex-1 bg-white rounded-[2.5rem] p-8 flex items-center justify-between shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-xl`}
                  >
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif text-mpl-navy mb-1 group-hover:text-mpl-blue transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                      Free PDF Download
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-mpl-navy group-hover:text-white group-hover:border-mpl-navy transition-all">
                  <Download className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndResources;
