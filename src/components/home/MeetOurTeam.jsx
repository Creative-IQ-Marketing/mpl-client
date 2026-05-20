import TrishaImg from "../../assets/team/UF9A2215-Edit-Edit.jpg";
import DorothyImg from "../../assets/team/Dorothy1 UF9A2316-Edit-2.jpg";
import PaulaPerezImg from "../../assets/team/PaulaPerezHeadshot.jpg";
import AllysonImg from "../../assets/team/Allyson1 UF9A2325-Edit-2.jpg";
import VeronicaImg from "../../assets/team/veronica.jpeg";
import ElenaImg from "../../assets/team/Elena1 UF9A2289-Edit-2.jpg";
import AlexandraImg from "../../assets/team/Alexandra1 UF9A2272-Edit-2.jpg";
import LaritzaImg from "../../assets/team/Laritza (1).png";
import { motion } from "framer-motion";
import { Gavel } from "lucide-react";
const Motion = motion;

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Trisha Morales Padia",
      role: "Founder/Educator",
      specialty: "Family Law & Estate Planning",
      image: TrishaImg,
      size: "large",
    },
    {
      name: "Dorothy Dominguez",
      role: "Paralegal",
      image: DorothyImg,
      size: "medium",
    },
    {
      name: "Paula Perez",
      role: "Attorney",
      image: PaulaPerezImg,
      size: "small",
    },
    {
      name: "Allyson Gilmore",
      role: "Operations Director",
      image: AllysonImg,
      size: "small",
    },
    {
      name: "Veronica Ruvalcaba",
      role: "Outreach Coordinator",
      image: VeronicaImg,
      size: "small",
    },
    {
      name: "Elena Galaviz",
      role: "Family Law Paralegal",
      image: ElenaImg,
      size: "large",
    },
    {
      name: "Alexandra Johnson",
      role: "Client Services Director",
      image: AlexandraImg,
      size: "medium",
    },
    {
      name: "Laritza Downs",
      role: "Assistant",
      image: LaritzaImg,
      size: "small",
    },
  ];

  const leadMembers = teamMembers.slice(0, 1);
  const otherMembers = teamMembers.slice(1);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(35,67,116,0.05),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(68,117,181,0.05),transparent_48%)]" />

        {/* Floating Background Circles */}
        <Motion.div
          className="absolute left-1/4 top-1/3 w-64 h-64 rounded-full bg-mpl-blue/5 blur-3xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <Motion.div
          className="absolute right-1/4 top-1/2 w-80 h-80 rounded-full bg-mpl-gold/5 blur-3xl"
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Sceptre Icon - Top Right */}
        <Motion.div
          className="absolute right-6 top-12 md:right-16 md:top-16 z-20"
          animate={{
            y: [0, -12, 0],
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Gavel
            className="w-12 h-12 md:w-16 md:h-16 text-mpl-navy/20"
            aria-hidden="true"
          />
        </Motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-mpl-navy mb-4 leading-tight">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            A team of attorneys and professionals dedicated to protecting your
            family, your future, and your peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 mb-16 max-w-2xl mx-auto">
          {leadMembers.map((member) => {
            const bullets =
              member.name === "Trisha Morales Padia"
                ? [
                    "Licensed in Texas",
                    "Focused on Family Law & Estate Planning",
                    "Award-winning legal excellence",
                  ]
                : [
                    "Licensed in Texas",
                    "Focused on Criminal Defense & Family Law",
                    "Strategic advocacy in complex legal matters",
                  ];

            return (
              <div
                key={member.name}
                className="bg-white rounded-3xl shadow-xl shadow-mpl-blue/10 border border-mpl-blue/10 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="shrink-0">
                  <div className="w-28 h-32 md:w-32 md:h-40 rounded-2xl overflow-hidden border-4 border-mpl-blue/30">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-serif text-mpl-navy mb-1">
                    {member.name}
                  </h3>
                  <p className="text-mpl-blue font-semibold text-sm md:text-base mb-4">
                    {member.role}
                  </p>
                  <ul className="space-y-1.5 text-sm md:text-base text-gray-700">
                    {bullets.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1.75 h-0.75 w-0.75 rounded-full bg-mpl-blue" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {otherMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 text-center flex flex-col items-center"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-mpl-blue/20 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif font-semibold text-mpl-navy text-base md:text-lg mb-1">
                {member.name}
              </h4>
              <p className="text-mpl-blue text-sm mb-1">{member.role}</p>
              {member.specialty && (
                <p className="text-gray-600 text-xs leading-relaxed">
                  {member.specialty}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
